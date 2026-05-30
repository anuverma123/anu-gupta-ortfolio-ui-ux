import { profile } from "../data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative py-12 md:py-16"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Marquee */}
        <div className="border-y hairline-strong overflow-hidden py-6 mb-12 select-none">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12">
                {[
                  "Available for Roles",
                  "UI/UX Designer",
                  "Design Systems",
                  "Enterprise SaaS",
                  "Figma Expert",
                  "WCAG 2.1 AA",
                  "Anu Gupta",
                ].map((t, i) => (
                  <span
                    key={`${k}-${i}`}
                    className="font-display font-black uppercase tracking-tighter text-5xl md:text-7xl flex items-center gap-12"
                  >
                    {t}
                    <span className="text-accent-signal">✱</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
              © {new Date().getFullYear()} · {profile.name}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[hsl(var(--muted-foreground))]">
              {profile.role} · {profile.location}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em]">
            <a
              href={`mailto:${profile.email}`}
              data-testid="footer-email"
              className="link-line"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              className="link-line"
            >
              LinkedIn
            </a>
            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-portfolio"
              className="link-line"
            >
              Portfolio
            </a>
            <a
              href="#top"
              data-testid="footer-back-to-top"
              className="inline-flex items-center gap-2 h-9 px-3 border hairline-strong hover:bg-accent-signal hover:text-white hover:border-transparent transition-colors"
            >
              Back to top <ArrowUp size={12} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
