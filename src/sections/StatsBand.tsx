import { stats } from "@/data/resume";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

export function StatsBand() {
  return (
    <section
      id="stats"
      aria-label="Key statistics"
      className="border-y border-border bg-panel/30"
    >
      <StaggerGroup className="mx-auto grid max-w-3xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-3">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <p className="font-display text-3xl font-semibold text-text sm:text-4xl">
              <span className="text-gradient">{stat.value}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
