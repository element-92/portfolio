import type {
  CaseStudy,
  CredentialEntry,
  ExperienceEntry,
  SkillGroup,
  StatEntry,
} from "@/types/resume";

export const profile = {
  name: "Harshal Sharma",
  headline: "Offensive Security Professional",
  tagline: "Penetration Tester · OSINT · ASM · Threat Intel",
  location: "India",
  email: "harsh23246@gmail.com",
  linkedin: "https://www.linkedin.com/in/harshalss-war10ck",
  github: "https://github.com/element-92",
  resumeFile: "harshal-sharma-resume.pdf",
  summary:
    "Offensive Security Professional with 5+ years of experience specializing in Web, API, Mobile, Cloud, AI/LLM, and Network Penetration Testing. Skilled in delivering comprehensive security assessments, Vulnerability Assessment & Penetration Testing (VAPT), Attack Surface Management (ASM), OSINT, and Threat Modeling to identify and mitigate real-world security risks. Has responsibly disclosed security vulnerabilities to numerous organizations worldwide, including several leading technology companies.",
};

export const about = {
  paragraphs: [
    "I've spent 5+ years finding what organizations don't know they're exposing — from hands-on penetration testing to leading Attack Surface Management delivery at RedHunt Labs today.",
    "The work is ASM-driven VAPT backed by deep OSINT, across Web, API, Mobile, Cloud, and AI/LLM surfaces — plus the automation and tooling that lets a security team move faster. That same instinct for what's exposed is why I hunt independently, with vulnerabilities rewarded by 50+ organizations worldwide.",
  ],
};

export const stats: StatEntry[] = [
  { value: "5+", label: "Years in Offensive Security" },
  { value: "50+", label: "Companies Rewarded" },
  { value: "25+", label: "Halls of Fame" },
];

