import { SiDocker, SiGithub, SiJavascript } from "react-icons/si";
import { Cloud } from "lucide-react";
import { tools } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  JavaScript: SiJavascript,
  GitHub: SiGithub,
  Docker: SiDocker,
  AWS: Cloud,
};

export function ToolsTech() {
  return (
    <section id="tools" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Tools & Technologies"
        title="What powers the automation."
        description="The stack behind the secret scanning, supply chain, and ASM tooling built at RedHunt Labs."
      />

      <StaggerGroup
        className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4"
        stagger={0.06}
      >
        {tools.map((tool) => {
          const Icon = iconMap[tool];
          return (
            <StaggerItem key={tool}>
              <GlassCard className="flex flex-col items-center gap-3 py-8 text-center">
                {Icon && <Icon size={28} />}
                <span className="text-sm font-medium text-text">{tool}</span>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
