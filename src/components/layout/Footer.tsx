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
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-foreground">
                V
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/80">
                Helping you see clearly and look your best with premium eyewear
                designed for comfort, style, and confidence.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03v2.28H8v3.1h2.4V21h3.1Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.9 3H21l-6.4 7.3L22.2 21h-6.6l-4.8-6.3L5.2 21H3l6.9-7.8L2 3h6.7l4.3 5.8L18.9 3Zm-1.2 16h1.2L7.9 5H6.6l11.1 14Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                    <circle cx="12" cy="12" r="3.6" />
                    <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ x: 0, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  ↑
                </motion.span>
                Back To Top
              </motion.button>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Site Map
              </h3>
              <ul className="space-y-2">
                {footerLinks.siteMap.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Community
              </h3>
              <ul className="mb-6 space-y-2">
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          Copyright. All rights reserved
        </div>
      </div>
    </footer>
  );
}