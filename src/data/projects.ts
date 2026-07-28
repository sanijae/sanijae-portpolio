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
      'Intelligent Data Analytics Platform that automates data analysis and AI business insight generation. Scalable FastAPI REST APIs with PostgreSQL and Redis caching, Celery for long-running analytics and report generation, Docker and GitHub Actions CI/CD, and OpenAI for natural language data exploration.',
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
      'AI document intelligence platform supporting semantic search, chat, summarization, and voice interaction. FastAPI backend for document ingestion, vector search, and AI inference, with Celery workers for indexing and embeddings, Docker/GitHub Actions CI/CD, and OCI deployment with Prometheus and Grafana monitoring.',
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
    title: 'Healyng',
    description:
      'Multi-tenant telemedicine SaaS platform with secure Django backend APIs, PostgreSQL and Redis for session and data caching, and Celery workers for appointment reminders, notifications, and scheduled processing. Automated deployments via GitHub Actions CI/CD.',
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
