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
    title: 'DATANA',
    description:
      'Datana is an AI-powered data analytics platform that transforms spreadsheets and database data into actionable insights, interactive charts, forecasts, and executive-ready reports. Ask questions in plain English, uncover trends, and make smarter business decisions without needing SQL or Python skills',
    technologies: [
      'Python',
      'FastAPI',
      'OpenAI',
      'OCI',
      'Docker',
      'GitHub Actions',
      'PostgreSQL',
      'Redis',
      'Celery',
      'React'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    githubUrl: '',
    liveUrl: 'https://www.getdatana.com/'
  },
  {
    title: 'VOX Documents',
    description:
      'VoxDocument is an AI-powered document management and automation platform that helps users create, process, and organize documents more efficiently, reducing manual work and streamlining everyday workflows.',
    technologies: [
      'Python',
      'FastAPI',
      'OCI',
      'Docker',
      'GitHub Actions',
      'PostgreSQL',
      'Redis',
      'Celery',
      'React'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    githubUrl: '',
    liveUrl: 'https://www.voxdocument.com/'
  },
  {
    title: 'HealyNG',
    description:
      'Healy is an AI-powered healthcare assistant that answers patients on WhatsApp, books and confirms appointments directly in your clinic system, and seamlessly hands sensitive conversations over to your team when needed.',
    technologies: [
      'Python',
      'Django',
      'OpenAI',
      'GitHub Actions',
      'PostgreSQL',
      'Redis',
      'Celery',
      'React'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    githubUrl: '',
    liveUrl: 'https://healy.ng/'
  },
  {
    title: 'Network Intrusion Detection System',
    description:
      'Machine learning model for detecting malicious network traffic.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas'],
    imageUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    githubUrl: '',
    liveUrl: 'https://www.kaggle.com/code/msanijae/nismodel'
  },
  {
    title: 'Weed Detection & Classification',
    description:
      'Computer vision models for agricultural weed detection and image classification.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas'],
    imageUrl:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    githubUrl: '',
    liveUrl: 'https://www.kaggle.com/code/msanijae/weed-detection-model'
  },
  {
    title: 'Brain Tumor Detection',
    description:
      'Deep learning models for MRI image classification using convolutional neural networks.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Pandas'],
    imageUrl:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    githubUrl: '',
    liveUrl: 'https://www.kaggle.com/code/msanijae/brain-tumor-detection'
  }
];
