import google.generativeai as genai
import streamlit as st

# Configure Gemini API
genai.configure(api_key="AIzaSyDfe92GZruoHS7xfWfLXrAsqMAin-hhoPQ")  # Replace with your actual Gemini API key

# Load Gemini model
model = genai.GenerativeModel('gemini-2.5-flash')

# Streamlit UI
st.set_page_config(page_title="Python Error Fixer", page_icon="🐍", layout="centered")

st.title("🐍 Python Error Finder & Fixer (Gemini 2.5)")
st.markdown("Enter broken Python code or an error message. Get a **short fix** with explanation.")

# Text area for input
prompt = st.text_area("🔧 Paste your Python code or error message:", height=200)

if st.button("🛠️ Fix Error"):
    if prompt.strip() == "":
        st.warning("Please enter some code or an error message.")
    else:
        with st.spinner("Analyzing and fixing..."):
            chat = model.start_chat()
            system_prompt = (
                "You are a Python error fixer. "
                "Give a short and accurate explanation and a correct fixed code example."
            )
            response = chat.send_message(f"{system_prompt}\n\nUser: {prompt}")
            output = response.text

        # Show the result with code formatting
        st.subheader("✅ Solution")
        st.markdown(output)
