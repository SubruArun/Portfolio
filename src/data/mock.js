// Mock data for SubruArun Portfolio
import professionalProfilePic from './professional_profile_pic.jpg';

export const profileData = {
  name: "Subramanian L",
  title: "Data/MLOps Engineer",
  tagline: "Actively Learning, building, and evolving in tech",
  avatar: professionalProfilePic,
  email: "arun.lsubramanian@email.com",
  github: "https://github.com/SubruArun",
  linkedin: "https://www.linkedin.com/in/subramanian-l-646a55a5/",
  location: "Munich, Germany",
  bio: "I'm a passionate student with hands-on experience in Data Engineering and MLOps. I specialize in building scalable real time data pipelines, machine learning systems and interactive data visualizations. Currently exploring the intersection of data engineering and AI/ML."
};

export const aboutData = {
  introduction: "I'm a dedicated technologist focused on transforming raw data into actionable insights through robust engineering practices.",
  highlights: [
    "Designed and implemented scalable real-time data pipelines processing 70k+ rows with PostgreSQL",
    "Built ML models for hate speech detection using deep learning techniques",
    "Created interactive dashboards for data visualization and analysis",
    "Experience with distributed systems architecture (Kafka, Spark, Redis)",
    "Working my master’s thesis on efficient and scalable storage and retrieval approaches for high frequency time-series data, benchmarking multiple database systems",
    "Studying the German energy and battery storage market, focusing on real-time data processing for trading order book optimization"
  ]
};

export const currentStatus = {
  status: "Exploring Opportunities",
  description: "Currently seeking full time opportunity in the field of Data Engineering, MLOps or Machine Learning. Available for internships and collaborative projects",
  currentProjectsAndLearning: "I am currently developing several websites for clients and experimenting with different architectural approaches, deployment workflows and solution designs to expand my technical capabilities. In parallel I am building an agentic chatbot modeled on my own persona, which will be integrated into my portfolio to provide interactive engagement. I am actively practicing algorithmic problem solving through LeetCode in preparation for job opportunities and I am also learning the German language to broaden my communication skills.",
  interests: [
    "Real-time data streaming architectures",
    "MLOps and model deployment pipelines",
    "Cloud-native data solutions",
    "Natural Language Processing"
  ],
  lastUpdated: "December 2025"
};

