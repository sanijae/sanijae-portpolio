export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
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