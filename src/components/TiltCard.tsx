import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Must match the child card's own border-radius class so the sheen clips correctly. */
  radiusClassName?: string;
}

export function TiltCard({
  children,
  className,
  radiusClassName = "rounded-2xl",
}: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hovering, setHovering] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 220, damping: 22, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), springConfig);
  const sheenX = useTransform(px, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(py, [0, 1], ["0%", "100%"]);
  const sheenBackground = useMotionTemplate`radial-gradient(circle 200px at ${sheenX} ${sheenY}, color-mix(in srgb, var(--color-accent) 30%, transparent), transparent 62%)`;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
    setHovering(false);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? undefined
          : { rotateX, rotateY, transformPerspective: 700 }
      }
      className={cn("relative", className)}
    >
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 z-10",
            radiusClassName,
          )}
          style={{ background: sheenBackground }}
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
      )}
      {children}
    </motion.div>
  );
}
