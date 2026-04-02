import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aniket Mehare — AI Product Leader",
  description:
    "AI Product Leader & Builder with 10 years of experience. I ship AI systems that solve real operational problems — from fintech to e-commerce to fleet management.",
  openGraph: {
    title: "Aniket Mehare — AI Product Leader who ships",
    description:
      "Building AI-powered products at scale. AED 220M GMV, 104k visits/month, 6-week sprints.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#EEF2EE]">{children}</body>
    </html>
  );
}
