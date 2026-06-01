import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sikandar Ali Abdul | Senior UX Designer",
  description:
    "Senior UX Designer with 11 years designing enterprise SaaS, government civic platforms, and consumer products across US, UAE, and India. Open to Gulf · India · Singapore · Remote.",
};

const caseStudies = [
  {
    slug: "javelina",
    active: true,
    thumbPos: "center 20%",
    eyebrow: "Enterprise SaaS · US Health Insurance · 2021–Present",
    title: "One platform. Multiple Fortune 500 clients.",
    subtitle: "One design architecture that scales.",
    outcome: "Founded the UX practice from zero. 120+ component design system and AI-assisted workflows cut dev handoff time by 40% and new-client onboarding from weeks to under 24 hours.",
    tags: ["Multi-Tenant", "Design Systems", "AI Workflows", "US Market"],
    thumb: "/img/javelina/branding_javelina.png",
  },
  {
    slug: "dubai-municipality",
    active: false,
    thumbPos: "center top",
    eyebrow: "Government Civic · UAE · 2020–2021",
    title: "Designing for 3.5 million residents.",
    subtitle: "Bilingual civic UX that got approved after prior submissions were rejected.",
    outcome: "Lead UX Designer onsite in Dubai. Full Arabic/English parity, designed both directions simultaneously and not retrofitted RTL.",
    tags: ["Government", "RTL / Bilingual", "Gulf Market"],
    thumb: "/img/dubai/Dubai-English-Arabic.png",
  },
  {
    slug: "jet-airways",
    active: false,
    thumbPos: "center top",
    eyebrow: "Consumer Aviation · India · 2015–2019",
    title: "Every consumer touchpoint. Every platform.",
    subtitle: "One consistent experience across six.",
    outcome: "Shipped production apps across desktop web, iOS, Android, Apple Watch, and a B2B travel agent portal for one of India's top 3 airlines.",
    tags: ["Aviation", "iOS · Android · Web", "Apple Watch", "B2B + B2C"],
    thumb: "/img/jetairways/jetairways-1.png",
  },
  {
    slug: "blinkwiser",
    active: true,
    thumbPos: "center top",
    eyebrow: "AI SaaS · Solo Founder · 2025–Present",
    title: "Designing and shipping AI products end-to-end.",
    subtitle: "Proof that I understand products from the inside.",
    outcome: "Two live AI SaaS tools: a carousel builder with active users and a LangChain-powered video course builder, designed, built, and shipped solo from concept to production.",
    tags: ["AI SaaS", "Solo Founder", "End-to-End", "Shipped Product"],
    thumb: "/img/blinkwiser/carousel-editor.png",
  },
];

const numbers = [
  { stat: "< 24 hrs", context: "Time to onboard a new Fortune 500 client onto Javelina, fully branded and live" },
  { stat: "−40%", context: "Dev handoff time, via an AI design operating system built before the org adopted any AI tooling" },
  { stat: "9 → 5", context: "Javelina Open Enrollment steps: complexity halved, zero decisions removed" },
  { stat: "3.5M", context: "Dubai residents served by the bilingual civic platform" },
  { stat: "6 platforms", context: "Jet Airways: web, iOS, Android, Apple Watch, mobile web, and B2B, all in production simultaneously" },
  { stat: "1 → 4", context: "Javelina design team: founding solo designer to leading a team of four" },
];

const keyFacts = [
  { label: "Based", value: "Pune, India · Open to Gulf, India, Singapore, Remote" },
  { label: "Experience", value: "11 years · Enterprise SaaS, Government, Consumer" },
  { label: "Last role", value: "Lead UX Designer · Javelina · Team of 4 · 2021–Present" },
  { label: "Also", value: "Founder, Blinkwiser: 2 live AI SaaS products" },
  { label: "Clients", value: "Cigna · Dubai Municipality · Jet Airways · Ministry of Hajj" },
];