export const experience: ExperienceEntry[] = [
  {
    role: "ASM Delivery Lead",
    company: "RedHunt Labs",
    start: "04/2024",
    end: "Current",
    tags: ["ASM", "VAPT", "OSINT", "Team Leadership", "Security Automation"],
    bullets: [
      "Conduct Web, API, Mobile, and Network Penetration Testing engagements to identify security vulnerabilities and provide risk-based remediation recommendations.",
      "Perform Attack Surface Management (ASM)-driven VAPT through comprehensive attack surface analysis and in-depth Open-Source Intelligence (OSINT).",
      "Lead end-to-end Attack Surface Management assessments while managing and mentoring a team of security consultants to ensure high-quality project delivery.",
      "Collaborate with clients and cross-functional internal teams to define engagement scope, communicate security findings, and provide technical security guidance.",
      "Develop automation scripts, security tools, pipelines, and workflows — including JavaScript, GitHub, and Docker secret-scanning and supply-chain risk detection solutions — to streamline offensive security assessments and improve team efficiency.",
      "Contribute to product enhancements by identifying and addressing coverage gaps through the design and implementation of new security checks, detection capabilities, and assessment modules.",
      "Lead technical interviews, evaluating practical penetration testing skills, security methodologies, OSINT, and problem-solving capability.",
    ],
  },
  {
    role: "Security Consultant — CPS Lead",
    company: "RedHunt Labs",
    start: "04/2022",
    end: "03/2024",
    tags: ["ASM", "OSINT", "AWS Cloud Audits", "Team Management"],
    bullets: [
      "Engaged in Penetration Testing on Web, APIs, and Network infrastructures.",
      "Performed Attack Surface Management (ASM)-driven VAPT, centered on attack surface analysis and in-depth Open-Source Intelligence (OSINT).",
      "Performed AWS Cloud Audits.",
      "Managed a team and end-to-end Attack Surface Management assessments.",
      "Ran regular engagements with clients and internal teams.",
      "Owned reporting, documentation, and content creation.",
    ],
  },
  {
    role: "Associate Security Consultant",
    company: "RedHunt Labs",
    start: "06/2021",
    end: "03/2022",
    tags: ["ASM", "OSINT", "Automation", "AWS"],
    bullets: [
      "Performed Attack Surface Management (ASM)-driven VAPT — attack surface analysis and in-depth OSINT — while continuously converting manual workflows into automation that reduced time consumption by 80%.",
      "Performed regular Penetration Testing on Web, APIs, and Network infrastructures.",
      "Performed AWS Cloud Audits.",
      "Owned reporting, documentation, and content creation.",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Secret Scanning & Supply Chain Risk Detection",
    domain: "Security Automation · Supply Chain Security",
    role: "Designer & Developer",
    summary:
      "Automation across JavaScript, GitHub, and Docker environments to catch exposed secrets and supply-chain risk before they reach production.",
    detail:
      "Built detection tooling and pipelines that scan JavaScript codebases, GitHub repositories, and Docker images for exposed secrets and supply-chain risk indicators — reducing the manual review load on the assessment team and closing a recurring coverage gap across client engagements.",
    tags: ["JavaScript", "GitHub", "Docker", "Secret Scanning"],
    scope: "internal",
  },
  {
    title: "ASM Workflow Automation",
    domain: "Attack Surface Management",
    role: "Automation Engineer",
    summary:
      "Converted manual attack-surface analysis and OSINT workflows into automated pipelines, cutting engagement turnaround time by 80%.",
    detail:
      "Replaced repetitive, manual attack-surface discovery and OSINT-gathering steps with automated pipelines — an 80% reduction in time spent per engagement, freeing consultants to focus on validation and impact analysis instead of reconnaissance legwork.",
    tags: ["ASM", "OSINT", "Automation"],
    scope: "internal",
  },
  {
    title: "Detection Coverage & Assessment Modules",
    domain: "Product Security Engineering",
    role: "Contributor & Designer",
    summary:
      "Identified coverage gaps in ASM tooling and designed new security checks and detection modules to close them.",
    detail:
      "Analyzed where existing ASM tooling under-covered real-world attack paths, then designed and implemented new security checks and detection modules — feeding directly back into RedHunt Labs' product capability rather than staying a one-off engagement fix.",
    tags: ["ASM", "Detection Engineering", "Product"],
    scope: "internal",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Offensive Security Domains",
    skills: [
      "Web & Mobile Application Penetration Testing",
      "Network Penetration Testing",
      "API Penetration Testing",
      "Cloud Security",
      "AI/LLM Security",
    ],
  },
  {
    title: "Assessment Methodologies",
    skills: [
      "Attack Surface Management",
      "OSINT",
      "Threat Modeling",
      "SAST & DAST",
      "SCA",
    ],
  },
  {
    title: "Security Engineering",
    skills: ["Malware Analysis", "Security Automation"],
  },
];

export const recognition = {
  stats: [
    { value: "50+", label: "Companies Rewarded" },
    { value: "25+", label: "Halls of Fame" },
  ],
  honor:
    "Listed among the Top 15 Researchers (2021) in the newsletter by NCIIPC India — a Unit of the National Technical Research Organisation.",
  hallOfFame: [
    "Nokia",
    "Oracle",
    "Siemens",
    "Lenovo",
    "Huawei",
    "SANS",
    "Takealot",
    "Fastweb",
    "University of Cambridge",
    "Blackberry",
    "BMW",
    "Daimler AG",
    "Audi",
  ],
  hallOfFameNote: "and 12+ more organizations worldwide",
};

export const credentials: CredentialEntry[] = [
  {
    name: "Certified AppSec Practitioner (CAP)",
    issuer: "The SecOps Group",
    type: "certification",
  },
  {
    name: "API Security Architect",
    issuer: "API Academy, Broadcom",
    type: "certification",
  },
  {
    name: "API Designer",
    issuer: "API Academy, Broadcom",
    type: "certification",
  },
  {
    name: "Practical Ethical Hacking",
    issuer: "Heath Adams (TCM Security)",
    type: "training",
  },
  { name: "The RedTeam Blueprint", issuer: "Brandon Dennis", type: "training" },
  {
    name: "Web Application Penetration Testing",
    issuer: "Cybrary",
    type: "training",
  },
];

export const tools = ["JavaScript", "GitHub", "Docker", "AWS"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Recognition", href: "#recognition" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
