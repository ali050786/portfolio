# Project Code Collection
**Source Directory**: `/Users/sikandar/Desktop/projects/new-portfolio`
**Total Files**: 24

--- 

## .gitignore
```txt
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

## AGENTS.md
```md
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

```

## CLAUDE.md
```md
@AGENTS.md

```

## README.md
```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

## app/case-study/blinkwiser/page.tsx
```tsx
import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Blinkwiser — AI SaaS, Solo Founder | Ali Abdul",
  description:
    "Designed and shipped two live AI SaaS products as a solo founder — Agentic Carousel (blinkwiser.com) and VidExtreme (courses.blinkwiser.com). End-to-end: research, UX, UI, build, deploy.",
};

export default function BlinkwiserPage() {
  return (
    <CaseStudyLayout
      title="Blinkwiser — Designing and Shipping AI Products as a Solo Founder"
      subtitle="Two live AI SaaS tools built from scratch — designed them, coded them, shipped them. This is what it looks like when a designer owns the entire product lifecycle."
      tags={["AI SaaS", "Solo Founder", "End-to-End", "Shipped Product", "LangChain"]}
      role="Sole Designer & Developer"
      timeline="2023 – 2024"
      metrics={[
        { value: "2", label: "Live AI products in production" },
        { value: "Active", label: "Free-tier users on Agentic Carousel" },
        { value: "Solo", label: "Research · Design · Build · Ship" },
        { value: "5-stage", label: "AI pipeline — VidExtreme course builder" },
      ]}
      heroImage={{
        src: "/img/blinkwiser/carousel-editor.png",
        alt: "Agentic Carousel editor showing generated LinkedIn carousel slides with style and template controls",
        width: 2600,
        height: 1424,
      }}
    >

      {/* PROBLEM */}
      <h2>The Problem</h2>
      <p>
        LinkedIn content creators were spending hours producing carousel posts and structured learning
        content — not because the ideas were hard, but because the tools weren't built for their workflow.
        Existing tools required too many manual steps, produced generic output, and didn't understand
        content strategy. The gap was a product problem, not a writing problem.
      </p>
      <p>
        As the problem became clear, so did the opportunity: build two focused tools — one for carousel
        creation, one for video course structuring — that used AI to handle the mechanical work while
        keeping the creator in control of strategy and voice.
      </p>

      {/* ROLE */}
      <h2>My Role</h2>
      <p>
        Sole designer and developer. I owned the entire product lifecycle for both tools: user research,
        information architecture, UX design, UI design, frontend engineering, backend AI pipeline design,
        and deployment. Both products are live and publicly accessible.
      </p>
      <p>
        This case study is positioned last in the portfolio intentionally. It exists to answer a question
        senior hiring managers ask: does this designer actually understand how products are built, or do
        they just design in Figma and hand off? The answer is here.
      </p>

      {/* KEY DECISIONS */}
      <h2>Key Decisions</h2>

      <h3>Decision 1 — Agentic Carousel: two-agent pipeline, not one</h3>
      <p>
        The first design decision for Agentic Carousel was architectural: how to structure the AI
        pipeline. A single monolithic prompt produces plausible output but poor results — it tries to
        simultaneously handle content strategy, slide structure, and visual logic.
      </p>
      <p>
        I split the pipeline into two agents with distinct responsibilities. The StrategistAgent handles
        content strategy: it takes the input topic and generates a narrative arc, key messages, and
        audience targeting. The TemplateAgent handles visual structure: it receives the strategy output
        and maps it onto slide layouts, headline/body splits, and call-to-action placement. The two
        agents operate as separate concerns, so each can improve independently without regressing the other.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/blinkwiser/carousel-input.png"
            alt="Agentic Carousel input screen showing topic entry, content style selection (Contrarian, Analytical, Storyteller, Actionable) and Generate Carousel button"
            width={2600}
            height={1433}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Topic input feeds the StrategistAgent; style selection shapes the narrative arc before the TemplateAgent handles layout.
          </span>
          <a
            href="https://blinkwiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Try it live ↗
          </a>
        </figcaption>
      </figure>

      <h3>Decision 2 — Mobile-first carousel editor</h3>
      <p>
        LinkedIn carousels are created by professionals on the go — often on phones, between meetings,
        not at a desktop. Most carousel tools are desktop-first editors with mobile as an afterthought.
        I designed the editor mobile-first: swipe to navigate between slides, tap to edit, large touch
        targets for content fields. Desktop gets a side-by-side preview panel as a progressive enhancement.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/blinkwiser/carousel-editor.png"
            alt="Agentic Carousel editor in focus view showing a generated slide with template, color, format, background and signature controls"
            width={2600}
            height={1424}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Focus view editor — one slide at a time, full controls below. Designed for mobile-first use with progressive desktop enhancement.
          </span>
          <a
            href="https://blinkwiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Try it live ↗
          </a>
        </figcaption>
      </figure>

      <h3>Decision 3 — Freemium model to validate product-market fit</h3>
      <p>
        Before any monetisation, the product needed proof that people would return to it. A free tier
        with usage limits (number of carousels, number of AI generations) serves two purposes: it removes
        the barrier to first use, and it generates the usage data needed to identify where users are
        dropping off. Active free-tier users validate the core loop before a paywall.
      </p>

      <h3>Decision 4 — VidExtreme: five-stage sequential pipeline with visible progress</h3>
      <p>
        A video course is a complex output — it needs a topic, a learner profile, a module structure,
        per-module scripts, visual briefs, and a production sequence. Generating all of this in one AI
        call produces incoherent results. I designed a five-stage sequential pipeline where each stage
        takes the previous stage's output as structured context: Concept → Identity → Structure → Skeleton → Blueprint.
      </p>
      <p>
        The UX challenge was keeping users oriented during a process that takes 60–90 seconds. I
        designed a progress indicator that shows both the current stage name and the stages ahead — not
        just a loading spinner. Users can see what the AI is currently working on and what's coming,
        which dramatically reduces the perception of wait time and abandonment during generation.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/blinkwiser/vidextreme-pipeline.png"
            alt="VidExtreme course creation pipeline showing 5-stage progress bar: Concept, Identity, Structure, Skeleton, Blueprint — with topic input and Generate AI Course button"
            width={2600}
            height={1442}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Stage-by-stage progress keeps users oriented during a 60–90 second AI generation sequence. Each stage label tells them exactly what the AI is building.
          </span>
          <a
            href="https://courses.blinkwiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Try it live ↗
          </a>
        </figcaption>
      </figure>

      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/blinkwiser/vidextreme-dashboard.png"
            alt="VidExtreme admin dashboard showing Create Course Concept interface with AI-powered course generation"
            width={2600}
            height={1440}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            VidExtreme admin panel — course creation entry point. Clean input surface over a complex AI pipeline.
          </span>
          <a
            href="https://courses.blinkwiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Try it live ↗
          </a>
        </figcaption>
      </figure>

      {/* RESULTS */}
      <h2>Results</h2>
      <ul>
        <li>
          Agentic Carousel live at <a href="https://blinkwiser.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>blinkwiser.com</a> with active free-tier users — core loop validated before monetisation
        </li>
        <li>
          VidExtreme live at <a href="https://courses.blinkwiser.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>courses.blinkwiser.com</a> — five-stage AI pipeline producing structured course outlines, scripts, and visual briefs in one generation
        </li>
        <li>
          Full stack shipped solo: Next.js · React · Groq · LangChain · Appwrite · Vercel — no team,
          no agency, no budget beyond API costs
        </li>
        <li>
          Both products publicly accessible — not mockups, not prototypes, not portfolio pieces
        </li>
        <li>
          Two-agent architecture allows independent improvement of content strategy and visual structure
          without regressing either concern
        </li>
      </ul>

      {/* REFLECTION */}
      <h2>Why this belongs in a UX portfolio</h2>
      <p>
        Most portfolios show work designed for other people's products. This case study shows what
        happens when a designer owns the whole thing. Every UX decision here had a direct engineering
        consequence — and every engineering decision had a direct UX consequence. Understanding that
        relationship is what separates designers who can operate at a product level from designers who
        execute briefs.
      </p>
      <p>
        The AI tools I built here are workflow tools, not design showcase pieces. They're listed last
        because they're context, not credentials. The credentials are Javelina, Dubai Municipality,
        and Jet Airways. This is the proof that I understand how the products I design actually get built.
      </p>

    </CaseStudyLayout>
  );
}

```

