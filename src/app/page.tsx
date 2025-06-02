'use client'
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const projects = [
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

const experience = [
  {
    title: "Senior AI Engineer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: [
      "Led the development of AI-powered analytics platform serving 1M+ users",
      "Implemented machine learning models achieving 95% accuracy in predictions",
      "Mentored junior developers and conducted technical interviews",
      "Optimized system performance reducing response time by 60%"
    ]
  },
  {
    title: "Machine Learning Engineer",
    company: "Data Dynamics",
    period: "2020 - 2022",
    description: [
      "Developed and deployed NLP models for text classification",
      "Built real-time data processing pipelines handling 1TB+ daily",
      "Collaborated with cross-functional teams to deliver ML solutions",
      "Reduced model training time by 40% through optimization"
    ]
  },
  {
    title: "Software Engineer",
    company: "Digital Solutions",
    period: "2018 - 2020",
    description: [
      "Full-stack development of enterprise applications",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
      "Designed and maintained RESTful APIs",
      "Improved application performance by 30%"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    period: "2016 - 2018",
    focus: "Artificial Intelligence & Machine Learning"
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "MIT",
    period: "2012 - 2016",
    focus: "Software Engineering"
  }
];

const skills = [
  {
    title: 'Software Engineering',
    skills: [
      'Full-Stack Development',
      'System Architecture',
      'API Design',
      'DevOps',
      'Cloud Computing',
      'Microservices'
    ]
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'Model Deployment',
      'Reinforcement Learning',
      'Neural Networks'
    ]
  },
  {
    title: 'Data Science',
    skills: [
      'Data Analysis',
      'Statistical Modeling',
      'Big Data',
      'Data Visualization',
      'Predictive Analytics',
      'Time Series Analysis'
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Software Engineer & AI Specialist
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate about building innovative solutions using cutting-edge technologies
              in software engineering, artificial intelligence, machine learning, and data science.
              Transforming complex problems into elegant, scalable solutions.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Professional Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{edu.school}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>your.email@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex gap-6 mt-4">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
