"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#EEF2EE]/95 backdrop-blur-sm shadow-sm border-b border-[#D4E2DA]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a
          href="#"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D7B69] tracking-tight hover:opacity-80 transition-opacity"
        >
          AM
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Work", href: "#work" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6B7A72] hover:text-[#1A1A1A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-4 py-2 bg-[#2D7B69] text-white text-sm font-semibold rounded-lg hover:bg-[#245F52] transition-colors"
        >
          Let's Talk →
        </a>
      </div>
    </nav>
  );
}