## app/case-study/dubai-municipality/page.tsx
```tsx
import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Dubai Municipality — Civic UX for 3.5M Residents | Ali Abdul",
  description:
    "Designed a bilingual Arabic/English civic platform for Dubai Municipality serving 3.5 million residents. Worked onsite with senior UAE government stakeholders. Designs approved after prior submissions were rejected.",
};

export default function DubaiPage() {
  return (
    <CaseStudyLayout
      title="Dubai Municipality — Civic UX for 3.5 Million Residents"
      subtitle="Designed a bilingual Arabic/English platform for Dubai's full portfolio of civic services — building permits, environment complaints, facility bookings — working onsite with senior UAE government officials whose prior design submissions had been rejected."
      tags={["Government", "RTL / Bilingual", "Gulf Market", "Civic UX", "Onsite UAE"]}
      role="Lead UX Designer (onsite, Dubai)"
      timeline="2017 – 2018"
      metrics={[
        { value: "3.5M", label: "Dubai residents served" },
        { value: "EN + AR", label: "Full bilingual parity — not retrofitted" },
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
        3.5 million residents — building permit applications, environmental complaints, public
        facility bookings, waste management requests, and more. Residents interact with these
        services in Arabic and English, with different mental models, different reading directions,
        and different expectations of how a government platform should behave.
      </p>
      <p>
        The previous design submissions for the platform had been rejected by Dubai Municipality's
        senior leadership. We were coming into a project where the client had already been
        disappointed, trust was low, and expectations of what design could deliver were
        appropriately sceptical. The brief wasn't just to design a better platform — it was to
        design one that would actually get approved.
      </p>
      <p>
        On top of this, the designs would be implemented by the client's own development team in
        Mendix — a low-code enterprise platform with specific layout and interaction constraints.
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
        constraints, ensuring that every design decision was buildable — not just visually coherent.
        The engagement was structured as a series of milestone deliverables with binary outcomes:
        approved to proceed, or rework required.
      </p>

      {/* KEY DECISIONS */}
      <h2>Key Decisions</h2>

      <h3>Decision 1 — Information architecture before any visual design</h3>
      <p>
        The temptation in government platform design is to start with the visual layer — to show
        clients something that looks like a finished product quickly. This is usually a mistake.
        Dubai Municipality's service portfolio is large, complex, and internally inconsistent:
        different services have different eligibility criteria, different document requirements,
        different approval chains, and different expected completion times.
      </p>
      <p>
        We spent the first phase purely on IA — mapping every service category, every decision
        branch, every document dependency — before touching a single layout. This meant that when
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
          Full service taxonomy mapped before any layout work began — home screen reflects the IA, not a design-first layout.
        </figcaption>
      </figure>

      <h3>Decision 2 — Bilingual parity from the first wireframe, not retrofitted RTL</h3>
      <p>
        Most bilingual design projects treat Arabic as a translation layer applied to an English
        design. You design in English, hand it to a translator, then "flip" the layout. This
        produces subtle but consistent failures: icons placed on the wrong side, form fields that
        don't align, navigation that feels backwards, numbers formatted incorrectly.
      </p>
      <p>
        We designed every screen in both directions simultaneously from the first wireframe.
        LTR English and RTL Arabic were treated as equal first-class layouts — not a primary
        and a derivative. This caught layout failures early, when they were cheap to fix, rather
        than in development, when they're expensive. It also meant the Arabic experience felt
        designed, not translated — which was immediately apparent to the client's Arabic-speaking
        stakeholders during presentations.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/dubai/Dubai-English-Arabic.png"
            alt="Side-by-side comparison of English (LTR) and Arabic (RTL) layouts — designed simultaneously"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          English (LTR) and Arabic (RTL) designed simultaneously — both treated as first-class layouts, not primary and derivative.
        </figcaption>
      </figure>

      <h3>Decision 3 — Milestone sign-off structure, not open-ended reviews</h3>
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
        a clear role in each session — they were being asked to make a decision, not form an
        opinion — which accelerated sign-off and kept the project moving.
      </p>

      <h3>Decision 4 — Designing within Mendix constraints from the start</h3>
      <p>
        The client's development team would implement the designs in Mendix. Mendix has specific
        constraints: limited custom layout options, a defined component set, particular behaviour
        patterns for forms and navigation. Designing without accounting for this would produce
        beautiful Figma files that couldn't be built without significant custom development work —
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
          Service flows designed within Mendix's component and layout constraints — buildable without custom engineering.
        </figcaption>
      </figure>

      {/* RESULTS */}
      <h2>Results</h2>
      <ul>
        <li>
          Designs formally approved by senior Dubai Municipality stakeholders — after previous
          design submissions from the project had been rejected
        </li>
        <li>
          Platform serves 3.5 million Dubai residents across the full portfolio of municipal services
        </li>
        <li>
          Full bilingual experience delivered: English (LTR) and Arabic (RTL) designed simultaneously
          to equal standards — not retrofitted
        </li>
        <li>
          Information architecture mapped for the complete service portfolio before any visual work
          began — establishing a structural foundation the client's operational team could validate
        </li>
        <li>
          Designs handed off directly for Mendix implementation — client development team built
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
        the designs — but we had limited access to actual residents during the design process.
        Government procurement timelines rarely allow for extended user research, and this project
        was no exception. In retrospect, even two rounds of lightweight usability testing with
        Arabic-speaking residents would have stress-tested assumptions about task comprehension
        that we validated only through stakeholder review.
      </p>
      <p>
        I'd also document the RTL design decisions more systematically — which layout rules we
        established, which exceptions we found, how we handled edge cases like numeric strings
        in Arabic text. That knowledge existed in the design files but wasn't captured as
        reusable guidelines, which means the next team to work on an RTL product starts from
        zero instead of building on what we learned.
      </p>

    </CaseStudyLayout>
  );
}

```

