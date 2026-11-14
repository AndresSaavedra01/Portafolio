export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
  category?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string }[];
}
