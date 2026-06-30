import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import FigmaEmbed from "@/components/FigmaEmbed";

export const metadata: Metadata = {
  title: "Javelina: Senior UX Architect | Ali Abdul",
  description:
    "Built the UX practice from zero at Javelina. 120+ component design system and three-tier theming architecture cut new-client onboarding from weeks to under 24 hours. Clients: Cigna, Keenan, Bywater.",
  openGraph: {
    title: "Javelina: Building an Enterprise Health Platform from Zero",
    description:
      "Founding designer → UX Lead. A 120+ component design system and AI-assisted workflows cut new-client onboarding from weeks to under 24 hours and dev handoff by 40%.",
    url: "https://portfolio.blinkwiser.com/case-study/javelina",
    type: "article",
    images: [{ url: "/img/javelina/Cover.jpg", width: 1456, height: 816, alt: "Javelina enterprise health platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javelina: Building an Enterprise Health Platform from Zero",
    description: "120+ component design system, <24h client onboarding, −40% dev handoff via AI workflows.",
    images: ["/img/javelina/Cover.jpg"],
  },
};

export default function JavelinaPage() {
  return (
    <CaseStudyLayout
      title="Javelina: Building an Enterprise Health Platform from Zero"
      subtitle="I was the first designer at Javelina. I built the entire UX practice, hired a team of four, and shipped a 120+ component design system that reduced new-client onboarding from weeks to under 24 hours, for Fortune 500 health insurers where errors mean compliance failures."
      tags={["Enterprise SaaS", "Design Systems", "AI-Assisted Workflows", "US Market", "UX Leadership"]}
      role="Founding UX Designer → UX Lead"
      timeline="2021 – Present"
      metrics={[
        { value: "120+", label: "Components in the design system" },
        { value: "<24h", label: "New client theme deployment (was weeks)" },
        { value: "−40%", label: "Dev handoff time via AI workflow system" },
        { value: "9→5", label: "Open Enrollment steps eliminated" },
      ]}
      heroImage={{
        src: "/img/javelina/Cover.jpg",
        alt: "Javelina Enterprise Health Platform. Mobile App | Member Platform | Admin Platform",
        width: 1456,
        height: 816,
      }}
    >

      {/* PROBLEM */}
      <h2>The Problem</h2>
      <p>
        US health insurance platforms serve three distinct audiences simultaneously: the insurer
        (who owns the brand and the contract), the employer (who selects and configures the plan),
        and the member (who uses it to manage their health coverage). Each level has different
        branding requirements, different access controls, and different interaction needs, and
        none of them can break the others.
      </p>
      <p>
        When I joined Javelina, none of this had been designed. There was no UX practice, no design
        system, and no process for onboarding new clients. Every new insurer or employer required
        weeks of manual customisation work from the development team. The product was growing,
        Cigna, Keenan, and Bywater were in the pipeline, but the foundation wasn't built to
        support them at scale.
      </p>
      <p>
        This wasn't just a UX problem. In US health insurance, a broken enrollment flow isn't a
        friction issue. It is a compliance and legal exposure. The stakes for getting this wrong
        were higher than most product contexts I'd worked in.
      </p>

      {/* ROLE */}
      <h2>My Role</h2>
      <p>
        Founding UX Designer, later promoted to UX Lead. I was the first and only designer when I
        joined. I owned the entire design function: information architecture, component system,
        interaction design, design tokens, mobile apps, accessibility standards, and design team
        management. I reported directly to the product leadership and collaborated daily with
        engineering and compliance.
      </p>
      <p>
        Over the four years I was there, I hired and onboarded four designers. By the time I left,
        the team was running a mature practice with documented standards, a shared component library,
        and a clear design-to-development handoff process.
      </p>

      {/* KEY DECISIONS */}
      <h2>Key Decisions</h2>

      <h3>Decision 1: Three-tier theming architecture</h3>
      <p>
        The first major decision was how to structure multi-brand theming. We had three realistic
        options: build separate codebases per client (fast to start, impossible to maintain at
        scale), build a single flat theme per client (simpler, but couldn't handle the
        Insurer → Employer → Member inheritance model), or design a token-based hierarchical
        system where each tier inherits from the one above and can selectively override.
      </p>
      <p>
        We chose the hierarchical token system. The reasoning: Javelina's entire business model
        depended on selling the same platform to multiple insurers, each of whom sold it to
        multiple employers. Flat theming would mean rebuilding visual identity from scratch at
        every level. The three-tier model meant an insurer's brand lived at tier one, employer
        customisations at tier two, and member-facing UX at tier three, with inheritance flowing
        downward so changes at the top propagated automatically.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/javelina/branding_javelina.png"
            alt="Javelina branding configuration panel showing insurer-level theme settings alongside two branded member portals: Manchester Regional Health (blue) and Chelsey Regional Health (purple)"
            width={1969}
            height={2600}
            className="w-full h-auto"
            priority
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Insurer-level branding configuration (left) propagates automatically to the member portal (right). Two clients, one codebase: Manchester Regional Health in blue, Chelsey Regional Health in purple.
          </span>
          <a
            href="https://www.figma.com/design/ERxDeae8Wi2180xol2WmBJ/Javelina---Design-System?node-id=34-2484"
            target="_blank" rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Open in Figma ↗
          </a>
        </figcaption>
      </figure>

      <h3>Decision 2: Token-based design system over component-first</h3>
      <p>
        The conventional approach to design systems is to start with components: buttons, inputs,
        cards. We inverted this. We started with design tokens, the named values for colour,
        spacing, typography, and radius, before building a single component.
      </p>
      <p>
        The reason was the multi-brand problem. If a button component has a colour hardcoded, you
        need a different button component for every client. If the button references a token, you
        change the token value and every instance of that button across every screen updates
        automatically. This decision is what made the under-24 hour client onboarding possible. Theme
        deployment became a token file change, not a development sprint.
      </p>
      <p>
        The system reached 120+ components covering web, mobile web, and native iOS/Android, all
        drawing from the same token foundation.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/javelina/designsystem.png"
            alt="Javelina Design System documentation showing theme colour tokens, product card components in multiple states, and a registration screen rendered in A1M Health branding"
            width={2386}
            height={2600}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Design System v2.0: theme colour tokens, product card states, and a live portal screen. All 120+ components draw from the same token foundation.
          </span>
          <a
            href="https://www.figma.com/design/ERxDeae8Wi2180xol2WmBJ/Javelina---Design-System?node-id=34-2484"
            target="_blank" rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Open in Figma ↗
          </a>
        </figcaption>
      </figure>

      <h3>Decision 3: Open Enrollment redesign structured around the member's mental model</h3>
      <p>
        Open Enrollment, the annual window where employees select their health coverage, was
        the most critical flow in the product. When I audited it, it had 9 steps. The structure
        followed the system's data model: collect information in the order the database needed it,
        then confirm. No member thinks about health insurance enrollment this way.
      </p>
      <p>
        The question we asked was: what decisions does a member actually need to make, in what
        natural order, and what are they cognitively ready to process at each stage? The answer
        restructured the flow entirely. We moved plan comparison earlier (before eligibility
        details, which members don't understand), collapsed three confirmation screens into one,
        and eliminated a document upload step that could be deferred post-enrollment.
      </p>
      <p>
        The result was 5 steps instead of 9, a 44% reduction in enrollment steps at the most
        stressful moment of the member's interaction with the platform.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/javelina/enrollemnt.png"
            alt="Open Enrollment flow showing member dashboard with enrollment prompt, plan selection screen with dependent coverage for a family of four, and per-member plan comparison grid"
            width={2357}
            height={2600}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Redesigned enrollment flow: plan selection restructured around the member's decision sequence, not the system's data model. Dependent coverage handled in a single comparison step.
          </span>
          <a
            href="https://www.figma.com/design/KgxYLYKy3x1jS99jGPM3pR/Javelina---Enrollment-Flow?node-id=1-20950"
            target="_blank" rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Open in Figma ↗
          </a>
        </figcaption>
      </figure>

      <h3>Decision 4: White-label mobile apps as design system extension</h3>
      <p>
        As insurer clients grew, the demand for white-label iOS and Android apps followed. The
        decision was whether to design the mobile apps as separate products or as extensions of
        the existing design system.
      </p>
      <p>
        We extended the system. Platform-specific adaptations, including iOS navigation conventions, Android
        material patterns, and touch target sizing, were layered on top of the shared token foundation,
        not built from scratch. This meant the mobile components were born already themed for each
        client, and design consistency across web and mobile was guaranteed rather than manually
        maintained.
      </p>
      <p>
        The alternative — custom mobile-specific components built independently — would have created
        a second theming system running in parallel. Every token change at the insurer level would
        have needed to be applied twice: once to web, once to mobile, by hand, with no structural
        guarantee they stayed in sync. Given that we were onboarding new clients under a 24-hour
        deployment target, that maintenance burden would have broken the model entirely.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/javelina/mobile_app.png"
            alt="Javelina white-label mobile app screens showing member dashboard, benefits overview, and claims, themed in client branding using the same token system as the web portal"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            White-label mobile app using the same token system as web, with platform-appropriate navigation and touch target sizing per iOS and Android conventions.
          </span>
          <a
            href="https://www.figma.com/design/qBVesbf6tdpIhf1tk9gsJM/Javelina---Mobile-App?node-id=4001-8476"
            target="_blank" rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Open in Figma ↗
          </a>
        </figcaption>
      </figure>

      <h3>Decision 5: Architecting a design operating system powered by AI</h3>
      <p>
        While Javelina's senior leadership was still in meetings debating whether to adopt Figma AI,
        I built something more useful: a design operating system that gave AI deep, accurate context
        about our white-label design system, and put it in the hands of every designer on the team.
      </p>
      <p>
        The core problem with AI in design teams is context. A generic AI tool knows nothing about
        your component library, your token naming conventions, your layout constraints, or your
        client theming rules. Every prompt starts from zero. The output is plausible but wrong,
        wrong components, wrong spacing, wrong patterns for your system.
      </p>
      <p>
        I solved this by building structured prompt libraries that embedded our design system
        knowledge directly into the AI's working context. A designer could reference a Jira ticket
        and the system would produce a relevant flow, screen, or component suggestion, grounded in
        our actual architecture, not a generic interpretation of what a health insurance screen
        should look like. The AI knew the difference between an insurer-tier component and a
        member-tier component. It knew which layout patterns were used for enrollment versus
        claims versus account management. It knew the token naming convention.
      </p>
      <p>
        Beyond the prompt libraries, I built AI-assisted workflows for the team's three highest-friction
        tasks: design exploration (generating layout options before committing to a direction),
        annotation (drafting handoff notes from screen descriptions), and QA (flagging component
        usage that deviated from the design system). I also created a quality framework with explicit
        AI-assisted checkpoints, structured reviews at each stage that caught system inconsistencies
        before they became handoff problems.
      </p>
      <p>
        The result: a 40% reduction in dev handoff time. Not because designers were working faster
        at the same tasks, but because the bottlenecks, including exploration dead-ends, annotation gaps,
        QA rework, were structurally reduced. The AI didn't replace design judgment. It eliminated
        the administrative overhead that was consuming it.
      </p>
      <FigmaEmbed
        url="https://www.figma.com/design/0tsXGB3LPA90olRbjX7Gbh/Portfolio?node-id=1-14596&t=4AdtQQVfuz7vZqIU-1"
        title="Javelina: Design operating system"
        caption="AI with full design system context: components, tokens, layout patterns, and client theming rules."
        height={500}
      />

      {/* RESULTS */}
      <h2>Results</h2>
      <ul>
        <li>
          Dev handoff time reduced by 40%, achieved through an AI-assisted design operating system
          built before the organisation had formally adopted any AI tooling
        </li>
        <li>
          New client theme deployment reduced from weeks of manual development work to under 24 hours,
          enabled by the token-based design system
        </li>
        <li>
          Open Enrollment redesigned from 9 steps to 5, removing 44% of enrollment steps at the
          highest-stakes moment in the member journey
        </li>
        <li>
          Feature delivery standardised: 2 days design, 3 days development, a repeatable cadence
          that hadn't existed before the design system
        </li>
        <li>
          120+ component library built and maintained across web, mobile web, iOS, and Android,
          used by a team of 4 designers and multiple development squads
        </li>
        <li>
          AI prompt libraries deployed across the design team, giving every designer AI tools with
          accurate context of our white-label system, not generic output
        </li>
        <li>
          Clients onboarded under this system: Cigna, Keenan, Bywater, and Aptia, all Fortune 500
          or enterprise tier
        </li>
        <li>
          Design team built from zero: 4 designers hired, onboarded, and operating to shared AI-assisted
          standards by the time of my departure
        </li>
      </ul>

      {/* REFLECTION */}
      <h2>What I'd do differently</h2>
      <p>
        I'd push for user research earlier in the enrollment redesign. We made the 9→5 restructuring
        based on logical analysis of the flow and stakeholder input rather than observed user behaviour.
        We got the right outcome, but the case for it rested on analysis and conviction rather than
        usability data — in a regulated product context, that's a gap worth closing before shipping.
        A round of testing on the original flow would have given us evidence to stand behind, not just
        a decision that turned out to be correct.
      </p>
      <p>
        I'd also document the design system rationale more thoroughly from the start. The token
        architecture decisions were clear in my head and in team conversations, but not written
        down in a way that survived personnel changes. When new designers joined, the why behind
        structural decisions had to be re-explained verbally, which doesn't scale.
      </p>

    </CaseStudyLayout>
  );
}
