from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.document_loaders import PyPDFLoader
import tempfile
import requests


def read_pdf_from_url(url: str) -> str:
    response = requests.get(url)
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
        tmp_file.write(response.content)
        loader = PyPDFLoader(tmp_file.name)
        pages = loader.load()
        return "\n".join(page.page_content for page in pages[:3])  # Read first 3 pages


pdf_url = "https://arxiv.org/pdf/2106.04554.pdf"
pdf_text = read_pdf_from_url(pdf_url)


llm = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash",
    google_api_key="AIzaSyBooWQhuxQJOzJWA5JGKF_SQceLi9mGczM",
    convert_system_message_to_human=True,
    temperature=0.7
)


from langchain_core.messages import HumanMessage

response = llm.invoke([
    HumanMessage(content=f"""
I have extracted the following text from a research paper:

--- START OF TEXT ---
{pdf_text}
--- END OF TEXT ---

Please analyze it and tell me the *main objective* of this research paper.
""")
])

# 5. Show the response
print("\n📄 Main Objective from PDF:\n")
print(response.content)
