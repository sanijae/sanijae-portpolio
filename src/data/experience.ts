export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Century Information Systems Ltd",
    period: "2024 - Present",
    description: [
      "Develop and maintain scalable software applications using modern full-stack technologies",
      "Design and implement RESTful APIs and backend services",
      "Collaborate with cross-functional remote teams to deliver high-quality features",
      "Ensure code quality through reviews, testing, and best practices"
    ]
  },
  {
    title: "Data Analyst",
    company: "Quantum Analytics NG (Remote)",
    period: "2023 - 2024",
    description: [
      "Extracted, cleaned, and analyzed large datasets to identify trends and insights",
      "Built dashboards and automated reports using Power BI and Tableau",
      "Supported data-driven decision-making across teams"
    ]
  },
  {
    title: "Software Engineering Intern (Backend & Frontend) / Data Scientist Intern",
    company: "Remote",
    period: "2024",
    description: [
      "Assisted in backend API development and database integration",
      "Built responsive frontend interfaces using modern JavaScript frameworks",
      "Supported data preprocessing, analysis, and model experimentation"
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
