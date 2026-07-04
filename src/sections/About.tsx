import { about, education, profile } from "@/data/resume";
import { Reveal } from "@/components/Reveal";
import { GlassCard } from "@/components/GlassCard";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div>
          <Reveal>
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              About
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Turning exposed attack surface into understood risk.
            </h2>
          </Reveal>

          <div className="mt-6 space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <GlassCard className="h-full">
            <h3 className="font-display text-sm font-semibold tracking-wide text-text">
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((entry) => (
                <li
                  key={entry.degree}
                  className="border-l-2 border-primary/40 pl-4"
                >
                  <p className="text-sm font-medium text-text">
                    {entry.degree}
                  </p>
                  <p className="text-sm text-muted">{entry.institution}</p>
                  <p className="font-mono text-xs text-muted/80">
                    {entry.year}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-sm text-muted">
                Based in {profile.location}, working with clients and teams
                globally.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
