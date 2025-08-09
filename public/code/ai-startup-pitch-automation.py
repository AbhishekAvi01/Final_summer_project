from langchain.agents import tool, initialize_agent, AgentType
from langchain_google_genai import ChatGoogleGenerativeAI
import os


os.environ["GOOGLE_API_KEY"] = "AIzaSyDzN1BEfkk9IXrs7AnRZJnctjUDQvTkDN0" 

# Initialize Gemini model
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


vague_input = input("💭 Enter your vague startup idea or area of interest: ")


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
