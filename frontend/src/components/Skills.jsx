import { skills } from "../data/portfolio";
import { Reveal, FadeUp } from "./Reveal";

function SectionTag({ number, label }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-8">
      <span className="text-accent-signal">{number}</span>
      <span className="flex-1 h-px bg-[hsl(var(--foreground))] opacity-20" />
      <span>{label}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative border-b hairline py-20 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <SectionTag number="03 —" label="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 mb-12">
          <h2
            data-testid="skills-heading"
            className="md:col-span-7 font-display font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
          >
            <Reveal text="The tools" />
            <br />
            <Reveal text="I master." delay={0.1} />
          </h2>
          <FadeUp className="md:col-span-5 md:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              A working stack honed across three design systems, six product
              modules, and four years of shipping enterprise SaaS interfaces.
            </p>
          </FadeUp>
        </div>

        {/* Skills bento — exposed grid lines */}
        <div className="border hairline grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <FadeUp
              key={s.name}
              delay={i * 0.04}
              className={`p-6 md:p-8 group relative overflow-hidden hover:bg-[hsl(var(--secondary))] transition-colors ${
                // borders between cells
                "border-t hairline first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(3)]:border-t-0 sm:[&:nth-child(even)]:border-l lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n)]:border-l"
              }`}
              data-testid={`skill-${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
                  {s.area}
                </span>
                <span className="font-mono text-[12px] text-[hsl(var(--muted-foreground))]">
                  / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-tight">
                {s.name}
              </h3>
              <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] font-mono">
                {s.note}
              </p>
              <div className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent-signal group-hover:w-full transition-all duration-500" />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
