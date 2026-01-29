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
    title: "Encare Healthcare Platform",
    description: "A comprehensive healthcare management system that streamlines patient care, enhances doctor-patient communication, and optimizes medical data management. Features include appointment scheduling, electronic health records, telemedicine integration, and AI-powered diagnosis assistance.",
    technologies: ["React", "TypeScript", "Next.js", "Appwrite", "OpenAI", "Tailwind CSS", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "",
    liveUrl: "https://encare-health-system.vercel.app/"
  },
  {
    title: "File Fusion",
    description: "An advanced cloud storage and file management platform with real-time collaboration features. Includes secure file sharing, version control, automated backup, and intelligent file organization. Built with modern web technologies for optimal performance and user experience.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Appwrite", "Node.js", "Next.js 15", "WebSocket"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    githubUrl:  "", //"https://github.com/sanijae/File-Fusion",
    liveUrl: "https://file-fusion-one.vercel.app/sign-in"
  },
  {
    title: "DocConvertPro",
    description: "An AI-powered document processing platform that automates document conversion, analysis, and management. Features include OCR, intelligent data extraction, automated categorization, and advanced search capabilities. Integrates with multiple document formats and cloud storage services.",
    technologies: ["Python", "TensorFlow", "React", "Django", "MySQL", "Hugging Face", "PyTorch", "Docker"],
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/yourusername/ai-analytics",
    liveUrl: "https://docconvertpro-frontend.onrender.com"
  },
  {
    title: "Career Connect",
    description: "A modern job search and recruitment platform connecting talented professionals with top companies. Features include AI-powered job matching, resume parsing, interview scheduling, and real-time application tracking. Includes advanced analytics for both job seekers and recruiters.",
    technologies: ["Node.js", "React", "JavaScript", "Firebase", "AWS", "MongoDB", "Express.js", "Redux"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/sanijae/Career-connect",
    liveUrl: "https://career-connect-8w0x.onrender.com"
  },
  {
    title: "360Property",
    description: "A comprehensive real estate platform with AI-powered property management and listing features. Includes virtual tours, automated property valuation, tenant screening, and smart contract integration. Provides analytics and insights for property owners and real estate professionals.",
    technologies: ["React", "JavaScript", "MongoDB", "Express", "Node.js", "TensorFlow", "WebRTC", "AWS"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    githubUrl: "",
    liveUrl: "https://360property-ten.vercel.app/"
  },
  {
    title: "Vote Sure",
    description: "A secure and transparent voting platform designed for educational institutions and organizations. Features include blockchain-based vote verification, real-time result tracking, multi-factor authentication, and comprehensive audit trails. Ensures fair and tamper-proof elections.",
    technologies: ["Flutter", "Firebase", "Firebase Store", "Firebase Authentication", "Blockchain", "Dart", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/sanijae/vote_sure",
    liveUrl: ""
  }
]; 