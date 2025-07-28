# Agentic AI Startup Helper

![thumbnail](thumbnail.png)

A command-line tool to refine startup ideas, perform market research, generate a business model canvas, and create a pitch deck using LangChain and Google Gemini.

## Features
- Refine vague startup ideas into clear problem-solution statements
- Perform market research (audience, size, competitors, trends, etc.)
- Generate a business model canvas (9 blocks)
- Create bullet-point pitch deck content

## Usage

1. **Install dependencies:**
   ```bash
   pip install langchain langchain-google-genai
   ```
2. **Set your Google API key:**
   ```bash
   export GOOGLE_API_KEY=your_api_key_here
   ```
   (On Windows, use `set GOOGLE_API_KEY=your_api_key_here`)

3. **Run the tool:**
   ```bash
   python main.py --idea "Your vague startup idea here"
   ```

## Output
- Problem-Solution statement
- Market research
- Business model canvas
- PPT slide content

## Project Structure
- `main.py` — Main executable script
- `thumbnail.png` — Project thumbnail (placeholder)

## License
MIT 