import { skillGroups } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { Chip } from "@/components/Chip";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Depth across the offensive security stack."
        description="From application-layer exploitation to cloud and AI/LLM surfaces, backed by the methodologies that make findings defensible."
      />

      <div className="mt-14 space-y-10">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.06}>
            <h3 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
              {group.title}
            </h3>
            <StaggerGroup className="mt-4 flex flex-wrap gap-3" stagger={0.04}>
              {group.skills.map((skill) => (
                <StaggerItem key={skill}>
                  <Chip>{skill}</Chip>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
