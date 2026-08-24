export type SkillCategory =
  | "Programming"
  | "Embedded & Hardware"
  | "Networking"
  | "Systems & Support"
  | "Cybersecurity"
  | "Soft Skills";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  tech: string[];
  tags: ProjectTagType[];
  github: string;
  highlight?: string;
}

export type ProjectTagType = "Software" | "Hardware";

export interface ProjectTag {
  type: ProjectTagType;
  label: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: "work" | "education";
  description?: string;
  achievements?: string[];
  qualification?: string;
}

export interface Education {
  id: string;
  institution: string;
  qualification: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface Reference {
  id: string;
  name: string;
  company: string;
  phone: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface Profile {
  fullName: string;
  headline: string;
  subtitle: string;
  tagline: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  address: string;
  objective: string;
  cvDownloadPath: string;
}