## app/case-study/javelina/page.tsx
```tsx
import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import FigmaEmbed from "@/components/FigmaEmbed";

export const metadata: Metadata = {
  title: "Javelina — Founding UX Designer | Ali Abdul",
  description:
    "Built the UX practice from zero at Javelina. 120+ component design system and three-tier theming architecture cut new-client onboarding from weeks to under 24 hours. Clients: Cigna, Keenan, Bywater.",
};

export default function JavelinaPage() {
  return (
    <CaseStudyLayout
      title="Javelina — Building an Enterprise Health Platform from Zero"
      subtitle="I was the first designer at Javelina. I built the entire UX practice, hired a team of four, and shipped a 120+ component design system that reduced new-client onboarding from weeks to under 24 hours — for Fortune 500 health insurers where errors mean compliance failures."
      tags={["Enterprise SaaS", "Design Systems", "AI-Assisted Workflows", "US Market", "UX Leadership"]}
      role="Founding UX Designer → UX Lead"
      timeline="2019 – 2023"
      metrics={[
        { value: "120+", label: "Components in the design system" },
        { value: "<24h", label: "New client theme deployment (was weeks)" },
        { value: "−40%", label: "Dev handoff time — AI workflow system" },
        { value: "9→5", label: "Open Enrollment steps eliminated" },
      ]}
      heroImage={{
        src: "/img/javelina/Cover.jpg",
        alt: "Javelina — Enterprise Health Platform. Mobile App | Member Platform | Admin Platform",
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
        branding requirements, different access controls, and different interaction needs — and
        none of them can break the others.
      </p>
      <p>
        When I joined Javelina, none of this had been designed. There was no UX practice, no design
        system, and no process for onboarding new clients. Every new insurer or employer required
        weeks of manual customisation work from the development team. The product was growing —
        Cigna, Keenan, and Bywater were in the pipeline — but the foundation wasn't built to
        support them at scale.
      </p>
      <p>
        This wasn't just a UX problem. In US health insurance, a broken enrollment flow isn't a
        friction issue — it's a compliance and legal exposure. The stakes for getting this wrong
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

      <h3>Decision 1 — Three-tier theming architecture</h3>
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
        customisations at tier two, and member-facing UX at tier three — with inheritance flowing
        downward so changes at the top propagated automatically.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/javelina/branding_javelina.png"
            alt="Javelina branding configuration panel showing insurer-level theme settings alongside two branded member portals — Manchester Regional Health (blue) and Chelsey Regional Health (purple)"
            width={1969}
            height={2600}
            className="w-full h-auto"
            priority
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            Insurer-level branding configuration (left) propagates automatically to the member portal (right). Two clients, one codebase — Manchester Regional Health in blue, Chelsey Regional Health in purple.
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

      <h3>Decision 2 — Token-based design system over component-first</h3>
      <p>
        The conventional approach to design systems is to start with components: buttons, inputs,
        cards. We inverted this. We started with design tokens — the named values for colour,
        spacing, typography, and radius — before building a single component.
      </p>
      <p>
        The reason was the multi-brand problem. If a button component has a colour hardcoded, you
        need a different button component for every client. If the button references a token, you
        change the token value and every instance of that button across every screen updates
        automatically. This decision is what made the &lt;24 hour client onboarding possible — theme
        deployment became a token file change, not a development sprint.
      </p>
      <p>
        The system reached 120+ components covering web, mobile web, and native iOS/Android — all
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
            Design System v2.0 — theme colour tokens, product card states, and a live portal screen. All 120+ components draw from the same token foundation.
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

      <h3>Decision 3 — Open Enrollment redesign: restructuring around the member's mental model</h3>
      <p>
        Open Enrollment — the annual window where employees select their health coverage — was
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
        The result was 5 steps instead of 9 — a 44% reduction in cognitive load at the most
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
            Redesigned enrollment flow — plan selection restructured around the member's decision sequence, not the system's data model. Dependent coverage handled in a single comparison step.
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

      <h3>Decision 4 — White-label mobile apps as design system extension</h3>
      <p>
        As insurer clients grew, the demand for white-label iOS and Android apps followed. The
        decision was whether to design the mobile apps as separate products or as extensions of
        the existing design system.
      </p>
      <p>
        We extended the system. Platform-specific adaptations — iOS navigation conventions, Android
        material patterns, touch target sizing — were layered on top of the shared token foundation,
        not built from scratch. This meant the mobile components were born already themed for each
        client, and design consistency across web and mobile was guaranteed rather than manually
        maintained.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/javelina/mobile_app.png"
            alt="Javelina white-label mobile app screens showing member dashboard, benefits overview, and claims — themed in client branding using the same token system as the web portal"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            White-label mobile app — same token system as web, with platform-appropriate navigation and touch target sizing per iOS and Android conventions.
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

      <h3>Decision 5 — Architecting a design operating system powered by AI</h3>
      <p>
        While Javelina's senior leadership was still in meetings debating whether to adopt Figma AI,
        I built something more useful: a design operating system that gave AI deep, accurate context
        about our white-label design system — and put it in the hands of every designer on the team.
      </p>
      <p>
        The core problem with AI in design teams is context. A generic AI tool knows nothing about
        your component library, your token naming conventions, your layout constraints, or your
        client theming rules. Every prompt starts from zero. The output is plausible but wrong —
        wrong components, wrong spacing, wrong patterns for your system.
      </p>
      <p>
        I solved this by building structured prompt libraries that embedded our design system
        knowledge directly into the AI's working context. A designer could reference a Jira ticket
        and the system would produce a relevant flow, screen, or component suggestion — grounded in
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
        AI-assisted checkpoints — structured reviews at each stage that caught system inconsistencies
        before they became handoff problems.
      </p>
      <p>
        The result: a 40% reduction in dev handoff time. Not because designers were working faster
        at the same tasks, but because the bottlenecks — exploration dead-ends, annotation gaps,
        QA rework — were structurally reduced. The AI didn't replace design judgment. It eliminated
        the administrative overhead that was consuming it.
      </p>
      <FigmaEmbed
        url="https://www.figma.com/design/0tsXGB3LPA90olRbjX7Gbh/Portfolio?node-id=1-14596&t=4AdtQQVfuz7vZqIU-1"
        title="Javelina — Design operating system"
        caption="AI with full design system context — components, tokens, layout patterns, client theming rules."
        height={500}
      />

      {/* RESULTS */}
      <h2>Results</h2>
      <ul>
        <li>
          Dev handoff time reduced by 40% — achieved through an AI-assisted design operating system
          built before the organisation had formally adopted any AI tooling
        </li>
        <li>
          New client theme deployment reduced from weeks of manual development work to under 24 hours —
          enabled by the token-based design system
        </li>
        <li>
          Open Enrollment redesigned from 9 steps to 5, removing 44% of the cognitive steps at the
          highest-stakes moment in the member journey
        </li>
        <li>
          Feature delivery standardised: 2 days design, 3 days development — a repeatable cadence
          that hadn't existed before the design system
        </li>
        <li>
          120+ component library built and maintained across web, mobile web, iOS, and Android —
          used by a team of 4 designers and multiple development squads
        </li>
        <li>
          AI prompt libraries deployed across the design team — giving every designer AI tools with
          accurate context of our white-label system, not generic output
        </li>
        <li>
          Clients onboarded under this system: Cigna, Keenan, Bywater, and Aptia — all Fortune 500
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
        based on logical analysis of the flow and stakeholder input — not on observed user behaviour.
        We got the right outcome, but it was partly luck. A round of usability testing on the original
        flow would have given us evidence rather than conviction. In a regulated product context, that
        distinction matters more than it does elsewhere.
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

```

