export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  techStack: string[];
  metrics?: string;
  githubUrl: string;
  iconName: 'database' | 'trending-up' | 'activity';
}

export interface Skill {
  name: string;
  category: 'Languages & Core' | 'Security & Pentesting' | 'AI & Machine Learning' | 'Data & Web';
  level: string;
  icon: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  projectFocus: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  focus: string[];
}
