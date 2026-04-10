"use client";

import { motion, useInView } from "framer-motion";
import { Target } from "lucide-react";
import { useRef } from "react";

const focusAreas = [
  {
    company: "Landmark Group",
    description:
      "I'm leading the scale-up of AI-generated product imagery across 800+ subcategories, designing the eval systems and autonomous QA agents that keep quality consistent as volume grows.",
  },
  {
    company: "ScouterZero",
    description:
      "I'm pushing toward 1,000+ daily job listings while building the eval infrastructure to guarantee 99%+ accuracy - and an automated content pipeline that markets the platform without manual effort.",
  },
];

export default function CurrentFocus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          <p className="text-sm font-semibold text-[#2D7B69] uppercase tracking-widest mb-2">
            Current Focus
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
            What I&apos;m working on right now
          </h2>
        </motion.div>

        {/* Focus cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.company}
              className="bg-[#EEF2EE] border border-[#C8D8D0] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-[#2D7B69] rounded-lg p-2 shrink-0">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mt-1">
                  {area.company}
                </h3>
              </div>
              <p className="text-[#6B7A72] leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
