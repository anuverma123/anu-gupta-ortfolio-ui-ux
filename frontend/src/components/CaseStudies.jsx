import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus, ArrowUpRight, X } from "lucide-react";
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

function CaseStudyRow({ cs, isOpen, onToggle }) {
  return (
    <article
      data-testid={`case-${cs.id}`}
      className="border-t hairline last:border-b group"
    >
      {/* Trigger row */}
      <button
        type="button"
        onClick={onToggle}
        data-testid={`case-toggle-${cs.id}`}
        className="w-full text-left py-8 md:py-10 px-1 md:px-2 flex items-start gap-6 md:gap-10 hover:bg-[hsl(var(--secondary))]/60 transition-colors"
      >
        <span className="font-mono text-sm md:text-base text-[hsl(var(--muted-foreground))] pt-1 w-8 shrink-0">
          {cs.number}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[12px] sm:text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--muted-foreground))] mb-2">
            {cs.category}
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
            {cs.title}
          </h3>
          <p className="hidden md:block mt-3 text-base text-[hsl(var(--muted-foreground))] max-w-3xl">
            {cs.summary}
          </p>
        </div>
        <div
          className={`shrink-0 w-10 h-10 md:w-12 md:h-12 inline-flex items-center justify-center border hairline-strong transition-colors ${
            isOpen ? "bg-accent-signal text-white border-transparent" : ""
          }`}
        >
          {isOpen ? <Minus size={16} strokeWidth={1.75} /> : <Plus size={16} strokeWidth={1.75} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 md:pb-16 px-1 md:px-2">
              {/* Image */}
              <div className="border hairline aspect-[16/9] overflow-hidden mb-10 bg-[hsl(var(--secondary))]">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Tags + live */}
              <div className="flex flex-wrap items-center gap-2 mb-10">
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[12px] uppercase tracking-[0.18em] px-3 py-1.5 border hairline-strong"
                  >
                    {t}
                  </span>
                ))}
                {cs.live?.url && (
                  <a
                    href={cs.live.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`case-live-${cs.id}`}
                    className="ml-auto inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] px-3 py-1.5 bg-accent-signal text-white"
                  >
                    Live → {cs.live.label}
                    <ArrowUpRight size={12} strokeWidth={2} />
                  </a>
                )}
              </div>

              {/* Problem / role grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 mb-12">
                <div className="md:col-span-7">
                  <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-3">
                    The Problem
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">{cs.problem}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-3">
                    My Role
                  </p>
                  <p className="text-base leading-relaxed">{cs.role}</p>
                </div>
              </div>

              {/* Challenges */}
              <div className="mb-12">
                <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-4">
                  Key Challenges
                </p>
                <ul className="space-y-3">
                  {cs.challenges.map((c, i) => (
                    <li key={i} className="flex gap-4 border-b hairline pb-3">
                      <span className="font-mono text-xs text-accent-signal pt-1 w-6 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process steps */}
              <div className="mb-12">
                <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-6">
                  Design Process
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border hairline">
                  {cs.process.map((p, i) => (
                    <div
                      key={p.step}
                      className={`p-6 ${
                        i > 0
                          ? "lg:border-l hairline border-t lg:border-t-0 sm:border-l sm:[&:nth-child(odd)]:border-l-0 lg:[&:nth-child(odd)]:border-l"
                          : ""
                      } ${i >= 2 ? "sm:border-t lg:border-t-0 hairline" : ""}`}
                    >
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-mono text-xs text-[hsl(var(--muted-foreground))]">
                          {p.step}
                        </span>
                        <span className="font-display font-bold text-lg">{p.title}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decisions */}
              <div className="mb-12">
                <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-4">
                  Key Design Decisions
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                  {cs.decisions.map((d, i) => (
                    <li key={i} className="flex gap-3 border-b hairline pb-3">
                      <span className="text-accent-signal pt-1">→</span>
                      <span className="text-sm md:text-base leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div className="border-t border-b hairline-strong grid grid-cols-1 md:grid-cols-3">
                {cs.outcomes.map((o, i) => (
                  <div
                    key={o.label}
                    className={`p-6 md:p-8 ${
                      i > 0 ? "md:border-l hairline border-t md:border-t-0" : ""
                    }`}
                  >
                    <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-3">
                      Outcome / {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-display font-black text-4xl md:text-5xl tracking-tighter text-accent-signal">
                      {o.value}
                    </div>
                    <div className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                      {o.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Close trigger */}
              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  onClick={onToggle}
                  data-testid={`case-close-${cs.id}`}
                  className="inline-flex items-center gap-2 h-10 px-4 border hairline-strong font-mono text-[11px] uppercase tracking-[0.2em] hover:text-accent-signal hover:border-accent-signal transition-colors"
                >
                  Close case study <X size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function CaseStudies() {
  const [openId, setOpenId] = useState("filejet");
  return (
    <section
      id="work"
      data-testid="work-section"
      className="relative border-b hairline py-20 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <SectionTag number="02 —" label="Selected Work" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 mb-12">
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
              travel platforms and premium airline systems. Tap any row to
              unfold the process, decisions, and measured outcomes.
            </p>
          </FadeUp>
        </div>

        <div>
          {caseStudies.map((cs) => (
            <CaseStudyRow
              key={cs.id}
              cs={cs}
              isOpen={openId === cs.id}
              onToggle={() => setOpenId(openId === cs.id ? null : cs.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
