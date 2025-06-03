export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive analytics platform that uses machine learning to predict trends and provide actionable insights from complex datasets.",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/yourusername/ai-analytics",
    liveUrl: "https://ai-analytics-demo.com"
  },
  {
    title: "Smart Home Automation System",
    description: "An IoT-based home automation system with voice control, energy optimization, and real-time monitoring capabilities.",
    technologies: ["Node.js", "React Native", "MQTT", "TensorFlow Lite", "AWS IoT"],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/yourusername/smart-home",
    liveUrl: "https://smart-home-demo.com"
  },
  {
    title: "Natural Language Processing API",
    description: "A scalable NLP service that provides sentiment analysis, entity recognition, and text classification capabilities.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "Kubernetes"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/yourusername/nlp-api",
    liveUrl: "https://nlp-api-demo.com"
  },
  {
    title: "Computer Vision Pipeline",
    description: "Real-time object detection and tracking system for industrial applications using deep learning.",
    technologies: ["Python", "OpenCV", "PyTorch", "CUDA", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/yourusername/cv-pipeline",
    liveUrl: "https://cv-pipeline-demo.com"
  },
  {
    title: "Data Science Platform",
    description: "End-to-end platform for data analysis, visualization, and machine learning model deployment.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "AWS"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/yourusername/data-science-platform",
    liveUrl: "https://data-science-platform-demo.com"
  },
  {
    title: "Blockchain Analytics Tool",
    description: "Advanced analytics and visualization tool for blockchain data with real-time monitoring.",
    technologies: ["TypeScript", "React", "Web3.js", "D3.js", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/yourusername/blockchain-analytics",
    liveUrl: "https://blockchain-analytics-demo.com"
  }
]; 