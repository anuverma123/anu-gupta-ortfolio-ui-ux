import { profile, aboutStats } from "../data/portfolio";
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

export function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative border-b hairline py-20 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <SectionTag number="01 —" label="About" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
          <h2
            data-testid="about-heading"
            className="md:col-span-7 font-display font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
          >
            <Reveal text="Designer" />
            <br />
            <Reveal text="who ships." delay={0.1} />
            <span className="text-accent-signal">.</span>
          </h2>

          <div className="md:col-span-5 space-y-5 md:pt-6">
            <FadeUp>
              <p className="text-lg leading-relaxed">{profile.longBio}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
                {profile.longBio2}
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
                {profile.longBio3}
              </p>
            </FadeUp>
          </div>
        </div>

        {/* About stats */}
        <div className="mt-16 md:mt-24 border-t hairline grid grid-cols-2 md:grid-cols-4">
          {aboutStats.map((s, i) => (
            <FadeUp
              key={s.label}
              delay={i * 0.08}
              className={`p-6 md:p-8 ${
                i > 0
                  ? "md:border-l hairline " + (i === 2 ? "md:border-t-0 border-t" : "")
                  : ""
              } ${i >= 2 ? "border-t md:border-t-0 hairline" : ""}`}
            >
              <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-3">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display font-black text-5xl md:text-6xl tracking-tighter">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                {s.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
