import { experience } from "../data/portfolio";
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

export function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative border-b hairline py-20 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <SectionTag number="04 —" label="Experience" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 mb-12">
          <h2
            data-testid="experience-heading"
            className="md:col-span-7 font-display font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
          >
            <Reveal text="Where I've" />
            <br />
            <Reveal text="worked." delay={0.1} />
          </h2>
          <FadeUp className="md:col-span-5 md:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              Four years of UI/UX work across enterprise SaaS, B2B travel, and
              compliance products — always close to engineering, always shipping.
            </p>
          </FadeUp>
        </div>

        {/* Tabular experience */}
        <div className="border-t hairline-strong">
          {experience.map((e, i) => (
            <FadeUp
              key={e.company}
              delay={i * 0.06}
              data-testid={`experience-${i}`}
              className="border-b hairline grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 py-8 md:py-10 group hover:bg-[hsl(var(--secondary))]/50 transition-colors"
            >
              <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                {e.period}
              </div>
              <div className="md:col-span-4">
                <div className="font-display font-bold text-2xl md:text-3xl tracking-tight">
                  {e.company}
                </div>
                <div className="mt-1 text-sm text-[hsl(var(--muted-foreground))] font-mono">
                  {e.role} · {e.location}
                </div>
              </div>
              <ul className="md:col-span-5 space-y-2.5">
                {e.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm md:text-base leading-relaxed">
                    <span className="text-accent-signal pt-1.5 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
