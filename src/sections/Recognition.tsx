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
import { TiltCard } from "@/components/TiltCard";
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

// Approximate public brand accent colors, used only for a stylized text
// treatment, not a reproduction of any company's logo artwork.
const hallOfFameAccents: Record<string, string> = {
  Oracle: "#C74634",
  SANS: "#06BCCD",
  Takealot: "#0071CE",
  Fastweb: "#C9A227",
  "University of Cambridge": "#85B09A",
  "Daimler AG": "#A4AAAE",
};

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
        <StaggerGroup
          className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7"
          stagger={0.03}
        >
          {recognition.hallOfFame.map((name) => {
            const Logo = hallOfFameLogos[name];
            const accent = hallOfFameAccents[name];
            return (
              <StaggerItem key={name}>
                <TiltCard className="h-full">
                  <GlassCard className="group flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
                    {Logo ? (
                      <>
                        <Logo
                          size={26}
                          className="text-muted transition-colors duration-300 group-hover:text-text"
                        />
                        <span className="text-xs text-muted">{name}</span>
                      </>
                    ) : (
                      <span
                        className="font-display text-sm font-semibold transition-opacity duration-300"
                        style={{ color: accent }}
                      >
                        {name}
                      </span>
                    )}
                  </GlassCard>
                </TiltCard>
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
