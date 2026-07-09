import { recognition } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Chip } from "@/components/Chip";

export function Recognition() {
  return (
    <section id="recognition" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Recognition & Responsible Disclosure"
        title={`Rewarded by ${recognition.stats[0].value} organizations, worldwide.`}
        description="Independent vulnerability research, disclosed responsibly and acknowledged through official Hall of Fame programs."
      />

      <div className="mt-10">
        <h3 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
          Hall of Fame
        </h3>
        <StaggerGroup className="mt-4 flex flex-wrap gap-2.5" stagger={0.03}>
          <StaggerItem>
            <Chip className="border-primary/40 text-primary">
              {recognition.honor}
            </Chip>
          </StaggerItem>
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
