export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Core',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'PHP',
      'C#',
      'SQL'
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'Django',
      'React',
      'Angular',
      'Vue',
      'Laravel',
      'Node.js'
    ]
  },
  {
    title: 'Databases',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'MSSQL'
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Git'
    ]
  },
  {
    title: 'Data & BI',
    skills: [
      'Power BI',
      'Tableau',
      'Python',
      'ETL'
    ]
  },
  {
    title: 'AI & ML',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'PyTorch'
    ]
  },
  {
    title: 'Methodologies',
    skills: [
      'Agile',
      'Scrum'
    ]
  }
];
