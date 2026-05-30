// Portfolio content — Anu Gupta, UI/UX Designer

export const profile = {
  name: "Anu Gupta",
  initials: "AG",
  role: "UI/UX Designer",
  years: "4+",
  location: "Faridabad, India",
  email: "anugupta1405@gmail.com",
  linkedin: "https://linkedin.com/in/anu-gupta",
  portfolioUrl: "https://anugupta-portfolio.netlify.app",
  available: "Available for roles",
  intro:
    "4+ years designing enterprise SaaS products — from B2B travel platforms and airline booking systems to compliance dashboards. Expert in design systems, interaction design, and cross-functional delivery.",
  longBio:
    "I'm Anu — a UI/UX Designer with 4+ years building enterprise SaaS products. My work spans user research, wireframing, high-fidelity design, and design systems — with a deep focus on turning complex requirements into interfaces that are both visually refined and genuinely usable.",
  longBio2:
    "I've built 3 design systems with 150–180+ components, achieved 95% adoption across product teams, and reduced design-to-development handoff friction by 50% through rigorous documentation and close cross-functional collaboration.",
  longBio3:
    "Proficient with Figma (expert level), AI-assisted design workflows, WCAG 2.1 AA accessibility standards, and low-code platforms including Webflow and Framer.",
};

export const heroStats = [
  { value: "95%", label: "Design System Adoption" },
  { value: "40%", label: "Handoff Friction Reduced" },
  { value: "32%", label: "Usability Improvement" },
];

export const aboutStats = [
  { value: "4+", label: "Years Experience" },
  { value: "3", label: "Design Systems Built" },
  { value: "180+", label: "Components Designed" },
  { value: "95%", label: "DS Adoption Rate" },
];

