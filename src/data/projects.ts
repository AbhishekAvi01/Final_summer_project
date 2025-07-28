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
  { id: 'agentic-ai', name: 'Agentic AI', icon: '🤖' },
  { id: 'fullstack', name: 'Full Stack Development', icon: '🌐' },
  { id: 'machine-learning', name: 'Machine Learning', icon: '🧠' },
  { id: 'python-scripts', name: 'Python Scripts', icon: '🐍' },
  { id: 'generative-ai', name: 'Generative AI', icon: '✨' },
  { id: 'devops-cloud', name: 'DevOps & Cloud Computing', icon: '☁️' }
];

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Scalable E-commerce Platform',
    description: 'Full-stack e-commerce solution with modern architecture',
    fullDescription: 'A comprehensive e-commerce platform built with React, Node.js, and MongoDB, featuring user authentication, payment processing, inventory management, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
    category: 'fullstack',
    githubLink: 'https://github.com/AbhishekAvi01/ecommerce-platform',
    liveDemo: 'https://ecommerce-demo.netlify.app',
    tags: ['E-commerce', 'Payment Gateway', 'Full Stack'],
    features: [
      'User authentication & authorization',
      'Product catalog with search',
      'Shopping cart & checkout',
      'Payment processing with Stripe',
      'Order management system',
      'Admin dashboard'
    ],
    challenges: ['Payment integration', 'Inventory synchronization', 'Performance optimization'],
    outcomes: ['Successfully handles 1000+ concurrent users', 'Secure payment processing', 'Mobile-responsive design']
  },
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