"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site-data";
import SearchBar from "@/components/ui/SearchBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        paddingTop: scrolled ? 8 : 16,
        paddingBottom: scrolled ? 8 : 16,
        boxShadow: scrolled
          ? "0 1px 0 rgba(0,0,0,0.06), 0 8px 20px -12px rgba(0,0,0,0.15)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          V-Dure
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SearchBar />
          <button
            type="button"
            className="rounded-full p-2 text-foreground hover:bg-surface lg:hidden"
            aria-label="Open search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative rounded-full p-2 text-foreground hover:bg-surface lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <motion.line
                x1="4" y1="6" x2="20" y2="6"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ transformOrigin: "12px 12px" }}
              />
              <motion.line
                x1="4" y1="12" x2="20" y2="12"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.line
                x1="4" y1="18" x2="20" y2="18"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                style={{ transformOrigin: "12px 12px" }}
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        className="flex gap-6 overflow-x-auto border-t border-border px-4 py-3 lg:hidden"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="shrink-0 text-sm font-medium text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}