import smtplib
import streamlit as st
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os

# Streamlit page configuration
st.set_page_config(
    page_title="Python Email Sender",
    page_icon="📧",
    layout="centered"
)

st.title("📧 Send Email using Python")
st.markdown("Send emails effortlessly using Python's built-in libraries!")

# Email configuration section
st.header("📋 Email Configuration")

col1, col2 = st.columns(2)

with col1:
    sender_email = st.text_input("📤 Sender Email", placeholder="your.email@gmail.com")
    sender_password = st.text_input("🔑 App Password", type="password", help="Use App Password for Gmail")

with col2:
    recipient_email = st.text_input("📥 Recipient Email", placeholder="recipient@example.com")
    smtp_server = st.selectbox("🌐 SMTP Server", 
                              options=["smtp.gmail.com", "smtp.yahoo.com", "smtp.outlook.com", "Custom"],
                              index=0)

if smtp_server == "Custom":
    smtp_server = st.text_input("Custom SMTP Server", placeholder="smtp.example.com")

smtp_port = st.selectbox("🔌 SMTP Port", options=[587, 465, 25], index=0)

# Email content section
st.header("✉️ Email Content")

subject = st.text_input("📑 Subject", placeholder="Enter email subject")
message_body = st.text_area("📝 Message Body", height=200, placeholder="Type your message here...")

# Email type selection
email_type = st.radio("📋 Email Type", ["Plain Text", "HTML"])

if email_type == "HTML":
    st.markdown("**HTML Preview:**")
    if message_body:
        st.markdown(message_body, unsafe_allow_html=True)

# File attachment
st.header("📎 Attachments (Optional)")
uploaded_file = st.file_uploader("Choose a file to attach", type=None)

# Send email function
def send_email(sender_email, sender_password, recipient_email, subject, body, smtp_server, smtp_port, attachment=None, is_html=False):
    try:
        # Create message container
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = subject

        # Add body to email
        if is_html:
            msg.attach(MIMEText(body, 'html'))
        else:
            msg.attach(MIMEText(body, 'plain'))

        # Add attachment if provided
        if attachment is not None:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment.read())
            encoders.encode_base64(part)
            part.add_header(
                'Content-Disposition',
                f'attachment; filename= {attachment.name}'
            )
            msg.attach(part)

        # Create SMTP session
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()  # Enable security
        server.login(sender_email, sender_password)
        
        # Send email
        text = msg.as_string()
        server.sendmail(sender_email, recipient_email, text)
        server.quit()
        
        return True, "Email sent successfully! 🎉"
        
    except Exception as e:
        return False, f"Error sending email: {str(e)}"

# Send email button
if st.button("📧 Send Email", type="primary"):
    if not all([sender_email, sender_password, recipient_email, subject, message_body]):
        st.error("❌ Please fill in all required fields!")
    else:
        with st.spinner("Sending email..."):
            is_html = email_type == "HTML"
            success, message = send_email(
                sender_email, 
                sender_password, 
                recipient_email, 
                subject, 
                message_body, 
                smtp_server, 
                smtp_port, 
                uploaded_file, 
                is_html
            )
            
            if success:
                st.success(message)
                st.balloons()
            else:
                st.error(message)

# Information and tips section
st.markdown("---")
st.header("💡 Setup Instructions")

tab1, tab2, tab3 = st.tabs(["Gmail Setup", "Code Example", "Troubleshooting"])

with tab1:
    st.markdown("""
    ### 🔐 Gmail App Password Setup:
    
    1. **Enable 2-Factor Authentication** on your Google account
    2. Go to **Google Account Settings** → **Security**
    3. Click **App passwords** (under 2-Step Verification)
    4. Select **Mail** and your device
    5. **Copy the 16-character password** and use it here
    
    ⚠️ **Never use your regular Gmail password!**
    """)

with tab2:
    st.markdown("""
    ### 🐍 Python Code Example:
    
    ```python
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart
    
    # Email configuration
    sender_email = "your.email@gmail.com"
    sender_password = "your_app_password"
    recipient_email = "recipient@example.com"
    
    # Create message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = "Test Email from Python"
    
    # Email body
    body = "Hello! This email was sent using Python."
    msg.attach(MIMEText(body, 'plain'))
    
    # Send email
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(sender_email, sender_password)
    server.sendmail(sender_email, recipient_email, msg.as_string())
    server.quit()
    
    print("Email sent successfully!")
    ```
    """)

with tab3:
    st.markdown("""
    ### 🔧 Common Issues & Solutions:
    
    **🚫 Authentication Error:**
    - Use App Password, not regular password
    - Enable 2-Factor Authentication first
    
    **🌐 SMTP Connection Error:**
    - Check SMTP server and port
    - Gmail: smtp.gmail.com:587
    - Yahoo: smtp.yahoo.com:587
    - Outlook: smtp.outlook.com:587
    
    **📎 Attachment Issues:**
    - Check file size limits (usually 25MB)
    - Ensure file is not corrupted
    
    **🔒 Security Blocking:**
    - Use App Password for Gmail
    - Check firewall/antivirus settings
    """)

# Footer
st.markdown("---")
st.markdown("""
<div style='text-align: center; color: #666;'>
    <p>📧 Python Email Sender | Built with Streamlit</p>
    <p>⚡ Automate your email communication with Python!</p>
</div>
""", unsafe_allow_html=True)

# Alternative method without Streamlit (for command line usage)
def send_email_cli():
    """
    Command line version of email sender
    """
    print("📧 Python Email Sender (CLI Version)")
    print("-" * 40)
    
    # Get user inputs
    sender_email = input("📤 Enter sender email: ")
    sender_password = input("🔑 Enter app password: ")
    recipient_email = input("📥 Enter recipient email: ")
    subject = input("📑 Enter subject: ")
    message_body = input("📝 Enter message: ")
    
    try:
        # Create and send email
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = subject
        
        msg.attach(MIMEText(message_body, 'plain'))
        
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipient_email, msg.as_string())
        server.quit()
        
        print("✅ Email sent successfully!")
        
    except Exception as e:
        print(f"❌ Error: {e}")

# Uncomment the line below to run CLI version
# send_email_cli()
