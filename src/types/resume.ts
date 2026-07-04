export interface ExperienceEntry {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tags: string[];
}

export interface CaseStudy {
  title: string;
  domain: string;
  role: string;
  summary: string;
  detail: string;
  tags: string[];
  scope: "internal";
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface CredentialEntry {
  name: string;
  issuer: string;
  type: "certification" | "training";
  year?: string;
}

export interface StatEntry {
  value: string;
  label: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location?: string;
  year: string;
}