export const caseStudies = [
  {
    id: "filejet",
    number: "01",
    category: "Enterprise SaaS · Legal Dashboard",
    title: "Filejet — Entity Management Dashboard",
    summary:
      "Full dashboard UI revamp — redesigned information architecture, built a scalable component system, and eliminated 40% of task completion friction for enterprise legal and compliance users.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/11c51330-92cc-4766-a33a-3c0354d8c2d0/images/99fa7aa7adfac5c8b159dd38966c635b5d436604ad8df5839b142a3d5f139fa5.png",
    tags: ["Figma", "Design Systems", "Tailwind CSS", "Google Charts", "DataTables", "Enterprise UX"],
    live: { label: "filejet-redesign.vercel.app", url: "https://filejet-redesign.vercel.app" },
    problem:
      "Enterprise legal and compliance teams managing hundreds of entities were losing time to poor information hierarchy and navigation dead-ends. Critical filing deadlines were buried in unfiltered data tables. The UI hadn't been updated in years and failed entirely on mobile.",
    role:
      "Sole UI/UX designer and frontend implementer — full workflow from heuristic audit through Figma system design to Tailwind CSS production implementation.",
    challenges: [
      "12+ navigation pain points identified via heuristic evaluation",
      "Data tables with no filtering, sorting, or search — users scrolling through hundreds of rows",
      "No visual hierarchy — critical overdue alerts looked identical to routine updates",
      "Zero mobile responsiveness across any screen size",
      "Design-to-dev gap causing repeated implementation errors post-handoff",
    ],
    process: [
      { step: "01", title: "Audit", body: "Heuristic eval · 12+ pain points mapped · user journey analysis" },
      { step: "02", title: "Architecture", body: "Nav restructure · content hierarchy · data grouping logic redesigned" },
      { step: "03", title: "System Design", body: "150+ component Figma library · tokens · auto-layout · all states" },
      { step: "04", title: "Deliver", body: "Pixel-perfect Tailwind · Google Charts · DataTables · documented handoff" },
    ],
    decisions: [
      "Inline column filtering, global search, and sortable headers on all data tables — average search time cut by ~60%",
      "Colour-coded urgency badge system (Overdue / Urgent / Upcoming) — compliance deadlines visible at a glance without drilling into records",
      "Sidebar navigation with contextual grouping — click depth reduced from 4–5 to 1–2 for the most common workflows",
      "150+ reusable Figma components with auto-layout and design tokens — 95% company-wide adoption, zero redesign cycles post-launch",
      "Figma AI used for rapid layout variant generation, cutting component exploration time by ~25%",
      "Detailed handoff documentation written for every component — eliminated back-and-forth with dev and QA teams",
    ],
    outcomes: [
      { value: "32%", label: "Usability improvement" },
      { value: "40%", label: "Task completion time reduced" },
      { value: "50%", label: "Handoff friction cut" },
    ],
  },
  {
    id: "travog",
    number: "02",
    category: "B2B SaaS · Travel & Expense",
    title: "Travog — Corporate Travel & Expense Platform",
    summary:
      "End-to-end UI/UX design for an enterprise SaaS platform covering travel booking, expense tracking, multi-level approvals, and policy management across 6 product modules.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/11c51330-92cc-4766-a33a-3c0354d8c2d0/images/fadfe54609929046099dab15a8f0c718ed7b77f7e0519dbc5229ad7f12837708.png",
    tags: ["Figma", "Enterprise SaaS", "Responsive Design", "Design Systems", "Prototyping", "User Research"],
    live: { label: "travog.com", url: "https://travog.com" },
    problem:
      "Enterprise employees juggled disconnected tools for travel booking, expense submissions, and multi-level approvals — causing high error rates, approval bottlenecks, and low adoption. Finance teams had no real-time visibility into spend.",
    role:
      "Sole UI/UX designer embedded with PM and dev team from discovery through delivery. Responsible for all interaction design, component architecture, and handoff across all 6 product modules.",
    challenges: [
      "Users abandoned the booking flow at confirmation — policy violations surfaced too late",
      "Approvers processing 10+ requests daily had no bulk-action capability",
      "Mobile expense capture required 6+ steps — high drop-off on field submissions",
      "Inconsistent UI patterns across modules caused first-time user confusion",
      "No real-time status visibility on in-flight travel requests",
    ],
    process: [
      { step: "01", title: "Discovery", body: "Stakeholder workshops · user interviews · workflow mapping across 6 modules" },
      { step: "02", title: "Wireframes", body: "Low-fi booking, expense, and approval flows · validated with PM and dev" },
      { step: "03", title: "High-Fidelity", body: "80+ product-specific components · responsive layouts · all interaction states" },
      { step: "04", title: "Handoff", body: "Embedded in sprints · real-time edge case resolution · zero redesign cycles" },
    ],
    decisions: [
      "Booking flow redesigned as 3-step guided experience — inline policy alerts at step 2 eliminated confirmation drop-off entirely",
      "Bulk-action expense dashboard — approvers process 10+ requests in a single session with one-click approve/reject",
      "Mobile expense capture redesigned from 6 steps to 3 (photo → amount → submit)",
      "Real-time travel status tracker — gave employees and managers live visibility into booking approvals and itinerary changes",
      "Built 80+ product-specific Figma components ensuring visual and interaction consistency across all 6 modules",
      "Partnered with dev team in every sprint to resolve edge cases — zero redesign cycles post-launch",
    ],
    outcomes: [
      { value: "23%", label: "User engagement lift" },
      { value: "40%", label: "Handoff cycle reduced" },
      { value: "6→3", label: "Expense capture steps" },
    ],
  },
  {
    id: "saudia",
    number: "03",
    category: "Airline · Figma Design · System Integration",
    title: "Saudia Airlines — Feature Design & UI Consistency",
    summary:
      "Designed new product features within Saudia's established design system — maintaining premium brand standards, visual consistency, and accessibility while introducing complex new booking functionality.",
    image:
      "https://static.prod-images.emergentagent.com/jobs/11c51330-92cc-4766-a33a-3c0354d8c2d0/images/590df04da484b2acb66c6e4292e20ea66bdd03414e6b485d8db6472542e5d4be.png",
    tags: ["Figma", "Design Systems", "UI Consistency", "Responsive", "WCAG AA", "Airline UX"],
    live: { label: "Figma designs — homepage, flight results, business class, passenger form", url: null },
    problem:
      "Working within a premium client's established design system requires a fundamentally different discipline than building from scratch. Every new screen and component had to feel native to Saudia's existing product — communicating the same trust and premium hospitality their brand is built on — while introducing entirely new booking functionality.",
    role:
      "UI/UX designer — Figma design only. Audited Saudia's existing design system, designed all new feature screens within their established component library, and collaborated with the dev team on implementation specifications.",
    challenges: [
      "All new screens must use Saudia's existing typography, colour tokens, spacing, and component patterns",
      "No modifications to existing pages or core components permitted",
      "Full responsiveness across desktop, tablet, and mobile breakpoints",
      "WCAG AA accessibility compliance throughout all new screens",
      "New features must feel indistinguishable from original product to end users",
    ],
    process: [
      { step: "01", title: "System audit", body: "Deep review of Saudia's tokens, components, and interaction standards" },
      { step: "02", title: "Pattern match", body: "Mapped all new feature requirements to existing components before designing anything new" },
      { step: "03", title: "Figma design", body: "New screens designed entirely within Saudia's library · stakeholder review at each stage" },
      { step: "04", title: "Spec & handoff", body: "Documented new components in Saudia's token format for internal team adoption" },
    ],
    decisions: [
      "Full component audit before designing a single new screen — 100% of new requirements mapped to existing Saudia patterns first, minimising brand inconsistency risk",
      "Policy compliance badges (In policy / Out of policy) designed within Saudia's colour system — immediately scannable without disrupting the booking flow visual hierarchy",
      "Preference indicator (\"70% preference\") introduced as a lightweight contextual signal to guide corporate travel decisions without cluttering the fare comparison UI",
      "Only 4 net-new components created across the entire engagement — all others built from Saudia's existing library, ensuring users cannot distinguish new features from the original product",
      "Passenger form designed with progressive disclosure — mandatory fields upfront, optional sections (Frequent Flyer, Additional Preferences) collapsed by default to reduce cognitive load",
      "All new screens passed WCAG AA accessibility audit — semantic structure, correct contrast ratios, keyboard navigation throughout",
    ],
    outcomes: [
      { value: "4", label: "Net-new components only" },
      { value: "100%", label: "Brand consistency maintained" },
      { value: "WCAG AA", label: "Accessibility standard met" },
    ],
  },
];

