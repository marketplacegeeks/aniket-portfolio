"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGlobe,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaCalendarAlt,
  FaFilePdf,
  FaAddressCard,
} from "react-icons/fa";

const links = [
  {
    label: "Portfolio Website",
    href: "https://aniketm.vercel.app/",
    icon: FaGlobe,
    primary: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aniketmehare/",
    icon: FaLinkedin,
    primary: false,
  },
  {
    label: "Book a Call",
    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3DGzyDY9nTWcHnk3JBI9iR9qxaTHlSNq39vYjF0oS9WnCeTqLKM6xE3rBBVCKl9TUda9a4BjLW?gv=true",
    icon: FaCalendarAlt,
    primary: false,
  },
  {
    label: "Download Portfolio",
    href: "https://drive.google.com/file/d/1YRumUZJW4gVwa7GA29u8Z-iVVefH_4wT/view",
    icon: FaFilePdf,
    primary: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/luck.favoursthebrave/",
    icon: FaInstagram,
    primary: false,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mehareac10/",
    icon: FaFacebook,
    primary: false,
  },
  {
    label: "Save Contact",
    href: "/contact",
    icon: FaAddressCard,
    primary: false,
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#EEF2EE] flex flex-col items-center px-5 pt-14 pb-12">
      <div className="w-full max-w-sm">

        {/* Profile */}
        <motion.div
          className="flex flex-col items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative w-24 h-24 rounded-full ring-4 ring-[#2D7B69]/30 ring-offset-4 ring-offset-[#EEF2EE] overflow-hidden shadow-lg mb-4">
            <Image
              src="/headshot.jpg"
              alt="Aniket Mehare"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A] mb-1">
            Aniket Mehare
          </h1>
          <p className="text-sm text-[#3D5A50] font-medium text-center">
            Lead Product Manager · Landmark Group
          </p>
          <p className="text-xs text-[#8A9E96] mt-1">Dubai, UAE</p>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col gap-3 w-full">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }}
                className={
                  link.primary
                    ? "flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-semibold text-sm shadow-md transition-all bg-[#2D7B69] text-white hover:bg-[#245F52] hover:shadow-lg hover:-translate-y-0.5"
                    : "flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-semibold text-sm shadow-sm transition-all bg-white border border-[#C8D8D0] text-[#1A1A1A] hover:border-[#2D7B69] hover:text-[#2D7B69] hover:-translate-y-0.5"
                }
              >
                <Icon className="text-lg shrink-0" />
                <span>{link.label}</span>
                <span className="ml-auto text-xs opacity-40">↗</span>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.p
          className="text-center text-xs text-[#B5C9BE] mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          aniketm.vercel.app
        </motion.p>
      </div>
    </main>
  );
}