export const backgroundData = {
  education: [
    {
      id: 1,
      degree: "Master's in Artificial Intelligence Engineering",
      institution: "Tehcnische Hochschule Ingolstadt",
      period: "2023 - 2025",
      description: "Focusing on Data Engineering/Analysis, Machine Learning and Automation"
    },
    {
      id: 2,
      degree: "Bachelor's in Computer Science and Engineering",
      institution: "APJ Abdul Kalam Technological University",
      period: "2016 - 2020",
      description: "Focusing on Machine Learning and Software Engineering"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Master Thesis Student",
      company: "Terra One",
      period: "Apr 2025 - Now",
      description: "Optimizing scalable and efficient storage and retrieval solutions for high-frequency time-series data",
      technologies: ["Python", "Docker", "PostgreSQL", "MongoDB", "Kafka", "Airflow", "Grafana", "Hetzner", "AWS", "GCP"]
    },
    {
      id: 2,
      role: "Working Student",
      company: "Infineon Technologies",
      period: "Apr 20204 - Mar 2025",
      description: "MLOps - Building scalable and efficient machine learning pipelines with a focus on robust infrastructure development",
      technologies: ["Python", "Docker", "Kubernetes", "MLflow", "Kibana", "Kafka", "InfineonHybridCloud"]
    },
    {
      id: 3,
      role: "Research Assistant",
      company: "Technische Hochschule Ingolstadt",
      period: "Mar 2024 - Sep 2024",
      description: "As an integral part of AIMotion Bavaria, our initiative focuses on enhancing public transportation through the application of machine learning (focused on Reinforcement Learning) methodologies and simulations, leveraging authentic GPS data obtained from buses operating within Ingolstadt",
      technologies: ["Python", "Docker", "Reinforcement Learning", "Simulations"]
    },
    {
      id: 4,
      role: "Data Engineer",
      company: "Turbolab Technologies",
      period: "Mar 2022 - Oct 2023",
      description: "Focused on building and optimizing real-time data processing pipelines, orchestrating complex workflows, performing advanced data analysis, and ensuring efficient data storage and visualization across multiple platforms.",
      technologies: ["Python", "PostgreSQL", "Elasticsearch", "Kafka", "Redis", "PubSub Architecture", "AWS"]
    },
    {
      id: 5,
      role: "Python Developer",
      company: "Turbolab Technologies",
      period: "Nov 2020 - Mar 2022",
      description: "Focused on developing end-to-end automation solutions including large scale web scraping, structured data management, robust API development and reliable automation pipelines.",
      technologies: ["Python", "Docker", "Kubernetes", "Redis", "RabbitMQ"]
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Languages",
      skills: ["Python", "SQL", "C++", "C"]
    },
    {
      name: "Data Engineering",
      skills: ["PostgreSQL", "MongoDB", "Apache Kafka", "Apache Spark", "Redis", "ETL Pipelines"]
    },
    {
      name: "Deployment & Cloud",
      skills: ["Git", "CI/CD", "Docker", "Kubernetes", "AWS", "GCP", "Hetzner"]
    },
    {
      name: "ML & AI",
      skills: ["TensorFlow", "NLP", "Reinforcement Learning", "Deep Learning", "MLflow"]
    },
    {
      name: "Tools",
      skills: ["Selenium", "Django", "Streamlit", "Flask"]
    }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Real-Time Data Pipeline",
    description: "A scalable real-time data pipeline that monitors directories for incoming sensor data, processes it with validation checks and stores transformed data in PostgreSQL for analysis.",
    longDescription: "Designed and implemented a fault tolerant pipeline with data validation, aggregation metrics and quarantine handling. Processes 70k rows in 30-35 seconds with plans for Kafka and Spark integration.",
    technologies: ["Python", "PostgreSQL", "Pandas", "Watchdog"],
    features: [
      "Continuous directory monitoring (5-10 second intervals)",
      "Data validation with quarantine for failed records",
      "Aggregated metrics calculation (min, max, avg, std)",
      "Retry mechanism for fault tolerance"
    ],
    github: "https://github.com/SubruArun/Real-Time-Data-Pipeline",
    stars: 1,
    image: null
  },
  {
    id: 2,
    title: "Hate Speech Detection",
    description: "Research project implementing both shallow and deep learning models for detecting hate speech in text data.",
    longDescription: "Comprehensive NLP project comparing various ML approaches for hate speech classification. Includes implementation of multiple deep learning architectures and traditional ML models.",
    technologies: ["Python", "Jupyter", "TensorFlow", "NLP", "Deep Learning"],
    features: [
      "Multiple deep learning model implementations",
      "Shallow model comparisons",
      "Research paper documentation",
      "Text preprocessing and feature extraction"
    ],
    github: "https://github.com/SubruArun/Hate-Speech-Detection",
    stars: 1,
    image: null
  },
  {
    id: 3,
    title: "Treasure Game - Reinforcement Learning",
    description: "A sample treasure game where an RL agent learns to find the optimal path to the goal without dying.",
    longDescription: "Implementation of reinforcement learning algorithms for pathfinding in a game environment. The agent learns through trial and error to maximize rewards.",
    technologies: ["Python", "Reinforcement Learning", "NumPy"],
    features: [
      "Q-learning implementation",
      "Reward optimization",
      "Path visualization",
      "Configurable game environments (GYM Env)"
    ],
    github: "https://github.com/SubruArun/Treasure-Game-RL",
    stars: 0,
    image: null
  },
  {
    id: 4,
    title: "VGI Dashboard - Streamlit",
    description: "Interactive dashboard for VGI bus prioritization strategy with visual representation of bus paths based on waiting times.",
    longDescription: "Built using Streamlit for real-time data visualization, allowing users to filter and analyze bus routes by various parameters like dates, routes, and time periods.",
    technologies: ["Python", "Streamlit", "Data Visualization", "Pandas"],
    features: [
      "Interactive bus path visualization",
      "Multi-parameter filtering",
      "Waiting time analysis",
      "Research backed methodology"
    ],
    github: "https://github.com/SubruArun/VGI-Dashboard-Streamlit",
    stars: 0,
    image: null
  },
  {
    id: 5,
    title: "Flash Cards Web App",
    description: "A web application for storing and studying online flash cards built with Flask.",
    longDescription: "Full-stack web application enabling users to create, organize and study flash cards. Built with Python Flask for the backend.",
    technologies: ["Python", "Flask", "HTML/CSS", "JavaScript"],
    features: [
      "Flash card CRUD operations",
      "Multiple study modes",
      "Card categorization",
      "User friendly interface"
    ],
    github: "https://github.com/SubruArun/Flash-Cards-Web-App",
    stars: 0,
    image: null
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description: "A modern, responsive personal portfolio website that showcases my identity, work and impact in the engineering and tech world.",
    longDescription: "The platform includes interactive project sections, detailed skill descriptions, and a dedicated area for downloading my resume. It features dark mode support, smooth animations, and an optimized layout for both desktop and mobile environments. The application is deployed through Vercel, ensuring fast global performance, automatic builds, and reliable uptime. This website serves as my professional digital presence and is continuously updated as I expand my portfolio and experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "React Router", "Vercel"],
    features: [
      "Responsive design with mobile-first approach",
      "Dark mode theme support",
      "Interactive project showcase",
      "Contact form with message handling",
      "Downloadable resume integration",
      "Modern UI components and animations"
    ],
    github: "https://github.com/SubruArun/Portfolio",
    stars: 0,
    image: null
  }
];

export const downloadsData = [
  {
    id: 1,
    title: "Resume",
    description: "Download my latest resume",
    filename: "SubruArun_Resume.pdf",
    type: "resume",
    url: "#"
  },
  {
    id: 2,
    title: "Certificates",
    description: "View my certifications and achievements",
    filename: "Certificates.pdf",
    type: "certificate",
    url: "#"
  }
];

export const contactMessages = [];