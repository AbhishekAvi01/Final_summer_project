import streamlit as st
import os.path
import base64
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# Gmail read-only scope
SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

def get_last_email():
    creds = None

    # Load existing token if available
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)

    # If there are no valid credentials, ask the user to log in
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                st.error("Missing credentials.json file.")
                return None
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the token for future use
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    try:
        service = build('gmail', 'v1', credentials=creds)

        # Get last message
        results = service.users().messages().list(userId='me', maxResults=1).execute()
        messages = results.get('messages', [])

        if not messages:
            return {"error": "No messages found."}

        message = service.users().messages().get(
            userId='me',
            id=messages[0]['id'],
            format="full"
        ).execute()

        headers = message['payload']['headers']
        subject = "N/A"
        sender = "N/A"
        date = "N/A"

        for header in headers:
            if header['name'].lower() == 'subject':
                subject = header['value']
            elif header['name'].lower() == 'from':
                sender = header['value']
            elif header['name'].lower() == 'date':
                date = header['value']

        snippet = message.get('snippet', "")

        return {
            "from": sender,
            "subject": subject,
            "date": date,
            "snippet": snippet
        }

    except Exception as e:
        return {"error": str(e)}


# Streamlit app
st.title("📧 View Your Last Gmail Email")

if st.button("Get Last Email"):
    email_data = get_last_email()
    if "error" in email_data:
        st.error(email_data["error"])
    else:
        st.write(f"*From:* {email_data['from']}")
        st.write(f"*Subject:* {email_data['subject']}")
        st.write(f"*Date:* {email_data['date']}")
        st.write(f"*Snippet:* {email_data['snippet']}")

# Additional setup instructions and information
st.markdown("---")
st.header("🔧 Setup Instructions")

with st.expander("📋 Step-by-step Gmail API Setup"):
    st.markdown("""
    ### 1. Google Cloud Console Setup:
    1. Go to [Google Cloud Console](https://console.cloud.google.com/)
    2. Create a new project or select existing one
    3. Enable the **Gmail API** for your project
    4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client IDs**
    5. Choose **Desktop Application** as application type
    6. Download the JSON file and rename it to `credentials.json`
    
    ### 2. File Setup:
    - Place `credentials.json` in the same directory as this script
    - The script will create `token.json` automatically after first authentication
    
    ### 3. Required Libraries:
    ```bash
    pip install streamlit google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
    ```
    
    ### 4. Run the Application:
    ```bash
    streamlit run gmail_fetcher.py
    ```
    """)

with st.expander("⚠️ Important Notes"):
    st.markdown("""
    - **OAuth 2.0 Flow**: First run will open browser for Google authentication
    - **Read-Only Access**: Uses Gmail read-only scope for security
    - **Token Storage**: Saves authentication token locally for future use
    - **Privacy**: Your credentials stay on your local machine
    - **Rate Limits**: Respects Gmail API rate limits
    """)

with st.expander("🐍 Alternative CLI Version"):
    st.code("""
# Command Line Version (without Streamlit)
import os.path
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']

def main():
    creds = None
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    service = build('gmail', 'v1', credentials=creds)
    results = service.users().messages().list(userId='me', maxResults=1).execute()
    messages = results.get('messages', [])
    
    if messages:
        message = service.users().messages().get(userId='me', id=messages[0]['id']).execute()
        print(f"Subject: {message.get('snippet', 'No subject')}")
    else:
        print("No messages found.")

if __name__ == '__main__':
    main()
    """, language='python')

# Troubleshooting section
st.markdown("---")
st.header("🔧 Troubleshooting")

col1, col2 = st.columns(2)

with col1:
    st.markdown("""
    **🚫 Common Issues:**
    - **Missing credentials.json**: Download from Google Cloud Console
    - **Authentication Error**: Check OAuth 2.0 client configuration
    - **Permission Denied**: Ensure Gmail API is enabled
    - **Token Expired**: Delete token.json and re-authenticate
    """)

with col2:
    st.markdown("""
    **✅ Quick Fixes:**
    - Refresh browser if authentication hangs
    - Check internet connection for API calls
    - Verify project has Gmail API enabled
    - Ensure correct OAuth 2.0 scopes
    """)

# Footer
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666;'>
    <p>📧 Gmail Last Email Fetcher | Built with Streamlit & Gmail API</p>
    <p>🔐 Secure OAuth 2.0 Authentication | 📖 Read-Only Access</p>
</div>
""", unsafe_allow_html=True)
