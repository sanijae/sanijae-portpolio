export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: Experience[] = [
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