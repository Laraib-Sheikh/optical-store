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