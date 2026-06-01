import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AIButton from "@/components/AIButton";
import SubHeader from "@/components/SubHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sikandar Ali Abdul — Senior UX Designer",
  description:
    "Senior UX Designer with 11 years designing enterprise SaaS, government civic platforms, and consumer products across US, UAE, and India. Open to Gulf · India · Singapore · Remote.",
  openGraph: {
    title: "Sikandar Ali Abdul — Senior UX Designer",
    description:
      "11 years designing enterprise systems at scale. Multi-tenant SaaS, government civic platforms, aviation UX.",
    url: "https://portfolio.blinkwiser.com",
    siteName: "Sikandar Ali Abdul Portfolio",
    type: "website",
    images: [
      {
        url: "https://portfolio.blinkwiser.com/img/1765377096878.jpeg",
        width: 400,
        height: 400,
        alt: "Sikandar Ali Abdul — Senior UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sikandar Ali Abdul — Senior UX Designer",
    description: "11 years designing enterprise systems at scale. Multi-tenant SaaS, government civic platforms, aviation UX.",
    images: ["https://portfolio.blinkwiser.com/img/1765377096878.jpeg"],
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
        <SubHeader />
        <main>{children}</main>
        <Footer />
        <AIButton />
      </body>
    </html>
  );
}
