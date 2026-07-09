import type {
  CaseStudy,
  CredentialEntry,
  ExperienceEntry,
  ResearchEntry,
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
    "Offensive Security Professional with 5+ years of experience specializing in Web, API, Cloud Security, AI/LLM, and Network Penetration Testing. Skilled in delivering comprehensive security assessments, Vulnerability Assessment & Penetration Testing (VAPT), Attack Surface Management (ASM), OSINT, and Threat Modeling to identify and mitigate real-world security risks. Leading end-to-end ASM delivery, has responsibly disclosed vulnerabilities to 50+ organizations worldwide, including several leading technology companies, and actively contributes to product enhancement through automation, custom tooling, and new detection capabilities.",
};

export const about = {
  paragraphs: [
    "Offensive Security Professional with 5+ years of experience specializing in Web, API, Cloud, AI/LLM, and Network Penetration Testing. Skilled in delivering comprehensive security assessments through Vulnerability Assessment & Penetration Testing (VAPT), Attack Surface Management (ASM), Software Composition Analysis (SCA), Open-Source Intelligence (OSINT), Static and Dynamic Application Security Testing (SAST & DAST), and Threat Modeling to identify and mitigate real-world security risks. Experienced in Security Automation and AI & Agentic Workflow Automation, developing scalable tools and workflows that improve security operations and assessment efficiency. Responsibly disclosed vulnerabilities to 50+ organizations worldwide, including several leading technology companies, while combining technical expertise with strong management and leadership skills to deliver impactful security outcomes.",
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
    title: "GitRadar",
    domain: "GitHub Recon · Secret Scanning",
    role: "Creator",
    summary:
      "A GitHub recon and secret-scanning engine that bypasses GitHub's API rate limits to catch exposed secrets across JavaScript, GitHub, and Docker at scale.",
    detail:
      "GitRadar handles reconnaissance and secret detection across GitHub repositories, JavaScript codebases, and Docker images — engineered to bypass GitHub API rate-limit restrictions so scans keep running across large scopes without throttling gaps.",
    tags: ["GitHub", "JavaScript", "Docker", "Secret Scanning"],
    scope: "internal",
    featured: true,
  },
  {
    title: "Large-Scale Scan Automation",
    domain: "Attack Surface Management · Automation",
    role: "Automation Engineer",
    summary:
      "Internal pipelines orchestrating vulnerability and asset scans across thousands of hosts, cutting manual engagement effort dramatically.",
    detail:
      "Built scripts and pipelines that orchestrate scanning across thousands of hosts in a single engagement — the same automation work behind the roughly 80% reduction in manual time spent per assessment.",
    tags: ["ASM", "Automation", "Scale"],
    scope: "internal",
  },
  {
    title: "CVE Monitoring",
    domain: "Threat Intelligence",
    role: "Developer",
    summary:
      "Tracks newly disclosed CVEs and maps them against client attack surfaces to flag emerging, exploitable risk.",
    detail:
      "A monitoring workflow that correlates newly published CVEs against known client asset inventories, surfacing which disclosures are actually exploitable against real attack surface rather than generic advisories.",
    tags: ["CVE", "Threat Intel", "Monitoring"],
    scope: "internal",
  },
  {
    title: "Product Detection Modules",
    domain: "Product Security Engineering",
    role: "Contributor & Designer",
    summary:
      "New security checks and assessment modules designed to close coverage gaps in ASM tooling.",
    detail:
      "Identified where existing ASM tooling under-covered real-world attack paths, then designed and implemented new detection modules — feeding directly back into RedHunt Labs' product capability rather than staying a one-off engagement fix.",
    tags: ["ASM", "Detection Engineering", "Product"],
    scope: "internal",
  },
  {
    title: "AI Skill for Recon",
    domain: "AI/LLM Security · Automation",
    role: "Developer",
    summary:
      "An AI-assisted reconnaissance skill that speeds up asset and exposure discovery during engagements.",
    detail:
      "Applies LLM-driven analysis to reconnaissance work, speeding up asset discovery and exposure triage during assessments instead of relying purely on manual review.",
    tags: ["AI/LLM", "OSINT", "Automation"],
    scope: "internal",
  },
  {
    title: "Third-Party Asset Discovery Suite",
    domain: "Attack Surface Management",
    role: "Developer",
    summary:
      "Enumerates third-party assets across a client's vendor and partner ecosystem.",
    detail:
      "An in-progress suite focused on discovering and enumerating third-party assets tied to a client's extended ecosystem — vendors, partners, and integrations that traditional ASM often misses.",
    tags: ["ASM", "Third-Party Risk"],
    scope: "internal",
    ongoing: true,
  },
];

export const research: ResearchEntry[] = [
  {
    title: "SSL/TLS Certificate Reconnaissance",
    description:
      "Leveraging certificate transparency and TLS metadata to expand asset discovery across large scopes.",
  },
  {
    title: "Vulnerability Scanning at Scale",
    description:
      "Detecting a single vulnerability class across thousands of hosts to surface every affected instance.",
  },
  {
    title: "Smart Scanning for Wide-Scope Assets",
    description:
      "Efficient, prioritized coverage of large asset inventories with reduced noise.",
  },
  {
    title: "New OSINT Techniques",
    description:
      "Operationalizing lesser-known OSINT methods for deeper asset and data-exposure discovery.",
  },
];

export const threatIntel: ResearchEntry[] = [
  {
    title: "Vulnerability Intelligence",
    description:
      "CVE correlation to flag emerging, exploitable risks against known client assets.",
  },
  {
    title: "Supply Chain Risk Intel",
    description:
      "Dependency, secret, and artifact exposure across code and container ecosystems.",
    ongoing: true,
  },
  {
    title: "Credential & Secret Exposure Monitoring",
    description:
      "Leaked secrets across repos, container images, client-side code, and cloud buckets.",
  },
];

export const skills: string[] = [
  "Web & Mobile Application Penetration Testing",
  "Network Penetration Testing",
  "API Penetration Testing",
  "Cloud Security",
  "AI/LLM Security",
  "Attack Surface Management",
  "OSINT",
  "Threat Modeling",
  "SAST & DAST",
  "SCA",
  "Malware Analysis",
  "Security Automation",
  "AI and Agentic Workflow Automation",
  "Management and Leadership",
];

export const recognition = {
  stats: [
    { value: "50+", label: "Companies Rewarded" },
    { value: "25+", label: "Halls of Fame" },
  ],
  honor: "Top 15 Researcher — NCIIPC India (2021)",
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
    name: "Certified LLM Security Professional (CLLMSP)",
    issuer: "Red Team Leaders",
    type: "certification",
  },
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
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Recognition", href: "#recognition" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
