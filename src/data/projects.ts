export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  category: string;
  githubLink?: string;
  liveDemo?: string;
  tags: string[];
  imageUrl?: string;
  features: string[];
  challenges?: string[];
  outcomes?: string[];
  linkedinUrl?: string;
}

export const projectCategories = [
  { id: 'agentic-ai', name: 'Agentic AI & Generativ AI', icon: '🤖✨' },
  { id: 'fullstack', name: 'Full Stack Development', icon: '🌐' },
  { id: 'machine-learning', name: 'Machine Learning', icon: '🧠' },
  { id: 'python-scripts', name: 'Python Scripts', icon: '🐍' },
  { id: 'devops-cloud', name: 'DevOps & Cloud Computing', icon: '☁️' },
  { id: 'linux', name: 'Linux',  }
];


export const projects: Project[] = [

  {
    id: 'ml-recommendation-system',
    title: 'ML-Powered Recommendation Engine',
    description: 'Intelligent recommendation system using collaborative filtering',
    fullDescription: 'A machine learning recommendation system that uses collaborative filtering and content-based filtering to provide personalized recommendations for users.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'PostgreSQL'],
    category: 'machine-learning',
    githubLink: 'https://github.com/AbhishekAvi01/ml-recommendation',
    tags: ['Machine Learning', 'Recommendation', 'Data Science'],
    features: [
      'Collaborative filtering algorithm',
      'Content-based recommendations',
      'Real-time prediction API',
      'A/B testing framework',
      'Performance analytics'
    ],
    challenges: ['Cold start problem', 'Scalability optimization', 'Real-time processing'],
    outcomes: ['35% increase in user engagement', '99.9% API uptime', 'Sub-100ms response time']
  },
  {
    id: 'ai-startup-pitch-automation',
    title: 'AI-Powered Startup Ideation & Pitch Automation Tool',
    description: 'Refine startup ideas, do market research, generate business model canvas, and auto-create a pitch deck using LangChain + Gemini Pro.',
    fullDescription: 'Give it a vague startup idea, and it will: Refine it into a clear Problem-Solution statement, do complete Market Research, generate a Business Model Canvas, and auto-create a 10-slide Startup Pitch Deck (PPT).',
    techStack: ['Python', 'LangChain', 'Gemini 2.5 Flash', 'Google GenAI'],
    category: 'agentic-ai',
    githubLink: '',
    tags: ['Agentic AI', 'Startup', 'Pitch Deck', 'Business Model', 'Code View'],
    imageUrl: '/thumbnails/ai-startup-pitch-automation.png',
    features: [
      'Refine vague startup ideas into clear problem-solution statements',
      'Perform market research',
      'Generate a business model canvas',
      'Auto-create a 10-slide startup pitch deck',
      'View and copy the full code'
    ],
    challenges: ['Requires Google Gemini API key', 'Depends on LangChain and Google GenAI packages'],
    outcomes: ['Accelerates startup planning', 'Reduces research time', 'Empowers non-technical founders'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_ai-generativeai-langchain-activity-7355565725471727617-D_Dd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'ai-research-paper-analyzer',
    title: 'AI-Powered Research Paper Analyzer',
    description: 'Reads a research paper PDF from a URL, extracts content, and summarizes the main objective using Gemini + LangChain.',
    fullDescription: 'Reads a research paper (PDF) directly from a URL, extracts content (first 3 pages) using LangChain, and uses Gemini 2.0 Flash to understand and summarize the main objective of the paper.',
    techStack: ['Python', 'LangChain', 'Gemini 2.0 Flash', 'PyPDFLoader'],
    category: 'agentic-ai',
    githubLink: '',
    tags: ['Agentic AI', 'Research', 'PDF Analysis', 'Code View'],
    imageUrl: '/thumbnails/ai-research-paper-analyzer.png',
    features: [
      'Read and extract content from research paper PDFs',
      'Summarize the main objective using Gemini',
      'View and copy the full code'
    ],
    challenges: ['Requires Google Gemini API key', 'Depends on LangChain, PyPDFLoader'],
    outcomes: ['Saves hours for researchers and students', 'Quickly understand complex papers'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_ai-genai-langchain-activity-7355565924747292672-lvVX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'ai-website-qa-agent',
    title: 'AI-Powered Website QA Agent',
    description: 'Scrapes a website, extracts content, and answers questions using Gemini + Web Scraping.',
    fullDescription: 'Automatically scrapes a full webpage, extracts clean and meaningful content using BeautifulSoup, and sends contextual data to Gemini to answer any question about the website.',
    techStack: ['Python', 'Requests', 'BeautifulSoup', 'Gemini API'],
    category: 'agentic-ai',
    githubLink: '',
    tags: ['Agentic AI', 'Web Scraping', 'QA', 'Code View'],
    imageUrl: '/thumbnails/ai-website-qa-agent.png',
    features: [
      'Scrape and extract content from any website',
      'Answer questions about the website using Gemini',
      'View and copy the full code'
    ],
    challenges: ['Requires Google Gemini API key', 'Depends on Requests, BeautifulSoup'],
    outcomes: ['Turns any website into an intelligent chatbot'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_genai-gemini-webscraping-activity-7355567518519803907-Z_qi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'gemini-shell-agent',
    title: 'Gemini-Powered Shell Agent for GitHub Files',
    description: 'Reads and understands GitHub files using Gemini and LangGraph.',
    fullDescription: 'A Gemini-powered shell agent that reads and understands GitHub files, downloads README, and identifies links for LangChain tutorials.',
    techStack: ['Python', 'LangGraph', 'Gemini 2.0 Flash', 'ShellTool'],
    category: 'agentic-ai',
    githubLink: '',
    tags: ['Agentic AI', 'LangGraph', 'Shell Agent', 'Code View'],
    imageUrl: '/thumbnails/gemini-shell-agent.png',
    features: [
      'Read and understand GitHub files',
      'Download and analyze README files',
      'Identify useful links using Gemini',
      'View and copy the full code'
    ],
    challenges: ['Requires Google Gemini API key', 'Depends on LangGraph, ShellTool'],
    outcomes: ['Automates code understanding and documentation'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_genai-langgraph-geminiai-activity-7355568184894091265-eOiz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'python-error-fixer-gemini',
    title: 'Python Error Fixer with Gemini',
    description: 'Fix Python code errors instantly using Gemini 2.5 and Gradio.',
    fullDescription: 'This interactive tool uses Google’s Gemini 2.5 Flash model and Gradio to detect and fix Python code errors. Users paste their code or error message, and the app responds with an explanation and corrected code. Ideal for beginners, students, and developers debugging code quickly.',
    techStack: ['Python', 'Gradio', 'Gemini 2.5 Flash', 'Google GenAI'],
    category: 'agentic-ai',
    githubLink: '',
    tags: ['Generative AI', 'Python', 'Gemini', 'Code Debugging', 'Gradio'],
    imageUrl: '/thumbnails/python-error-fixer-gemini.png',
    features: [
      'Fixes broken Python code or interprets error messages',
      'Uses Gemini 2.5 Flash for AI-powered responses',
      'Explains the issue and provides a corrected version',
      'User-friendly Gradio interface',
      'Instant feedback for debugging'
    ],
    challenges: [
      'Requires a valid Gemini API key',
      'Only supports Python errors'
    ],
    outcomes: [
      'Accelerates Python debugging and learning',
      'Helps users understand and fix code issues',
      'Empowers non-experts with AI support'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_python-generativeai-gemini-activity-7345320103707607041-s95E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  
  {
    id: 'js-take-photo',
    title: 'Take Photo Using JavaScript',
    description: 'Access the webcam and capture a photo using JavaScript.',
    fullDescription: 'Create a JavaScript function to access the webcam and capture a photo. Uses HTML, CSS, and JavaScript (MediaDevices API, Canvas).',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    category: 'fullstack',
    githubLink: '',
    tags: ['JavaScript', 'Webcam', 'Frontend', 'Code View'],
    imageUrl: '/thumbnails/js-take-photo.png',
    features: [
      'Start webcam stream in browser',
      'Capture photo from live video feed',
      'Save captured image as PNG',
      'Delete or re-capture',
      'Responsive UI'
    ],
    challenges: ['Browser compatibility', 'MediaDevices API permissions'],
    outcomes: ['Hands-on with browser APIs', 'Real-time photo processing'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-vimaldagasir-javascript-activity-7348260230285160450-AA2-?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'js-send-email',
    title: 'Send Email Using JavaScript or API',
    description: 'Send email through a JavaScript-based interface using EmailJS or a backend API.',
    fullDescription: 'Build a contact form using HTML, JavaScript, and EmailJS to send emails directly from the browser without any backend.',
    techStack: ['HTML', 'JavaScript', 'EmailJS'],
    category: 'fullstack',
    githubLink: '',
    tags: ['JavaScript', 'EmailJS', 'Frontend', 'Code View'],
    imageUrl: '/thumbnails/js-send-email.png',
    features: [
      'Send email from browser',
      'Integrate with EmailJS',
      'No backend required',
      'Secure form handling'
    ],
    challenges: ['API integration', 'Client-side security'],
    outcomes: ['Learned frontend to API integration', 'No-backend email sending'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-internshipjourney-webdevelopment-activity-7349044386413867008-kVjd?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'js-photo-to-email',
    title: 'Send Captured Photo to Email',
    description: 'Capture a photo and send it via email using an email service API.',
    fullDescription: 'After capturing the photo, attach and send it via email using EmailJS or another email service API. Uses HTML5, JavaScript, and EmailJS.',
    techStack: ['HTML', 'JavaScript', 'EmailJS'],
    category: 'fullstack',
    githubLink: '',
    tags: ['JavaScript', 'Webcam', 'EmailJS', 'Frontend', 'Code View'],
    imageUrl: '/thumbnails/js-photo-to-email.png',
    features: [
      'Capture photo in browser',
      'Send photo as email attachment',
      'No backend required',
      'User-friendly UI'
    ],
    challenges: ['Image encoding', 'EmailJS integration'],
    outcomes: ['Real-time media capture', 'API integration experience'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-webdev-javascript-activity-7349050675143540741-gYO2?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  
  {
    id: 'js-record-video-email',
    title: 'Record Video on Button Click and Send via Email',
    description: 'Record video using JS MediaRecorder API and send it via email.',
    fullDescription: 'Use the JS MediaRecorder API to record video on button click, then send it via email using EmailJS. All in-browser, no backend required.',
    techStack: ['HTML', 'JavaScript', 'EmailJS'],
    category: 'fullstack',
    githubLink: '',
    tags: ['JavaScript', 'MediaRecorder', 'EmailJS', 'Frontend', 'Code View'],
    imageUrl: '/thumbnails/js-record-video-email.png',
    features: [
      'Record video in browser',
      'Send video via email',
      'No backend required',
      'Modern UI'
    ],
    challenges: ['MediaRecorder API', 'Video encoding', 'EmailJS limits'],
    outcomes: ['Learned video capture', 'Client-side API integration'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_javascript-webdevelopment-emailjs-activity-7349055309111246849-5dG3?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    "id": "gmail-last-email-fetcher",
    "title": "Fetch Last Email Info from Gmail",
    "description": "Use Gmail API with OAuth to fetch and display the most recent email details.",
    "fullDescription": "This project uses Google's Gmail API to authenticate with OAuth 2.0 and access the user's inbox to retrieve and display information about the most recently received email. Implemented using Python and optionally displayed using Streamlit UI. This automation helps users quickly review the latest email without opening their mailbox manually.",
    "techStack": ["Python", "Gmail API", "OAuth 2.0", "Google Cloud Console", "Streamlit"],
    "category": "fullstack",
    "githubLink": "",
    "tags": ["Gmail API", "Email Automation", "Python", "OAuth", "Google API", "Streamlit"],
    "imageUrl": "/thumbnails/gmail-last-email-fetcher.png",
    "features": [
      "Authenticate Gmail account securely using OAuth",
      "Fetch subject, sender, and snippet of the latest email",
      "Display info in terminal or Streamlit dashboard"
    ],
    "challenges": [
      "Setting up OAuth 2.0 flow and credentials",
      "Parsing the email data from Gmail API",
      "Handling access token and refresh token properly"
    ],
    "outcomes": [
      "Learned Gmail API integration and authentication",
      "Developed a practical tool for quick email previews"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_gmailapi-streamlit-python-activity-7355657644574945280-JCDl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  
  {
    id: 'js-whatsapp-message',
    title: 'Send WhatsApp Message Using JavaScript',
    description: 'Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JS.',
    fullDescription: 'Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JavaScript. Integrate WhatsApp messaging into your web app.',
    techStack: ['HTML', 'JavaScript'],
    category: 'fullstack',
    githubLink: '',
    tags: ['JavaScript', 'WhatsApp', 'Frontend', 'Code View'],
    imageUrl: '/thumbnails/js-whatsapp-message.png',
    features: [
      'Initiate WhatsApp message from browser',
      'No backend required',
      'Simple integration',
      'User-friendly UI'
    ],
    challenges: ['WhatsApp API limitations', 'URL encoding'],
    outcomes: ['Learned WhatsApp integration', 'Enhanced user communication'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_javascript-webdevelopment-whatsappintegration-activity-7350931726791016449-9nU_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-linear-regression',
    title: 'Run Linear Regression Model inside Docker',
    description: 'Write and execute a Linear Regression model in Python inside a Docker container.',
    fullDescription: 'Trained a Linear Regression model using scikit-learn to predict student marks based on hours studied, and containerized it using Docker for portability.',
    techStack: ['Python', 'scikit-learn', 'Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'Machine Learning', 'Python', 'DevOps'],
    imageUrl: '/thumbnails/docker-linear-regression.png',
    features: [
      'Train and run ML model in Docker',
      'Real-time user input inside container',
      'Portable and reproducible environment'
    ],
    challenges: ['Docker setup', 'Containerizing ML workflows'],
    outcomes: ['Portable ML model', 'Hands-on with Docker'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-internshipexperience-vimaldagasir-activity-7351501866020536320-j5nw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-flask-app',
    title: 'Run Flask App inside Docker',
    description: 'Create and run a Python Flask web application from within a Docker container.',
    fullDescription: 'Containerized a simple Flask app using Docker, making it accessible via localhost:5000 in an isolated environment.',
    techStack: ['Python', 'Flask', 'Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'Flask', 'Python', 'Web App', 'DevOps'],
    imageUrl: '/thumbnails/docker-flask-app.png',
    features: [
      'Flask app in Docker',
      'Isolated containerized environment',
      'Easy deployment'
    ],
    challenges: ['Dockerfile creation', 'Container networking'],
    outcomes: ['Web app runs anywhere', 'Learned containerization'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-docker-flask-activity-7351506313857724416-b5pl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-menu-cli',
    title: 'Run Menu-Based Python Project inside Docker',
    description: 'Place your menu-based CLI project into a Docker container and execute it.',
    fullDescription: 'Developed a menu-based Docker CLI project to interact with Docker using simple numbered options, all inside a container.',
    techStack: ['Python', 'Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'CLI', 'Python', 'DevOps'],
    imageUrl: '/thumbnails/docker-menu-cli.png',
    features: [
      'Menu-based CLI for Docker',
      'Container lifecycle management',
      'Automation with Python'
    ],
    challenges: ['os.system() integration', 'Docker command automation'],
    outcomes: ['Deeper Docker understanding', 'CLI automation'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_devops-docker-linuxworld-activity-7349010987548643328-H-Ug?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-dind',
    title: 'Run Docker Inside Docker (DIND)',
    description: 'Set up and test Docker within another Docker container (DevOps use).',
    fullDescription: 'Explored and implemented Docker Inside Docker (DIND) to run Docker within Docker containers for advanced DevOps scenarios.',
    techStack: ['Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'DIND', 'DevOps'],
    imageUrl: '/thumbnails/docker-dind.png',
    features: [
      'Docker inside Docker',
      'Advanced DevOps use-case',
      'Hands-on with DIND'
    ],
    challenges: ['DIND setup', 'Container security'],
    outcomes: ['Learned DIND', 'Advanced containerization'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_docker-dockerinsidedocker-dind-activity-7351113818753687553-QKo3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-apache',
    title: 'Setup Apache Server inside Docker',
    description: 'Install and configure Apache web server inside a Docker container.',
    fullDescription: 'Installed and configured Apache web server inside a Docker container for easy deployment and testing.',
    techStack: ['Apache', 'Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'Apache', 'Web Server', 'DevOps'],
    imageUrl: '/thumbnails/docker-apache.png',
    features: [
      'Apache in Docker',
      'Easy deployment',
      'Web server configuration'
    ],
    challenges: ['Apache setup', 'Docker networking'],
    outcomes: ['Web server in container', 'Deployment skills'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-docker-apache-activity-7351102449824186368-bETa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-apache-case-study',
    title: 'Setup and Configure Apache Webserver in Docker',
    description: 'Deploy Apache within a Docker environment.',
    fullDescription: 'Set up and configured the Apache webserver in Docker for deployment and testing.',
    techStack: ['Apache', 'Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'Apache', 'Web Server', 'DevOps'],
    imageUrl: '/thumbnails/docker-apache-case-study.png',
    features: [
      'Apache deployment in Docker',
      'Web server configuration',
      'Containerized deployment'
    ],
    challenges: ['Apache config', 'Dockerfile creation'],
    outcomes: ['Deployment experience', 'Web server in Docker'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-docker-apache-activity-7351102449824186368-bETa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-case-study',
    title: 'Blog: Why Docker is Used by Companies',
    description: 'Research and document real-world use cases of Docker.',
    fullDescription: 'A blog/case study on why Docker is used by different companies and the benefits they get from it.',
    techStack: ['Docker', 'Research'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'Case Study', 'DevOps'],
    imageUrl: '/thumbnails/docker-case-study.png',
    features: [
      'Research on Docker use-cases',
      'Documentation',
      'Industry insights'
    ],
    challenges: ['Research', 'Documentation'],
    outcomes: ['Industry knowledge', 'Research skills'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_docker-devops-linuxworld-activity-7350924818008965120-UQJs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-any-tool',
    title: 'Run Any Tool or Technology in Docker',
    description: 'Experiment with running software inside a Docker container.',
    fullDescription: 'Experimented with running various tools and technologies inside Docker containers for learning and testing.',
    techStack: ['Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'Tools', 'DevOps'],
    imageUrl: '/thumbnails/docker-any-tool.png',
    features: [
      'Run any tool in Docker',
      'Experimentation',
      'Learning by doing'
    ],
    challenges: ['Tool compatibility', 'Dockerfile creation'],
    outcomes: ['Hands-on with Docker', 'Broader tech exposure'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-internship-docker-activity-7350939434411880454-2umt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'docker-dind-learn',
    title: 'Learn How to Set Up Docker Inside Docker (DIND)',
    description: 'Understand the concept of running Docker within Docker.',
    fullDescription: 'Learned and implemented the concept of Docker Inside Docker (DIND) for advanced DevOps and CI/CD scenarios.',
    techStack: ['Docker'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['Docker', 'DIND', 'DevOps'],
    imageUrl: '/thumbnails/docker-dind-learn.png',
    features: [
      'Docker in Docker',
      'CI/CD use-case',
      'Advanced DevOps'
    ],
    challenges: ['DIND setup', 'Security'],
    outcomes: ['Learned DIND', 'CI/CD skills'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_docker-dockerinsidedocker-dind-activity-7351113818753687553-QKo3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    "id": "python-send-email",
    "title": "Send an Email using Python",
    "description": "Use Python to send emails effortlessly with built-in libraries or SMTP setup.",
    "fullDescription": "This project demonstrates how to send an email using Python, either through the built-in smtplib or other email-sending services. It showcases how easily Python can automate everyday communication tasks like sending notifications or status reports.",
    "techStack": ["Python", "smtplib", "email"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Python", "Email Automation", "SMTP", "Backend", "Code View"],
    "imageUrl": "/thumbnails/python-send-email.png",
    "features": [
      "Send emails programmatically using Python",
      "Custom subject and body content",
      "Supports attachments and rich formatting"
    ],
    "challenges": ["SMTP setup", "Authentication issues", "Handling attachments"],
    "outcomes": [
      "Learned how to automate email sending with Python",
      "Understood SMTP protocol and email structure"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-streamlit-python-activity-7349071096442163203-0w-r?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "python-send-sms",
    "title": "Send an SMS using Python",
    "description": "Use Python to send SMS using third-party APIs like Twilio.",
    "fullDescription": "This project shows how to send text messages (SMS) using Python and services like Twilio. It's useful for automating alerts, OTPs, or any kind of notification system directly from Python scripts.",
    "techStack": ["Python", "Twilio API"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Python", "Twilio", "SMS", "Automation", "Backend"],
    "imageUrl": "/thumbnails/python-send-sms.png",
    "features": [
      "Send text messages with Python",
      "Integrate with Twilio API",
      "Customizable message content"
    ],
    "challenges": [
      "Requires Twilio setup",
      "Handling API authentication",
      "SMS delivery issues based on region"
    ],
    "outcomes": [
      "Learned how to send SMS programmatically",
      "Understood integration with external communication APIs"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-python-streamlit-activity-7349081663982682112-gmBo?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  } ,
  {
    "id": "python-make-phone-call",
    "title": "Make a Phone Call using Python",
    "description": "Use Python and Twilio API to make automated phone calls.",
    "fullDescription": "This project demonstrates how to use Python with the Twilio API to initiate phone calls programmatically. It allows for sending pre-recorded messages or text-to-speech messages, which is useful for reminders, alerts, or automated communication systems.",
    "techStack": ["Python", "Twilio API"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Python", "Twilio", "Phone Call", "Automation", "Backend"],
    "imageUrl": "/thumbnails/python-make-phone-call.png",
    "features": [
      "Make phone calls using Python",
      "Send voice messages with Twilio",
      "No need for a separate telephony backend"
    ],
    "challenges": [
      "Requires Twilio account and number",
      "Handling audio message formats",
      "Call delivery based on country/region"
    ],
    "outcomes": [
      "Learned to automate calls using APIs",
      "Built a foundation for voice-based automation tools"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_task4-task4-pythonprojects-activity-7351871898017792000-y0xs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "python-instagram-post",
    "title": "Post on Instagram using Python",
    "description": "Use Python to automate posting messages on Instagram.",
    "fullDescription": "This project demonstrates how to post content on Instagram using Python scripts. By integrating with third-party tools or unofficial APIs like instabot or instagrapi, the script automates posting text or image content to an Instagram account.",
    "techStack": ["Python", "Instabot", "InstaGraphAPI"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Python", "Instagram", "Automation", "Social Media", "instabot"],
    "imageUrl": "/thumbnails/python-instagram-post.png",
    "features": [
      "Post content to Instagram using Python",
      "Support for captions and hashtags",
      "Can be extended for scheduling posts"
    ],
    "challenges": [
      "Instagram API limitations",
      "Login and authentication handling",
      "Account security and rate limits"
    ],
    "outcomes": [
      "Automated Instagram posting workflow",
      "Understood social media automation using Python"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-internshipexperience-python-activity-7347547224601415680-r3Ac?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "python-whatsapp-message",
    "title": "Send a WhatsApp Message using Python",
    "description": "Use Python to send WhatsApp messages using Twilio or pywhatkit.",
    "fullDescription": "This project demonstrates how to send WhatsApp messages using Python. It uses libraries like Twilio or pywhatkit to automate the message-sending process, making it useful for reminders, notifications, or automated messaging systems.",
    "techStack": ["Python", "Twilio API", "pywhatkit"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Python", "WhatsApp", "Automation", "Messaging", "Twilio", "pywhatkit"],
    "imageUrl": "/thumbnails/python-whatsapp-message.png",
    "features": [
      "Send WhatsApp messages with Python",
      "Supports real-time or scheduled messages",
      "Integrates with Twilio or runs locally via WhatsApp Web"
    ],
    "challenges": [
      "Authentication and verification via Twilio",
      "Message format limitations",
      "WhatsApp Web must be open for pywhatkit"
    ],
    "outcomes": [
      "Learned automation of messaging with Python",
      "Explored integration with WhatsApp APIs and tools"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-internshipexperience-python-activity-7347540934164688896-d5aG?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "python-menu-driven-project",
    "title": "Menu-Driven Python Project",
    "description": "A single Python program that combines multiple automation tasks into one menu-driven interface.",
    "fullDescription": "This project integrates several Python automation scripts—such as sending emails, WhatsApp messages, SMS, making phone calls, and posting to social media—into one consolidated, menu-driven Python application. It enhances usability by allowing users to choose any task from a menu and execute it seamlessly.",
    "techStack": ["Python", "Twilio API", "smtplib", "pywhatkit", "Instabot"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Python", "Automation", "Menu Driven", "Multi-Function App", "Scripts Hub"],
    "imageUrl": "/thumbnails/python-menu-driven-project.png",
    "features": [
      "Unified interface for multiple tasks",
      "Includes email, SMS, WhatsApp, phone call, and Instagram modules",
      "Easy navigation with menu selection"
    ],
    "challenges": [
      "Combining multiple APIs and libraries",
      "Managing user inputs and exceptions",
      "Maintaining modular code structure"
    ],
    "outcomes": [
      "Built an all-in-one automation toolkit",
      "Enhanced Python scripting and integration skills"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-techskills-thankyoumentors-activity-7342569832426438656-Wd_v?utm_source=share&utm_medium=member_android&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "linux-companies-blog",
    "title": "Blog: Why Top Companies Use Linux",
    "description": "Explores why major companies rely on Linux and the benefits they gain.",
    "fullDescription": "This blog post discusses how and why top global companies use Linux in their IT infrastructure. It highlights the open-source nature of Linux, its flexibility, security, cost-effectiveness, and wide community support, making it an ideal choice for enterprise environments.",
    "techStack": ["Linux", "Open Source", "Blog Writing"],
    "category": "linux",
    "githubLink": "",
    "tags": ["Linux", "Open Source", "Enterprise", "Blog", "Technology Insight"],
    "imageUrl": "/thumbnails/linux-companies-blog.png",
    "features": [
      "Explains Linux usage in companies",
      "Details business benefits like cost savings and security",
      "Raises awareness about open-source adoption"
    ],
    "challenges": [
      "Researching up-to-date company practices",
      "Explaining technical advantages in simple terms"
    ],
    "outcomes": [
      "Improved understanding of Linux in real-world use",
      "Showcased analytical and writing skills"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linux-opensource-linuxworld-activity-7350913550317445120-l5sO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "linux-gui-vs-cli",
    "title": "5 GUI Programs in Linux and Their Underlying Commands",
    "description": "Explore 5 popular GUI tools in Linux and uncover the terminal commands behind them.",
    "fullDescription": "This project identifies five commonly used GUI-based applications in Linux and maps them to the terminal commands that perform the same tasks. It highlights how GUI operations often translate directly to command-line instructions, promoting a deeper understanding of Linux's power and flexibility.",
    "techStack": ["Linux", "Shell", "Command Line"],
    "category": "linux",
    "githubLink": "",
    "tags": ["Linux", "GUI vs CLI", "Shell Commands", "Open Source", "Productivity"],
    "imageUrl": "/thumbnails/linux-gui-vs-cli.png",
    "features": [
      "Analyzes popular GUI tools in Linux",
      "Reveals equivalent terminal commands",
      "Bridges GUI and CLI understanding"
    ],
    "challenges": [
      "Finding accurate CLI equivalents",
      "Explaining technical processes clearly",
      "Cross-distribution command differences"
    ],
    "outcomes": [
      "Strengthened command-line knowledge",
      "Showed how GUI and CLI are interconnected",
      "Promoted use of CLI for efficiency"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linux-opensource-guivscli-activity-7350918179440816128-Oo_g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "linux-interrupt-signals",
    "title": "Ctrl+C and Ctrl+Z in Linux: Behind the Scenes",
    "description": "Explore how Ctrl+C and Ctrl+Z work internally in Linux through signals like SIGINT and SIGTSTP.",
    "fullDescription": "This project investigates the underlying commands and process control mechanisms behind the keyboard shortcuts Ctrl+C and Ctrl+Z in Linux. Ctrl+C sends the SIGINT (Interrupt) signal to terminate a foreground process, while Ctrl+Z sends the SIGTSTP (Terminal Stop) signal to suspend it. These are essential for process management in Unix/Linux systems.",
    "techStack": ["Linux", "UNIX Signals", "Shell"],
    "category": "linux",
    "githubLink": "",
    "tags": ["Linux", "Signals", "Process Control", "Ctrl+C", "Ctrl+Z", "Shell"],
    "imageUrl": "/thumbnails/linux-interrupt-signals.png",
    "features": [
      "Explains SIGINT and SIGTSTP signals",
      "Demonstrates how Ctrl+C and Ctrl+Z work in terminal",
      "Improves understanding of process control in Linux"
    ],
    "challenges": [
      "Understanding low-level signal handling",
      "Explaining kernel behavior in simple terms"
    ],
    "outcomes": [
      "Improved grasp of Linux signal-based process control",
      "Learned to use 'kill', 'fg', 'bg', and 'jobs' commands for management"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linux-unix-ctrlc-activity-7350922727299465217-IW6f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  // Devops and cloud computing
  {
    "id": "aws-case-studies-blog",
    "title": "Blog: AWS Case Studies of Leading Companies",
    "description": "Explore how top companies are leveraging AWS for scalability, security, and innovation.",
    "fullDescription": "This blog post dives into various AWS case studies, highlighting how leading companies across different sectors utilize AWS services to achieve high availability, cost efficiency, improved performance, and scalable infrastructure. The article also discusses real-world applications, such as data migration, serverless computing, and cloud-native architecture.",
    "techStack": ["AWS", "EC2", "S3", "Lambda", "Cloud Computing"],
    "category": "devops-cloud",
    "githubLink": "",
    "tags": ["AWS", "Case Studies", "Cloud Computing", "DevOps", "Blog"],
    "imageUrl": "/thumbnails/aws-case-studies-blog.png",
    "features": [
      "Summarizes real AWS use cases",
      "Demonstrates cloud advantages through examples",
      "Covers scalability, reliability, and security aspects"
    ],
    "challenges": [
      "Condensing technical case studies into readable content",
      "Explaining AWS architecture clearly",
      "Keeping examples up-to-date"
    ],
    "outcomes": [
      "Learned how companies benefit from AWS",
      "Understood real-world cloud infrastructure designs"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_aws-case-studies-how-leading-companies-activity-7355647745061220354-gFJk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "aws-s3-storage-classes-blog",
    "title": "Blog: Understanding Amazon S3 Storage Classes",
    "description": "Detailed blog explaining the different Amazon S3 storage classes and their ideal use cases.",
    "fullDescription": "This blog post covers various Amazon S3 storage classes, including S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, S3 One Zone-IA, S3 Glacier, and S3 Glacier Deep Archive. It explains their features, pricing models, access frequency, and best practices for choosing the right class based on business requirements.",
    "techStack": ["AWS", "S3", "Cloud Storage"],
    "category": "devops-cloud",
    "githubLink": "",
    "tags": ["AWS", "S3", "Cloud Storage", "Storage Classes", "DevOps", "Blog"],
    "imageUrl": "/thumbnails/aws-s3-storage-classes-blog.png",
    "features": [
      "Explains each S3 storage class in detail",
      "Includes cost and access comparisons",
      "Helps in choosing the right storage class"
    ],
    "challenges": [
      "Understanding cost implications and lifecycle policies",
      "Simplifying complex AWS documentation"
    ],
    "outcomes": [
      "Gained in-depth knowledge of S3 storage models",
      "Created a practical guide for cloud storage planning"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_understanding-amazon-s3-storage-classes-activity-7355648286357184513-uEHl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "docker-firefox-gui",
    "title": "Install Firefox Browser inside Docker",
    "description": "Run Firefox with GUI inside a Docker container using X11 forwarding or VNC.",
    "fullDescription": "This project demonstrates how to set up and run the Firefox browser inside a Docker container with GUI support. It involves configuring the Dockerfile to install Firefox and setting up either X11 forwarding or a VNC server to enable GUI access. This is useful for testing, isolation, or running browsers in headless environments.",
    "techStack": ["Docker", "Linux", "Firefox", "X11", "VNC"],
    "category": "devops-cloud",
    "githubLink": "",
    "tags": ["Docker", "Firefox", "Containers", "GUI", "DevOps", "Linux"],
    "imageUrl": "/thumbnails/docker-firefox-gui.png",
    "features": [
      "Installs Firefox inside a Docker container",
      "Supports GUI via X11 or VNC",
      "Runs browser in an isolated environment"
    ],
    "challenges": [
      "Configuring GUI access from Docker",
      "Ensuring host display compatibility",
      "Handling container security policies"
    ],
    "outcomes": [
      "Learned to run GUI applications in Docker",
      "Understood containerized desktop app deployment"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_docker-firefox-containers-activity-7355653140278312961-EqBm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "docker-vlc-gui",
    "title": "Play VLC Inside Docker",
    "description": "Run VLC media player with GUI support inside a Docker container using X11 forwarding or VNC.",
    "fullDescription": "This project sets up VLC inside a Docker container to enable media playback with GUI support. It involves installing VLC in the Docker image and setting up either X11 display forwarding or a VNC server to access the VLC media player graphically. Useful for isolated testing of media playback and containerized multimedia applications.",
    "techStack": ["Docker", "Linux", "VLC", "X11", "VNC"],
    "category": "devops-cloud",
    "githubLink": "",
    "tags": ["Docker", "VLC", "GUI", "Media Player", "X11", "VNC", "DevOps"],
    "imageUrl": "/thumbnails/docker-vlc-gui.png",
    "features": [
      "Installs and runs VLC inside a Docker container",
      "Supports GUI via X11 forwarding or VNC server",
      "Enables playback of media files in a containerized setup"
    ],
    "challenges": [
      "Ensuring media playback performance inside containers",
      "Configuring proper display access for VLC",
      "Handling sound output in container environments"
    ],
    "outcomes": [
      "Learned to containerize multimedia applications",
      "Explored GUI streaming from Docker using VNC/X11"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_docker-devops-vnc-activity-7355651578697080832-1p9I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "linkedin-post-automation",
    "title": "Post on LinkedIn Using Python",
    "description": "Automate LinkedIn post creation using Python and Streamlit.",
    "fullDescription": "This script automates the process of posting on LinkedIn using Python. It utilizes the LinkedIn API (or third-party wrappers such as 'linkedin_api') to authenticate and publish text-based posts directly from a Python environment. The Streamlit interface makes the automation user-friendly and interactive.",
    "techStack": ["Python", "LinkedIn API", "Streamlit", "OAuth 2.0"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["LinkedIn Automation", "Python", "Streamlit", "API Integration", "OAuth"],
    "imageUrl": "/thumbnails/linkedin-post-automation.png",
    "features": [
      "OAuth-based authentication to LinkedIn",
      "Create and publish posts via Python script",
      "Streamlit-based UI for interactive posting"
    ],
    "challenges": [
      "Bypassing LinkedIn API limitations",
      "Handling authentication and access tokens",
      "Ensuring post visibility and formatting"
    ],
    "outcomes": [
      "Created an efficient LinkedIn automation tool",
      "Learned to integrate social media APIs with Python and UI frameworks"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linkedinautomation-python-streamlit-activity-7355668886760939520-I1YV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "twitter-post-automation",
    "title": "Post on Twitter (X) Using Python",
    "description": "Automate posting tweets using Python and Streamlit.",
    "fullDescription": "This project demonstrates how to post a message on Twitter (X) using Python. It uses the Twitter API v2 via the Tweepy library along with OAuth 2.0 authentication to securely publish tweets. A Streamlit UI is integrated to provide a simple and clean interface for entering and sending tweets directly from a browser.",
    "techStack": ["Python", "Twitter API", "Tweepy", "Streamlit", "OAuth 2.0"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Twitter Automation", "Python", "Tweepy", "Streamlit", "API Integration"],
    "imageUrl": "/thumbnails/twitter-post-automation.png",
    "features": [
      "Secure OAuth-based login to Twitter (X)",
      "Streamlit form to enter and submit tweet",
      "Automated posting to Twitter using Python scripts"
    ],
    "challenges": [
      "Managing Twitter API keys and tokens",
      "Handling API rate limits",
      "Creating a user-friendly interface with error handling"
    ],
    "outcomes": [
      "Built a tool for tweeting directly from Python",
      "Integrated Streamlit UI for seamless experience",
      "Explored Twitter's developer platform and API"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_twitterapi-pythonprojects-streamlit-activity-7355670194205114368-yk1D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "facebook-post-automation",
    "title": "Post on Facebook Using Python",
    "description": "Automate Facebook posting with Python and Graph API.",
    "fullDescription": "This project showcases how to post data to Facebook using Python through the Facebook Graph API. By generating access tokens and connecting to the Graph API endpoints, Python scripts can be used to publish status updates, links, or media content to Facebook pages. It’s useful for social media automation, marketing campaigns, or scheduling posts.",
    "techStack": ["Python", "Facebook Graph API", "OAuth 2.0", "Requests"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Facebook API", "Python Automation", "Social Media Bot", "Graph API", "OAuth"],
    "imageUrl": "/thumbnails/facebook-post-automation.png",
    "features": [
      "Connect to Facebook via Graph API",
      "Automated post publishing from Python",
      "Supports text and link sharing on Pages"
    ],
    "challenges": [
      "Managing Facebook access tokens securely",
      "Handling permission scopes for posting",
      "Respecting API rate limits and compliance"
    ],
    "outcomes": [
      "Successfully posted to Facebook page using Python",
      "Gained hands-on experience with Facebook Graph API",
      "Created a base for building social media automation tools"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_facebookgraphapi-python-socialmediaautomation-activity-7355671081401090048-fSXw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "kubernetes-case-studies",
    "title": "Case Studies: Why Companies Use Kubernetes",
    "description": "Explore real-world examples of how companies benefit from Kubernetes.",
    "fullDescription": "This blog highlights how major companies like Spotify, Airbnb, and Box leverage Kubernetes for scalability, automation, and reliability. It discusses the challenges these companies faced, their transition to Kubernetes, and the outcomes they achieved. The post serves as a guide for understanding Kubernetes adoption in the real world and its impact on DevOps and cloud architecture.",
    "techStack": ["Kubernetes", "Docker", "Cloud Native", "DevOps", "CI/CD"],
    "category": "devops-cloud",
    "githubLink": "",
    "tags": ["Kubernetes", "DevOps", "Cloud Computing", "Microservices", "Case Study"],
    "imageUrl": "/thumbnails/kubernetes-case-studies.png",
    "features": [
      "Real-world adoption by Spotify, Airbnb, Box",
      "Explains challenges and Kubernetes-based solutions",
      "Demonstrates Kubernetes benefits in production"
    ],
    "challenges": [
      "Complexity in managing microservices at scale",
      "Need for automated deployments and self-healing",
      "Ensuring high availability and fast rollouts"
    ],
    "outcomes": [
      "Improved scalability and uptime",
      "Faster deployments and rollbacks",
      "Greater infrastructure automation and visibility"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_kubernetes-spotify-kubernetes-activity-7355675287646257153-PSjv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  //machine learning
  {
    id: 'car-travel-distance-predictor',
    title: 'Car Travel Distance Predictor',
    description: 'Predict how far a car can travel based on fuel, mileage, AC usage, and luggage using Streamlit and Linear Regression.',
    fullDescription: 'This ML-powered Streamlit app uses Linear Regression to estimate travel distance based on input features like fuel available, mileage, AC usage, and luggage weight. Great for quick estimations during trip planning.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    category: 'machine-learning',
    githubLink: '',
    tags: ['Streamlit', 'Machine Learning', 'Linear Regression', 'Travel Predictor'],
    imageUrl: '/thumbnails/car-travel-distance-predictor.png',
    features: [
      'User-friendly sliders and radio buttons for input',
      'Predicts travel distance instantly',
      'Includes AC usage and luggage as real-world factors',
      'Shows results interactively',
      'Lightweight and fast deployment with Streamlit'
    ],
    challenges: [
      'Trained on a small, mock dataset',
      'Does not account for terrain or driving behavior'
    ],
    outcomes: [
      'Makes travel planning smarter',
      'Introduces beginners to ML and Streamlit integration',
      'Demonstrates practical use of regression models'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-vimaldagasir-preetichandakmaam-activity-7345308898905460736-En5H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'student-marks-predictor',
    title: 'Student Marks Predictor Based on Study Hours',
    description: 'A simple linear regression model to predict student marks based on hours studied.',
    fullDescription: 'This project demonstrates a beginner-friendly machine learning workflow using Linear Regression. It predicts student marks based on the number of study hours. Useful for understanding how study time correlates with academic performance.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    category: 'machine-learning',
    githubLink: '',
    tags: ['Machine Learning', 'Linear Regression', 'Student Performance', 'Python'],
    imageUrl: '/thumbnails/student-marks-predictor.png',
    features: [
      'Takes user input for hours studied',
      'Predicts marks using trained linear regression model',
      'Uses train-test split to validate model',
      'Shows real-world application of ML',
      'Console-based input/output for simplicity'
    ],
    challenges: [
      'Limited dataset (only 9 points)',
      'No UI — runs in console only'
    ],
    outcomes: [
      'Teaches basics of supervised ML',
      'Introduces regression analysis to beginners',
      'Builds foundational understanding of model evaluation'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_machinelearning-logisticregression-python-activity-7355785444040622080-W2Pn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'shaadi-eligibility-predictor',
    title: 'Shaadi Eligibility Predictor',
    description: 'Check if you’re eligible for marriage using a Logistic Regression model based on personal and social factors.',
    fullDescription: 'A fun and interactive Streamlit app that uses logistic regression to predict shaadi (marriage) eligibility. Inputs like age, income, education level, and family support are used to make predictions. Built for educational and entertainment purposes.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
    category: 'machine-learning',
    githubLink: '',
    tags: ['Logistic Regression', 'Marriage Predictor', 'Streamlit', 'Fun ML App'],
    imageUrl: '/thumbnails/shaadi-eligibility-predictor.png',
    features: [
      'Interactive sliders and dropdowns for user input',
      'Predicts marriage eligibility using logistic regression',
      'Streamlit-based modern UI',
      'Simple data-based logic for predictions',
      'Realistic feature inputs like age, income, education, and family support'
    ],
    challenges: [
      'Built on a small mock dataset',
      'Predictions are just for fun, not to be taken seriously'
    ],
    outcomes: [
      'Demonstrates classification via logistic regression',
      'Engages users with relatable use-case',
      'Encourages learning through humor and interactivity'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_machinelearning-logisticregression-python-activity-7355785444040622080-W2Pn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'placement-package-predictor',
    title: 'Placement Package Predictor',
    description: 'Predict your expected placement package based on technical, academic, and soft skill inputs using Linear Regression.',
    fullDescription: 'This Streamlit app helps students estimate their expected placement package based on various parameters such as technical skills, DSA, CGPA, college tier, communication skills, and internships. Built using Linear Regression, it provides a quick and intuitive way to assess potential salary outcomes.',
    techStack: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
    category: 'machine-learning',
    githubLink: '',
    tags: ['Machine Learning', 'Linear Regression', 'Placement Prediction', 'Streamlit'],
    imageUrl: '/thumbnails/placement-package-predictor.png',
    features: [
      'Interactive sliders and dropdown for feature inputs',
      'Predicts salary package (in LPA)',
      'Covers multiple academic and skill factors',
      'User-friendly Streamlit interface',
      'Educative for students preparing for placements'
    ],
    challenges: [
      'Trained on a small dataset',
      'Simplifies real-world placement dynamics'
    ],
    outcomes: [
      'Gives students a benchmark to assess readiness',
      'Promotes awareness of important placement factors',
      'Encourages skill and academic growth through insights'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_placementprediction-machinelearning-streamlit-activity-7355784467107430400-EEtb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'titanic-survival-predictor',
    title: 'Titanic Survival Predictor',
    description: 'Predict whether a Titanic passenger would have survived based on age, sex, class, and family data using logistic regression.',
    fullDescription: 'This Python project uses logistic regression on the Titanic dataset to predict passenger survival. By entering details like age, sex, passenger class, and number of relatives onboard, the model estimates survival chances. It includes preprocessing (like age imputation and encoding) and provides a hands-on classification example.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Matplotlib'],
    category: 'machine-learning',
    githubLink: '',
    tags: ['Titanic Dataset', 'Logistic Regression', 'Machine Learning', 'Survival Prediction'],
    imageUrl: '/thumbnails/titanic-survival-predictor.png',
    features: [
      'Uses real Titanic dataset from GitHub',
      'Handles missing age values based on passenger class',
      'Applies one-hot encoding to categorical features',
      'Predicts survival from user input via CLI',
      'Demonstrates real-world application of logistic regression'
    ],
    challenges: [
      'No GUI interface (console-only)',
      'Manual feature transformation for each prediction'
    ],
    outcomes: [
      'Shows practical use of logistic regression',
      'Teaches feature engineering and preprocessing',
      'Offers a famous ML case study for practice'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_titanicml-logisticregression-pythonprojects-activity-7355801695072702464-vSxa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'flask-api-jenkins-cicd',
    title: 'Flask API Deployed with Jenkins CI/CD Pipeline',
    description: 'A Flask-based web API integrated with a Jenkins CI/CD pipeline for automated testing and deployment.',
    fullDescription: 'This DevOps mini-project demonstrates the end-to-end integration of a Flask web API into a Jenkins CI/CD pipeline. The pipeline handles code building, testing, and automatic deployment, showcasing the power of automation in modern software development workflows.',
    techStack: ['Python', 'Flask', 'Jenkins', 'Docker', 'GitHub'],
    category: 'devops-cloud',
    githubLink: '',
    tags: ['CI/CD', 'Jenkins', 'DevOps', 'Flask API', 'Automation'],
    imageUrl: '/thumbnails/flask-api-jenkins-cicd.png',
    features: [
      'Flask-based web API with RESTful endpoints',
      'Automated pipeline using Jenkins',
      'CI/CD stages for build, test, and deployment',
      'Integrated with GitHub repository',
      'Scalable and reusable DevOps setup'
    ],
    challenges: [
      'Requires Jenkins setup and pipeline configuration',
      'Dockerization and webhooks must be correctly handled'
    ],
    outcomes: [
      'Demonstrates real-world DevOps automation',
      'Reduces manual deployment efforts',
      'Improves reliability and speed of application delivery'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_ciabrcd-jenkinspipeline-python-activity-7355808454797598720-epwk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];

export const personalInfo = {
  name: 'Abhishek Kumar',
  title: 'Full Stack Developer | DevOps Engineer | Cloud & AI Enthusiast | ML & Agentic AI Developer',
  bio: "I'm a passionate and versatile developer skilled in Full Stack Web Development, DevOps, Cloud Computing, Machine Learning, and cutting-edge technologies like Agentic AI and Generative AI.",
  email: 'abhishekkumar04923@gmail.com',
  phone: '9267991060',
  location: 'Jaipur, Rajasthan',
  linkedin: 'https://www.linkedin.com/in/abhishek-kumar-329a282b8',
  github: 'https://github.com/AbhishekAvi01',
  skills: [
    'React.js', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Kubernetes', 'Machine Learning', 'AI/ML', 'DevOps'
  ]
};