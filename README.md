# Sikandar Ali Abdul — Portfolio

Personal UX portfolio built with Next.js 15 (App Router). Showcases 11 years of enterprise SaaS, government civic, and consumer product design work.

## Projects

- **Javelina** — Founding UX Designer, 120+ component design system, Fortune 500 health insurance clients
- **Dubai Municipality** — Bilingual Arabic/English civic platform for 3.5M residents
- **Jet Airways** — 6 platforms shipped to production (web, iOS, Android, Apple Watch, B2B portal)
- **Blinkwiser** — Solo founder, two live AI SaaS products (Agentic Carousel + VidExtreme)

## Stack

- Next.js 15 · React 19 · TypeScript · Tailwind CSS v4
- Fonts: Inter (Google Fonts)
- AI chat: Anthropic Claude (Haiku) via `/api/assistant`

## Getting Started

```bash
npm install
npm run dev
```

Add your Anthropic API key to `.env.local`:

```
ANTHROPIC_API_KEY=your_key_here
```

## Structure

```
app/
  page.tsx                   # Homepage
  case-study/
    javelina/
    dubai-municipality/
    jet-airways/
    blinkwiser/
  api/assistant/route.ts     # AI chat endpoint
components/
  CaseStudyLayout.tsx
  FigmaEmbed.tsx
  Nav.tsx · Footer.tsx · AIButton.tsx
public/
  img/                       # Screenshots per project
  Sikandar_Ali_Resume.pdf
```
