import requests
from bs4 import BeautifulSoup
import json


GEMINI_API_KEY = "AIzaSyAMn38OBHi6B5oxHW7qlREThVPY_Z9E9OQ"
GEMINI_MODEL = "gemini-1.5-pro"
FALLBACK_MODEL = "gemini-2.5-flash"

chat_history = []


def scrape_aiwarriors():
    try:
        url = "https://www.aiwarriors.in/"
        headers = {"User-Agent": "Mozilla/5.0"}
        res = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(res.text, "html.parser")
        elements = soup.find_all(['h1', 'h2', 'h3', 'p', 'li', 'span'])
        content = "\n".join(el.get_text(strip=True) for el in elements if el.get_text(strip=True))
        return content[:15000] if content else "No content found."
    except Exception as e:
        return f"Error scraping website: {e}"


def call_gemini_api(messages, model=GEMINI_MODEL):
    """Call Gemini API with messages"""
    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_API_KEY}"
        
        # Format messages for Gemini API
        formatted_content = []
        for msg in messages:
            if msg["role"] == "user":
                formatted_content.append({
                    "parts": [{"text": msg["text"]}]
                })
        
        payload = {
            "contents": formatted_content,
            "generationConfig": {
                "temperature": 0.7,
                "maxOutputTokens": 1000
            }
        }
        
        response = requests.post(url, json=payload, headers={"Content-Type": "application/json"})
        
        if response.status_code == 200:
            result = response.json()
            return result["candidates"][0]["content"]["parts"][0]["text"]
        else:
            return f"API Error: {response.status_code} - {response.text}"
            
    except Exception as e:
        return f"Error calling Gemini API: {e}"


def aiwarriors_agent(question, model=None):
    global chat_history
    model = model or GEMINI_MODEL
    chat_history.append({"role": "user", "text": question})

    # First turn: add context
    if not any("context_used" in m for m in chat_history):
        scraped_context = scrape_aiwarriors()
        context_msg = {
            "role": "user",
            "text": f"You are an AI agent with access to AI Warriors website data. Answer only using this context:\n\n{scraped_context}",
            "context_used": True
        }
        chat_history.insert(-1, context_msg)

    # Prepare messages for API call
    api_messages = [msg for msg in chat_history if "context_used" not in msg]
    
    # Get response from Gemini
    response = call_gemini_api(api_messages, model)
    
    # Add assistant response to history
    chat_history.append({"role": "assistant", "text": response})
    
    return response


def main():
    print("🤖 AI Warriors Website QA Agent")
    print("Ask me anything about the AI Warriors website!")
    print("Type 'quit' to exit\n")
    
    while True:
        question = input("❓ Your question: ")
        
        if question.lower() in ['quit', 'exit', 'bye']:
            print("👋 Goodbye!")
            break
            
        print("\n🔍 Analyzing website and generating response...\n")
        
        try:
            response = aiwarriors_agent(question)
            print(f"🤖 Answer: {response}\n")
        except Exception as e:
            print(f"❌ Error: {e}\n")


if __name__ == "__main__":
    main()
