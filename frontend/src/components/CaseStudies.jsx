import { ArrowUpRight, FileText } from "lucide-react";
import { caseStudies } from "../data/portfolio";
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

function CaseStudyCard({ cs }) {
  return (
    <article
      data-testid={`case-card-${cs.id}`}
      className="group flex flex-col border hairline-strong bg-[hsl(var(--background))] hover:border-accent-signal transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[hsl(var(--secondary))] border-b hairline">
        <img
          src={cs.image}
          alt={cs.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[hsl(var(--background))]/90 backdrop-blur-sm border hairline">
          {cs.number}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-3">
          {cs.category}
        </div>
        <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight leading-tight mb-4">
          {cs.title}
        </h3>
        <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))] mb-6 flex-1">
          {cs.summary}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
          {cs.live?.url ? (
            <a
              href={cs.live.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`case-live-${cs.id}`}
              className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 bg-accent-signal text-white font-mono text-[11px] uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              Live Link
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          ) : (
            <span
              data-testid={`case-live-disabled-${cs.id}`}
              className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] font-mono text-[11px] uppercase tracking-[0.2em] cursor-not-allowed"
              title="Live link not available"
            >
              Live Link N/A
            </span>
          )}
          <a
            href={cs.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`case-study-${cs.id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-4 border hairline-strong font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] hover:border-[hsl(var(--foreground))] transition-colors"
          >
            Case Study
            <FileText size={13} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section
      id="work"
      data-testid="work-section"
      className="relative border-b hairline py-20 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <SectionTag number="02 —" label="Selected Work" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 mb-12 md:mb-16">
          <h2
            data-testid="work-heading"
            className="md:col-span-7 font-display font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
          >
            <Reveal text="Case" />
            <br />
            <Reveal text="Studies." delay={0.1} />
          </h2>
          <FadeUp className="md:col-span-5 md:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
              Three deep dives — from enterprise legal dashboards to corporate
              travel platforms and premium airline systems. Tap any card to
              explore the full case study or visit the live product.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
