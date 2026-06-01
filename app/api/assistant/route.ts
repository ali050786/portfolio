import { NextRequest, NextResponse } from "next/server";

const GROQ_URL   = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are a knowledgeable assistant on Sikandar Ali Abdul's portfolio website.
Answer questions about his work, experience, and skills concisely and accurately.

Key facts:
- Senior UX Designer with 11 years of experience
- Specialises in enterprise SaaS, government civic platforms, and consumer products
- Open to roles in Gulf, India, Singapore, or Remote in 2026

Projects:
1. Javelina (2021–Present): Founding UX Designer at a US health insurance SaaS. Built 120+ component design system, reduced new-client onboarding from weeks to under 24 hours, cut dev handoff by 40% with AI workflows. Clients: Cigna, Keenan, Bywater.
2. Dubai Municipality (2020–2021): Lead UX Designer onsite in Dubai. Bilingual Arabic/English civic platform for 3.5M residents. Designs approved after prior submissions were rejected.
3. Jet Airways (2015–2019): Shipped 6 platforms: desktop web, iOS, Android, Apple Watch, mobile web, and B2B travel agent portal, for one of India's top 3 airlines.
4. Blinkwiser (2025–Present): Solo founder. Built and shipped two live AI SaaS products: Agentic Carousel (blinkwiser.com) and VidExtreme (courses.blinkwiser.com).

Keep answers to 2–3 sentences unless a longer answer is clearly needed. Be direct and confident.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      reply: "The assistant isn't configured yet. Feel free to reach out at ali050786@gmail.com.",
    });
  }

  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const upstream = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message.slice(0, 500) },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!upstream.ok) {
      const err = await upstream.text();
      console.error("[assistant] Groq error:", upstream.status, err);
      return NextResponse.json({ reply: "I had trouble connecting. Please try again." });
    }

    const data = await upstream.json();
    const reply = String(data?.choices?.[0]?.message?.content ?? "").trim();
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[assistant] Error:", err);
    return NextResponse.json({ reply: "Something went wrong. Please try again." });
  }
}
