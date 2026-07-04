import { BadgeCheck, GraduationCap } from "lucide-react";
import { credentials } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { cn } from "@/utils/cn";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-5xl px-6 py-24 sm:py-32"
    >
      <SectionHeading
        eyebrow="Certifications & Training"
        title="Formal credentials and continued education."
      />

      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2" stagger={0.05}>
        {credentials.map((credential) => {
          const isCert = credential.type === "certification";
          return (
            <StaggerItem key={credential.name}>
              <GlassCard className="flex h-full items-start gap-4 p-5">
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    isCert
                      ? "bg-primary/15 text-primary"
                      : "bg-secondary/15 text-secondary",
                  )}
                >
                  {isCert ? (
                    <BadgeCheck size={18} />
                  ) : (
                    <GraduationCap size={18} />
                  )}
                </span>
                <div>
                  <p className="text-sm font-medium text-text">
                    {credential.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{credential.issuer}</p>
                  <span
                    className={cn(
                      "mt-2 inline-block font-mono text-[11px] tracking-wide uppercase",
                      isCert ? "text-primary" : "text-secondary",
                    )}
                  >
                    {isCert ? "Certification" : "Training Program"}
                  </span>
                </div>
              </GlassCard>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
