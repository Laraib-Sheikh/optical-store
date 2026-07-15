"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinks } from "@/data/site-data";
import { Reveal } from "@/components/ui/Reveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-2xl font-bold tracking-tight">Logo</p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03v2.28H8v3.1h2.4V21h3.1Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.9 3H21l-6.4 7.3L22.2 21h-6.6l-4.8-6.3L5.2 21H3l6.9-7.8L2 3h6.7l4.3 5.8L18.9 3Zm-1.2 16h1.2L7.9 5H6.6l11.1 14Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                    <circle cx="12" cy="12" r="3.6" />
                    <circle
                      cx="17"
                      cy="7"
                      r="0.9"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
                Helping you see clearly and look your best with premium eyewear
                designed for comfort, style, and confidence.
              </p>
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <span aria-hidden="true">↑</span>
                Back To Top
              </motion.button>
            </div>

            <div>
              <h3 className="mb-4 text-base font-semibold">Site Map</h3>
              <ul className="space-y-2.5">
                {footerLinks.siteMap.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-base font-semibold">Legal</h3>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10 bg-[#06101f] py-4 text-center text-xs text-white/70 sm:text-sm">
        Copyright. All rights reserved
      </div>
    </footer>
  );
}
