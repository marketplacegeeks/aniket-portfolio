"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "How I reason with AI",
    icon: "🧠",
    items: ["Claude API", "OpenAI", "RAG Pipelines", "Prompt Engineering", "Evals", "Vector DBs", "Agentic Workflows", "Multi-step Reasoning Chains"],
  },
  {
    category: "How I automate workflows",
    icon: "⚙️",
    items: ["n8n", "Playwright", "Selenium", "Web Scraping at Scale", "Event-driven Pipelines", "AI-to-AI Orchestration"],
  },
  {
    category: "How I wire up the backend",
    icon: "🛠️",
    items: ["Python", "Django", "FastAPI", "PostgreSQL", "Supabase", "REST APIs", "PDF Generation", "Document Parsing", "Gmail API"],
  },
  {
    category: "How I get it in front of users",
    icon: "💻",
    items: ["React", "Next.js", "Chrome Extensions", "Vercel", "Railway", "Tailwind CSS"],
  },
  {
    category: "How I decide what to build",
    icon: "📦",
    items: ["0→1 Product Launches", "Marketplace Strategy", "Roadmapping", "GTM", "Stakeholder Management", "Enterprise Delivery"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-[#2D7B69] uppercase tracking-widest mb-2">
            Skills
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
            What I use to build fast
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="bg-[#EEF2EE] border border-[#D4E2DA] rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-sm font-bold text-[#1A1A1A]">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium bg-white border border-[#C8D8D0] text-[#3D5A50] px-3 py-1.5 rounded-full"
                  >
                    {item}
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