## app/case-study/jet-airways/page.tsx
```tsx
import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Jet Airways — Multi-Platform Aviation UX | Ali Abdul",
  description:
    "Shipped production apps for Jet Airways across desktop web, iOS, Android, Apple Watch, and a B2B travel agent portal. All platforms live from 2015 to 2019.",
};

export default function JetAirwaysPage() {
  return (
    <CaseStudyLayout
      title="Jet Airways — Every Consumer Touchpoint for India's Premier Airline"
      subtitle="Over four years I shipped production apps for Jet Airways across six platforms: desktop web, mobile web, iOS, Android, Apple Watch, and a B2B travel agent portal. Every platform was live and in use until the airline ceased operations in April 2019."
      tags={["Aviation", "iOS · Android · Web", "Apple Watch", "Consumer", "B2B + B2C"]}
      role="Product Designer (UX + UI)"
      timeline="2015 – 2019"
      metrics={[
        { value: "6", label: "Platforms shipped to production" },
        { value: "4 yrs", label: "All platforms live and in use" },
        { value: "2015", label: "Apple Watch app — novel for Indian aviation" },
        { value: "B2B+B2C", label: "Separate portals for agents and passengers" },
      ]}
      heroImage={{
        src: "/img/jetairways/jetairways-1.png",
        alt: "Jet Airways desktop web flight search results alongside mobile meal selection screen",
        width: 1200,
        height: 900,
      }}
    >

      {/* PROBLEM */}
      <h2>The Problem</h2>
      <p>
        In 2015, Jet Airways had a fragmented digital presence. A passenger booking a flight on
        desktop encountered a different visual language, different terminology, and different
        interaction patterns than they'd find on mobile. There was no consistent mental model
        across touchpoints — just separate products that happened to serve the same airline.
      </p>
      <p>
        The fragmentation mattered more than a cosmetic inconsistency. A passenger who started
        a booking on desktop and continued it on their phone would encounter layout shifts,
        renamed fields, and different confirmation patterns. In aviation, where passengers
        are anxious about getting bookings right, that inconsistency erodes trust in the
        platform at exactly the wrong moment.
      </p>
      <p>
        Simultaneously, Jet Airways served a large B2B travel agent audience — agencies managing
        bulk bookings, corporate accounts, and multi-passenger itineraries — whose needs were
        entirely different from a solo passenger booking a weekend trip. These two audiences
        needed distinct interfaces sharing the same underlying design language.
      </p>

      {/* ROLE */}
      <h2>My Role</h2>
      <p>
        Product Designer responsible for UX and UI across all six platforms. I worked
        end-to-end — from initial research and information architecture through to final
        UI specifications and developer handoff. I was part of a cross-functional team
        that included product managers, backend engineers, and platform-specific frontend
        developers.
      </p>
      <p>
        The four-year tenure meant I was present for the full lifecycle of the digital product —
        from the original iOS app through to the Apple Watch companion, the B2B portal, and
        the ongoing web platform evolution. I wasn't a consultant brought in for a single
        platform. I owned the design continuity across all of them.
      </p>

      {/* KEY DECISIONS */}
      <h2>Key Decisions</h2>

      <h3>Decision 1 — Shared component library as the cross-platform foundation</h3>
      <p>
        The first structural decision was how to create visual consistency across six platforms
        without creating six separate design systems. The options were: design each platform
        independently and enforce consistency through review (slow, fragile), create a single
        rigid system and adapt it rigidly to each platform (consistent but poor platform fit),
        or build a shared component library with platform-specific adaptation layers on top.
      </p>
      <p>
        We chose the third approach. Shared foundations — colour, typography, spacing, iconography —
        were defined once. Platform-specific layers then applied the appropriate conventions:
        iOS navigation patterns for the iOS app, Android material behaviour for Android,
        responsive breakpoints for web. A passenger moving from the Jet Airways website to
        the iOS app encountered the same visual language with different — and correct — interaction
        behaviour for each context.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/jetairways/jetairways-1.png"
            alt="Jet Airways desktop web and mobile showing consistent visual language across flight search and meal selection"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          One design language expressed across desktop web and mobile — same components, correct platform conventions for each.
        </figcaption>
      </figure>

      <h3>Decision 2 — Apple Watch: minimum viable interaction, not a shrunken phone app</h3>
      <p>
        Designing the Apple Watch companion in 2015–2016 was genuinely novel. There was no
        aviation industry precedent for what a watch airline app should do. The naive approach
        would have been to shrink the iOS app's key screens onto a 38mm display. This is
        almost always the wrong answer for wearable design.
      </p>
      <p>
        The right question was: what is a passenger doing with their phone that a watch can do
        better — or what would they do if they didn't have to reach for their phone? The answer
        was narrow: boarding pass display at the gate, flight status at a glance, and one-tap
        check-in confirmation. Everything else — seat selection, meal preferences, booking
        management — stayed on the phone.
      </p>
      <p>
        Constraining the watch to this minimal surface wasn't a limitation — it was the design.
        A watch app that tries to do everything a phone does is a worse phone app on a smaller
        screen. A watch app that does three things perfectly is a genuinely useful wearable experience.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/jetairways/jetairways-3.png"
            alt="Jet Airways mobile app showing JetBistro meal selection with category filters and JetXtras add-on services"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          JetBistro meal filtering and JetXtras add-ons — ancillary services designed as focused mobile-first flows, not desktop ports.
        </figcaption>
      </figure>

      <h3>Decision 3 — Separate interaction models for B2C passengers and B2B travel agents</h3>
      <p>
        Travel agents have a fundamentally different task model from passengers. A passenger is
        booking one journey for themselves, often with emotional investment in the trip. A travel
        agent is managing dozens of bookings simultaneously, across multiple passengers, under time
        pressure, with no emotional stake in any individual journey.
      </p>
      <p>
        Designing a single interface that serves both is a category error. The B2C passenger app
        is focused and linear — guide one person through one booking with confidence and clarity.
        The B2B travel agent portal is dense and tabular — enable rapid switching between bookings,
        bulk passenger management, and corporate account oversight. The visual language is shared.
        The information architecture and interaction model are entirely separate.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/jetairways/jetairways-4.png"
            alt="Jet Airways B2B advertising portal alongside JetXtras add-on management screen"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          B2B portal (left) and JetXtras management (right) — same visual language, entirely separate interaction models for agents vs passengers.
        </figcaption>
      </figure>

      <h3>Decision 4 — Responsive web as the canonical design reference</h3>
      <p>
        With six platforms, the question of which platform to design "first" had real consequences.
        Designing mobile-first and scaling up meant desktop layouts were derived. Designing
        desktop-first and scaling down meant mobile was always a compromise.
      </p>
      <p>
        We used responsive web as the canonical design reference — the platform that had to solve
        the hardest content and layout problems across the widest range of viewports. Native iOS
        and Android then adapted from this reference, taking what worked and applying the correct
        platform conventions. This meant consistency wasn't enforced through constant cross-platform
        review — it was built into the design process from the start.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/jetairways/jetairways-2.png"
            alt="Jet Airways desktop web showing flight listing results at multiple viewport widths with fare breakdown panel"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <figcaption className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
          Responsive web as the canonical reference — flight listing and fare details solved across the full viewport range before native adaptation.
        </figcaption>
      </figure>

      {/* RESULTS */}
      <h2>Results</h2>
      <ul>
        <li>
          iOS and Android apps shipped to App Store and Play Store — live in production from 2015
        </li>
        <li>
          Apple Watch companion app shipped in 2015–2016, one of the earliest aviation wearable
          experiences in India
        </li>
        <li>
          Responsive web platform and mobile web served passengers across the full viewport range
        </li>
        <li>
          B2B travel agent portal delivered a separate, efficiency-first interface for agency and
          corporate booking management
        </li>
        <li>
          All six platforms maintained visual consistency through the shared component library —
          no platform felt like an afterthought
        </li>
        <li>
          Every platform remained live and in active use until Jet Airways ceased operations in
          April 2019 — the closure was financial, not product-related
        </li>
      </ul>

      {/* REFLECTION */}
      <h2>What I'd do differently</h2>
      <p>
        The Apple Watch design was right in principle — minimal, focused, three clear interactions —
        but we underinvested in testing it with real passengers in real airport environments.
        Watch interactions at a gate are different from interactions at a desk: gloved hands,
        bright sunlight, one-second attention windows, arms full of luggage. We tested it in
        standard conditions and missed some friction that only became visible in the field.
      </p>
      <p>
        I'd also push for a more formal design system documentation process earlier in the project.
        The shared component library existed and worked, but it lived primarily in Sketch files
        rather than as a documented, versioned system with explicit rules. When new developers
        joined, the consistency they produced varied based on how carefully they read the Figma
        files, not because the system was explicit about its rules.
      </p>

    </CaseStudyLayout>
  );
}

```

