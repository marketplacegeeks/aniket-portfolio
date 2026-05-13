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
    label: "Book a Call",
    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3DGzyDY9nTWcHnk3JBI9iR9qxaTHlSNq39vYjF0oS9WnCeTqLKM6xE3rBBVCKl9TUda9a4BjLW?gv=true",
    icon: FaCalendarAlt,
  },
  {
    label: "Download Portfolio",
    href: "https://drive.google.com/file/d/1YRumUZJW4gVwa7GA29u8Z-iVVefH_4wT/view",
    icon: FaFilePdf,
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aniketmehare/",
    icon: FaLinkedin,
    bg: "#0A66C2",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/luck.favoursthebrave/",
    icon: FaInstagram,
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/mehareac10/",
    icon: FaFacebook,
    bg: "#1877F2",
  },
];

const VCARD = `BEGIN:VCARD\r\nVERSION:3.0\r\nN:Mehare;Aniket;;;\r\nFN:Aniket Mehare\r\nORG:Landmark Group\r\nTITLE:Lead Product Manager\r\nTEL;TYPE=WORK,VOICE:+971527614518\r\nTEL;TYPE=CELL,VOICE:+919403052811\r\nEMAIL;TYPE=WORK,INTERNET:aniket.mehare@landmarkgroup.com\r\nEMAIL;TYPE=HOME,INTERNET:mehareac@gmail.com\r\nURL:https://aniketm.vercel.app/\r\nADR;TYPE=WORK,POSTAL:;;Dubai;;;UAE;\r\nEND:VCARD`;

function saveContact() {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS) {
    // iOS Safari opens text/vcard directly in Contacts
    window.location.href = "/contact";
  } else {
    // Android/other: direct blob download — one step
    const blob = new Blob([VCARD], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "aniket.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

export default function LinksPage() {
  return (
    <>
      <main className="min-h-screen bg-[#EEF2EE] flex flex-col items-center px-4 pt-10 pb-28">
        <div className="w-full max-w-sm flex flex-col gap-4">

          {/* Profile card */}
          <motion.div
            className="bg-white rounded-2xl border-2 border-dashed border-[#C8D8D0] overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-stretch">
              {/* Photo */}
              <div className="relative w-36 shrink-0">
                <Image
                  src="/headshot.jpg"
                  alt="Aniket Mehare"
                  fill
                  sizes="144px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Info */}
              <div className="flex flex-col justify-center px-4 py-5 border-l-2 border-dashed border-[#C8D8D0]">
                <h1 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A] leading-snug mb-1">
                  Aniket Mehare
                </h1>
                <p className="text-sm text-[#3D5A50] font-medium leading-snug mb-2">
                  Product Builder at Heart
                </p>
                <p className="text-xs text-[#8A9E96]">Lead PM · Landmark Group</p>
                <p className="text-xs text-[#8A9E96]">Dubai, UAE</p>
              </div>
            </div>
          </motion.div>

          {/* About card */}
          <motion.div
            className="bg-white rounded-2xl border-2 border-dashed border-[#C8D8D0] px-5 py-4 shadow-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#1A1A1A] mb-2">
              About Aniket
            </h2>
            <p className="text-sm text-[#4A5A52] leading-relaxed">
              I build products that ship fast. From AI-powered pipelines at Landmark Group to
              launching independent SaaS like TradeDocs &amp; ScouterZero. I architect,
              prototype, and deliver ROI in 2–4 weeks. Let&apos;s build something impactful.
            </p>
            <p className="text-xs text-[#8A9E96] mt-2">
              IIM Kozhikode &apos;16 · COEP &apos;14
            </p>
          </motion.div>

          {/* Links */}
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.07, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }}
                className={
                  link.primary
                    ? "flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-semibold text-sm shadow-md bg-[#2D7B69] text-white hover:bg-[#245F52] transition-all"
                    : "flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-semibold text-sm shadow-sm bg-white border-2 border-dashed border-[#C8D8D0] text-[#1A1A1A] hover:border-[#2D7B69] hover:text-[#2D7B69] transition-all"
                }
              >
                <Icon className="text-lg shrink-0" />
                <span>{link.label}</span>
                <span className="ml-auto text-xs opacity-40">↗</span>
              </motion.a>
            );
          })}

          {/* Footer */}
          <motion.p
            className="text-center text-xs text-[#B5C9BE] mt-2 pb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            aniketm.vercel.app
          </motion.p>
        </div>
      </main>

      {/* Sticky Save Contact */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 px-4 pb-6 pt-3 bg-gradient-to-t from-[#EEF2EE] via-[#EEF2EE]/90 to-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        {/* Social icons row */}
        <div className="flex justify-center gap-4 mb-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ background: s.bg }}
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xl shadow-md active:scale-90 transition-transform"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Save Contact */}
        <button
          onClick={saveContact}
          className="flex items-center justify-center gap-3 w-full max-w-sm mx-auto px-5 py-4 rounded-2xl font-bold text-sm shadow-lg bg-[#C2570A] text-white hover:bg-[#A84809] active:scale-95 transition-all"
        >
          <FaAddressCard className="text-lg" />
          Save Contact
        </button>
      </motion.div>
    </>
  );
}
