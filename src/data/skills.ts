export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'PHP', 'JavaScript', 'SQL', 'Bash']
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Django', 'Laravel', 'REST APIs']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Angular']
  },
  {
    title: 'AI / ML',
    skills: [
      'OpenAI API',
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'Pandas',
      'NumPy',
      'Jupyter Notebooks'
    ]
  },
  {
    title: 'Cloud',
    skills: ['OCI', 'AWS', 'GCP']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Celery']
  },
  {
    title: 'DevOps',
    skills: [
      'Docker',
      'GitHub Actions',
      'Jenkins',
      'Linux',
      'Git',
      'CI/CD',
      'Grafana',
      'Prometheus'
    ]
  }
];
