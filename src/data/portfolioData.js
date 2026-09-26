export const profile = {
  name: 'Raisa Raihan Prithwi',
  shortName: 'Raisa Raihan',
  university: 'BRAC University',
  degree: 'BSc in Computer Science and Engineering',
  status: 'Fourth-year undergraduate student',
  minor: 'Economics',
  cgpa: '3.80',
  tagline: 'Building at the intersection of technology, data & economics.',
  interests: [
    'Data Analysis',
    'Economics',
    'Economic Analysis',
    'Technology',
    'Machine Learning',
    'Research',
    'Cybersecurity',
    'Data-driven decision making',
    'Web Development',
  ],
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = {
  githubUrl: 'https://github.com/Prithwiii',
  linkedinUrl: 'https://www.linkedin.com/in/raisa-raihan-prithwi-8b9b83287/',
  email: 'mailto:raisaraihannn@gmail.com',
}

export const skills = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Data & Analytics',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Data Analysis', 'Exploratory Data Analysis'],
  },
  {
    title: 'Web Development',
    items: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Analytical',
    items: ['Economics', 'Economic Analysis', 'Machine Learning', 'Data Visualization', 'Research'],
  },
]

export const certificates = [
  {
    title: 'Campus Ambassador Program',
    issuer: 'Interactive Cares',
    year: 'Completed',
    summary: 'Completed the program with strong leadership, communication, and community engagement skills.',
    image: '/certificates/certificate-1.jpg',
  },
  {
    title: 'Supervised Learning with scikit-learn',
    issuer: 'DataCamp',
    year: 'June 2025',
    summary: 'Completed a hands-on course focused on supervised machine learning techniques and practical model building.',
    image: '/certificates/certificate-2.jpg',
  },
  {
    title: 'Project Srijon',
    issuer: 'BRAC University',
    year: 'Summer 2024',
    summary: 'Completed a civic engagement initiative supporting community-focused problem solving and local impact work.',
    image: '/certificates/certificate-3.jpg',
  },
]

export const projects = [
  {
    id: '01',
    category: 'WEB',
    title: 'Neer',
    description:
      'A MERN-based residential community management platform designed to connect residents, staff, and committee members while supporting proposals, digital voting, notices, complaints, and community services.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'MERN'],
    githubUrl: 'https://github.com/Prithwiii/Neer',
    demoUrl: '#',
  },
  {
    id: '02',
    category: 'DATA',
    title: 'Heart Disease Analysis',
    description:
      'A machine learning and exploratory data analysis project involving data preprocessing, missing-value handling, feature scaling, classification models, and clustering analysis.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Machine Learning'],
    githubUrl: 'https://github.com/Prithwiii/heart-disease-data-analysis',
    demoUrl: '#',
  },
  {
    id: '03',
    category: 'WEB',
    title: 'Neighbourly',
    description:
      'A community-driven platform connecting neighbors around local needs, recommendations, and support through a simple and practical web experience.',
    technologies: ['React', 'JavaScript', 'UI/UX', 'Web App', 'Community'],
    githubUrl: 'https://github.com/Prithwiii/Neighbourly',
    demoUrl: 'https://github.com/Prithwiii/Neighbourly',
  },
  {
    id: '04',
    category: 'WEB',
    title: 'Whisker-Watch',
    description:
      'A pet-focused project designed to help monitor and engage with companion care through a modern dashboard and intuitive user experience.',
    technologies: ['React', 'JavaScript', 'Dashboard', 'Pet Care', 'Web App'],
    githubUrl: 'https://github.com/Prithwiii/Whisker-Watch',
    demoUrl: 'https://github.com/Prithwiii/Whisker-Watch',
  },
  {
    id: '05',
    category: 'DATA',
    title: 'Retail Sales & Business Performance Analysis',
    description:
      'Analyzed retail sales data in Power BI to explore revenue performance, product categories, customer purchasing patterns, gender-based revenue, discount behavior, and overall business performance.',
    technologies: ['Power BI', 'Excel/CSV', 'Data Analysis'],
    analysisAreas: [
      'Revenue by product category and gender',
      'Discount vs. purchase amount',
      'Customer purchasing patterns',
      'Key sales and revenue KPIs',
      'Interactive filtering and dashboard exploration',
    ],
    imageUrl:
      'https://raw.githubusercontent.com/Prithwiii/retail-sales-business-analysis-powerbi/main/images/Screenshot%202026-09-26%20210544.png',
    imageAlt: 'Retail sales Power BI dashboard preview',
    projectNote: 'The complete Power BI dashboard and project file are available in the GitHub repository.',
    githubUrl: 'https://github.com/Prithwiii/retail-sales-business-analysis-powerbi',
    githubLabel: 'View on GitHub',
  },

]

export const exploringTopics = [
  {
    title: 'Cybersecurity Basics',
    description: 'Understanding core security principles, threat awareness, and safe digital systems.',
  },
  {
    title: 'AI in Economics',
    description: 'Exploring how machine learning and AI can support economic forecasting and decision-making.',
  },
  {
    title: 'Data & Economic Analysis',
    description: 'How data can support economic and organizational decision making.',
  },
  {
    title: 'Responsible Tech',
    description: 'Balancing innovation, trust, and ethical impact in technology-driven systems.',
  },

]

export const learningItems = [
  { label: 'Python for Data Analysis', status: 'Exploring' },
  { label: 'Machine Learning', status: 'Building' },
  { label: 'Data Visualization', status: 'Practicing' },
  { label: 'SQL', status: 'Building' },
  { label: 'Economic Analysis', status: 'Deepening' },
  { label: 'Cybersecurity', status: 'Exploring' },
  { label: 'Research Methods', status: 'Practicing' },
]

export const projectFilters = ['ALL', 'DATA', 'WEB', 'RESEARCH', 'SECURITY']

export const contactDetails = {
  heading: "Let's build something meaningful.",
  message:
    "I'm always interested in learning, collaborating, and connecting with people working at the intersection of technology, data, economics, and research.",
}
