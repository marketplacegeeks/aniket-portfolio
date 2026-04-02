"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type Project = {
  name: string;
  tagline: string;
  description: string;
  image: string | null;
  images?: string[];
  tags: string[];
  stat: string;
  link: string | null;
  credentials?: { user: string; pass: string };
  featured: boolean;
};

const projects: Project[] = [
  {
    name: "ScouterZero",
    tagline: "AI career intelligence platform for PMs",
    description:
      "Scrapes thousands of PM job postings, runs AI filtering & summarization, and surfaces high-signal opportunities with direct recruiter contacts.",
    image: "/projects/scouterzero.png",
    tags: ["n8n", "Python", "LLM", "Web Scraping"],
    stat: "6,945 PMs joined in 30 days · 104k visits",
    link: "https://scouterzero.com/",
    featured: true,
  },
  {
    name: "TradeDocs",
    tagline: "International trade documentation platform",
    description:
      "AI-powered platform that parses complex legal and business documents across jurisdictions and automates compliant document generation.",
    image: "/projects/tradedocs-dash.png",
    tags: ["NLP", "Document Parsing", "LLM", "Compliance"],
    stat: "Handles multi-jurisdiction docs in seconds",
    link: "https://tradedocs.scouterzero.com",
    credentials: { user: "checker@demo.com", pass: "checker@1234" },
    featured: true,
  },
  {
    name: "FleetMind",
    tagline: "Intelligent fleet & asset management system",
    description:
      "Full-stack vehicle management system for a 600-truck fleet. Built solo in 6 weeks — AI pipelines extract data from fuel receipts and maintenance logs.",
    image: "/projects/fleetmind.png",
    tags: ["AI Pipelines", "Python", "Django", "Automation"],
    stat: "600-truck fleet managed · Shipped in 6 weeks",
    link: null,
    featured: true,
  },
  {
    name: "Content Ginie",
    tagline: "E-commerce content automation at scale",
    description:
      "Generative AI platform that converts raw product images into model-quality visuals. Reduced e-commerce shoot-to-live from 12 days to 7 days.",
    image: null,
    images: [
      "/projects/contentginie-1.png",
      "/projects/contentginie-3.png",
      "/projects/contentginie-2.png",
    ],
    tags: ["Generative AI", "Google Imagen", "Batch Processing", "E-commerce"],
    stat: "12 → 7 day shoot-to-live · Landmark Group",
    link: null,
    featured: true,
  },
  {
    name: "SpendZero",
    tagline: "Privacy-first AI financial analyzer",
    description:
      "Built an LLM-based transaction categorization engine that pulls statements directly from Gmail — no third-party aggregators, full privacy.",
    image: "/projects/spendzero.png",
    tags: ["LLMs", "Gmail API", "Python", "Data Pipelines"],
    stat: "95%+ categorization accuracy",
    link: null,
    featured: false,
  },
  {
    name: "LinkedIn Extension",
    tagline: "Chrome extension for smarter LinkedIn outreach",
    description:
      "Browser extension that enhances LinkedIn workflows — built for recruiters and sales professionals to streamline prospecting and messaging.",
    image: null,
    tags: ["Chrome Extension", "JavaScript", "LinkedIn API"],
    stat: "Published on Chrome Web Store",
    link: "https://chrome.google.com/webstore/detail/iejjamcolkammgjbnmnakchgldbfkmin",
    featured: false,
  },
];

function ImageScroller({ images, name, featured }: { images: string[]; name: string; featured?: boolean }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className={`relative ${featured ? "h-52" : "h-40"} bg-gray-100 overflow-hidden shrink-0 group/scroller`}>
      <Image
        src={images[current]}
        alt={`${name} screenshot ${current + 1}`}
        fill
        className="object-cover object-top transition-opacity duration-300"
      />
      {/* Prev / Next */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs opacity-0 group-hover/scroller:opacity-100 transition-opacity"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs opacity-0 group-hover/scroller:opacity-100 transition-opacity"
      >
        ›
      </button>
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="py-24 px-6 bg-[#EEF2EE]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-[#2D7B69] uppercase tracking-widest mb-2">
            Projects
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
            AI systems built & shipped
          </h2>
        </motion.div>

        {/* Featured projects (2-col) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.div
                key={project.name}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {project.images ? (
                  <div className="h-52">
                    <ImageScroller images={project.images} name={project.name} featured />
                  </div>
                ) : project.image ? (
                  <div className="relative h-52 bg-gray-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : null}

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-sm font-semibold text-[#2D7B69] hover:underline"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[#2D7B69] mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-[#6B7A72] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="bg-[#E4EDE9] rounded-xl px-4 py-2.5 mb-4">
                    <span className="text-sm font-semibold text-[#2D7B69]">
                      📊 {project.stat}
                    </span>
                  </div>
                  {project.credentials && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 mb-4 font-mono">
                      <p className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1.5">
                        Demo Login
                      </p>
                      <p className="text-xs text-[#4B5563]">
                        <span className="text-[#9CA3AF]">user</span>{" "}
                        {project.credentials.user}
                      </p>
                      <p className="text-xs text-[#4B5563]">
                        <span className="text-[#9CA3AF]">pass</span>{" "}
                        {project.credentials.pass}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-gray-100 text-[#6B7A72] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Supporting projects (2-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <motion.div
                key={project.name}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.24 + i * 0.1 }}
              >
                {/* Screenshot / scroller */}
                {project.images ? (
                  <ImageScroller images={project.images} name={project.name} />
                ) : project.image ? (
                  <div className="relative h-40 bg-gray-100 overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="h-40 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center shrink-0">
                    <span className="text-4xl">🧩</span>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[#1A1A1A]">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#2D7B69] hover:underline shrink-0"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                  <p className="text-xs font-medium text-[#2D7B69] mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-[#6B7A72] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="bg-[#E4EDE9] rounded-lg px-3 py-2 mb-3">
                    <span className="text-xs font-semibold text-[#2D7B69]">
                      📊 {project.stat}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-gray-100 text-[#6B7A72] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
