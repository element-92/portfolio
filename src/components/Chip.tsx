import { cn } from "@/utils/cn";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "mono";
}

export function Chip({ children, className, variant = "default" }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-panel/60 px-3.5 py-1.5 text-sm text-text/90 transition-colors duration-200",
        "hover:border-primary/50 hover:text-text",
        variant === "mono" && "font-mono text-xs tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}
