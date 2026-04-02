"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    icon: "🧠",
    title: "AI Systems",
    description:
      "LLM-powered pipelines, document parsing, intelligent categorization engines, and agentic workflows that handle real production load.",
    tags: ["LLMs", "n8n", "Python", "Automation"],
  },
  {
    icon: "🧭",
    title: "Product Strategy",
    description:
      "Marketplace growth, supply chain optimization, and 0→1 product launches. I define the roadmap and then build it.",
    tags: ["Roadmapping", "GTM", "Marketplace", "Operations"],
  },
  {
    icon: "⚡",
    title: "Full-Stack Builds",
    description:
      "From Django backends to Supabase, Bolt.new scaffolding to Vercel deployments — end-to-end engineering without a team.",
    tags: ["Django", "Supabase", "Next.js", "Bolt.new"],
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    description:
      "Shipped a 600-truck fleet management system in 6 weeks. Launched a job portal to 104k visits in month one. Speed is a feature.",
    tags: ["2–4 week cycles", "MVP", "Ship-first"],
  },
];

export default function WhatIDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-[#2D7B69] uppercase tracking-widest mb-2">
            What I Do
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
            The full stack of building AI products
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="bg-[#EEF2EE] border border-[#D4E2DA] rounded-2xl p-7 hover:border-[#2D7B69]/50 hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl mb-4">{cap.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#2D7B69] transition-colors">
                {cap.title}
              </h3>
              <p className="text-[#6B7A72] leading-relaxed mb-5">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-white border border-[#C8D8D0] text-[#6B7A72] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
