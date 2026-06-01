import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Dubai Municipality: Civic UX for 3.5M Residents | Ali Abdul",
  description:
    "Designed a bilingual Arabic/English civic platform for Dubai Municipality serving 3.5 million residents. Worked onsite with senior UAE government stakeholders. Designs approved after prior submissions were rejected.",
};

export default function DubaiPage() {
  return (
    <CaseStudyLayout
      title="Dubai Municipality: Civic UX for 3.5 Million Residents"
      subtitle="Designed a bilingual Arabic/English platform for Dubai's full portfolio of civic services including building permits, environment complaints, and facility bookings, working onsite with senior UAE government officials whose prior design submissions had been rejected."
      tags={["Government", "RTL / Bilingual", "Gulf Market", "Civic UX", "Onsite UAE"]}
      role="Lead UX Designer (onsite, Dubai)"
      timeline="2020 – 2021"
      metrics={[
        { value: "3.5M", label: "Dubai residents served" },
        { value: "EN + AR", label: "Full bilingual parity, not retrofitted" },
        { value: "✓", label: "Approved after prior submissions rejected" },
        { value: "Mendix", label: "Designed within client's build constraints" },
      ]}
      heroImage={{
        src: "/img/dubai/Dubai-Dashboard.png",
        alt: "Dubai Municipality app dashboard showing civic services overview",
        width: 1600,
        height: 900,
      }}
    >

      {/* PROBLEM */}
      <h2>The Problem</h2>
      <p>
        Dubai Municipality manages a large and varied portfolio of civic services for a city of
        3.5 million residents, including building permit applications, environmental complaints, and public
        facility bookings, waste management requests, and more. Residents interact with these
        services in Arabic and English, with different mental models, different reading directions,
        and different expectations of how a government platform should behave.
      </p>
      <p>
        The previous design submissions for the platform had been rejected by Dubai Municipality's
        senior leadership. We were coming into a project where the client had already been
        disappointed, trust was low, and expectations of what design could deliver were
        appropriately sceptical. The brief wasn't just to design a better platform. It was to
        design one that would actually get approved.
      </p>
      <p>
        On top of this, the designs would be implemented by the client's own development team in
        Mendix, a low-code enterprise platform with specific layout and interaction constraints.
        Whatever we designed had to be buildable within those constraints, not just impressive
        in Figma.
      </p>

      {/* ROLE */}
      <h2>My Role</h2>
      <p>
        Lead UX Designer, working onsite in Dubai for the full engagement. I was the primary
        designer on the project and the person presenting directly to senior Dubai Municipality
        stakeholders at each milestone. Every significant design decision required formal sign-off
        before moving to the next phase.
      </p>
      <p>
        I worked closely with the client's technical team to understand Mendix's capabilities and
        constraints, ensuring that every design decision was buildable and not just visually coherent.
        The engagement was structured as a series of milestone deliverables with binary outcomes:
        approved to proceed, or rework required.
      </p>

      {/* KEY DECISIONS */}
      <h2>Key Decisions</h2>

      <h3>Decision 1: Information architecture before any visual design</h3>
      <p>
        The temptation in government platform design is to start with the visual layer, to show
        clients something that looks like a finished product quickly. This is usually a mistake.
        Dubai Municipality's service portfolio is large, complex, and internally inconsistent:
        different services have different eligibility criteria, different document requirements,
        different approval chains, and different expected completion times.
      </p>
      <p>
        We spent the first phase purely on IA, mapping every service category, every decision
        branch, and every document dependency, before touching a single layout. This meant that when
        we did present visual designs, the structure underneath them was grounded in how the
        services actually worked, not how we assumed they worked. This was also the factor that
        distinguished our approach from the previous submissions, which had been rejected partly
        because the structure felt arbitrary to the client's operational team.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/dubai/Dubai-Home.png"
            alt="Dubai Municipality home screen showing the full service catalogue organised by category"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          Full service taxonomy mapped before any layout work began. The home screen reflects the IA, not a design-first layout.
        </figcaption>
      </figure>

      <h3>Decision 2: Bilingual parity from the first wireframe, not retrofitted RTL</h3>
      <p>
        Most bilingual design projects treat Arabic as a translation layer applied to an English
        design. You design in English, hand it to a translator, then "flip" the layout. This
        produces subtle but consistent failures: icons placed on the wrong side, form fields that
        don't align, navigation that feels backwards, numbers formatted incorrectly.
      </p>
      <p>
        We designed every screen in both directions simultaneously from the first wireframe.
        LTR English and RTL Arabic were treated as equal first-class layouts, not a primary
        and a derivative. This caught layout failures early, when they were cheap to fix, rather
        than in development, when they're expensive. It also meant the Arabic experience felt
        designed rather than translated, which was immediately apparent to the client's Arabic-speaking
        stakeholders during presentations.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/dubai/Dubai-English-Arabic.png"
            alt="Side-by-side comparison of English (LTR) and Arabic (RTL) layouts, designed simultaneously"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          English (LTR) and Arabic (RTL) designed simultaneously, both treated as first-class layouts rather than primary and derivative.
        </figcaption>
      </figure>

      <h3>Decision 3: Milestone sign-off structure, not open-ended reviews</h3>
      <p>
        UAE government engagements have a specific stakeholder dynamic. Decisions happen at
        a senior level, multiple people need to align, and ambiguity in a review meeting tends
        to produce delay rather than direction. Open-ended review sessions ("what do you think?")
        are the wrong format for this environment.
      </p>
      <p>
        We structured the engagement as a series of formal milestones, each with a specific scope
        and a binary outcome: approved to proceed, or specific changes required. Presentations
        were structured as decision briefings, not design showcases. This gave senior stakeholders
        a clear role in each session. They were being asked to make a decision, not form an
        opinion, which accelerated sign-off and kept the project moving.
      </p>

      <h3>Decision 4: Designing within Mendix constraints from the start</h3>
      <p>
        The client's development team would implement the designs in Mendix. Mendix has specific
        constraints: limited custom layout options, a defined component set, particular behaviour
        patterns for forms and navigation. Designing without accounting for this would produce
        beautiful Figma files that couldn't be built without significant custom development work,
        which the client's team neither had the budget nor the capability for.
      </p>
      <p>
        Every design decision was validated against Mendix's capabilities. Where we wanted something
        that Mendix couldn't easily do, we found an equivalent solution within its constraints
        rather than specifying something the client couldn't build. The handoff was usable, not
        aspirational.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/dubai/Dubai-Services.png"
            alt="Dubai Municipality services screen showing permit and complaint categories with navigation"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          Service flows designed within Mendix's component and layout constraints, buildable without custom engineering.
        </figcaption>
      </figure>

      {/* RESULTS */}
      <h2>Results</h2>
      <ul>
        <li>
          Designs formally approved by senior Dubai Municipality stakeholders, after previous
          design submissions from the project had been rejected
        </li>
        <li>
          Platform serves 3.5 million Dubai residents across the full portfolio of municipal services
        </li>
        <li>
          Full bilingual experience delivered: English (LTR) and Arabic (RTL) designed simultaneously
          to equal standards rather than retrofitted
        </li>
        <li>
          Information architecture mapped for the complete service portfolio before any visual work
          began, establishing a structural foundation the client's operational team could validate
        </li>
        <li>
          Designs handed off directly for Mendix implementation. The client development team built
          from Figma specifications without requiring custom engineering workarounds
        </li>
        <li>
          Milestone-based delivery structure enabled formal stakeholder sign-off at each phase,
          preventing scope drift in a high-accountability government environment
        </li>
      </ul>

      {/* REFLECTION */}
      <h2>What I'd do differently</h2>
      <p>
        I'd invest more time in the usability research phase before finalising service flows. We
        had strong structural foundations from the IA work, and the client's stakeholders approved
        the designs, but we had limited access to actual residents during the design process.
        Government procurement timelines rarely allow for extended user research, and this project
        was no exception. In retrospect, even two rounds of lightweight usability testing with
        Arabic-speaking residents would have stress-tested assumptions about task comprehension
        that we validated only through stakeholder review.
      </p>
      <p>
        I'd also document the RTL design decisions more systematically: which layout rules we
        established, which exceptions we found, how we handled edge cases like numeric strings
        in Arabic text. That knowledge existed in the design files but wasn't captured as
        reusable guidelines, which means the next team to work on an RTL product starts from
        zero instead of building on what we learned.
      </p>

    </CaseStudyLayout>
  );
}