export const skills = [
  { area: "Design", name: "Figma", note: "Expert · Auto-Layout · Tokens · Components" },
  { area: "Systems", name: "Design Systems", note: "3 systems · 150–180+ components each" },
  { area: "Research", name: "UX Research", note: "Interviews · Competitive Analysis · Usability Testing" },
  { area: "Design", name: "Interaction Design", note: "Flows · Microinteractions · Prototyping" },
  { area: "Standards", name: "Accessibility", note: "WCAG 2.1 AA — applied on all projects" },
  { area: "Frontend", name: "Responsive Design", note: "Mobile-first · cross-browser tested" },
  { area: "Modern", name: "AI-Assisted Workflows", note: "Figma AI · Cursor · ChatGPT" },
  { area: "Low-code", name: "Webflow / Framer", note: "Design-to-code · no-code builders" },
  { area: "Frontend", name: "HTML / CSS / JS", note: "Production-ready · pixel-perfect" },
];

export const experience = [
  {
    period: "Nov 2024 – Apr 2026",
    company: "Appcore Labs",
    location: "India · Mohali",
    role: "UI/UX Designer",
    bullets: [
      "Led Filejet entity management dashboard redesign — 32% usability improvement, 40% task time reduction",
      "Architected 150+ component Figma design system — 95% company-wide adoption",
      "Reduced design-to-development handoff friction by 50% through documentation and sprint collaboration",
      "Applied AI-assisted design workflows (Figma AI, Cursor) — ~25% reduction in design cycle time",
    ],
  },
  {
    period: "Jul 2023 – Nov 2024",
    company: "Quadlabs Technologies",
    location: "Gurgaon",
    role: "UI/UX Designer",
    bullets: [
      "Owned UI/UX across 3+ modules of Travog B2B corporate travel & expense SaaS platform",
      "Built 180+ component Figma component library — design-to-handoff cycle reduced 40%",
      "Conducted user research and competitive analysis — findings shaped navigation and booking flow redesign",
      "WCAG 2.1 AA accessibility compliance across all product surfaces",
    ],
  },
  {
    period: "Oct 2021 – May 2023",
    company: "Bebo Technologies",
    location: "Mohali",
    role: "UI/UX Designer",
    bullets: [
      "Designed responsive web interfaces — 18% task completion rate improvement",
      "Contributed to design system and component library development across product teams",
      "Translated business requirements into intuitive, accessible user experiences",
    ],
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