## app/case-study/nusuk/page.tsx
```tsx
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
      <div className="w-full h-52 rounded-xl placeholder-img mb-2 text-[#bbb] text-sm">
        Permit application flow: primary path (left) vs. contextual detail on demand (right)
      </div>
      <p className="text-xs text-[#aaa] mb-8 text-center">
        Core task stays unobstructed. Complexity is accessible, not mandatory.
      </p>

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
      <div className="grid sm:grid-cols-2 gap-4 mb-2">
        <div>
          <div className="h-48 rounded-xl placeholder-img text-[#bbb] text-sm">
            Arabic (RTL) — designed first
          </div>
          <p className="text-xs text-[#aaa] mt-2 text-center">Primary design language</p>
        </div>
        <div>
          <div className="h-48 rounded-xl placeholder-img text-[#bbb] text-sm">
            English (LTR) — parity standard
          </div>
          <p className="text-xs text-[#aaa] mt-2 text-center">Equal quality, derived from Arabic</p>
        </div>
      </div>
      <div className="mb-8" />

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
      <div className="w-full h-48 rounded-xl placeholder-img mb-2 text-[#bbb] text-sm">
        Confirmation flow: success state, error state, and progress indicator system
      </div>
      <p className="text-xs text-[#aaa] mb-8 text-center">
        No ambiguity at high-stakes moments. Explicit confirmation or explicit error — nothing in between.
      </p>

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

```

