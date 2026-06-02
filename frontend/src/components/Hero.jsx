import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile, heroStats } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 border-b hairline overflow-hidden"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Top meta row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-signal animate-pulse" />
            {profile.available}
          </motion.span>
          <span className="hidden sm:inline opacity-60">/</span>
          <span>{profile.years} Years</span>
          <span className="hidden sm:inline opacity-60">/</span>
          <span>{profile.location}</span>
        </div>

        {/* Massive name */}
        <h1
          data-testid="hero-name"
          className="font-display font-black uppercase leading-[0.85] tracking-tighter mt-8 md:mt-12"
          style={{ fontSize: "clamp(56px, 13vw, 220px)" }}
        >
          <span className="block">
            <Reveal text="Anu" />
          </span>
          <span className="block">
            <Reveal text="Gupta." delay={0.15} />
            <span className="inline-block align-baseline ml-3 text-accent-signal">
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ display: "inline-block" }}
              >
                ✱
              </motion.span>
            </span>
          </span>
        </h1>

        {/* Sub grid: role + intro + cta */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10 items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-3">
              ↳ Role
            </p>
            <p className="font-display font-bold text-2xl md:text-3xl leading-tight">
              UI/UX Designer
              <span className="text-accent-signal"> — </span>
              Designing seamless, user-centered experiences that drive engagement and innovation.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))] mb-3">
              ↳ About
            </p>
            <p className="text-base md:text-lg leading-relaxed text-[hsl(var(--foreground))]">
              {profile.intro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                data-testid="hero-view-work"
                className="inline-flex items-center gap-2 h-11 px-5 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-accent-signal hover:text-white transition-colors"
              >
                View Case Studies
                <ArrowDown size={14} strokeWidth={2} />
              </a>
              <a
                href="#contact"
                data-testid="hero-get-in-touch"
                className="inline-flex items-center gap-2 h-11 px-5 border hairline-strong font-mono text-[11px] uppercase tracking-[0.2em] hover:text-accent-signal hover:border-accent-signal transition-colors"
              >
                Get in Touch
                <Sparkles size={13} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 md:mt-24 border-t hairline grid grid-cols-1 md:grid-cols-3">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-testid={`hero-stat-${i}`}
              className={`py-8 md:py-10 px-1 md:px-6 ${
                i > 0 ? "md:border-l hairline border-t md:border-t-0" : ""
              } flex flex-col gap-2`}
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
                0{i + 1} / Outcome
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-5xl md:text-6xl tracking-tighter">
                  {s.value}
                </span>
                <span className="text-sm md:text-base text-[hsl(var(--muted-foreground))] max-w-[16ch]">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
