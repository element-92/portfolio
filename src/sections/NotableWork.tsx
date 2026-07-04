import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Lock } from "lucide-react";
import { useState } from "react";
import { caseStudies } from "@/data/resume";
import type { CaseStudy } from "@/types/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";
import { Chip } from "@/components/Chip";
import { cn } from "@/utils/cn";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard as="article" className="flex h-full flex-col">
      <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted uppercase">
        <Lock size={11} /> Internal · RedHunt Labs
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-text">
        {study.title}
      </h3>
      <p className="mt-1 text-xs text-muted">{study.domain}</p>
      <p className="mt-1 text-xs text-muted/80">Role: {study.role}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {study.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <Chip key={tag} variant="mono">
            {tag}
          </Chip>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-colors hover:text-accent"
      >
        {open ? "Hide case study" : "Read case study"}
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted">
              {study.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

export function NotableWork() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Notable Work"
        title="Tooling built to scale offensive security delivery."
        description="Internal RedHunt Labs initiatives — proprietary work, so no public repos, but real engineering with measurable impact."
      />

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {caseStudies.map((study) => (
          <StaggerItem key={study.title}>
            <CaseStudyCard study={study} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
