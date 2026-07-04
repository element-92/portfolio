import { type HTMLMotionProps, motion, useReducedMotion } from "motion/react";
import { type MouseEvent, useRef, useState } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

interface MagneticButtonProps extends HTMLMotionProps<"a"> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_24px_-8px_var(--color-primary)] hover:brightness-110",
  secondary: "glass backdrop-blur-lg text-text hover:border-primary/50",
  ghost: "text-muted hover:text-text",
};

export function MagneticButton({
  variant = "primary",
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.25, y: y * 0.25 });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.5 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
