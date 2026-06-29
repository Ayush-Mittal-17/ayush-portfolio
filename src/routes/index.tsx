import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Sparkles,
  Cpu,
  Database,
  Code2,
  Wrench,
  Layers,
  Server,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayush Mittal — Software Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Ayush Mittal builds AI-powered products and scalable web applications. Full stack engineer focused on intelligent automation, backend systems, and modern web.",
      },
      { property: "og:title", content: "Ayush Mittal — Software Engineer" },
      {
        property: "og:description",
        content:
          "Building AI-powered products and scalable web applications. Full stack developer, backend systems, AI integrations.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const HEADLINES = [
  "Building AI-Powered Digital Products",
  "Engineering Scalable Web Applications",
  "Turning Ideas into Production-Ready Systems",
  "Building Fast, Reliable and Intelligent Software",
];

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Philosophy />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-background/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-[15px] font-bold text-background">
            AM
          </span>
          <span className="text-lg font-medium tracking-tight">Ayush Mittal</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-3 py-1.5 text-base text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-base font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-28 md:pt-44 md:pb-40">
      {/* background */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
        <div className="absolute left-1/2 top-1/3 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[10%] h-[30vh] w-[30vh] rounded-full bg-violet/15 blur-[100px]" />
      </motion.div>
      <div className="noise-overlay" />

      <motion.div style={{ opacity }} className="mx-auto max-w-6xl px-6">
        <FadeUp delay={0}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
            </span>
            Available for new opportunities · 2026
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <h1 className="max-w-5xl text-balance text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Building{" "}
            <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              AI-powered products
            </span>{" "}
            and{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-electric via-electric to-violet bg-clip-text text-transparent">
                scalable web
              </span>
              <svg
                aria-hidden
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8 C 60 2, 140 12, 298 4"
                  stroke="url(#g)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="oklch(0.7 0.22 255)" />
                    <stop offset="1" stopColor="oklch(0.65 0.22 295)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            applications.
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mt-8 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
            Software Engineer with experience in full stack development, AI integrations,
            backend systems, and modern web technologies. I build products that combine
            intelligent automation, clean user experiences, and reliable engineering.
          </p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-base font-medium text-background transition-transform hover:scale-[1.02]"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-base font-medium text-foreground transition-colors hover:bg-white/[0.07]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Get in touch <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="mt-14 flex items-center gap-5 text-muted-foreground">
            <RotatingHeadline />
          </div>
        </FadeUp>

        <FadeUp delay={0.45}>
          <div className="mt-10 flex items-center gap-6 text-muted-foreground">
            <Social
              href="https://github.com/Ayush-Mittal-17"
              icon={<Github className="h-4 w-4" />} 
              label="GitHub"
            />
            <Social
              href="https://www.linkedin.com/in/ayushmittal17/"
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
            />
            <Social
              href="mailto:mittalayush989@gmail.com"
              icon={<Mail className="h-4 w-4" />}
              label="Email"
            />
          </div>
        </FadeUp>
      </motion.div>
    </section>
  );
}

