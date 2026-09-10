import { Project, Skill, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'T.S. Hemanth',
  nickname: 'Hemi',
  title: 'AI/ML Engineer | Cybersecurity Specialist',
  location: 'Chennai, India',
  email: 'eswarhemanth82@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  shortIntro:
    'Transitioning deep cybersecurity expertise into AI-driven security analytics, predictive threat intelligence, and intelligent automation pipelines.',
  summary:
    'A dual-discipline engineer bridging offensive & defensive cybersecurity with modern artificial intelligence, dedicated to developing proactive anomaly detection, intelligent telemetry processing, and automated defense mechanisms.',
  primaryGoal:
    'Apply AI-driven techniques to cybersecurity analytics and automation — turning raw network telemetry and threat vectors into self-healing, predictive security ecosystems.',
};

export const PROJECTS: Project[] = [
  {
    id: 'uber-eats-bangalore',
    title: 'Uber Eats Bangalore Analytics',
    subtitle: 'End-to-End Data Pipeline & Executive Dashboard',
    description:
      'End-to-end data pipeline: Pandas cleaning, SQLite, 20 SQL queries, 3-page Streamlit dashboard.',
    details: [
      'Engineered an automated data extraction and cleaning pipeline normalizing complex restaurant and ordering datasets with Pandas.',
      'Designed a relational SQLite schema executing 20+ analytical queries extracting delivery duration, price distribution, and cuisine demand patterns.',
      'Architected an interactive 3-page Streamlit dashboard with geospatial density maps and real-time metric filtering.',
    ],
    techStack: ['Python', 'Pandas', 'SQLite', 'Streamlit', 'Data Pipeline', 'Plotly'],
    metrics: '20+ Structured SQL Queries • 3-Page Streamlit App',
    githubUrl: 'https://github.com/eswarhemanth/uber-eats-bangalore-analytics',
    iconName: 'database',
  },
  {
    id: 'nifty-50-stock-pipeline',
    title: 'Nifty 50 Stock Data Pipeline',
    subtitle: 'Automated Market Ingestion & Transformation Engine',
    description:
      'Automated ingestion and processing of Nifty 50 market data.',
    details: [
      'Built a scheduled automated ingestion pipeline capturing daily tick and end-of-day equity data for all Nifty 50 constituents.',
      'Implemented robust validation rules, missing-value imputation, and rolling volatility metrics using Python and Pandas.',
      'Structured standardized time-series datasets ready for algorithmic feature engineering and quantitative analysis.',
    ],
    techStack: ['Python', 'Pandas', 'Time-Series Analysis', 'ETL Automation', 'Financial Analytics'],
    metrics: '50 Core Index Assets • Automated Daily Processing',
    githubUrl: 'https://github.com/eswarhemanth/nifty-50-stock-pipeline',
    iconName: 'trending-up',
  },
  {
    id: 'fitbit-health-analytics',
    title: 'Fitbit Health Analytics',
    subtitle: 'Calorie Prediction & Biometric Clustering',
    description:
      'Calorie prediction model and workout pattern clustering.',
    details: [
      'Developed regression models predicting daily caloric expenditure with cross-validated feature importance ranking.',
      'Applied unsupervised clustering algorithms (K-Means & DBSCAN) to group longitudinal workout patterns and heart-rate zones.',
      'Extracted behavioral profiles identifying sedentary thresholds and optimal recovery intervals.',
    ],
    techStack: ['Python', 'Scikit-Learn', 'Machine Learning', 'Clustering', 'Feature Engineering'],
    metrics: 'Unsupervised Clustering • Regression Prediction',
    githubUrl: 'https://github.com/eswarhemanth/fitbit-health-analytics',
    iconName: 'activity',
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'Python',
    category: 'Languages & Core',
    level: 'Advanced',
    icon: 'Terminal',
    description: 'Data science, automation scripting, machine learning modeling, and security tool dev.',
  },
  {
    name: 'Java',
    category: 'Languages & Core',
    level: 'Proficient',
    icon: 'Code2',
    description: 'Object-oriented architecture, data structures, enterprise backend basics, and algorithms.',
  },
  {
    name: 'HTML',
    category: 'Data & Web',
    level: 'Proficient',
    icon: 'Globe',
    description: 'Semantic structuring, accessible web interfaces, and modern layout fundamentals.',
  },
  {
    name: 'MongoDB',
    category: 'Data & Web',
    level: 'Proficient',
    icon: 'Database',
    description: 'NoSQL document storage, flexible schema design, aggregation pipelines, and JSON storage.',
  },
  {
    name: 'SQL',
    category: 'Data & Web',
    level: 'Advanced',
    icon: 'Layers',
    description: 'Complex joins, aggregate analytics, schema optimization, and subquery architectures.',
  },
  {
    name: 'Penetration Testing',
    category: 'Security & Pentesting',
    level: 'Advanced',
    icon: 'ShieldAlert',
    description: 'Vulnerability assessment, exploitation vectors, network security audits, and OWASP Top 10.',
  },
  {
    name: 'Network Security',
    category: 'Security & Pentesting',
    level: 'Advanced',
    icon: 'Lock',
    description: 'Packet analysis, Wireshark, firewall rules, IDS/IPS, threat hunting, and protocol audits.',
  },
  {
    name: 'Machine Learning',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    icon: 'Cpu',
    description: 'Supervised & unsupervised learning, classification, clustering, regression, Scikit-Learn.',
  },
  {
    name: 'Deep Learning',
    category: 'AI & Machine Learning',
    level: 'Specializing',
    icon: 'BrainCircuit',
    description: 'Neural networks, multi-layer perceptrons, LLM prompt engineering, and security telemetry models.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Cybersecurity Intern',
    company: 'Zero to Infinity HybSec',
    period: 'Internship',
    location: 'Chennai, India',
    projectFocus: 'Keylogger & Password-Grabbing Detection Project',
    highlights: [
      'Spearheaded research and implementation of a proactive defense mechanism to identify keyloggers and credential-scraping malware in real-time.',
      'Analyzed malicious API hook behavior (e.g., SetWindowsHookEx, GetAsyncKeyState) and memory-scraping vectors.',
      'Developed automated heuristic detection scripts comparing baseline system telemetry against anomalous process activities.',
      'Formulated mitigation playbooks to isolate suspicious background processes and alert endpoint administrators immediately.',
    ],
    technologies: ['Python', 'Threat Detection', 'Memory Forensics', 'Behavioral Analysis', 'Network Monitoring'],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: 'B.E in Cyber Security',
    institution: 'SRM Valliammai Engineering College',
    period: '2021 – 2024',
    description:
      'Specialized in offensive & defensive security, cryptography, network forensics, penetration testing methodologies, and secure software engineering.',
    focus: ['Information Security', 'Network Forensics', 'Cryptography', 'Ethical Hacking', 'Risk Management'],
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    institution: 'State Board of Technical Education',
    period: 'Foundational',
    description:
      'Gained deep analytical thinking, mechanical systems intuition, process automation principles, and rigorous engineering problem solving.',
    focus: ['System Modeling', 'Precision Engineering', 'Analytical Problem Solving'],
  },
];
