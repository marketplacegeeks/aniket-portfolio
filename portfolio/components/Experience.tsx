"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const experience = [
  {
    company: "Landmark Group",
    logo: "/logos/landmark.jpg",
    location: "Dubai, UAE",
    roles: [
      {
        title: "AI Builder & Product Manager",
        period: "Aug 2025 – Present",
        bullets: [
          "Built FleetMind solo — full-stack fleet & asset management system for 600 trucks, shipped in 6 weeks",
          "Shipped Content Ginie, an AI image generation platform cutting shoot-to-live from 12 → 7 days",
          "Engineered North Star prototype for Oracle HCM, modernising legacy Redwood UX for accessibility",
          "Built mini-WMS in 3 weeks to secure Dubai Customs contract; launched Mega DC safety portal via WhatsApp/Telegram automation",
        ],
      },
      {
        title: "Product Manager — Marketplace",
        period: "Dec 2023 – Present",
        bullets: [
          "Product-led GCC marketplace expansion, scaling Dropship & Easy Ship for Centrepoint and Homecentre",
          "Delivered $15M in cost savings through automated payment settlement and logistics optimisation",
          "Transformed Viniculum engine into a bespoke seller portal; integrated enterprise partners via API",
        ],
      },
      {
        title: "Product Manager — Mega DC",
        period: "Jun 2024 – Present",
        bullets: [
          "Streamlined decanting workflows from 14 steps to 6, and cut DEMATIC pick-walk travel time by 14%",
          "Designed hybrid solutions for manual multi-SKU retrieval in high-density automated warehouse environments",
        ],
      },
    ],
  },
  {
    company: "Reliance Retail — JioMart",
    logo: "/logos/reliance.png",
    location: "Mumbai, India",
    roles: [
      {
        title: "Product Manager — Marketplace Supply Chain",
        period: "Jan 2023 – Dec 2023",
        bullets: [
          "Led slotted delivery launch for SmartBazaar across 3,100+ stores and enabled Self-Ship for bulky products, unlocking ₹20 Cr in revenue",
          "Implemented doorstep pickup quality checks, reducing seller mismatch claims by 18%",
        ],
      },
      {
        title: "Senior Program Manager — E-commerce Growth",
        period: "Jul 2021 – Jan 2023",
        bullets: [
          "Achieved 188% of GMV targets and 270% of assortment targets for the 3P marketplace launch, managing a team of 95",
          "Grew fulfilment-centre business share from 2% to 17% through strategic management of 215 marquee sellers",
        ],
      },
    ],
  },
  {
    company: "GEP Worldwide",
    logo: "/logos/gep.png",
    location: "Rotterdam & Mumbai",
    roles: [
      {
        title: "Senior Consultant — Supply Chain",
        period: "2019 – 2021",
        bullets: [
          "Delivered supply chain transformation projects for Fortune 500 clients across Europe and India",
          "Led procurement strategy, spend analytics, and process re-engineering engagements",
        ],
      },
    ],
  },
  {
    company: "Earlier Career",
    logo: null,
    location: "",
    roles: [
      {
        title: "",
        period: "",
        bullets: [
          "Infosys Consulting — Consultant, SCM · Bangalore · 2018–2019",
          "Hindustan Unilever — Leadership Intern · Nairobi, Kenya · 2017",
          "Crompton Greaves — Executive, Supply Chain · Nasik · 2014–2016",
        ],
      },
    ],
  },
];

const education = [
  {
    degree: "MBA (PGDM)",
    school: "IIM Kozhikode",
    logo: "/logos/iimk.png",
  },
  {
    degree: "B.Tech, Mechanical Engineering",
    school: "COEP — College of Engineering, Pune",
    logo: "/logos/coep.jpg",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-[#2D7B69] uppercase tracking-widest mb-2">
            Experience
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
            10 years of building & shipping
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-6 mb-16">
          {experience.map((org, i) => (
            <motion.div
              key={org.company}
              className="bg-[#EEF2EE] border border-[#D4E2DA] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Company header */}
              <div className="flex items-center gap-4 px-6 py-4 border-b border-[#D4E2DA]">
                {org.logo ? (
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-[#D4E2DA] shrink-0 flex items-center justify-center p-1">
                    <Image
                      src={org.logo}
                      alt={org.company}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-[#D4E2DA] shrink-0 flex items-center justify-center text-lg">
                    🏢
                  </div>
                )}
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A]">
                    {org.company}
                  </h3>
                  {org.location && (
                    <p className="text-xs text-[#8A9E96]">{org.location}</p>
                  )}
                </div>
              </div>

              {/* Roles */}
              <div className="divide-y divide-[#D4E2DA]/50">
                {org.roles.map((role, j) => (
                  <div key={j} className="px-6 py-4">
                    {role.title && (
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                        <p className="text-sm font-semibold text-[#2D7B69]">
                          {role.title}
                        </p>
                        <span className="text-xs text-[#8A9E96] shrink-0">
                          {role.period}
                        </span>
                      </div>
                    )}
                    <ul className="flex flex-col gap-1.5">
                      {role.bullets.map((b, k) => (
                        <li key={k} className="flex items-start gap-2.5">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D7B69] shrink-0" />
                          <span className="text-sm text-[#6B7A72] leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs font-semibold text-[#2D7B69] uppercase tracking-widest mb-6">
            Education
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-[#EEF2EE] border border-[#D4E2DA] rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-white border border-[#D4E2DA] shrink-0 flex items-center justify-center p-1.5">
                  <Image
                    src={edu.logo}
                    alt={edu.school}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-[#6B7A72] mt-0.5">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
