// Mock data for SubruArun Portfolio

export const profileData = {
  name: "",
  title: "Data/MLOps Engineer",
  tagline: "Actively Learning, building, and evolving in tech",
  avatar: "",
  email: "",
  github: "",
  linkedin: "",
  location: "Open to opportunities",
  bio: "I'm a passionate student with hands-on experience in Data Engineering and MLOps. I specialize in building scalable real-time data pipelines, machine learning systems, and interactive data visualizations. Currently exploring the intersection of data engineering and AI/ML."
};

export const aboutData = {
  introduction: "I'm a dedicated technologist focused on transforming raw data into actionable insights through robust engineering practices.",
  highlights: [
    "Designed and implemented scalable real-time data pipelines processing 70k+ rows with PostgreSQL",
    "Built ML models for hate speech detection using deep learning techniques",
    "Created interactive dashboards for data visualization and analysis",
    "Experience with distributed systems architecture (Kafka, Spark, Redis)"
  ]
};

export const currentStatus = {
  status: "Open to Opportunities",
  description: "Currently seeking full-time roles in Data Engineering, MLOps, or Machine Learning. Available for internships and collaborative projects.",
  interests: [
    "Real-time data streaming architectures",
    "MLOps and model deployment pipelines",
    "Cloud-native data solutions",
    "Natural Language Processing"
  ],
  lastUpdated: "July 2025"
};

export const backgroundData = {
  education: [
    {
      id: 1,
      degree: "Bachelor's/Master's in Computer Science",
      institution: "University Name",
      period: "2020 - Present",
      description: "Focusing on Data Science, Machine Learning, and Software Engineering"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Data Engineer",
      company: "Previous Company",
      period: "2023 - 2024",
      description: "Designed and maintained ETL pipelines, worked with large-scale data processing systems",
      technologies: ["Python", "PostgreSQL", "Apache Kafka", "AWS"]
    },
    {
      id: 2,
      role: "MLOps Engineer",
      company: "Previous Company",
      period: "2022 - 2023",
      description: "Built and deployed ML models, created CI/CD pipelines for model training and deployment",
      technologies: ["Python", "Docker", "Kubernetes", "MLflow"]
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Languages",
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      name: "Data Engineering",
      skills: ["PostgreSQL", "Apache Kafka", "Apache Spark", "Redis", "ETL Pipelines"]
    },
    {
      name: "ML & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Deep Learning"]
    },
    {
      name: "Tools & Platforms",
      skills: ["Docker", "Kubernetes", "AWS", "Git", "Streamlit", "Flask"]
    },
    {
      name: "MLOps",
      skills: ["MLflow", "Model Deployment", "CI/CD", "Monitoring"]
    }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Real-Time Data Pipeline",
    description: "A scalable real-time data pipeline that monitors directories for incoming sensor data, processes it with validation checks, and stores transformed data in PostgreSQL for analysis.",
    longDescription: "Designed and implemented a fault-tolerant pipeline with data validation, aggregation metrics, and quarantine handling. Processes 70k rows in 30-35 seconds with plans for Kafka and Spark integration.",
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
    stars: 0,
    image: null
  },
  {
    id: 3,
    title: "VGI Dashboard - Streamlit",
    description: "Interactive dashboard for VGI bus prioritization strategy with visual representation of bus paths based on waiting times.",
    longDescription: "Built using Streamlit for real-time data visualization, allowing users to filter and analyze bus routes by various parameters like dates, routes, and time periods.",
    technologies: ["Python", "Streamlit", "Data Visualization", "Pandas"],
    features: [
      "Interactive bus path visualization",
      "Multi-parameter filtering",
      "Waiting time analysis",
      "Research-backed methodology"
    ],
    github: "https://github.com/SubruArun/VGI-Dashboard-Streamlit",
    stars: 0,
    image: null
  },
  {
    id: 4,
    title: "Treasure Game - Reinforcement Learning",
    description: "A sample treasure game where an RL agent learns to find the optimal path to the goal without dying.",
    longDescription: "Implementation of reinforcement learning algorithms for pathfinding in a game environment. The agent learns through trial and error to maximize rewards.",
    technologies: ["Python", "Reinforcement Learning", "NumPy"],
    features: [
      "Q-learning implementation",
      "Reward optimization",
      "Path visualization",
      "Configurable game environments"
    ],
    github: "https://github.com/SubruArun/Treasure-Game-RL",
    stars: 0,
    image: null
  },
  {
    id: 5,
    title: "Flash Cards Web App",
    description: "A web application for storing and studying online flash cards built with Flask.",
    longDescription: "Full-stack web application enabling users to create, organize, and study flash cards. Built with Python Flask for the backend.",
    technologies: ["Python", "Flask", "HTML/CSS", "JavaScript"],
    features: [
      "Flash card CRUD operations",
      "Study mode",
      "Card categorization",
      "User-friendly interface"
    ],
    github: "https://github.com/SubruArun/Flash-Cards-Web-App",
    stars: 0,
    image: null
  },
  {
    id: 6,
    title: "Address Check Scraper",
    description: "Tool to validate addresses and company names by checking them against external sources.",
    longDescription: "Automation tool that takes a list of addresses and company names as input and validates their authenticity through web scraping.",
    technologies: ["Python", "Web Scraping", "BeautifulSoup", "Automation"],
    features: [
      "Batch address validation",
      "Company name verification",
      "Automated web scraping",
      "Result reporting"
    ],
    github: "https://github.com/SubruArun/Address-check-scraper",
    stars: 1,
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