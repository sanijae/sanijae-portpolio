export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Century Information Systems Ltd.",
    period: "2024 - Present",
    description: [
      "Developing and maintaining enterprise-level software solutions using modern technologies",
      "Implementing RESTful APIs and microservices architecture for scalable applications",
      "Collaborating with cross-functional teams to deliver high-quality software products",
      "Participating in code reviews and implementing best practices for code quality"
    ]
  },
  {
    title: "Data Science Intern",
    company: "British Airways",
    period: "2023 - 2024",
    description: [
      "Developed and deployed machine learning models for customer behavior analysis",
      "Created data visualization dashboards for business intelligence reporting",
      "Assisted in building ETL pipelines for processing large-scale flight data",
      "Contributed to predictive maintenance models for aircraft systems"
    ]
  },
  {
    title: "Data Analyst",
    company: "Quantum Analytics NG.",
    period: "2022 - 2023",
    description: [
      "Conducted comprehensive data analysis to identify business trends and opportunities",
      "Developed automated reporting systems using Python and SQL",
      "Created interactive dashboards for key performance indicators",
      "Collaborated with stakeholders to translate business requirements into analytical solutions"
    ]
  },
  {
    title: "Data Specialist",
    company: "NYSC Nigeria",
    period: "2020 - 2021",
    description: [
      "Managed and analyzed large datasets for government programs",
      "Developed data collection and validation procedures",
      "Created standardized reporting templates for program evaluation",
      "Implemented data quality control measures and documentation"
    ]
  },
]; 