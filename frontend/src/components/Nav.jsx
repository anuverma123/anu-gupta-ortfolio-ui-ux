import { useEffect, useState } from "react";
import { Sun, Moon, ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { navItems, profile } from "../data/portfolio";
import { downloadResumePdf } from "../lib/downloadResume";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        data-testid="site-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[hsl(var(--background))]/75 border-b hairline"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            data-testid="nav-logo"
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 border hairline-strong font-display font-black">
              {profile.initials}
            </span>
            <span className="hidden sm:inline opacity-70 group-hover:opacity-100">
              {profile.name}
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase()}`}
                className="link-line opacity-80 hover:opacity-100 transition-opacity"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              data-testid="theme-toggle"
              aria-label="Toggle theme"
              className="w-9 h-9 inline-flex items-center justify-center border hairline-strong hover:bg-[hsl(var(--secondary))] transition-colors"
            >
              {theme === "dark" ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
            </button>
            <button
              type="button"
              onClick={downloadResumePdf}
              data-testid="nav-download-resume"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 border hairline-strong font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] transition-colors"
            >
              <Download size={13} strokeWidth={1.5} />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              data-testid="nav-hire-me"
              className="hidden md:inline-flex items-center gap-2 h-9 px-4 bg-accent-signal text-white font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] transition-colors"
            >
              <span>Hire me</span>
              <ArrowUpRight size={13} strokeWidth={2} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              data-testid="nav-menu-open"
              className="md:hidden w-9 h-9 inline-flex items-center justify-center border hairline-strong"
              aria-label="Open menu"
            >
              <Menu size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="fixed inset-0 z-[60] bg-[hsl(var(--background))] md:hidden flex flex-col"
        >
          <div className="h-16 px-6 flex items-center justify-between border-b hairline">
            <span className="font-mono text-xs uppercase tracking-[0.2em]">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              data-testid="nav-menu-close"
              className="w-9 h-9 inline-flex items-center justify-center border hairline-strong"
              aria-label="Close menu"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-6">
            {navItems.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                className="flex items-baseline justify-between border-b hairline pb-4"
              >
                <span className="font-display text-4xl font-bold">{n.label}</span>
                <span className="font-mono text-[10px] opacity-50">0{i + 1}</span>
              </a>
            ))}
            <div className="mt-auto flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  downloadResumePdf();
                  setOpen(false);
                }}
                data-testid="mobile-download-resume"
                className="h-12 inline-flex items-center justify-center gap-2 border hairline-strong font-mono text-xs uppercase tracking-[0.2em]"
              >
                <Download size={14} strokeWidth={1.5} /> Download Resume
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                data-testid="mobile-hire-me"
                className="h-12 inline-flex items-center justify-center gap-2 bg-accent-signal text-white font-mono text-xs uppercase tracking-[0.2em]"
              >
                Hire me <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
