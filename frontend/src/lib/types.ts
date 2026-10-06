// Mirrors backend/src/portfolio/portfolio.types.ts

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "x" | "mail" | "website";
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  availability: string;
  resumeUrl?: string;
  /** Portrait in frontend/public, e.g. /homa-zohdi.jpg */
  photo?: string;
  socials: SocialLink[];
  about: string[];
  highlights: { label: string; value: string }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string[];
  role: string;
  outcomes: string[];
  stack: string[];
  featured: boolean;
  links: { live?: string; source?: string };
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  start: string;
  end: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Portfolio {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
}
