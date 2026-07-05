import { about, profile } from "@/data/resume";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
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

      <Reveal delay={0.2}>
        <p className="mt-6 text-sm text-muted/80">
          Based in {profile.location}, working with clients and teams
          globally.
        </p>
      </Reveal>
    </section>
  );
}
