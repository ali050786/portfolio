import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Nusuk — Saudi Ministry of Hajj Platform | Ali Abdul",
  description:
    "UX design for the Nusuk platform serving Saudi Arabia's Ministry of Hajj and Umrah — a high-stakes civic system managing services for over 2 million annual pilgrims.",
};

export default function NusukPage() {
  return (
    <CaseStudyLayout
      title="Nusuk — Designing for the World's Largest Annual Gathering"
      subtitle="UX design for Saudi Arabia's Ministry of Hajj and Umrah — a national platform managing permits, accommodation, and services for over 2 million pilgrims at the annual Hajj pilgrimage."
      tags={["Government", "Saudi Arabia", "Gulf Market", "Civic UX", "High-Stakes"]}
      role="Lead UX Designer"
      timeline="2022 – 2023"
      metrics={[
        { value: "2M+", label: "Annual Hajj pilgrims" },
        { value: "180+", label: "Countries of origin for pilgrims" },
        { value: "Saudi Gov", label: "Ministry of Hajj and Umrah client" },
        { value: "AR + EN", label: "Bilingual with Arabic as primary" },
      ]}
    >

      {/* PROBLEM */}
      <h2>The Problem</h2>
      <p>
        The Hajj pilgrimage is one of the world's largest annual human gatherings — over two
        million pilgrims, managed permits, quota systems by country of origin, accommodation
        coordination, transport logistics, and health and safety requirements, all running
        simultaneously under a Saudi government mandate. The Nusuk platform needed to provide
        a unified digital interface for pilgrims navigating these services.
      </p>
      <p>
        The stakes are not abstract. A confusing permit application flow or an ambiguous
        booking confirmation doesn't just frustrate a user — it can prevent a pilgrim from
        completing one of the most significant religious journeys of their life. The platform
        had to be simple enough to use reliably under emotional pressure, in multiple languages,
        on a wide range of devices, by users with varying digital literacy levels.
      </p>
      <p>
        Compounding this: pilgrims come from over 180 countries. The design couldn't lean on
        culturally specific UI conventions, familiar local payment flows, or assumed digital
        behaviour patterns. It had to work across an unusually diverse user base united only
        by a common intent — performing Hajj.
      </p>

      {/* ROLE */}
      <h2>My Role</h2>
      <p>
        Lead UX Designer, responsible for the pilgrim-facing platform UX. I owned the design
        of the core service journeys: Hajj permit applications, accommodation booking, and
        service navigation. I worked within a delivery team that included product management
        and engineering, with designs reviewed against the Ministry's service requirements
        at each milestone.
      </p>
      <p>
        This engagement directly followed the Dubai Municipality project, which gave me
        relevant context for designing in a Gulf government environment — stakeholder
        expectations, sign-off processes, and the specific discipline required to deliver
        in a high-accountability public sector context.
      </p>

      {/* KEY DECISIONS */}
      <h2>Key Decisions</h2>

      <h3>Decision 1 — Clarity over completeness at every screen</h3>
      <p>
        Hajj services are administratively complex. Permit eligibility varies by country
        of origin, quota allocation, previous Hajj participation, and health status. The
        natural instinct in civic platform design is to surface all of this complexity so
        users are "fully informed." This is consistently the wrong instinct.
      </p>
      <p>
        A pilgrim at step 3 of a permit application does not need to understand the full
        quota system. They need to know what they need to do next. Every screen was
        evaluated against a single question: does this information help the user complete
        their current task, or does it introduce cognitive overhead? Anything that didn't
        directly serve the current step was removed, deferred to a later step, or moved
        to a secondary information layer accessible on demand.
      </p>
      <figure className="my-6">
        <div className="rounded-xl p-6 flex flex-col sm:flex-row gap-4" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
          <div className="flex-1 rounded-lg p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--accent)" }}>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Primary path</p>
            {["Enter details", "Upload documents", "Confirm & pay", "Receive permit"].map((s, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0" style={{ background: "var(--accent-btn)", color: "#000" }}>{i + 1}</span>
                <span className="text-xs" style={{ color: "var(--text-primary)" }}>{s}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-lg p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>On demand (secondary)</p>
            {["Quota system explained", "Country-specific rules", "Document requirements", "Status tracking"].map((s, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0" style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>ℹ</span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          Core task stays unobstructed. Complexity is accessible, not mandatory.
        </figcaption>
      </figure>

      <h3>Decision 2 — Designing for the least digitally confident user first</h3>
      <p>
        With 180+ countries of origin and a user base that includes elderly pilgrims completing
        Hajj for the first time in their seventies, the platform couldn't be designed for a
        median digitally literate user. It had to be designed for the person least comfortable
        with digital services — without becoming so simplified that it fails the more experienced
        user.
      </p>
      <p>
        This meant: explicit progress indicators at every stage (no ambiguity about how many
        steps remain), unambiguous action labels in both Arabic and English, generous touch
        targets, clear error states that explain what went wrong in plain language, and
        confirmation states that leave no room for doubt about whether an action completed
        successfully. The experienced user loses nothing. The first-time user gains a reliable
        guide through a stressful process.
      </p>

      <h3>Decision 3 — Arabic as the primary design language, English as parity</h3>
      <p>
        Unlike the Dubai Municipality project — where Arabic and English were genuinely equal
        first-class languages — Hajj is a context where Arabic is the culturally and linguistically
        dominant language for a large majority of pilgrims. Saudi Arabia, Egypt, Indonesia,
        Pakistan, and other majority-Muslim countries contribute the largest pilgrim populations.
      </p>
      <p>
        We designed in Arabic first and established the English layout as the parallel. This
        was the inverse of the usual workflow (design in English, adapt to RTL) and produced
        a better Arabic experience — one that felt native rather than translated. The English
        version was held to the same quality standard, but the design process started from
        the language that served the largest user group first.
      </p>
      <figure className="my-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "var(--bg-elevated)", border: "1px solid var(--accent)" }}>
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--accent)" }}>Arabic (RTL) — designed first</p>
            <div className="flex flex-col items-end gap-2">
              {["تسجيل الدخول", "اختر الخدمة", "تأكيد الطلب"].map((s, i) => (
                <div key={i} className="rounded-lg px-3 py-2 text-sm text-right w-full" style={{ background: "var(--bg-surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}>{s}</div>
              ))}
            </div>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Primary design language</p>
          </div>
          <div className="rounded-xl p-5 flex flex-col gap-3" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>English (LTR) — parity</p>
            <div className="flex flex-col gap-2">
              {["Sign in", "Select service", "Confirm request"].map((s, i) => (
                <div key={i} className="rounded-lg px-3 py-2 text-sm" style={{ background: "var(--bg-surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}>{s}</div>
              ))}
            </div>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Equal quality, derived from Arabic</p>
          </div>
        </div>
      </figure>

      <h3>Decision 4 — Trust signals at every high-stakes action</h3>
      <p>
        Hajj permit applications and accommodation bookings are high-stakes, often irreversible
        actions. A pilgrim who isn't certain their booking completed successfully will attempt
        it again — creating duplicate applications, booking conflicts, and operational problems
        for the Ministry's systems. In a platform serving two million users, that failure pattern
        at scale becomes a crisis.
      </p>
      <p>
        Every confirmation state was designed to be unambiguous. Success states explicitly confirmed
        what happened, what comes next, and where to find the confirmation again. Error states named
        what went wrong in plain language and offered a specific recovery action — not a generic
        "something went wrong." Progress indicators showed exactly where in the process a user was
        at all times, so an interrupted session could be resumed with confidence.
      </p>
      <figure className="my-6">
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: "var(--bg-elevated)", border: "1px solid #22c55e" }}>
            <span className="text-lg">✓</span>
            <p className="text-xs font-semibold" style={{ color: "#22c55e" }}>Permit confirmed</p>
            <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>Your application #HA-2024-00412 is approved. View it anytime in My Permits.</p>
          </div>
          <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: "var(--bg-elevated)", border: "1px solid #ef4444" }}>
            <span className="text-lg">✕</span>
            <p className="text-xs font-semibold" style={{ color: "#ef4444" }}>Document rejected</p>
            <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>Your passport scan is too small. Upload a clear photo above 200KB.</p>
          </div>
          <div className="rounded-xl p-4 flex flex-col gap-2" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
            <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>Step 2 of 4</p>
            <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: "var(--border)" }}>
              <div className="h-full rounded-full w-2/4" style={{ background: "var(--accent)" }} />
            </div>
            <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>Upload documents — 2 remaining</p>
          </div>
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          No ambiguity at high-stakes moments. Explicit confirmation or explicit error — nothing in between.
        </figcaption>
      </figure>

      {/* RESULTS */}
      <h2>Results</h2>
      <ul>
        <li>
          Platform UX designed for Saudi Arabia's Ministry of Hajj and Umrah, covering the core
          pilgrim journeys: permit applications, accommodation booking, and service navigation
        </li>
        <li>
          Arabic-first bilingual experience delivered, with English at full parity — both languages
          designed to the same quality standard
        </li>
        <li>
          Clarity-over-completeness framework applied consistently across all flows — reducing
          cognitive load at the highest-stakes moments in the user journey
        </li>
        <li>
          Trust signal system designed for high-stakes irreversible actions — explicit confirmation,
          plain-language errors, and unambiguous progress indicators throughout
        </li>
        <li>
          Builds directly on prior government platform delivery experience (Dubai Municipality, 2017–2018),
          applying learned patterns for high-accountability civic design
        </li>
      </ul>

      {/* NOTE ON VISUALS */}
      <h2>Note on visuals</h2>
      <p>
        Client NDA restrictions limit the screens I can show from this engagement publicly.
        The case study above focuses on the design rationale and decisions — which are the
        part that transfers across contexts. Full screen-level visuals are available to
        verified recruiters and hiring managers on request. Email{" "}
        <a href="mailto:ali050786@gmail.com" className="text-[#C8622A] hover:underline">
          ali050786@gmail.com
        </a>{" "}
        with your name and organisation.
      </p>

      {/* REFLECTION */}
      <h2>What I'd do differently</h2>
      <p>
        I would invest significantly more in remote user research with actual Hajj pilgrims —
        across multiple countries, ages, and digital literacy levels — before finalising the
        flows. The clarity-over-completeness principle was sound, but applying it required
        judgment calls about what a user "needs" at each step that would have been far better
        informed by observed behaviour than by design intuition. The constraint was access:
        pilgrims are geographically dispersed and the engagement timeline didn't allow for
        the research we would have wanted. If I were structuring this project from scratch,
        I'd make research access a contractual deliverable, not an optional phase.
      </p>

    </CaseStudyLayout>
  );
}
