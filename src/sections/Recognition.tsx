import {
  SiAudi,
  SiBlackberry,
  SiBmw,
  SiHuawei,
  SiLenovo,
  SiNokia,
  SiSiemens,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { recognition } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { Chip } from "@/components/Chip";

const hallOfFameLogos: Record<string, IconType> = {
  Nokia: SiNokia,
  Siemens: SiSiemens,
  Lenovo: SiLenovo,
  Huawei: SiHuawei,
  Blackberry: SiBlackberry,
  BMW: SiBmw,
  Audi: SiAudi,
};

export function Recognition() {
  const withLogo = recognition.hallOfFame.filter(
    (name) => hallOfFameLogos[name],
  );
  const withoutLogo = recognition.hallOfFame.filter(
    (name) => !hallOfFameLogos[name],
  );

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
        <StaggerGroup
          className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7"
          stagger={0.04}
        >
          {withLogo.map((name) => {
            const Logo = hallOfFameLogos[name];
            return (
              <StaggerItem key={name}>
                <GlassCard className="group flex flex-col items-center gap-2 p-4 text-center">
                  <Logo
                    size={26}
                    className="text-muted transition-colors duration-300 group-hover:text-text"
                  />
                  <span className="text-xs text-muted">{name}</span>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <StaggerGroup className="mt-4 flex flex-wrap gap-2.5" stagger={0.03}>
          <StaggerItem>
            <Chip className="border-primary/40 text-primary">
              {recognition.honor}
            </Chip>
          </StaggerItem>
          {withoutLogo.map((name) => (
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
