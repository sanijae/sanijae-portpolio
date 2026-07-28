export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Century Information Systems Ltd',
    period: 'Sep 2024 – Present',
    description: [
      'Design and develop scalable REST APIs and backend services using Laravel and Angular.',
      'Integrate AI-powered features that reduced manual processing time and improved user productivity.',
      'Design secure and scalable backend services with Laravel, MySQL, and Linux.',
      'Implement monitoring, logging, and performance optimization.',
      'Collaborate with frontend developers to deliver production-ready features.',
      'Optimized SQL queries, improving API response times by 35%.',
      'Developed REST APIs supporting multiple enterprise applications.'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Quantum Analytics NG',
    period: 'Jan 2023 – Sep 2024',
    description: [
      'Built automated data processing and reporting workflows using Python and SQL.',
      'Developed dashboards and analytical reports to support business decision-making.',
      'Performed exploratory data analysis and predictive analytics on structured datasets.',
      'Developed machine learning models for classification and prediction tasks.',
      'Automated data preparation and feature engineering workflows.'
    ]
  }
];
