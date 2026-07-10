import {
  Boxes,
  Compass,
  FileKey,
  Filter,
  KeyRound,
  ScanLine,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { research, threatIntel } from "@/data/resume";
import type { ResearchEntry } from "@/types/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { TiltCard } from "@/components/TiltCard";

const researchIcons: Record<string, LucideIcon> = {
  "SSL/TLS Certificate Reconnaissance": FileKey,
  "Vulnerability Scanning at Scale": ScanLine,
  "Smart Scanning for Wide Scope Assets": Filter,
  "New OSINT Techniques": Compass,
};

const threatIntelIcons: Record<string, LucideIcon> = {
  "Vulnerability Intelligence": TriangleAlert,
  "Supply Chain Risk Intel": Boxes,
  "Credential & Secret Exposure Monitoring": KeyRound,
};

function InsightCard({
  entry,
  icons,
}: {
  entry: ResearchEntry;
  icons: Record<string, LucideIcon>;
}) {
  const Icon = icons[entry.title];

  return (
    <TiltCard className="h-full">
      <GlassCard className="flex h-full flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            {Icon && <Icon size={18} />}
          </span>
          {entry.ongoing && (
            <span className="rounded-full bg-secondary/15 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-secondary uppercase">
              Ongoing
            </span>
          )}
        </div>
        <h4 className="font-display text-base font-semibold text-text">
          {entry.title}
        </h4>
        <p className="text-sm leading-relaxed text-muted">
          {entry.description}
        </p>
      </GlassCard>
    </TiltCard>
  );
}

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Research"
        title="Finding what standard tooling misses."
        description="Techniques and intelligence work developed alongside client engagements, expanding discovery, cutting noise, and flagging risk before it's exploited."
      />

      <div className="mt-14">
        <h3 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
          Research & Techniques
        </h3>
        <StaggerGroup className="mt-5 grid gap-5 sm:grid-cols-2" stagger={0.05}>
          {research.map((entry) => (
            <StaggerItem key={entry.title}>
              <InsightCard entry={entry} icons={researchIcons} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div className="mt-14">
        <h3 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
          Threat Intelligence
        </h3>
        <StaggerGroup className="mt-5 grid gap-5 sm:grid-cols-3" stagger={0.05}>
          {threatIntel.map((entry) => (
            <StaggerItem key={entry.title}>
              <InsightCard entry={entry} icons={threatIntelIcons} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
