import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { experience } from "@/data/resume";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { Chip } from "@/components/Chip";
import { cn } from "@/utils/cn";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
      <SectionHeading eyebrow="Experience" />

      <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
        {experience.map((entry, index) => {
          const isOpen = openIndex === index;
          const panelId = `experience-panel-${index}`;

          return (
            <Reveal
              key={entry.role}
              delay={index * 0.08}
              as="li"
              className="relative"
            >
              <span
                className={cn(
                  "absolute -left-[2.31rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg",
                  isOpen ? "bg-accent" : "bg-primary",
                )}
                aria-hidden
              />

              <TiltCard className="glass glow-border rounded-2xl p-6 backdrop-blur-lg sm:p-7">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full flex-wrap items-start justify-between gap-3 text-left"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{entry.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted">
                      {entry.start} — {entry.end}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "text-muted transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </div>
                </button>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Chip key={tag} variant="mono">
                      {tag}
                    </Chip>
                  ))}
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                        {entry.bullets.map((bullet) => (
                          <li
                            key={bullet.slice(0, 30)}
                            className="flex gap-3 text-sm leading-relaxed text-muted"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TiltCard>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
