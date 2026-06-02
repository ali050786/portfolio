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
      {/* Ambient background mesh spots */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="relative max-w-[1400px] mx-auto h-full overflow-visible">
          <div className="ambient-blob blob-1" />
          <div className="ambient-blob blob-2" />
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[920px] mx-auto px-6 pt-16 pb-20 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-[var(--bg-surface)] text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] mb-8 shadow-sm" style={{ borderColor: "var(--border)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[var(--text-secondary)]">Open to Gulf · India · Singapore · Remote · 2026</span>
        </div>

        <h1 className="text-4xl sm:text-7xl font-serif font-bold leading-[1.05] tracking-[-0.03em] mb-4 text-[var(--text-primary)]">
          Sikandar Ali Abdul
        </h1>

        <h2 className="text-2xl sm:text-4xl font-light leading-[1.25] tracking-tight mb-8 text-[var(--text-secondary)]">
          <span className="font-serif font-bold text-[var(--accent)]">Senior UX Designer</span>{" "}
          who designs enterprise systems and builds AI products.
        </h2>

        <p className="text-base sm:text-lg leading-[1.8] mb-12 max-w-[660px] text-[var(--text-secondary)]">
          11 years architecting complex B2B platforms, government civic systems, and consumer products at scale,
          across the US, UAE, and India. Currently open to senior and lead UX roles. I use AI to move faster.
          I build design systems that make teams faster. I design for users who can't afford errors.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] shadow-md"
            style={{ background: "var(--accent-btn)", color: "#000" }}
          >
            See my work ↓
          </a>
          <a
            href="mailto:ali050786@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] border hover:bg-[var(--bg-surface)] text-[var(--text-primary)]"
            style={{ borderColor: "var(--border)" }}
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────── */}
      <section id="work" className="max-w-[920px] mx-auto px-6 pb-24">
        <div className="pt-20 mb-12 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-3 text-[var(--text-muted)]">
            Selected Work
          </p>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-[var(--text-primary)]">
            11 years. Four industries.{" "}
            <span className="font-bold text-[var(--accent)]">One consistent thread.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((cs) => {
            const isFullWidth = cs.active;
            return (
              <Link
                key={cs.slug}
                href={`/case-study/${cs.slug}`}
                className={`group block rounded-2xl overflow-hidden glass-card transition-all duration-300 ${isFullWidth ? "md:col-span-2 flex flex-col md:flex-row items-stretch" : "flex flex-col"
                  }`}
              >
                {/* Thumbnail */}
                {cs.thumb && (
                  <div className={`overflow-hidden relative border-b md:border-b-0 ${isFullWidth ? "w-full md:w-1/2 min-h-[260px]" : "w-full h-56"
                    }`} style={{ borderColor: "var(--border)" }}>
                    <Image
                      src={cs.thumb}
                      alt=""
                      width={1969}
                      height={2600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: cs.thumbPos ?? "center top" }}
                    />
                  </div>
                )}

                <div className={`p-6 sm:p-8 flex flex-col justify-between ${isFullWidth ? "w-full md:w-1/2 border-t md:border-t-0 md:border-l" : "w-full"
                  }`} style={{ borderColor: "var(--border)" }}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--accent)]">
                        {cs.eyebrow}
                      </p>
                      {cs.active && (
                        <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 25%, transparent)" }}>
                          Active
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight mb-2 text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                      {cs.title}
                    </h3>
                    <p className="text-sm mb-4 font-semibold tracking-tight text-[var(--accent)]">
                      {cs.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
                      {cs.outcome}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-2.5 py-1 rounded-full font-medium font-mono"
                          style={{
                            color: "var(--text-secondary)",
                            border: "1px solid var(--border)",
                            background: "color-mix(in srgb, var(--accent) 5%, transparent)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-mono font-semibold underline-offset-4 group-hover:underline text-[var(--accent)]">
                      Read case study →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── By the numbers ───────────────────────────────── */}
      <section className="max-w-[920px] mx-auto px-6 pb-24">
        <div className="pt-20 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-10 text-[var(--text-muted)]">
            By the numbers
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {numbers.map((n) => (
              <div
                key={n.stat}
                className="p-6 rounded-2xl glass-card border flex flex-col justify-between min-h-[140px]"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[var(--accent)] mb-3">
                  {n.stat}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                  {n.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" className="max-w-[920px] mx-auto px-6 pb-24">
        <div className="pt-20 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-10 text-[var(--text-muted)]">
            About
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-12 items-start">
            <div>
              <p className="text-base sm:text-lg leading-[1.8] mb-6 text-[var(--text-secondary)]">
                I'm a Senior UX Designer with 11 years of experience across enterprise SaaS, government platforms,
                and consumer products. I've designed a multi-tenant health insurance platform for Fortune 500
                clients including Cigna, a civic digital platform for Dubai Municipality, a complete
                multi-platform product suite for Jet Airways, and a service platform for the Saudi Ministry
                of Hajj and Umrah.
              </p>
              <p className="text-base sm:text-lg leading-[1.8] mb-6 text-[var(--text-secondary)]">
                The thread across all of it: systems thinking, architectural decisions, and design that has
                to work at scale. I don't just use AI as a tool. I've built the infrastructure that makes
                AI useful for design teams. At Javelina I architected a design operating system with prompt
                libraries and AI-assisted workflows that cut handoff time by 40%.
              </p>
              <p className="text-base sm:text-lg leading-[1.8] text-[var(--text-secondary)]">
                Outside client work, I build. Under Blinkwiser I've shipped two AI-powered SaaS products
                independently. I started as the sole designer at Javelina and grew into leading a team of
                four. I sit at the intersection of design, product thinking, and engineering, and that's
                where the most interesting problems live.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/Sikandar_Ali_Resume.pdf"
                  download="Sikandar_Ali_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider transition-all duration-300 hover:scale-[1.03]"
                  style={{ background: "var(--text-primary)", color: "var(--bg-base)" }}
                >
                  Download Resume ↓
                </a>
                <a
                  href="https://www.linkedin.com/in/sikandar-ux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono tracking-wider transition-all duration-300 hover:scale-[1.03] border hover:bg-[var(--bg-surface)] text-[var(--text-primary)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="w-full max-w-[260px] mx-auto md:ml-auto aspect-square rounded-2xl overflow-hidden border shadow-md" style={{ borderColor: "var(--border)" }}>
              <Image
                src="/img/1765377096878.jpeg"
                alt="Sikandar Ali Abdul"
                width={600}
                height={600}
                className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Key facts */}
          <div className="mt-20 pt-12 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="text-[10px] font-mono tracking-[0.25em] uppercase mb-8 text-[var(--text-muted)]">
              Key Facts
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
              {keyFacts.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-4 border-b text-[var(--text-secondary)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What I Bring ─────────────────────────────────── */}
      <section id="services" className="max-w-[920px] mx-auto px-6 pb-24">
        <div className="pt-20 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-2 text-[var(--text-muted)]">
            What I Bring
          </p>
          <p className="text-xs sm:text-sm mb-10 text-[var(--text-muted)]">
            Areas with a track record, not just an interest.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl glass-card border flex flex-col justify-between min-h-[160px]"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mb-4" />
                  <h3 className="text-base font-serif font-bold mb-3 text-[var(--text-primary)]">
                    {s.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="max-w-[920px] mx-auto px-6 pb-24">
        <div className="pt-20 border-t animate-fade-in" style={{ borderColor: "var(--border)" }}>
          <div className="p-8 sm:p-12 rounded-3xl glass-card border relative overflow-hidden" style={{ borderColor: "var(--border)" }}>
            {/* Soft accent ambient glow inside contact box */}
            <div className="absolute -right-20 -bottom-20 w-52 h-52 rounded-full bg-[var(--accent)] opacity-10 filter blur-3xl pointer-events-none" />

            <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-4 text-[var(--text-muted)]">
              Contact
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4 text-[var(--text-primary)]">
              Let's talk.
            </h2>
            <p className="text-base sm:text-lg leading-[1.8] mb-8 max-w-[580px] text-[var(--text-secondary)]">
              Open to senior and lead UX roles in the Gulf, India, Singapore, and remote, particularly enterprise SaaS,
              fintech, government, and regulated industries. Usually responds within 24 hours.
            </p>
            {/* Email — shown inline so visitors can copy it directly */}
            <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
              Drop me a line at{" "}
              <a href="mailto:ali050786@gmail.com" className="font-mono hover:underline" style={{ color: "var(--accent)" }}>
                ali050786@gmail.com
              </a>
              {" "}and I'll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <a
                href="mailto:ali050786@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider transition-all duration-300 hover:scale-[1.03]"
                style={{ background: "var(--accent-btn)", color: "#000" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Send email
              </a>
              <a
                href="https://www.linkedin.com/in/sikandar-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono tracking-wider transition-all duration-300 hover:scale-[1.03] border hover:bg-[var(--bg-surface)] text-[var(--text-primary)]"
                style={{ borderColor: "var(--border)" }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
