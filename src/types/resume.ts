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
  summary: string;
  detail: string;
  tags: string[];
  scope: "internal";
  featured?: boolean;
  ongoing?: boolean;
}

export interface ResearchEntry {
  title: string;
  description: string;
  ongoing?: boolean;
}


export interface CredentialEntry {
  name: string;
  issuer: string;
  type: "certification" | "training";
  year?: string;
  link?: string;
}

export interface StatEntry {
  value: string;
  label: string;
}
