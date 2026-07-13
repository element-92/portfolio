import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/resume";
import { AuroraBlobs, GridMesh } from "@/components/BackgroundFX";
import { MagneticButton } from "@/components/Button";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <GridMesh />
      <AuroraBlobs />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-panel/50 px-4 py-1.5 font-mono text-xs tracking-wide text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          ASM Delivery Lead · RedHunt Labs
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold tracking-tight text-text sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gradient mt-3 text-xl font-medium sm:text-2xl"
        >
          {profile.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-muted"
        >
          {profile.tagline}. 7+ years in Offensive Security and 5 years in
          ASM, turning attack surface into actionable risk, recognized by
          50+ organizations worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            variant="primary"
            href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
            download
          >
            Download Resume
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={16} /> GitHub
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={16} /> LinkedIn
          </MagneticButton>
          <MagneticButton variant="ghost" href={`mailto:${profile.email}`}>
            <Mail size={16} /> Email
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
