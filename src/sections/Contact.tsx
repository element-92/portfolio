import { Mail, PenSquare } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/resume";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <Reveal className="text-center">
        <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          Contact
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Have a security engagement in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          The fastest way to reach me is email or LinkedIn — I read both
          regularly.
        </p>
      </Reveal>

      <Reveal
        delay={0.1}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <MagneticButton variant="primary" href={`mailto:${profile.email}`}>
          <Mail size={16} /> {profile.email}
        </MagneticButton>
        <MagneticButton
          variant="secondary"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={16} /> Connect on LinkedIn
        </MagneticButton>
      </Reveal>

      <Reveal delay={0.18} className="mt-8">
        <GlassCard className="flex items-center gap-4 py-5 text-left">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <PenSquare size={18} />
          </span>
          <div>
            <p className="text-sm font-medium text-text">Research write-ups</p>
            <p className="text-sm text-muted">
              Coming soon — long-form breakdowns of ASM and OSINT work.
            </p>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
