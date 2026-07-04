import { Award } from "lucide-react";
import { recognition } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { Chip } from "@/components/Chip";

export function Recognition() {
  return (
    <section id="recognition" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Recognition & Responsible Disclosure"
        title={`Rewarded by ${recognition.stats[0].value} organizations, worldwide.`}
        description="Independent vulnerability research, disclosed responsibly and acknowledged through official Hall of Fame programs."
      />

      <Reveal delay={0.1} className="mt-10">
        <GlassCard className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Award size={20} />
          </span>
          <p className="text-sm leading-relaxed text-text/90">
            {recognition.honor}
          </p>
        </GlassCard>
      </Reveal>

      <div className="mt-10">
        <h3 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
          Hall of Fame
        </h3>
        <StaggerGroup className="mt-4 flex flex-wrap gap-2.5" stagger={0.03}>
          {recognition.hallOfFame.map((name) => (
            <StaggerItem key={name}>
              <Chip>{name}</Chip>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Chip className="border-dashed text-muted">
              {recognition.hallOfFameNote}
            </Chip>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