function RotatingHeadline() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HEADLINES.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em]">
      <span className="h-px w-8 bg-white/15" />
      <span className="text-muted-foreground/70">currently</span>
      <div className="relative h-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={i}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block whitespace-nowrap text-foreground"
          >
            {HEADLINES[i]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 text-base transition-colors hover:text-foreground"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors group-hover:border-white/25 group-hover:bg-white/[0.06]">
        {icon}
      </span>
      {label}
    </a>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Tailwind",
    "TypeScript",
    "AI Integrations",
    "REST APIs",
    "Razorpay",
    "Appwrite",
    "Java",
    "C++",
  ];
  return (
    <section aria-hidden className="relative border-y border-white/5 bg-surface/40 py-6">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex shrink-0 gap-12 pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items, ...items].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/60"
            >
              {s} <span className="text-electric/60">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const stats = [
    { v: "3", l: "Internships" },
    { v: "5+", l: "Major Projects" },
    { v: "Full Stack", l: "Expertise" },
    { v: "AI", l: "Product Experience" },
  ];
  return (
    <Section id="about" eyebrow="About" title="The engineer behind the products">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            <span className="text-foreground">I'm a Computer Science Engineering student</span>{" "}
            with a strong interest in software engineering, backend development, and AI-powered
            applications.
          </p>
          <p>
            Over the last few years, I have worked across frontend, backend architecture, databases,
            authentication systems, payment integrations, and AI workflows — spanning internships,
            client projects, and independent product development.
          </p>
          <p>
            I enjoy transforming business ideas into scalable digital experiences that feel calm,
            intentional, and reliable.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2 pt-2">
            {[
              "MERN Stack Developer",
              "AI Product Builder",
              "Backend Enthusiast",
              "Problem Solver",
              "Strong DSA Foundation",
              "Continuous Learner",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-5"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="font-display text-3xl font-semibold tracking-tight">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- EXPERIENCE ---------- */
const EXP = [
  {
    role: "Software Developer Intern",
    org: "Trusting Brains IT Services Pvt. Ltd.",
    when: "Jan 2026 — Jun 2026",
    points: [
      "Developed scalable full-stack features using React, Node.js, and Express.",
      "Built REST APIs and dynamic UI systems serving production traffic.",
      "Improved application responsiveness and data handling efficiency.",
      "Implemented AI-powered features that automated workflows and improved operational efficiency.",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "Renu Sharma Healthcare & Education Foundation",
    when: "Aug 2025 — Nov 2025",
    points: [
      "Built core modules of an Intern Management System used internally.",
      "Developed task assignment and progress tracking features.",
      "Implemented authentication workflows using Appwrite.",
      "Enhanced usability and data consistency across modules.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    org: "IBM SkillsBuild Internship Program",
    when: "Jun 2024 — Aug 2024",
    points: [
      "Led a team of five interns across a multi-week build cycle.",
      "Built responsive educational platform components.",
      "Worked on marketplace functionality and dynamic product management.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="A timeline of building things">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:left-[11px]" />
        <ol className="space-y-10">
          {EXP.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative grid grid-cols-[24px_1fr] gap-6 md:grid-cols-[32px_1fr]"
            >
              <div className="pt-1.5">
                <span className="relative grid h-4 w-4 place-items-center rounded-full bg-background ring-1 ring-white/20 md:h-6 md:w-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric md:h-2 md:w-2" />
                </span>
              </div>
              <div className="group rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-white/20 hover:bg-surface md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight md:text-xl">{e.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {e.when}
                  </span>
                </div>
                <div className="mt-1 text-sm text-electric/90">{e.org}</div>
                <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------- PROJECTS ---------- */
const PROJECTS = [
  {
    name: "AI Saathi",
    category: "AI Career Platform",
    image:"/projects/aisaathi_img.jpeg",
    live:"https://www.aisaathi.com/",
    overview:
      "An AI-powered career development platform that helps candidates improve interview performance and build stronger resumes through realistic simulation and feedback.",
    features: [
      "AI Mock Interviews",
      "Resume Analysis & Builder",
      "JD-Based Recommendations",
      "Automated Evaluation Reports",
      "Role-Based HR Panel",
      "Candidate Management",
    ],
    stack: ["React", "Python", "FastAPI", "MySQL", "OpenAI"],
    visual: "interview",
  },
  {
    name: "Liorr",
    category: "Full Stack E-Commerce",
    image:"/projects/liorr.jpeg",
    live:"https://www.liorrluxury.com/",
    overview:
      "A complete e-commerce platform with customer-facing storefront and admin tooling — built end to end with secure payments and live inventory.",
    features: [
      "Dynamic Product Listings",
      "Shopping Cart & Checkout",
      "Razorpay Integration",
      "Inventory Management",
      "Admin Dashboard",
      "Realtime Product Updates",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    visual: "commerce",
  },
  {
    name: "FoodZy",
    category: "Recommendation System",
    image:"/projects/foodzy.jpeg",
    live:"https://foodzy-nine.vercel.app/",
    overview:
      "A smart food recommendation platform that combines real-time weather signals and user preferences to suggest meals and compare prices across providers.",
    features: [
      "Weather-Aware Recommendations",
      "Multi-Platform Price Comparison",
      "User Preference Modeling",
      "Aggregation Engine",
    ],
    stack: ["React", "Node.js", "External APIs"],
    visual: "weather",
  },
];

function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="Products built end-to-end"
      kicker="A handful of projects spanning AI, commerce, and intelligent recommendations."
    >
      <div className="space-y-8">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <motion.a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-2xl hover:shadow-electric/10"
    >
      <div className="grid md:grid-cols-2">
        {/* Visual */}
        <div className="relative order-2 min-h-[300px] overflow-hidden bg-gradient-to-br from-surface-2 to-background p-6 md:order-1 md:min-h-[480px] md:p-10">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-electric/15 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-violet/15 blur-3xl" />
          <div className="flex h-full items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl border border-white/10 aspect-video">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 flex flex-col justify-between p-6 md:order-2 md:p-12">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-electric/90">
                {String(index + 1).padStart(2, "0")} · {project.category}
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              {project.name}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {project.overview}
            </p>

            <div className="mt-7">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                Highlights
              </div>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-electric" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-6">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function ProjectMock({ variant }: { variant: string }) {
  if (variant === "interview") {
    return (
      <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-background/70 p-5 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-electric/20 text-electric">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-medium">AI Saathi · Session</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Live
          </span>
        </div>
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-muted-foreground">
          <span className="text-foreground">Q3.</span> Walk me through how you'd design a rate limiter
          for a high-traffic API.
        </div>
        <div className="rounded-xl border border-electric/20 bg-electric/[0.06] p-3 text-xs text-foreground/90">
          I'd start with a token bucket per user, backed by Redis with sliding window counters…
        </div>
        <div className="mt-auto grid grid-cols-3 gap-2 text-[10px]">
          {[
            ["Clarity", 92],
            ["Depth", 87],
            ["Structure", 95],
          ].map(([k, v]) => (
            <div key={k as string} className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <div className="font-mono uppercase tracking-widest text-muted-foreground">{k}</div>
              <div className="mt-1 text-base font-semibold text-foreground">{v}</div>
              <div className="mt-1 h-1 overflow-hidden rounded bg-white/5">
                <div className="h-full bg-electric" style={{ width: `${v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (variant === "commerce") {
    return (
      <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-background/70 p-5 backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Liorr · Dashboard</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-electric">
            +12.4% MoM
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Revenue", "₹4.2L"],
            ["Orders", "1,284"],
            ["AOV", "₹327"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {k}
              </div>
              <div className="mt-1 text-base font-semibold">{v}</div>
            </div>
          ))}
        </div>
        <div className="relative h-24 rounded-xl border border-white/5 bg-white/[0.02] p-3">
          <svg viewBox="0 0 200 60" className="h-full w-full">
            <defs>
              <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="oklch(0.7 0.22 255)" stopOpacity="0.5" />
                <stop offset="1" stopColor="oklch(0.7 0.22 255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 45 L20 38 L40 42 L60 28 L80 32 L100 18 L120 22 L140 12 L160 18 L180 8 L200 14 L200 60 L0 60 Z"
              fill="url(#lg)"
            />
            <path
              d="M0 45 L20 38 L40 42 L60 28 L80 32 L100 18 L120 22 L140 12 L160 18 L180 8 L200 14"
              stroke="oklch(0.7 0.22 255)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
        <div className="mt-auto space-y-1.5">
          {["Order #1042 · Shipped", "Order #1041 · Paid", "Order #1040 · Processing"].map((r) => (
            <div
              key={r}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-[11px] text-muted-foreground"
            >
              <span>{r}</span>
              <span className="font-mono text-electric/80">✓</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-background/70 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">FoodZy · Recommendations</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          24°C · Rain
        </span>
      </div>
      <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
        <div className="font-mono uppercase tracking-widest text-muted-foreground">
          Suggested for tonight
        </div>
        <div className="mt-2 text-foreground">Warm ramen, masala chai, butter chicken</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Swiggy", "₹289"],
          ["Zomato", "₹312"],
          ["EatSure", "₹275"],
          ["Magicpin", "₹298"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs"
          >
            <span className="text-muted-foreground">{k}</span>
            <span className="font-mono text-foreground">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-xl border border-electric/20 bg-electric/[0.06] p-3 text-xs text-foreground/90">
        Best value: <span className="font-medium">EatSure</span> · saves ₹37
      </div>
    </div>
  );
}

/* ---------- SKILLS ---------- */
const SKILL_GROUPS = [
  {
    icon: <Layers className="h-4 w-4" />,
    name: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    icon: <Server className="h-4 w-4" />,
    name: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    icon: <Database className="h-4 w-4" />,
    name: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    icon: <Code2 className="h-4 w-4" />,
    name: "Programming",
    items: ["Java", "C++"],
  },
  {
    icon: <Wrench className="h-4 w-4" />,
    name: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    icon: <Cpu className="h-4 w-4" />,
    name: "Core Concepts",
    items: ["REST APIs", "Authentication", "OOP", "Database Design"],
  },
];

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="The stack I reach for">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-white/20"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-electric">
                {g.icon}
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.2em]">{g.name}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-md border border-white/5 bg-white/[0.02] px-2.5 py-1 text-sm text-foreground/85 transition-colors group-hover:border-white/10"
                >
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PHILOSOPHY ---------- */
const PRINCIPLES = [
  "Understand the problem deeply.",
  "Design scalable architecture.",
  "Build with clean code practices.",
  "Focus on performance and reliability.",
  "Ship quickly, then iterate continuously.",
  "Use AI where it creates meaningful value.",
];
function Philosophy() {
  return (
    <Section eyebrow="Engineering Philosophy" title="How I build products">
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-2">
        {PRINCIPLES.map((p, i) => (
          <motion.li
            key={p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex items-start gap-4 bg-background p-7 transition-colors hover:bg-surface"
          >
            <span className="font-mono text-xs text-electric">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-lg font-medium tracking-tight">{p}</span>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- ACHIEVEMENTS ---------- */
const ACHV = [
  "Multiple internships across software development.",
  "Experience building client-facing products.",
  "AI application development experience.",
  "Strong foundation in DSA and problem solving.",
  "Hands-on full stack development experience.",
  "Leadership experience managing internship teams.",
];
function Achievements() {
  return (
    <Section eyebrow="Highlights" title="Things I'm proud of">
      <div className="grid gap-3 md:grid-cols-2">
        {ACHV.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="flex items-start gap-4 rounded-xl border border-white/10 bg-surface/60 p-5"
          >
            <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-electric/30 bg-electric/10 font-mono text-[12px] text-electric">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[18px] text-foreground/85">{a}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const items = [
    { icon: <Mail className="h-4 w-4" />, label: "Email", value: "mittalayush989@gmail.com", href: "mailto:mittalayush989@gmail.com" },
    { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", value: "www.linkedin.com/in/ayushmittal17/", href: "https://www.linkedin.com/in/ayushmittal17/" },
    { icon: <Github className="h-4 w-4" />, label: "GitHub", value: "www.github.com/Ayush-Mittal-17", href: "https://github.com/Ayush-Mittal-17" },
    { icon: <Phone className="h-4 w-4" />, label: "Phone", value: "+91 · 931 840 5929", href: "tel:+919318405929" },
  ];
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[40vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <FadeUp>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Contact
          </div>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-3xl text-balance text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1] tracking-[-0.03em]">
            Let's build something{" "}
            <span className="bg-gradient-to-br from-electric to-violet bg-clip-text text-transparent">
              meaningful
            </span>
            .
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-muted-foreground">
            Whether it's a startup idea, a software project, an AI product, or an engineering
            opportunity — I'm always open to connecting and collaborating.
          </p>
        </FadeUp>

        <FadeUp delay={0.25}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {items.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-surface/60 p-5 text-left transition-colors hover:border-white/25 hover:bg-surface"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-electric">
                    {c.icon}
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm text-foreground">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <div className="font-display text-base font-semibold tracking-tight">Ayush Mittal</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Building products. Solving problems. Learning continuously.
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="https://github.com/Ayush-Mittal-17" className="hover:text-foreground">GitHub</a>
          <a href="https://www.linkedin.com/in/ayushmittal17/" className="hover:text-foreground">LinkedIn</a>
          <a href="mailto:mittalayush989@gmail.com" className="hover:text-foreground">Email</a>
          <span className="font-mono text-xs uppercase tracking-[0.2em]">© 2026</span>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-sm text-muted-foreground/70">
        Designed & developed by Ayush Mittal.
      </div>
    </footer>
  );
}

/* ---------- Primitives ---------- */
function Section({
  id,
  eyebrow,
  title,
  kicker,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <FadeUp>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-white/15" />
              {eyebrow}
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-5 text-balance text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              {title}
            </h2>
          </FadeUp>
          {kicker && (
            <FadeUp delay={0.1}>
              <p className="mt-4 max-w-2xl text-muted-foreground">{kicker}</p>
            </FadeUp>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
