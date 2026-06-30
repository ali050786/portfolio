import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Blinkwiser: Designing and Shipping AI Products | Ali Abdul",
  description:
    "Designed and shipped two live AI SaaS products end-to-end: Agentic Carousel (blinkwiser.com) and VidExtreme (courses.blinkwiser.com). Research, UX, UI, build, deploy — all of it.",
  openGraph: {
    title: "Blinkwiser: Designing and Shipping AI Products End-to-End",
    description:
      "Two live AI SaaS tools, designed, coded, and shipped solo. Proof that a designer can own the full product lifecycle, not just the Figma file.",
    url: "https://portfolio.blinkwiser.com/case-study/blinkwiser",
    type: "article",
    images: [{ url: "/img/blinkwiser/carousel-editor.png", width: 2600, height: 1424, alt: "Agentic Carousel AI editor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blinkwiser: Designing and Shipping AI Products End-to-End",
    description: "Two live AI SaaS products, designed and built solo from concept to production.",
    images: ["/img/blinkwiser/carousel-editor.png"],
  },
};

export default function BlinkwiserPage() {
  return (
    <CaseStudyLayout
      title="Blinkwiser: Designing and Shipping AI Products End-to-End"
      subtitle="Two live AI SaaS tools built from scratch: designed, coded, and shipped. This is what it looks like when a designer owns the entire product lifecycle."
      tags={["AI SaaS", "AI Products", "End-to-End", "Shipped Product", "LangChain"]}
      role="Sole Designer & Developer"
      timeline="2025 – Present"
      metrics={[
        { value: "2", label: "Live AI products in production" },
        { value: "Active", label: "Free-tier users on Agentic Carousel" },
        { value: "Solo", label: "Research · Design · Build · Ship" },
        { value: "5-stage", label: "AI pipeline for VidExtreme course builder" },
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
        content, not because the ideas were hard but because the tools weren't built for their workflow.
        Existing tools required too many manual steps, produced generic output, and didn't understand
        content strategy. The gap was a product problem, not a writing problem.
      </p>
      <p>
        As the problem became clear, so did the opportunity: build two focused tools: one for carousel
        creation and one for video course structuring, that used AI to handle the mechanical work while
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

      <h3>Decision 1: Agentic Carousel and a two-agent pipeline</h3>
      <p>
        The first design decision for Agentic Carousel was architectural: how to structure the AI
        pipeline. A single monolithic prompt produces plausible output but poor results because it tries to
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

      <h3>Decision 2: Mobile-first carousel editor</h3>
      <p>
        LinkedIn carousels are created by professionals on the go, often on phones between meetings,
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
            Focus view editor showing one slide at a time with full controls below. Designed for mobile-first use with progressive desktop enhancement.
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

      <h3>Decision 3: Freemium model to validate product-market fit</h3>
      <p>
        Before any monetisation, the product needed proof that people would return to it. A free tier
        with usage limits (number of carousels, number of AI generations) serves two purposes: it removes
        the barrier to first use, and it generates the usage data needed to identify where users are
        dropping off. Active free-tier users validate the core loop before a paywall.
      </p>

      <h3>Decision 4: VidExtreme, a five-stage sequential pipeline with visible progress</h3>
      <p>
        A video course is a complex output that needs a topic, a learner profile, a module structure,
        per-module scripts, visual briefs, and a production sequence. Generating all of this in one AI
        call produces incoherent results. I designed a five-stage sequential pipeline where each stage
        takes the previous stage's output as structured context: Concept → Identity → Structure → Skeleton → Blueprint.
      </p>
      <p>
        The UX challenge was keeping users oriented during a process that takes 60–90 seconds. I
        designed a progress indicator that shows both the current stage name and the stages ahead, not
        just a loading spinner. Users can see what the AI is currently working on and what's coming,
        which dramatically reduces the perception of wait time and abandonment during generation.
      </p>
      <figure className="my-6">
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
          <Image
            src="/img/blinkwiser/vidextreme-pipeline.png"
            alt="VidExtreme course creation pipeline showing 5-stage progress bar: Concept, Identity, Structure, Skeleton, Blueprint, with topic input and Generate AI Course button"
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
            VidExtreme admin panel, the course creation entry point. Clean input surface over a complex AI pipeline.
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
          Agentic Carousel live at <a href="https://blinkwiser.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>blinkwiser.com</a> with active free-tier users, with the core loop validated before monetisation
        </li>
        <li>
          VidExtreme live at <a href="https://courses.blinkwiser.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>courses.blinkwiser.com</a> , with a five-stage AI pipeline producing structured course outlines, scripts, and visual briefs in one generation
        </li>
        <li>
          Both products publicly accessible, not mockups, not prototypes, not portfolio pieces
        </li>
        <li>
          Two-agent architecture allows independent improvement of content strategy and visual structure
          without regressing either concern
        </li>
        <li>
          Built and deployed without a team, agency, or budget beyond API costs. Every design decision had a direct engineering consequence, and every engineering decision had a direct UX consequence
        </li>
      </ul>

      {/* REFLECTION */}
      <h2>Why this belongs in a UX portfolio</h2>
      <p>
        Most portfolios show work designed for other people's products. This case study shows what
        happens when a designer owns the whole thing. Every UX decision here had a direct engineering
        consequence, and every engineering decision had a direct UX consequence. Understanding that
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
