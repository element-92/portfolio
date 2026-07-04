export function GridMesh({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 85%)",
      }}
    >
      <div
        className="motion-safe:animate-grid-pan absolute inset-[-20%] opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

export function AuroraBlobs({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="motion-safe:animate-drift absolute left-1/4 top-0 h-[32rem] w-[32rem] rounded-full opacity-30 blur-[110px]"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="motion-safe:animate-drift absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--color-secondary)", animationDelay: "-8s" }}
      />
      <div
        className="motion-safe:animate-drift absolute bottom-0 left-0 h-[24rem] w-[24rem] rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--color-accent)", animationDelay: "-14s" }}
      />
    </div>
  );
}

export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="noise-overlay pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