## app/globals.css
```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

/* ── Design Tokens — Dark (default) ──────────────────────────────────────── */
:root,
html.dark {
  --bg-base:     #0a0a0a;
  --bg-surface:  #141414;
  --bg-elevated: #1e1e1e;

  --text-primary:   #f0f0f0;
  --text-secondary: #a0a0a0;
  --text-muted:     #4a4a4a;

  --accent:       #d8bc6f;
  --accent-light: #e6d092;
  --accent-dark:  #c8a84b;

  --border:       rgba(255,255,255,0.08);
  --border-hover: rgba(255,255,255,0.16);
}

/* ── Light mode ───────────────────────────────────────────────────────────── */
html.light {
  --bg-base:     #f5f5f3;
  --bg-surface:  #efefed;
  --bg-elevated: #e8e8e6;

  --text-primary:   #171717;
  --text-secondary: #555555;
  --text-muted:     #aaaaaa;

  --accent:       #84681a;
  --accent-light: #7a6018;
  --accent-dark:  #6a5214;

  --border:       rgba(0,0,0,0.08);
  --border-hover: rgba(0,0,0,0.16);
}

/* ── Tailwind theme ───────────────────────────────────────────────────────── */
@theme inline {
  --font-sans:   var(--font-inter), system-ui, sans-serif;
  --font-serif:  var(--font-inter), system-ui, sans-serif;
  --font-drama:  var(--font-inter), system-ui, sans-serif;
  --font-mono:   ui-monospace, "Cascadia Code", monospace;

  --color-accent:       var(--accent);
  --color-accent-light: var(--accent-light);

  --max-width-content: 720px;
}

/* ── Base ─────────────────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; color-scheme: dark; }
html.light { color-scheme: light; }

body {
  background: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-inter), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── Typography ───────────────────────────────────────────────────────────── */
h1, h2, h3 {
  font-family: var(--font-inter), system-ui, sans-serif;
}

.font-drama {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.02em;
}

/* ── Focus ────────────────────────────────────────────────────────────────── */
a:focus-visible,
button:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 2px;
}

/* ── Selection ────────────────────────────────────────────────────────────── */
::selection {
  background: var(--accent);
  color: #000;
}

/* ── Scrollbar ────────────────────────────────────────────────────────────── */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }

/* ── Case study prose ─────────────────────────────────────────────────────── */
.prose-case h2 {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-top: 3rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.prose-case h3 {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.prose-case p {
  line-height: 1.8;
  margin-bottom: 1.25rem;
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.prose-case ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.25rem;
}

.prose-case ul li {
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.8;
  margin-bottom: 0.625rem;
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.prose-case ul li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--accent);
}

.prose-case a {
  color: var(--accent-light);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── Case study card hover ────────────────────────────────────────────────── */
.group:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, transparent) !important;
}

/* ── Placeholder image ────────────────────────────────────────────────────── */
.placeholder-img {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-family: ui-monospace, monospace;
}

```

## app/layout.tsx
```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AIButton from "@/components/AIButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sikandar Ali Abdul — Senior UX Designer",
  description:
    "Senior UX Designer with 11 years designing enterprise SaaS, government civic platforms, and consumer products across US, UAE, and India. Open to Gulf · Singapore · Remote.",
  openGraph: {
    title: "Sikandar Ali Abdul — Senior UX Designer",
    description:
      "11 years designing enterprise systems at scale. Multi-tenant SaaS, government civic platforms, aviation UX.",
    url: "https://portfolio.blinkwiser.com",
    siteName: "Sikandar Ali Abdul Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <AIButton />
      </body>
    </html>
  );
}

```

