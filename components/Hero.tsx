"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "$15M", label: "in validated cost savings" },
  { value: "104k", label: "visits — proved demand in 30 days" },
  { value: "2–4 wks", label: "from problem to working prototype" },
];

export default function Hero() {
  return (
    <section className="flex items-center pt-20 pb-10 px-6 bg-[#EEF2EE]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text — 3/5 */}
          <motion.div
            className="lg:col-span-3 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Role badge */}
            <p className="text-xs font-semibold text-[#2D7B69] uppercase tracking-widest mb-3">
              Product Leader who Builds to Validate · Dubai, UAE
            </p>

            {/* Name — Playfair serif like Christina */}
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-tight tracking-tight mb-3">
              Hi, I&apos;m{" "}
              <span className="text-[#2D7B69]">Aniket</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl font-semibold text-[#3D5A50] mb-6">
              I validate ideas by shipping them.
            </p>

            {/* Description */}
            <p className="text-lg text-[#6B7A72] leading-relaxed max-w-xl mb-6">
              When a team is debating whether an idea will work, I build a
              prototype that settles the argument. Working products beat slide
              decks. I&apos;ve been doing this for 10+ years across e-commerce,
              logistics, and fintech — and now I do it with AI.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mb-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-[#C8D8D0] rounded-xl px-5 py-3 shadow-sm"
                >
                  <div className="text-xl font-bold text-[#1A1A1A]">
                    {s.value}
                  </div>
                  <div className="text-xs text-[#6B7A72] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="px-6 py-3 bg-[#2D7B69] text-white font-semibold rounded-lg hover:bg-[#245F52] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3DGzyDY9nTWcHnk3JBI9iR9qxaTHlSNq39vYjF0oS9WnCeTqLKM6xE3rBBVCKl9TUda9a4BjLW?gv=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-[#C8D8D0] text-[#1A1A1A] font-semibold rounded-lg hover:border-[#2D7B69] hover:text-[#2D7B69] transition-all"
              >
                📅 Book a Call
              </a>
              <a
                href="https://www.linkedin.com/in/aniketmehare/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border-2 border-[#C8D8D0] text-[#1A1A1A] font-semibold rounded-lg hover:border-[#2D7B69] hover:text-[#2D7B69] transition-all"
              >
                LinkedIn ↗
              </a>
              <a
                href="/Aniket-Mehare-CV.docx"
                download
                className="px-6 py-3 bg-white border-2 border-[#C8D8D0] text-[#1A1A1A] font-semibold rounded-lg hover:border-[#2D7B69] hover:text-[#2D7B69] transition-all"
              >
                ↓ Download CV
              </a>
              <a
                href="/Aniket-Mehare-Portfolio.pdf"
                download
                className="px-6 py-3 bg-white border-2 border-[#C8D8D0] text-[#1A1A1A] font-semibold rounded-lg hover:border-[#2D7B69] hover:text-[#2D7B69] transition-all"
              >
                ↓ Download Portfolio
              </a>
              <a
                href="mailto:mehareac@gmail.com"
                className="px-6 py-3 bg-white border-2 border-[#C8D8D0] text-[#1A1A1A] font-semibold rounded-lg hover:border-[#2D7B69] hover:text-[#2D7B69] transition-all"
              >
                Email Me
              </a>
            </div>
          </motion.div>

          {/* Photo — 2/5 */}
          <motion.div
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Teal glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D7B69]/15 to-teal-200/10 blur-2xl scale-110" />
              {/* Photo circle */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full ring-4 ring-[#2D7B69]/30 ring-offset-4 ring-offset-[#EEF2EE] overflow-hidden shadow-xl">
                <Image
                  src="/headshot.jpg"
                  alt="Aniket Mehare"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Badge — Dubai */}
              <motion.div
                className="absolute -bottom-2 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#D4E2DA]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-xs text-[#6B7A72]">Based in</div>
                <div className="text-sm font-bold text-[#1A1A1A]">
                  Dubai, UAE 🇦🇪
                </div>
              </motion.div>

              {/* Badge — experience */}
              <motion.div
                className="absolute -top-2 -right-4 bg-[#2D7B69] rounded-2xl shadow-lg px-4 py-3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="text-xs text-teal-100">Experience</div>
                <div className="text-sm font-bold text-white">10+ Years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="flex flex-col items-center gap-2 text-[#8A9E96]">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#B5C9BE] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
