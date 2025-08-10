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
  { id: 'python-scripts', name: 'Python ,Streamlit & Gradio', icon: '🐍' },
  { id: 'devops-cloud', name: 'DevOps & Cloud Computing', icon: '☁️' },
  { id: 'linux', name: 'Linux & Git & Githup',  }
];


export const projects: Project[] = [

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
    id: 'fullstack-data-imputation-techniques',
    title: 'Task 1: Find Different Techniques of Data Imputation',
    description: 'Explore various methods for handling missing data, from basic statistical approaches to algorithmic strategies.',
    fullDescription: 'This project involves researching a range of data imputation techniques — such as mean, median, mode imputations, forward/backward fill, K-nearest neighbors, regression imputation, interpolation, and MICE. The goal is to assess their strengths, limitations, and practical applications within full stack development workflows (particularly in pre-deployment data cleaning, API integration, and database handling).',
    techStack: ['JavaScript', 'Node.js', 'Python', 'Pandas', 'Data Engineering'],
    category: 'fullstack',
    githubLink: '',
    tags: ['Full Stack', 'Data Imputation', 'Data Cleaning', 'Backend Development', 'Data Preprocessing'],
    imageUrl: '/thumbnails/fullstack-data-imputation.png',
    features: [
      'Covers a broad set of imputation methods',
      'Addresses both simple and advanced imputation strategies',
      'Focuses on data workflow integration in full stack apps',
      'Improves reliability of downstream components',
      'Bridges data preprocessing and system design'
    ],
    challenges: [
      'Balancing ease of use with statistical soundness',
      'Integrating imputation within full stack pipelines',
      'Choosing the optimal technique based on data context'
    ],
    outcomes: [
      'Stronger data preprocessing skills',
      'Cleaner inputs for APIs and databases',
      'Enhanced reliability of full stack applications'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_fullstackdevelopment-dataimputation-linuxworld-activity-7360199816154353665-ED6G?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'javascript-camera-access-photo',
  title: 'Task 2: How to Access Camera Using JavaScript and Click Photo?',
  description: 'Implement a web feature to access the device camera via JavaScript and capture a photo.',
  fullDescription: 'This project demonstrates how to use JavaScript APIs, specifically the MediaDevices.getUserMedia() method, to access a device’s camera. It also covers capturing still images from the video stream and displaying or saving them in a web application. The task is aimed at enhancing front-end skills with media handling and integrating camera features in full stack web development.',
  techStack: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs'],
  category: 'fullstack',
  githubLink: '',
  tags: ['JavaScript', 'Web Development', 'Camera Access', 'MediaDevices API', 'Full Stack'],
  imageUrl: '/thumbnails/javascript-camera-access.png',
  features: [
    'Access device camera via browser',
    'Display live video feed on a web page',
    'Capture still images from the video stream',
    'Cross-browser support for camera features',
    'Interactive and user-friendly interface'
  ],
  challenges: [
    'Ensuring permissions and security compliance',
    'Handling different camera resolutions and orientations',
    'Providing a smooth and responsive UI for photo capture'
  ],
  outcomes: [
    'Hands-on experience with Web APIs',
    'Ability to integrate camera features into web apps',
    'Enhanced user interactivity in full stack projects'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_fullstackdevelopment-javascript-webdevelopment-activity-7360215300442664961-f0Ms?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'javascript-camera-live-stream',
  title: 'Task 3: How to Do Live Stream of Camera Using JavaScript?',
  description: 'Learn to implement live streaming of a device’s camera feed directly in a web page using JavaScript.',
  fullDescription: 'This project focuses on using the MediaDevices.getUserMedia() API to stream a device’s camera feed live into a web page. It explores setting up real-time video rendering, handling browser permissions, customizing stream resolution, and integrating the live feed into UI components. This task enhances front-end development skills and prepares developers for use cases like video conferencing, surveillance dashboards, and interactive apps.',
  techStack: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs'],
  category: 'fullstack',
  githubLink: '',
  tags: ['JavaScript', 'Live Streaming', 'Camera Access', 'MediaDevices API', 'Full Stack'],
  imageUrl: '/thumbnails/javascript-camera-live-stream.png',
  features: [
    'Live video streaming from device camera',
    'Customizable resolution and frame rate',
    'Seamless integration into web interfaces',
    'Responsive design for multiple devices',
    'Real-time browser-based rendering'
  ],
  challenges: [
    'Managing user permissions for camera access',
    'Ensuring smooth frame rates without lag',
    'Handling compatibility across browsers and devices'
  ],
  outcomes: [
    'Proficiency with JavaScript Media APIs',
    'Ability to integrate live streaming into full stack apps',
    'Understanding of performance optimization in media rendering'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_fullstackdevelopment-javascript-livestreaming-activity-7360217822221819904-5mzQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'javascript-video-recording-upload',
  title: 'Task 4: Record a Video Using JavaScript and Automatically Post It',
  description: 'Implement video recording in the browser using JavaScript and automate the upload process.',
  fullDescription: 'This project demonstrates how to use JavaScript’s MediaRecorder API to capture video from a user’s camera directly in the browser. It also covers automating the process of posting the recorded video to a server or platform without manual intervention. The task includes handling recording controls, saving video blobs, and implementing a seamless upload pipeline, making it useful for applications like video feedback tools, social media integrations, and online learning platforms.',
  techStack: ['JavaScript', 'HTML5', 'CSS3', 'MediaRecorder API', 'Fetch API'],
  category: 'fullstack',
  githubLink: '',
  tags: ['JavaScript', 'Video Recording', 'Camera Access', 'MediaRecorder API', 'Full Stack'],
  imageUrl: '/thumbnails/javascript-video-recording-upload.png',
  features: [
    'Record video directly in the browser',
    'Automated video upload after recording',
    'Customizable recording controls',
    'Responsive and mobile-friendly interface',
    'Works with major modern browsers'
  ],
  challenges: [
    'Managing large video file uploads',
    'Ensuring browser compatibility for MediaRecorder API',
    'Handling network errors during automatic posting'
  ],
  outcomes: [
    'Hands-on experience with MediaRecorder and Fetch APIs',
    'Ability to build video recording and uploading features for web apps',
    'Understanding of client-server media handling workflows'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_fullstackdevelopment-javascript-videorecording-activity-7360223054385340416-PKhw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'google-name-search-engine',
  title: 'Task 5: Create a Search Engine from Google Results for a Given Name',
  description: 'Scrape Google search results for a given name and build a custom search engine from the collected links.',
  fullDescription: 'This project involves automating the process of searching for a specific name on Google, scraping all the relevant links from the search results, and compiling them into a functional search engine interface. It demonstrates web scraping, data filtering, and frontend integration to present the results in a clean, user-friendly format. The application can be adapted for research, brand monitoring, or creating niche search engines for specific topics.',
  techStack: ['JavaScript', 'Node.js', 'Puppeteer', 'Express.js', 'HTML5', 'CSS3'],
  category: 'fullstack',
  githubLink: '',
  tags: ['Web Scraping', 'Search Engine', 'Google Search Automation', 'JavaScript', 'Full Stack Development'],
  imageUrl: '/thumbnails/google-name-search-engine.png',
  features: [
    'Automates Google search for any given name',
    'Scrapes and stores all relevant links',
    'Custom search engine interface for quick browsing',
    'Real-time search execution',
    'User-friendly UI for navigating results'
  ],
  challenges: [
    'Avoiding Google’s anti-bot measures',
    'Filtering out irrelevant or duplicate links',
    'Maintaining fast performance during scraping and rendering'
  ],
  outcomes: [
    'Practical understanding of web scraping with Puppeteer',
    'Experience in building a niche search engine',
    'Skills in data collection, processing, and presentation'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_fullstackdevelopment-searchengine-webscraping-activity-7360227503434530816-8lFW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'google-apps-script-practice',
  title: 'Task 6: Practice Google Apps Script and Implement Something New',
  description: 'Hands-on practice with Google Apps Script by creating and testing a new automation feature.',
  fullDescription: 'This project focuses on exploring the capabilities of Google Apps Script by writing and experimenting with automation code. The aim was to create something innovative—such as automating document generation, sending scheduled emails, or integrating Google Sheets with external APIs. Through this task, I learned how Google’s scripting platform can enhance productivity by extending and automating Google Workspace applications.',
  techStack: ['Google Apps Script', 'JavaScript', 'Google Workspace'],
  category: 'fullstack',
  githubLink: '',
  tags: ['Google Apps Script', 'Automation', 'JavaScript', 'Google Workspace'],
  imageUrl: '/thumbnails/google-apps-script-practice.png',
  features: [
    'Explored core syntax and functions of Google Apps Script',
    'Developed a custom automation workflow',
    'Tested and debugged scripts in the Google Script Editor',
    'Integrated with Google Workspace services like Sheets and Docs',
    'Reusable code for future automation tasks'
  ],
  challenges: [
    'Understanding Google Apps Script’s execution limits and quotas',
    'Debugging asynchronous operations within the script',
    'Ensuring compatibility across different Google Workspace apps'
  ],
  outcomes: [
    'Improved skills in automation scripting',
    'Learned practical integration techniques with Google Workspace',
    'Developed a functional prototype for productivity enhancement'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_fullstackdevelopment-googleappsscript-automation-activity-7360231634568146945-cDwf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'javascript-drag-drop-division',
  title: 'Task 7: Drag and Drop a Division Using Mouse in JavaScript',
  description: 'Implemented a drag-and-drop feature for a division element using pure JavaScript and mouse events.',
  fullDescription: 'This task demonstrates how to create an interactive drag-and-drop functionality in a web page using JavaScript. The project focuses on capturing mouse events like mousedown, mousemove, and mouseup to track and update the position of an HTML division element in real-time. Such functionality is widely used in custom UI components, dashboard widgets, and interactive design tools.',
  techStack: ['JavaScript', 'HTML', 'CSS'],
  category: 'fullstack',
  githubLink: '',
  tags: ['JavaScript', 'Drag and Drop', 'Frontend', 'UI Interactions'],
  imageUrl: '/thumbnails/javascript-drag-drop-division.png',
  features: [
    'Pure JavaScript implementation without external libraries',
    'Smooth element dragging with mouse events',
    'Real-time position updates',
    'Customizable drag area and styling',
    'Lightweight and reusable code'
  ],
  challenges: [
    'Handling mouse events efficiently',
    'Preventing element selection while dragging',
    'Maintaining smooth drag behavior across browsers'
  ],
  outcomes: [
    'Learned practical DOM event handling',
    'Created a reusable drag-and-drop component',
    'Improved understanding of real-time UI interactions'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_fullstackdevelopment-javascript-frontend-activity-7360234628592340992-OGfj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  "id": "javascript-chatgpt-connection",
  "title": "Task 8: Connect JavaScript with ChatGPT and Generate a Response",
  "description": "Implemented a JavaScript integration with ChatGPT API to send user queries and display generated responses dynamically.",
  "fullDescription": "This task focuses on connecting a JavaScript frontend with the ChatGPT API to enable interactive conversational features on a webpage. It demonstrates how to handle user input, make asynchronous API calls to ChatGPT, and display the generated responses in real-time. Such integration is useful for building chatbots, AI assistants, and intelligent UI components.",
  "techStack": ["JavaScript", "HTML", "CSS", "REST API"],
  "category": "fullstack",
  "githubLink": "",
  "tags": ["JavaScript", "ChatGPT", "API Integration", "Frontend", "AI"],
  "imageUrl": "/thumbnails/javascript-chatgpt-connection.png",
  "features": [
    "Seamless ChatGPT API integration using JavaScript fetch",
    "Real-time response rendering on the web page",
    "User input handling and validation",
    "Asynchronous API calls with error handling",
    "Lightweight and easy to extend"
  ],
  "challenges": [
    "Managing asynchronous API requests",
    "Handling API rate limits and errors gracefully",
    "Ensuring secure API key usage",
    "Updating UI dynamically without reloads"
  ],
  "outcomes": [
    "Improved knowledge of API integration with JavaScript",
    "Built an interactive chat interface",
    "Learned to handle asynchronous programming and promises",
    "Gained experience in working with AI-based services"
  ],
  "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_internship-javascript-chatgpt-activity-7360248668525883392-u-qz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
},
{
  "id": "javascript-voice-input-chatgpt",
  "title": "Task 9: Write a JavaScript Code and Use Your Mic to Give Input Prompt to ChatGPT",
  "description": "Implemented a JavaScript voice recognition feature that captures user speech through the microphone and sends it as an input prompt to ChatGPT, enabling hands-free interaction.",
  "fullDescription": "This task demonstrates how to integrate browser-based voice recognition APIs with JavaScript to capture spoken input from the user, convert it into text, and send it to the ChatGPT API for generating a response. The project highlights managing audio input, real-time speech-to-text conversion, and asynchronous API communication for an interactive voice-enabled chatbot experience.",
  "techStack": ["JavaScript", "HTML", "CSS", "Web Speech API", "REST API"],
  "category": "fullstack",
  "githubLink": "",
  "tags": ["JavaScript", "ChatGPT", "Voice Recognition", "API Integration", "Frontend", "AI"],
  "imageUrl": "/thumbnails/javascript-voice-input-chatgpt.png",
  "features": [
    "Voice input capture using Web Speech API",
    "Real-time speech-to-text conversion",
    "Seamless integration with ChatGPT API",
    "Dynamic rendering of AI-generated responses",
    "User-friendly voice-controlled chat interface"
  ],
  "challenges": [
    "Handling different browser compatibility for voice recognition",
    "Managing asynchronous speech recognition and API calls",
    "Ensuring accurate speech-to-text conversion",
    "Dealing with noisy environments and misinterpretation",
    "Maintaining smooth UI updates without lag"
  ],
  "outcomes": [
    "Enhanced understanding of Web Speech API and voice recognition",
    "Built an innovative voice-based chatbot frontend",
    "Gained skills in asynchronous JavaScript programming",
    "Learned to combine voice input with AI-driven responses",
    "Improved user experience with hands-free interaction"
  ],
  "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_internship-javascript-voicerecognition-activity-7360253879684317184-HdsD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
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
  id: 'aws-boto3-ec2-manage',
  title: 'Launch and Terminate EC2 Instances using Boto3',
  description: 'Automate the process of launching and terminating EC2 instances with Boto3.',
  fullDescription: 'Implemented automation scripts using Boto3 to programmatically launch and terminate Amazon EC2 instances, enabling efficient cloud resource management.',
  techStack: ['AWS', 'Boto3', 'Python'],
  category: 'devops-cloud',
  githubLink: '',
  tags: ['AWS', 'Boto3', 'EC2', 'CloudComputing'],
  imageUrl: '/thumbnails/aws-boto3-ec2.png',
  features: [
    'EC2 instance launch',
    'Instance termination',
    'AWS automation'
  ],
  challenges: ['AWS permissions', 'Instance state management'],
  outcomes: ['Learned AWS automation with Boto3', 'Improved cloud resource handling'],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_aws-boto3-cloudcomputing-activity-7360311390009487360-ld5N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'aws-boto3-cloudwatch-logs',
  title: 'Access CloudWatch Logs using Boto3',
  description: 'Create automation scripts to access and manage AWS CloudWatch logs with Boto3.',
  fullDescription: 'Developed Boto3-based Python scripts to fetch and analyze logs from AWS CloudWatch, enhancing monitoring and troubleshooting capabilities in cloud environments.',
  techStack: ['AWS', 'Boto3', 'Python', 'CloudWatch'],
  category: 'devops-cloud',
  githubLink: '',
  tags: ['AWS', 'Boto3', 'CloudWatch', 'Logs', 'DevOps'],
  imageUrl: '/thumbnails/aws-boto3-cloudwatch-logs.png',
  features: [
    'CloudWatch logs retrieval',
    'Log analysis automation',
    'AWS monitoring'
  ],
  challenges: ['Managing large log data', 'AWS IAM permissions'],
  outcomes: ['Improved cloud monitoring skills', 'Automated log access with Boto3'],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_create-a-boto3-code-to-access-logs-from-the-cloud-watch'
},
{
  id: 'k8s-live-stream-website',
  title: 'How to Launch a Live Stream Website on Kubernetes',
  description: 'Deploy and manage a live streaming website using Kubernetes for scalability and reliability.',
  fullDescription: 'Learned to deploy a live streaming website on Kubernetes, leveraging container orchestration for high availability and efficient resource management in cloud environments.',
  techStack: ['Kubernetes', 'Docker', 'Cloud'],
  category: 'devops-cloud',
  githubLink: '',
  tags: ['Kubernetes', 'LiveStreaming', 'CloudComputing', 'DevOps'],
  imageUrl: '/thumbnails/k8s-live-stream.png',
  features: [
    'Live stream deployment',
    'Kubernetes orchestration',
    'Scalability and reliability'
  ],
  challenges: ['Container networking', 'Load balancing'],
  outcomes: ['Deployed live stream site on K8s', 'Enhanced cloud deployment skills'],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_kubernetes-livestreaming-cloudcomputing-activity-7360315489106952192-ohtU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
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
  {
    id: 'github-fork-pr-contribute',
    title: 'Fork, Clone, and Create Pull Request on GitHub',
    description: 'Contribute to open-source projects by forking repositories, making changes, and submitting pull requests.',
    fullDescription: 'Learned the complete workflow of contributing to open-source projects on GitHub: forking a repo, cloning it locally, applying changes, and creating pull requests to the original repository.',
    techStack: ['Git', 'GitHub', 'Linux'],
    category: 'linux',
    githubLink: '',
    tags: ['GitHub', 'OpenSource', 'PullRequest', 'Linux'],
    imageUrl: '/thumbnails/github-fork-pr.png',
    features: [
      'Forking GitHub repo',
      'Local cloning and editing',
      'Pull request submission'
    ],
    challenges: ['Resolving merge conflicts', 'Maintaining clean commit history'],
    outcomes: ['Open-source contribution skills', 'Git and GitHub workflow mastery'],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_opensource-github-pullrequest-activity-7360320864040476672-5um0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
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
    id: 'data-imputation-techniques',
    title: 'Finding Different Techniques of Data Imputation',
    description: 'Overview of various methods to handle missing data effectively.',
    fullDescription: 'This post highlights multiple approaches to data imputation, ranging from simple statistical methods to advanced machine learning techniques. It covers Mean/Median/Mode, Forward/Backward Fill, KNN, Regression, Multiple Imputation, Random Sample, Interpolation, and MICE methods, helping data professionals choose the right approach for their dataset.',
    techStack: ['Data Science', 'Machine Learning', 'Python', 'Pandas', 'Scikit-learn'],
    category: 'machine-learning',
    githubLink: '',
    tags: ['Data Imputation', 'Machine Learning', 'Missing Data Handling', 'Data Preprocessing'],
    imageUrl: '/thumbnails/data-imputation-techniques.png',
    features: [
      'Explains 8 different imputation methods',
      'Covers both statistical and ML-based techniques',
      'Useful for beginners and experienced data scientists',
      'Applicable to real-world datasets',
      'Helps in improving model accuracy by handling missing values effectively'
    ],
    challenges: [
      'Choosing the right imputation method for the dataset',
      'Balancing between simplicity and accuracy',
      'Avoiding bias due to imputation method'
    ],
    outcomes: [
      'Better understanding of missing data handling',
      'Enhanced preprocessing skills',
      'Improved model reliability'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_machinelearning-dataimputation-linuxworld-activity-7360178525229694976-UZFN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'dropped-category-weight-analysis',
  title: 'Find What Happens to the Weight of Dropped Category in Categorical Variable',
  description: 'Analyze the impact on model interpretation when one category from a categorical variable is dropped during encoding.',
  fullDescription: 'This project explores the concept of dropping one category from a categorical variable during encoding, commonly done to avoid multicollinearity in regression models. It investigates how the dropped category’s effect is implicitly represented in the model and how to interpret the coefficients of the remaining categories. The study is useful for anyone dealing with feature engineering and categorical data in machine learning.',
  techStack: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
  category: 'machine-learning',
  githubLink: '',
  tags: ['Feature Engineering', 'Categorical Encoding', 'Machine Learning', 'Data Science'],
  imageUrl: '/thumbnails/dropped-category-weight-analysis.png',
  features: [
    'Explains why one category is dropped during encoding',
    'Shows how the dropped category’s weight is interpreted',
    'Demonstrates with a practical example',
    'Improves understanding of categorical feature handling',
    'Helps avoid incorrect interpretation in models'
  ],
  challenges: [
    'Understanding implicit representation of dropped category',
    'Avoiding confusion in coefficient interpretation',
    'Ensuring encoding choice does not affect model accuracy'
  ],
  outcomes: [
    'Better understanding of categorical encoding',
    'Improved feature engineering skills',
    'More accurate model interpretation'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_machinelearning-featureengineering-datascience-activity-7360182797837254656-Sy2x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'neural-network-initializers-blog',
  title: 'Task 3: Search About Different Initializers and Their Use Cases & Create a Blog',
  description: 'A research and writing task exploring various neural network weight initializers and their applications.',
  fullDescription: 'This project involved studying different types of weight initialization techniques in deep learning, such as Xavier, He, Random Normal, and Uniform Initializers. It explains their mathematical foundations, advantages, disadvantages, and ideal use cases. The insights were compiled into a detailed blog post to help learners understand how initialization impacts training speed, convergence, and overall neural network performance.',
  techStack: ['Python', 'TensorFlow', 'Keras', 'Deep Learning'],
  category: 'machine-learning',
  githubLink: '',
  tags: ['Deep Learning', 'Neural Networks', 'Weight Initialization', 'AI', 'Machine Learning'],
  imageUrl: '/thumbnails/neural-network-initializers-blog.png',
  features: [
    'Covers multiple initialization techniques',
    'Explains theory and mathematical intuition',
    'Provides examples with TensorFlow/Keras',
    'Highlights use cases for each initializer',
    'Created an educational blog for learners'
  ],
  challenges: [
    'Understanding the math behind initializers',
    'Choosing the right initializer for a specific problem',
    'Communicating technical concepts clearly in a blog format'
  ],
  outcomes: [
    'Deep understanding of weight initialization',
    'Improved deep learning model performance',
    'Educational resource for the ML community'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_deeplearning-neuralnetworks-linuxworld-activity-7360188121738625024-1NpM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'llm-api-and-internal-structure-exploration',
  title: 'Task 4: Find an LLM Model, Explore Its API, and Uncover Its Internal Structure',
  description: 'Investigate a large language model (LLM), access its API, and analyze its architectural details.',
  fullDescription: 'This project involves identifying a suitable LLM, obtaining access to its API, and examining its internal architecture—such as model size, layer configuration, attention mechanisms, and training methodology. The goal is to gain insights into how large-scale language models are designed and how they function at a technical level.',
  techStack: ['Python', 'APIs', 'Deep Learning', 'Transformers', 'Machine Learning'],
  category: 'machine-learning',
  githubLink: '',
  tags: ['LLM', 'API Exploration', 'Model Architecture', 'Deep Learning'],
  imageUrl: '/thumbnails/llm-api-internal-structure.png',
  features: [
    'Selected and accessed an LLM via its API',
    'Examined model architecture details (e.g. layers, attention heads)',
    'Analyzed how neural mechanisms affect performance',
    'Documented findings for others studying LLM internals',
    'Bridges theory and practical application in real-world models'
  ],
  challenges: [
    'Understanding complex Transformer-based architectures',
    'Accessing API documentation and authentication',
    'Interpreting design specifics like layer types and parameter counts'
  ],
  outcomes: [
    'Deepened comprehension of LLM internals',
    'Hands-on experience with real-world LLM APIs',
    'Valuable insights for model evaluation and usage'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_ai-machinelearning-llm-activity-7360191900181508097-Y_8S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'optimizer-use-cases-blog',
  title: 'Task 5: Find the Use Cases of Optimizers & Create a Blog of It',
  description: 'Research various optimization algorithms used in model training and compile their applications into a blog post.',
  fullDescription: 'This project explores different optimization algorithms—such as SGD, Adam, RMSprop, and others—and examines their practical applications in deep learning workflows. It investigates when and why each optimizer performs best, infers their strengths and weaknesses, and presents the information in a cohesive blog to aid learners in selecting the right optimizer for their models.',
  techStack: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Machine Learning'],
  category: 'machine-learning',
  githubLink: '',
  tags: ['Deep Learning', 'Optimizers', 'Machine Learning', 'Blogging', 'Neural Networks'],
  imageUrl: '/thumbnails/optimizer-use-cases-blog.png',
  features: [
    'Reviews commonly-used optimizers (SGD, Adam, RMSprop, etc.)',
    'Compares performance trade-offs and behaviors',
    'Includes real-world use case examples',
    'Distilled into an accessible blog format',
    'Helps readers choose the right optimizer for their needs'
  ],
  challenges: [
    'Understanding the mathematical nuances of each optimizer',
    'Explaining trade-offs clearly for different scenarios',
    'Structuring technical content in an engaging blog format'
  ],
  outcomes: [
    'Clear grasp of optimizer strengths and weaknesses',
    'Improved writing and teaching skills through blogging',
    'Valuable resource to guide model tuning decisions'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_machinelearning-deeplearning-linuxworld-activity-7360194150530527232-V3FV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
},
{
  id: 'activation-function-pooling-compatibility',
  title: 'Task 6: Find Which Activation Function Works with Which Type of Pooling',
  description: 'Investigate the compatibility between activation functions and pooling layers in convolutional neural networks.',
  fullDescription: 'This project examines how different activation functions (such as ReLU, Sigmoid, Tanh, Leaky ReLU, etc.) interact with various pooling operations (Max Pooling, Average Pooling, Global Pooling) in CNN architectures. It delves into how these combinations affect features like non-linearity retention, gradient flow, and overall model performance and stability.',
  techStack: ['Python', 'TensorFlow', 'Keras', 'Deep Learning', 'Convolutional Neural Networks'],
  category: 'machine-learning',
  githubLink: '',
  tags: ['Deep Learning', 'CNN', 'Activation Functions', 'Pooling Layers', 'Machine Learning'],
  imageUrl: '/thumbnails/activation-pooling-compatibility.png',
  features: [
    'Analyzes pairing of activation functions with different pooling layers',
    'Evaluates impact on feature representation and convergence',
    'Provides practical examples in CNN architectures',
    'Helps optimize design of deep learning models',
    'Enhances understanding of network non-linearities and layer interplay'
  ],
  challenges: [
    'Understanding interplay between activation and pooling layers',
    'Testing combinations across multiple architectures',
    'Interpreting which combinations yield optimal training dynamics'
  ],
  outcomes: [
    'Better guidance on choosing activation + pooling pairings',
    'Improved CNN design and performance tuning',
    'Deeper insight into model layer interactions'
  ],
  linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_deeplearning-cnn-activationfunctions-activity-7360196579699388416-9Nne?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
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
  },
  {
    id: 'automation-panel-streamlit',
    title: 'All-in-One Automation Panel using Streamlit',
    description: 'A multi-task automation panel to send emails, WhatsApp messages, SMS, make calls, and simulate LinkedIn posts.',
    fullDescription: 'This Streamlit-based automation panel empowers users to perform real-world automation tasks including sending emails via Gmail SMTP, WhatsApp messages via PyWhatKit, SMS and calls via Twilio, and simulated LinkedIn posts. It combines multiple communication tools into a single interactive UI.',
    techStack: ['Python', 'Streamlit', 'smtplib', 'pywhatkit', 'Twilio'],
    category: 'python-scripts',
    githubLink: '',
    tags: ['Streamlit', 'Automation', 'Email', 'SMS', 'WhatsApp', 'Twilio', 'Python Scripts'],
    imageUrl: '/thumbnails/automation-panel-streamlit.png',
    features: [
      'Send emails using Gmail SMTP',
      'Schedule WhatsApp messages with PyWhatKit',
      'Send SMS via Twilio',
      'Make phone calls using Twilio',
      'Simulate LinkedIn post creation',
      'Sidebar UI to switch between tasks'
    ],
    challenges: [
      'Requires third-party credentials (Gmail, Twilio)',
      'WhatsApp scheduling depends on local time sync and browser session',
      'LinkedIn post is simulated only (no live API)'
    ],
    outcomes: [
      'Combines real-world automation tasks into one app',
      'Improves productivity and showcases Streamlit flexibility',
      'Practical demo for automation and communication tasks'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_python-streamlit-automation-activity-7355836382545649664-8ELj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    id: 'automation-panel-gradio',
    title: 'All-in-One Automation Panel using Gradio',
    description: 'A Gradio-based UI for automating tasks like sending emails, WhatsApp messages, SMS, phone calls, and simulated LinkedIn posts.',
    fullDescription: 'This project provides a clean Gradio interface that integrates real-world automation utilities such as Gmail email sending, WhatsApp message scheduling with PyWhatKit, Twilio-based SMS and calling, and simulated LinkedIn posting. It helps demonstrate the power of Python in user-friendly automation.',
    techStack: ['Python', 'Gradio', 'smtplib', 'pywhatkit', 'Twilio'],
    category: 'python-scripts',
    githubLink: '',
    tags: ['Gradio', 'Python Scripts', 'Automation', 'Email', 'SMS', 'Twilio', 'WhatsApp'],
    imageUrl: '/thumbnails/automation-panel-gradio.png',
    features: [
      'Send email via Gmail SMTP',
      'Schedule WhatsApp messages with PyWhatKit',
      'Send SMS using Twilio API',
      'Make phone calls using Twilio',
      'Simulated LinkedIn post creation',
      'Tabbed Gradio UI for each task'
    ],
    challenges: [
      'Requires secure handling of credentials (Gmail, Twilio)',
      'Dependent on third-party services availability',
      'LinkedIn post is a local simulation'
    ],
    outcomes: [
      'Intuitive UI for automation tasks',
      'Real-world DevTools integration for messaging and communication',
      'Flexible interface to enhance productivity and testing automation'
    ],
    linkedinUrl: 'https://www.linkedin.com/posts/abhishek-kumar-329a282b8_python-gradio-automationpanel-activity-7355839608972054529-aDwU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q'
  },
  {
    "id": "community-issue-reporter",
    "title": "Community Issue Reporter",
    "description": "A Streamlit-powered voice-enabled platform for reporting and managing community issues efficiently.",
    "fullDescription": "This application empowers users to report community issues through a clean, accessible UI. It supports voice input using SpeechRecognition, file uploads (images and PDFs), and includes an admin dashboard for tracking issue statuses. The data is dynamically stored in CSV format, making it lightweight and scalable for community use cases.",
    "techStack": ["Python", "Streamlit", "Pandas", "SpeechRecognition", "CSS"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Streamlit", "Python", "Voice Input", "Dashboard", "CSV", "Community Tool"],
    "imageUrl": "/thumbnails/community-issue-reporter.png",
    "features": [
      "Voice-enabled input for hands-free issue reporting",
      "Clean, responsive Streamlit UI",
      "Support for uploading images and PDF files",
      "Admin dashboard to view and track reports",
      "Dynamic data storage in CSV format"
    ],
    "challenges": [
      "SpeechRecognition accuracy may vary with accent or noise",
      "No database integration – CSV handling needs care for scaling",
      "File upload limitations based on Streamlit defaults"
    ],
    "outcomes": [
      "Enhanced accessibility through voice input",
      "Streamlined admin-user communication via dashboard",
      "Practical community use-case for rapid issue collection and tracking"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_python-streamlit-webapp-activity-7342765048114610177-Ay-Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "github-repo-setup-terminal",
    "title": "GitHub Repository Setup via Terminal",
    "description": "Create and manage a Git repository using terminal commands, from initialization to pushing code to GitHub.",
    "fullDescription": "This project demonstrates the step-by-step process of setting up a GitHub repository using the terminal. It includes creating a new folder, initializing a Git repo, adding files, committing with meaningful messages, and pushing to a new remote GitHub repository. It's a fundamental skill for developers to track and manage code efficiently.",
    "techStack": ["Git", "GitHub", "Terminal", "Windows CMD"],
    "category": "linux",
    "githubLink": "",
    "tags": ["Git", "GitHub", "Terminal", "Command Line", "Version Control", "Linux/Windows"],
    "imageUrl": "/thumbnails/github-repo-setup-terminal.png",
    "features": [
      "Initialize a local Git repository from scratch",
      "Track files and commit changes with messages",
      "Set up GitHub remote origin",
      "Push code from terminal to GitHub",
      "Basic version control operations"
    ],
    "challenges": [
      "Requires Git to be properly configured (username, email)",
      "Handling remote conflicts when pushing to GitHub",
      "Permissions or token-based authentication for remote pushes"
    ],
    "outcomes": [
      "Improved understanding of version control fundamentals",
      "Hands-on experience with Git command-line operations",
      "Streamlined code publishing process to GitHub"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_github-cmd-windows-activity-7355832939831590912-fd37?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "git-branching-merging",
    "title": "Git Branching and Merging",
    "description": "Create a feature branch, make changes, and merge it into the main branch without conflicts.",
    "fullDescription": "This project demonstrates essential Git branching workflows. It includes creating a new branch named `feature1`, making code changes in the branch, and successfully merging it back into the main branch while ensuring no merge conflicts. This practice is crucial in collaborative development and continuous integration environments.",
    "techStack": ["Git", "GitHub", "Terminal", "Windows CMD"],
    "category": "linux",
    "githubLink": "",
    "tags": ["Git", "Branching", "Merging", "Version Control", "CI/CD", "Conflict Resolution"],
    "imageUrl": "/thumbnails/git-branching-merging.png",
    "features": [
      "Create and switch to new branches",
      "Modify code independently on feature branches",
      "Merge branches into main safely",
      "Handle and avoid merge conflicts",
      "Use Git effectively for collaborative development"
    ],
    "challenges": [
      "Understanding merge vs rebase",
      "Managing multiple branches",
      "Avoiding and resolving merge conflicts"
    ],
    "outcomes": [
      "Hands-on experience with Git branches",
      "Improved confidence in collaboration using Git",
      "Clear understanding of merging strategies in Git workflows"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_git-devops-ci-activity-7355833546705358848-7Glf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  },
  {
    "id": "words-to-digits-converter",
    "title": "Words to Digits Converter",
    "description": "Convert number words and digits into integer values using a simple Streamlit UI.",
    "fullDescription": "This web application takes user input in the form of number words (like 'five', 'ten') or numerical digits (like '3') and converts them into their corresponding integer values. Built using Streamlit and Python, the project is aimed at helping beginners understand basic NLP tasks and UI integration. It also features real-time conversion and error handling for a smooth user experience.",
    "techStack": ["Python", "Streamlit"],
    "category": "python-scripts",
    "githubLink": "",
    "tags": ["Python", "Streamlit", "NLP", "Text to Number", "Beginner Project"],
    "imageUrl": "/thumbnails/words-to-digits-converter.png",
    "features": [
      "Convert number words (e.g., 'ten') to digits (e.g., 10)",
      "Handles direct numeric inputs",
      "Real-time output with error handling",
      "User-friendly Streamlit UI",
      "Educational tool for beginner NLP tasks"
    ],
    "challenges": [
      "Parsing natural language inputs",
      "Validating and converting mixed input types",
      "Handling misspelled or invalid entries"
    ],
    "outcomes": [
      "Reinforced understanding of Python logic and conditionals",
      "Hands-on experience with Streamlit UI design",
      "Learned basic NLP input handling techniques"
    ],
    "linkedinUrl": "https://www.linkedin.com/posts/abhishek-kumar-329a282b8_linuxworld-vimaldagasir-python-activity-7348249620591882242-atTp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAExTkdEB1yN0JUXbHxIFZHAaLmOFDGm0y8Q"
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];

export const personalInfo = {
  name: 'Abhishek Kumar(32)',
  title: 'Full Stack Developer | DevOps Engineer | Cloud & AI Enthusiast | ML & Agentic AI Developer',
  bio: "I'm a passionate and versatile developer skilled in Full Stack Web Development, DevOps, Cloud Computing, Machine Learning, and cutting-edge technologies like Agentic AI and Generative AI.",
  email: 'abhishekkumar04923@gmail.com',
  phone: '9267991060',
  location: 'Jaipur, Rajasthan',
  linkedin: 'https://www.linkedin.com/in/abhishek-kumar-329a282b8',
  github: 'https://github.com/AbhishekAvi01',
  profileImage: '/profile.jpg', // Your actual profile photo
  skills: [
    'React.js', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL',
    'AWS', 'Docker', 'Kubernetes', 'Machine Learning', 'AI/ML', 'DevOps'
  ]
};