## app/page.tsx
```tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sikandar Ali Abdul — Senior UX Designer",
  description:
    "Senior UX Designer with 11 years designing enterprise SaaS, government civic platforms, and consumer products across US, UAE, and India. Open to Gulf · Singapore · Remote.",
};

const caseStudies = [
  {
    slug: "javelina",
    eyebrow: "Enterprise SaaS · US Health Insurance · 2019–2023",
    title: "One platform. Multiple Fortune 500 clients.",
    subtitle: "One design architecture that scales.",
    outcome: "Founded the UX practice from zero. 120+ component design system and AI-assisted workflows cut dev handoff time by 40% and new-client onboarding from weeks to under 24 hours.",
    tags: ["Multi-Tenant", "Design Systems", "AI Workflows", "US Market"],
    thumb: "/img/javelina/branding_javelina.png",
  },
  {
    slug: "dubai-municipality",
    eyebrow: "Government Civic · UAE · 2017–2018",
    title: "Designing for 3.5 million residents.",
    subtitle: "Bilingual civic UX that got approved after prior submissions were rejected.",
    outcome: "Lead UX Designer onsite in Dubai. Full Arabic/English parity — designed both directions simultaneously, not retrofitted RTL.",
    tags: ["Government", "RTL / Bilingual", "Gulf Market"],
    thumb: "/img/dubai/Dubai-English-Arabic.png",
  },
  {
    slug: "jet-airways",
    eyebrow: "Consumer Aviation · India · 2015–2019",
    title: "Every consumer touchpoint. Every platform.",
    subtitle: "One consistent experience across six.",
    outcome: "Shipped production apps across desktop web, iOS, Android, Apple Watch, and a B2B travel agent portal for one of India's top 3 airlines.",
    tags: ["Aviation", "iOS · Android · Web", "Apple Watch", "B2B + B2C"],
    thumb: "/img/jetairways/jetairways-1.png",
  },
  {
    slug: "blinkwiser",
    eyebrow: "AI SaaS · Solo Founder · 2023–2024",
    title: "Designing and shipping AI products end-to-end.",
    subtitle: "Proof that I understand products from the inside.",
    outcome: "Two live AI SaaS tools — a carousel builder with active users and a LangChain-powered video course builder — designed, built, and shipped solo from concept to production.",
    tags: ["AI SaaS", "Solo Founder", "End-to-End", "Shipped Product"],
    thumb: "/img/blinkwiser/carousel-editor.png",
  },
];

const numbers = [
  { stat: "< 24 hrs", context: "Time to onboard a new Fortune 500 client onto Javelina, fully branded and live" },
  { stat: "−40%", context: "Dev handoff time — AI design operating system built before the org adopted any AI tooling" },
  { stat: "9 → 5", context: "Javelina Open Enrollment steps: complexity halved, zero decisions removed" },
  { stat: "3.5M", context: "Dubai residents served by the bilingual civic platform" },
  { stat: "6 platforms", context: "Jet Airways: web, iOS, Android, Apple Watch, mobile web, B2B — all in production simultaneously" },
  { stat: "1 → 4", context: "Javelina design team: founding solo designer to leading a team of four" },
];

const keyFacts = [
  { label: "Based", value: "Pune, India · Open to Gulf, Singapore, Remote" },
  { label: "Experience", value: "11 years · Enterprise SaaS, Government, Consumer" },
  { label: "Last role", value: "Lead UX Designer · Javelina · Team of 4 · 2019–2023" },
  { label: "Also", value: "Founder, Blinkwiser — 2 live AI SaaS products" },
  { label: "Clients", value: "Cigna · Dubai Municipality · Jet Airways · Ministry of Hajj" },
];

const services = [
  { title: "Enterprise UX", desc: "Complex multi-tenant SaaS, regulated industries, high-stakes flows where errors cost money or compliance." },
  { title: "Design Systems", desc: "Token-based, multi-brand systems that let teams ship faster without rebuilding from scratch each client." },
  { title: "AI-Assisted Workflows", desc: "Built prompt libraries and design operating systems that give AI accurate context of your design system — not generic output." },
  { title: "Government & Civic UX", desc: "Onsite UAE government experience. Proven in high-accountability delivery environments with formal stakeholder sign-off." },
  { title: "RTL / Bilingual Design", desc: "Arabic/English parity from the first wireframe — not retrofitted. Both directions designed simultaneously." },
  { title: "UX Leadership", desc: "Founding designer track record — built teams, hired designers, set practice standards from zero." },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="max-w-[720px] mx-auto px-6 pt-20 pb-24" style={{
        background: "radial-gradient(ellipse 800px 500px at 10% 80%, color-mix(in srgb, var(--accent) 5%, transparent) 0%, transparent 70%)",
      }}>
        <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-6" style={{ color: "var(--accent)" }}>
          Open to Gulf · Singapore · Remote · 2026
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.03em] mb-3" style={{ color: "var(--text-primary)" }}>
          Sikandar Ali Abdul
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold leading-[1.15] tracking-[-0.02em] mb-6" style={{ color: "var(--text-primary)" }}>
          <span className="font-drama" style={{ color: "var(--accent)" }}>Senior UX Designer</span>{" "}
          <span style={{ color: "var(--text-secondary)" }}>who designs enterprise systems and builds AI products.</span>
        </h2>

        <p className="text-base leading-[1.85] mb-10 max-w-[580px]" style={{ color: "var(--text-secondary)" }}>
          11 years architecting complex B2B platforms, government civic systems, and consumer products at scale —
          across the US, UAE, and India. Currently open to senior and lead UX roles. I use AI to move faster.
          I build design systems that make teams faster. I design for users who can't afford errors.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: "var(--text-primary)", color: "var(--bg-base)" }}
          >
            See my work
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
      <section id="work" className="max-w-[720px] mx-auto px-6 pb-20">
        <div className="pt-16 mb-10" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-2" style={{ color: "var(--text-muted)" }}>
            Selected Work
          </p>
          <h2 className="text-2xl font-bold tracking-[-0.02em]" style={{ color: "var(--text-primary)" }}>
            11 years. Four industries.{" "}
            <span className="font-drama" style={{ color: "var(--accent)" }}>One consistent thread.</span>
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
              {/* Thumbnail — only shown when thumb is set */}
              {cs.thumb && (
                <div className="w-full overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
                  <Image
                    src={cs.thumb}
                    alt={cs.title}
                    width={1969}
                    height={2600}
                    className="w-full h-64 object-cover object-top"
                  />
                </div>
              )}

              <div className="p-6">
              <p className="text-[10px] font-mono tracking-[0.2em] uppercase mb-3" style={{ color: "var(--accent)" }}>
                {cs.eyebrow}
              </p>
              <h3 className="text-lg font-bold tracking-[-0.02em] mb-1 transition-colors" style={{ color: "var(--text-primary)" }}>
                {cs.title}
              </h3>
              <p className="text-sm mb-3 font-drama" style={{ color: "var(--accent)" }}>
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
                <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>
                  Read case study →
                </span>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── By the numbers ───────────────────────────────── */}
      <section className="max-w-[720px] mx-auto px-6 pb-20">
        <div className="pt-16" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-10" style={{ color: "var(--text-muted)" }}>
            By the numbers
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
            {numbers.map((n) => (
              <div key={n.stat}>
                <p className="text-2xl font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
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
      <section id="about" className="max-w-[720px] mx-auto px-6 pb-20">
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
                to work at scale. I don't just use AI as a tool — I've built the infrastructure that makes
                AI useful for design teams. At Javelina I architected a design operating system with prompt
                libraries and AI-assisted workflows that cut handoff time by 40%.
              </p>
              <p className="text-base leading-[1.85]" style={{ color: "var(--text-secondary)" }}>
                Outside client work, I build. Under Blinkwiser I've shipped two AI-powered SaaS products
                independently. I started as the sole designer at Javelina and grew into leading a team of
                four. I sit at the intersection of design, product thinking, and engineering — and that's
                where the most interesting problems live.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/Resume.pdf"
                  download
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

            {/* Photo placeholder */}
            <div
              className="w-full aspect-square rounded-xl placeholder-img text-[10px] font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              Photo
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

      {/* ── Services ─────────────────────────────────────── */}
      <section id="services" className="max-w-[720px] mx-auto px-6 pb-20">
        <div className="pt-16" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-2" style={{ color: "var(--text-muted)" }}>
            What I do
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
      <section id="contact" className="max-w-[720px] mx-auto px-6 pb-20">
        <div className="pt-16" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
            Contact
          </p>
          <h2 className="text-2xl font-bold tracking-[-0.02em] mb-4" style={{ color: "var(--text-primary)" }}>
            Let's talk.
          </h2>
          <p className="text-base leading-[1.8] mb-8 max-w-[520px]" style={{ color: "var(--text-secondary)" }}>
            Open to senior and lead UX roles in the Gulf, Singapore, and remote — particularly enterprise SaaS,
            fintech, government, and regulated industries. Usually responds within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ali050786@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{ background: "var(--text-primary)", color: "var(--bg-base)" }}
            >
              ali050786@gmail.com
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

```

## components/AIButton.tsx
```tsx
"use client";
import { useState } from "react";

export default function AIButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
        style={{
          background: "var(--bg-elevated)",
          border: "1px solid var(--border)",
          color: "var(--text-secondary)",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
        }}
        aria-label="Chat with AI assistant"
        title="Ask me anything about Sikandar's work"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 w-80 rounded-2xl shadow-2xl p-5"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
              Ask about Sikandar's work
            </p>
            <button
              onClick={() => setOpen(false)}
              className="text-lg leading-none transition-colors"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
            Want to know about a specific project, process, or domain? Ask below.
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. Tell me about the Dubai project"
              className="flex-1 text-xs rounded-lg px-3 py-2 focus:outline-none"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <button
              className="px-3 py-2 text-xs font-medium rounded-lg transition-colors"
              style={{ background: "var(--accent)", color: "#000" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-light)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
            >
              →
            </button>
          </div>
          <p className="text-[10px] mt-3 font-mono" style={{ color: "var(--text-muted)" }}>
            Powered by Claude
          </p>
        </div>
      )}
    </>
  );
}

```

