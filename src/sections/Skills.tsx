import {
  Bot,
  BrainCircuit,
  Cloud,
  Globe,
  Microscope,
  Network,
  PackageSearch,
  Radar,
  ScanSearch,
  Search,
  ShieldAlert,
  Users,
  Webhook,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { TiltCard } from "@/components/TiltCard";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

const skillIcons: Record<string, LucideIcon> = {
  "Web & Mobile Application Penetration Testing": Globe,
  "Network Penetration Testing": Network,
  "API Penetration Testing": Webhook,
  "Cloud Security": Cloud,
  "AI/LLM Security": BrainCircuit,
  "Attack Surface Management": Radar,
  OSINT: Search,
  "Threat Modeling": ShieldAlert,
  "SAST & DAST": ScanSearch,
  SCA: PackageSearch,
  "Malware Analysis": Microscope,
  "Security Automation": Workflow,
  "AI and Agentic Workflow Automation": Bot,
  "Management and Leadership": Users,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Depth across the offensive security stack."
      />

      <StaggerGroup
        className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
        stagger={0.04}
      >
        {skills.map((skill) => {
          const Icon = skillIcons[skill];
          return (
            <StaggerItem key={skill}>
              <TiltCard className="h-full">
                <GlassCard className="group flex h-full flex-col items-center gap-3 p-5 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-accent/15 group-hover:text-accent">
                    {Icon && <Icon size={20} />}
                  </span>
                  <span className="text-sm font-medium text-text">{skill}</span>
                </GlassCard>
              </TiltCard>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
