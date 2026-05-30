import { useEffect } from "react";
import Lenis from "lenis";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { CaseStudies } from "../components/CaseStudies";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Portfolio() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf;
    const tick = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Anchor click smooth scroll using lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -56 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen grain bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
