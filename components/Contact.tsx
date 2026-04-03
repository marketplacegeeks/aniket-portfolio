"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Briefcase, MessageCircle, GitBranch, Calendar, type LucideIcon } from "lucide-react";
import { useRef } from "react";

const links: { label: string; value: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Email",
    value: "mehareac@gmail.com",
    href: "mailto:mehareac@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aniketmehare",
    href: "https://www.linkedin.com/in/aniketmehare/",
    icon: Briefcase,
  },
  {
    label: "WhatsApp",
    value: "+971 52 761 4518",
    href: "https://wa.me/971527614518",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "github.com/marketplacegeeks",
    href: "https://github.com/marketplacegeeks",
    icon: GitBranch,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6 bg-[#EEF2EE]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-[#2D7B69] uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-lg text-[#6B7A72] leading-relaxed mb-8">
            If you&apos;re looking to implement AI in a way that directly impacts
            efficiency, cost, or scalability — I focus on building systems that
            deliver measurable results in production.
          </p>

          {/* Book a call CTA */}
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3DGzyDY9nTWcHnk3JBI9iR9qxaTHlSNq39vYjF0oS9WnCeTqLKM6xE3rBBVCKl9TUda9a4BjLW?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#2D7B69] text-white font-semibold rounded-lg hover:bg-[#245F52] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mb-12"
          >
            <Calendar className="w-4 h-4" />
            Book a Call
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="bg-white border border-[#D4E2DA] rounded-2xl p-5 hover:border-[#2D7B69]/50 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <link.icon className="w-6 h-6 text-[#2D7B69] mb-3" />
              <div className="text-sm font-semibold text-[#1A1A1A] mb-1 group-hover:text-[#2D7B69] transition-colors">
                {link.label}
              </div>
              <div className="text-xs text-[#6B7A72] break-all">{link.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="mt-16 text-sm text-[#8A9E96] text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Based in Dubai, UAE · Open to remote and hybrid roles
        </motion.p>
      </div>
    </section>
  );
}