## components/CaseStudyLayout.tsx
```tsx
"use client";

import Link from "next/link";
import Image from "next/image";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  role: string;
  timeline: string;
  metrics: Metric[];
  heroImage?: { src: string; alt: string; width: number; height: number };
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  title, subtitle, tags, role, timeline, metrics, heroImage, children,
}: CaseStudyLayoutProps) {
  return (
    <article className="max-w-[720px] mx-auto px-6 pt-12 pb-24">

      {/* Back */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-10 transition-colors"
        style={{ color: "var(--text-muted)" }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        ← All work
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-full font-medium"
            style={{
              color: "color-mix(in srgb, var(--accent) 90%, transparent)",
              border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
              background: "color-mix(in srgb, var(--accent) 6%, transparent)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-[-0.03em] mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h1>
      <p className="text-base leading-[1.8] mb-8" style={{ color: "var(--text-secondary)" }}>
        {subtitle}
      </p>

      {/* Meta row */}
      <div
        className="flex flex-wrap gap-6 text-xs mb-10 pb-8"
        style={{ borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}
      >
        <div>
          <span
            className="block font-mono uppercase tracking-widest mb-1"
            style={{ color: "var(--text-muted)", fontSize: "9px" }}
          >
            Role
          </span>
          {role}
        </div>
        <div>
          <span
            className="block font-mono uppercase tracking-widest mb-1"
            style={{ color: "var(--text-muted)", fontSize: "9px" }}
          >
            Timeline
          </span>
          {timeline}
        </div>
      </div>

      {/* Metrics strip */}
      {metrics.length > 0 && (
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 rounded-xl"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <p
                className="text-2xl font-bold tracking-tight mb-1"
                style={{ color: "var(--accent)" }}
              >
                {m.value}
              </p>
              <p className="text-[11px] leading-snug" style={{ color: "var(--text-muted)" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Hero image */}
      {heroImage && (
        <div className="w-full rounded-xl overflow-hidden mb-12" style={{ border: "1px solid var(--border)" }}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Body */}
      <div className="prose-case">{children}</div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors"
          style={{ color: "var(--accent)" }}
        >
          ← Back to all work
        </Link>
      </div>
    </article>
  );
}

```

## components/FigmaEmbed.tsx
```tsx
"use client";

import { useState } from "react";

interface FigmaEmbedProps {
  /** Full Figma share URL — e.g. https://www.figma.com/design/ABC/File?node-id=1-2 */
  url: string;
  title: string;
  caption?: string;
  /** Height of the iframe container. Defaults to 480px */
  height?: number;
  /** Compact mode for card thumbnails */
  thumbnail?: boolean;
}

function toEmbedUrl(url: string) {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
}

export default function FigmaEmbed({ url, title, caption, height = 480, thumbnail = false }: FigmaEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const embedUrl = toEmbedUrl(url);
  const h = thumbnail ? 220 : height;

  if (errored) {
    return (
      <div
        className="w-full rounded-xl flex flex-col items-center justify-center gap-3 mb-2"
        style={{
          height: h,
          background: "var(--bg-elevated)",
          border: "1px solid var(--border)",
        }}
      >
        <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          Could not load Figma embed
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono underline underline-offset-4"
          style={{ color: "var(--accent)" }}
        >
          Open in Figma ↗
        </a>
      </div>
    );
  }

  return (
    <div className={thumbnail ? "mb-0" : "mb-2"}>
      <div
        className="w-full rounded-xl overflow-hidden relative"
        style={{
          height: h,
          border: "1px solid var(--border)",
          background: "var(--bg-elevated)",
        }}
      >
        {/* Loading skeleton */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
            <div
              className="w-6 h-6 rounded-full border-2 animate-spin"
              style={{ borderColor: "var(--border)", borderTopColor: "var(--accent)" }}
            />
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Loading Figma
            </p>
          </div>
        )}

        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          className="w-full h-full border-0 transition-opacity duration-300"
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      </div>

      {/* Footer row */}
      {!thumbnail && (
        <div className="flex items-center justify-between mt-2 mb-8">
          {caption && (
            <p className="text-xs text-center flex-1" style={{ color: "var(--text-muted)" }}>
              {caption}
            </p>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Open in Figma ↗
          </a>
        </div>
      )}
    </div>
  );
}

```

## components/Footer.tsx
```tsx
"use client";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }} className="mt-24 py-10">
      <div className="max-w-[720px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
          © 2026 Sikandar Ali Abdul
        </p>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
          <a
            href="mailto:ali050786@gmail.com"
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/sikandar-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

```

## components/Nav.tsx
```tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const t = (localStorage.getItem("theme") || "dark") as "dark" | "light";
    setTheme(t);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.className = next;
  };

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-sm"
      style={{
        background: "color-mix(in srgb, var(--bg-base) 92%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[720px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Sikandar Ali Abdul
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs font-mono uppercase tracking-widest transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors text-xs"
            style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          {/* Mobile toggle */}
          <button
            className="sm:hidden flex flex-col gap-1 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="block w-5 h-px" style={{ background: "var(--text-secondary)" }} />
            <span className="block w-5 h-px" style={{ background: "var(--text-secondary)" }} />
            <span className="block w-5 h-px" style={{ background: "var(--text-secondary)" }} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="sm:hidden px-6 py-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs font-mono uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

```

## next.config.ts
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

```

## package.json
```json
{
  "name": "new-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "lightningcss-darwin-arm64": "^1.32.0",
    "next": "16.2.6",
    "next-themes": "^0.4.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

## postcss.config.mjs
```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

## public/theme-init.js
```js
try{var t=localStorage.getItem("theme")||"dark";document.documentElement.className=t}catch(e){}

```

## startup.sh
```sh
#!/bin/bash

echo "🔍 Killing any processes on ports 3000–3100..."

for port in $(seq 3000 3100); do
  pids=$(lsof -ti tcp:$port 2>/dev/null)
  if [ -n "$pids" ]; then
    echo "  ✓ Killing port $port (PID: $pids)"
    kill -9 $pids 2>/dev/null
  fi
done

echo "✅ Ports cleared."
echo ""
echo "🚀 Starting my-portfolio dev server..."
cd "$(dirname "$0")"
npm run dev

```

## tailwind.config.ts
```ts
// Tailwind v4 uses CSS-based configuration via globals.css (@theme).
// This file is intentionally minimal — v4 does not use JS config for theme tokens.
export default {};

```

## tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

