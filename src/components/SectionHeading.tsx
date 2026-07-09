import { Reveal } from "@/components/Reveal";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </span>
      {title && (
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