const services = [
  { title: "Enterprise UX", desc: "Complex multi-tenant SaaS, regulated industries, high-stakes flows where errors cost money or compliance." },
  { title: "Design Systems", desc: "Token-based, multi-brand systems that let teams ship faster without rebuilding from scratch each client." },
  { title: "AI-Assisted Workflows", desc: "Built prompt libraries and design operating systems that give AI accurate context of your design system, producing targeted rather than generic output." },
  { title: "Government & Civic UX", desc: "Onsite UAE government experience. Proven in high-accountability delivery environments with formal stakeholder sign-off." },
  { title: "RTL / Bilingual Design", desc: "Arabic/English parity from the first wireframe, not retrofitted. Both directions designed simultaneously." },
  { title: "UX Leadership", desc: "Founding designer track record: built teams, hired designers, and set practice standards from zero." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[960px] mx-auto px-6 pt-20 pb-24" style={{
        background: "radial-gradient(ellipse 800px 500px at 10% 80%, color-mix(in srgb, var(--accent) 5%, transparent) 0%, transparent 70%)",
      }}>
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-6" style={{ color: "var(--accent)" }}>
          Open to Gulf · India · Singapore · Remote · 2026
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-3" style={{ color: "var(--text-primary)" }}>
          Sikandar Ali Abdul
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold leading-[1.15] tracking-[-0.02em] mb-6" style={{ color: "var(--text-primary)" }}>
          <span className="font-semibold tracking-tight" style={{ color: "var(--accent)" }}>Senior UX Designer</span>{" "}
          <span style={{ color: "var(--text-secondary)" }}>who designs enterprise systems and builds AI products.</span>
        </h2>

        <p className="text-base leading-[1.85] mb-10 max-w-[580px]" style={{ color: "var(--text-secondary)" }}>
          11 years architecting complex B2B platforms, government civic systems, and consumer products at scale,
          across the US, UAE, and India. Currently open to senior and lead UX roles. I use AI to move faster.
          I build design systems that make teams faster. I design for users who can't afford errors.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: "var(--text-primary)", color: "var(--bg-base)" }}
          >
            See my work ↓
          </a>
          <a
            href="mailto:ali050786@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────── */}
      <section id="work" className="max-w-[960px] mx-auto px-6 pb-20">
        <div className="pt-16 mb-10" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-2" style={{ color: "var(--text-muted)" }}>
            Selected Work
          </p>
          <h2 className="text-2xl font-bold tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
            11 years. Four industries.{" "}
            <span className="font-semibold tracking-tight" style={{ color: "var(--accent)" }}>One consistent thread.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-study/${cs.slug}`}
              className="group block rounded-xl overflow-hidden transition-all duration-200 hover:bg-[var(--bg-elevated)]"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              {/* Thumbnail: only shown when thumb is set */}
              {cs.thumb && (
                <div className="w-full overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
                  <Image
                    src={cs.thumb}
                    alt={cs.title}
                    width={1969}
                    height={2600}
                    className="w-full h-52 object-cover"
                    style={{ objectPosition: cs.thumbPos ?? "center top" }}
                  />
                </div>
              )}

              <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
                  {cs.eyebrow}
                </p>
                {cs.active && (
                  <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)" }}>
                    Active
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold tracking-[-0.02em] mb-1 transition-colors" style={{ color: "var(--text-primary)" }}>
                {cs.title}
              </h3>
              <p className="text-sm mb-3 font-semibold tracking-tight" style={{ color: "var(--accent)" }}>
                {cs.subtitle}
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                {cs.outcome}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-full font-medium font-mono"
                      style={{
                        color: "color-mix(in srgb, var(--accent) 80%, transparent)",
                        border: "1px solid color-mix(in srgb, var(--accent) 18%, transparent)",
                        background: "color-mix(in srgb, var(--accent) 5%, transparent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-mono underline-offset-2 group-hover:underline" style={{ color: "var(--accent)" }}>
                  Read case study →
                </span>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── By the numbers ───────────────────────────────── */}
      <section className="max-w-[960px] mx-auto px-6 pb-20">
        <div className="pt-16" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-10" style={{ color: "var(--text-muted)" }}>
            By the numbers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
            {numbers.map((n) => (
              <div key={n.stat}>
                <p className="text-2xl font-bold tracking-tight mb-2" style={{ color: "var(--accent)" }}>
                  {n.stat}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {n.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="max-w-[960px] mx-auto px-6 pb-20">
        <div className="pt-16" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-6" style={{ color: "var(--text-muted)" }}>
            About
          </p>
          <div className="grid sm:grid-cols-[1fr_180px] gap-10 items-start">
            <div>
              <p className="text-base leading-[1.85] mb-4" style={{ color: "var(--text-secondary)" }}>
                I'm a Senior UX Designer with 11 years of experience across enterprise SaaS, government platforms,
                and consumer products. I've designed a multi-tenant health insurance platform for Fortune 500
                clients including Cigna, a civic digital platform for Dubai Municipality, a complete
                multi-platform product suite for Jet Airways, and a service platform for the Saudi Ministry
                of Hajj and Umrah.
              </p>
              <p className="text-base leading-[1.85] mb-4" style={{ color: "var(--text-secondary)" }}>
                The thread across all of it: systems thinking, architectural decisions, and design that has
                to work at scale. I don't just use AI as a tool. I've built the infrastructure that makes
                AI useful for design teams. At Javelina I architected a design operating system with prompt
                libraries and AI-assisted workflows that cut handoff time by 40%.
              </p>
              <p className="text-base leading-[1.85]" style={{ color: "var(--text-secondary)" }}>
                Outside client work, I build. Under Blinkwiser I've shipped two AI-powered SaaS products
                independently. I started as the sole designer at Javelina and grew into leading a team of
                four. I sit at the intersection of design, product thinking, and engineering, and that's
                where the most interesting problems live.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/Sikandar_Ali_Resume.pdf"
                  download="Sikandar_Ali_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{ background: "var(--text-primary)", color: "var(--bg-base)" }}
                >
                  Download Resume ↓
                </a>
                <a
                  href="https://www.linkedin.com/in/sikandar-ux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <Image
                src="/img/1765377096878.jpeg"
                alt="Sikandar Ali Abdul"
                width={600}
                height={600}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Key facts */}
          <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase mb-6" style={{ color: "var(--text-muted)" }}>
              Key Facts
            </p>
            <div className="flex flex-col">
              {keyFacts.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest min-w-[90px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Bring ─────────────────────────────────── */}
      <section id="services" className="max-w-[960px] mx-auto px-6 pb-20">
        <div className="pt-16" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-2" style={{ color: "var(--text-muted)" }}>
            What I Bring
          </p>
          <p className="text-xs mb-8" style={{ color: "var(--text-muted)" }}>
            Areas with a track record, not just an interest.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-5 rounded-xl"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="max-w-[960px] mx-auto px-6 pb-20">
        <div className="pt-16" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
            Contact
          </p>
          <h2 className="text-2xl font-bold tracking-[-0.02em] mb-4" style={{ color: "var(--text-primary)" }}>
            Let's talk.
          </h2>
          <p className="text-base leading-[1.8] mb-8 max-w-[520px]" style={{ color: "var(--text-secondary)" }}>
            Open to senior and lead UX roles in the Gulf, Singapore, and remote, particularly enterprise SaaS,
            fintech, government, and regulated industries. Usually responds within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ali050786@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{ background: "var(--text-primary)", color: "var(--bg-base)" }}
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/sikandar-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{ border: "1px solid var(--border)", color: "var(--text-secondary)" }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
