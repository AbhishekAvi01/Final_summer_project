import os
import argparse
from langchain.agents import tool, initialize_agent, AgentType
from langchain_google_genai import ChatGoogleGenerativeAI
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

# === Project Title and Thumbnail ===
PROJECT_TITLE = "Agentic AI Startup Helper"
THUMBNAIL_PATH = "thumbnail.png"  # Placeholder, to be generated

def generate_thumbnail(path):
    # Placeholder: In a real project, generate a thumbnail image here
    with open(path, 'wb') as f:
        f.write(b'')  # Empty file for now

generate_thumbnail(THUMBNAIL_PATH)

# === API Key Setup ===
os.environ["GOOGLE_API_KEY"] = os.getenv("GOOGLE_API_KEY", "")  # Use env var for safety

llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash")

@tool
def refine_idea_to_problem_solution(vague_idea: str) -> str:
    """Refine a vague startup idea into a clear problem-solution statement."""
    prompt = (
        f"Refine the following vague startup idea into a clear and specific problem-solution statement:\n"
        f"{vague_idea}\n\n"
        f"Output format:\nProblem: <problem>\nSolution: <solution>"
    )
    return llm.invoke(prompt)

@tool
def do_market_research(problem_solution: str) -> str:
    """Perform market research based on the refined idea."""
    prompt = (
        f"Based on this problem-solution statement:\n{problem_solution}\n\n"
        f"Do a market research analysis. Include:\n"
        f"- Target audience\n- Market size\n- Current demand\n- Competitors\n- Trends\n- Growth potential"
    )
    return llm.invoke(prompt)

@tool
def create_business_model(problem_solution: str) -> str:
    """Generate a business model canvas from the startup idea."""
    prompt = (
        f"Using this startup idea:\n{problem_solution}\n\n"
        f"Create a business model canvas in 9 blocks:\n"
        f"1. Key Partners\n2. Key Activities\n3. Value Propositions\n4. Customer Relationships\n"
        f"5. Customer Segments\n6. Key Resources\n7. Channels\n8. Cost Structure\n9. Revenue Streams"
    )
    return llm.invoke(prompt)

@tool
def generate_ppt_content(problem_solution: str) -> str:
    """Generate a bullet-point-based startup pitch deck (PPT content)."""
    prompt = (
        f"Using this startup idea:\n{problem_solution}\n\n"
        f"Create a startup pitch deck in bullet points with the following slides:\n"
        f"1. Problem\n2. Solution\n3. Market Opportunity\n4. Product Overview\n5. Business Model\n"
        f"6. Competitive Advantage\n7. Team\n8. Roadmap\n9. Financials\n10. Ask (funding/next step)"
    )
    return llm.invoke(prompt)

tools = [
    refine_idea_to_problem_solution,
    do_market_research,
    create_business_model,
    generate_ppt_content
]

agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)

app = FastAPI()

# Allow CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, set your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class DemoRequest(BaseModel):
    idea: str

@app.post("/run-demo")
async def run_demo(req: DemoRequest):
    try:
        refined_idea = agent.run(f"refine_idea_to_problem_solution('{req.idea}')")
        market = agent.run(f"do_market_research('{refined_idea}')")
        canvas = agent.run(f"create_business_model('{refined_idea}')")
        ppt = agent.run(f"generate_ppt_content('{refined_idea}')")
        return {
            "problem_solution": refined_idea,
            "market": market,
            "canvas": canvas,
            "ppt": ppt
        }
    except Exception as e:
        return {"error": str(e)}

def main():
    parser = argparse.ArgumentParser(description=PROJECT_TITLE)
    parser.add_argument('--idea', type=str, required=True, help='Your vague startup idea or area of interest')
    args = parser.parse_args()
    vague_input = args.idea

    print(f"\n=== {PROJECT_TITLE} ===")
    print(f"[Thumbnail: {THUMBNAIL_PATH}]")

    print("\n🔧 Step 1: Refining your idea...")
    refined_idea = agent.run(f"refine_idea_to_problem_solution('{vague_input}')")
    print("\n✅ Problem-Solution Statement:\n", refined_idea)

    print("\n📊 Step 2: Performing market research...")
    market = agent.run(f"do_market_research('{refined_idea}')")
    print("\n✅ Market Research:\n", market)

    print("\n🧱 Step 3: Creating business model canvas...")
    canvas = agent.run(f"create_business_model('{refined_idea}')")
    print("\n✅ Business Model Canvas:\n", canvas)

    print("\n📽️ Step 4: Generating PPT content...")
    ppt = agent.run(f"generate_ppt_content('{refined_idea}')")
    print("\n✅ PPT Slide Content:\n", ppt)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000) 