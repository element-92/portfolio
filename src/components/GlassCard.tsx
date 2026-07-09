import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function GlassCard({ children, className, as = "div" }: GlassCardProps) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "glass glow-border rounded-2xl p-6 backdrop-blur-lg transition-transform duration-300 ease-out sm:p-8",
        "motion-safe:hover:-translate-y-1.5",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

interface GlassCardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export function GlassCardLink({
  children,
  className,
  ...anchorProps
}: GlassCardLinkProps) {
  return (
    <a
      className={cn(
        "glass glow-border rounded-2xl p-6 backdrop-blur-lg transition-transform duration-300 ease-out sm:p-8",
        "motion-safe:hover:-translate-y-1.5",
        className,
      )}
      {...anchorProps}
    >
      {children}
    </a>
  );
}
