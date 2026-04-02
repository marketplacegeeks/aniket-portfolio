import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  title: "Aniket Mehare — PM who builds to validate",
  description:
    "Product Manager with 10+ years of experience. I ship working prototypes in 2–4 weeks to prove ideas before anyone commits resources to them.",
  openGraph: {
    title: "Aniket Mehare — PM who builds to validate",
    description:
      "I validate ideas by shipping them. $15M in cost savings. 104k visits in 30 days. Idea to working prototype in 2–4 weeks.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WNFXVMKQWH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WNFXVMKQWH');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#EEF2EE]">{children}</body>
    </html>
  );
}
