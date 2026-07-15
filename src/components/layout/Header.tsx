"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site-data";
import SearchBar from "@/components/ui/SearchBar";
import { useCart } from "@/components/ui/CartProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const [authRole, setAuthRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/auth");
        if (!mounted) return;
        const data = await res.json();
        setAuthRole(data?.role ?? null);
      } catch {
        setAuthRole(null);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <motion.header
      animate={{
        paddingTop: scrolled ? 8 : 14,
        paddingBottom: scrolled ? 8 : 14,
        boxShadow: scrolled
          ? "0 1px 0 rgba(0,0,0,0.06), 0 8px 20px -12px rgba(0,0,0,0.12)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-11 w-[4.5rem] shrink-0 sm:h-12 sm:w-20">
          <Image
            src="/design/logo.png"
            alt="U-DURE"
            fill
            className="object-contain object-left"
            sizes="80px"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-foreground transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <SearchBar />

          <Link
            href={authRole ? "/account" : "/login"}
            aria-label="Account"
            className="rounded-full p-2 text-foreground hover:bg-surface"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </Link>

          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="rounded-full p-2 text-foreground hover:bg-surface"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 20s-7-4.35-9.5-8.8C.8 8 2.2 4.5 5.6 4a4.9 4.9 0 0 1 6.4 2 4.9 4.9 0 0 1 6.4-2c3.4.5 4.8 4 3.1 7.2C19 15.65 12 20 12 20Z" />
            </svg>
          </Link>

          <Link
            href="/checkout"
            aria-label="Cart"
            className="relative rounded-full p-2 text-foreground hover:bg-surface"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 7h12l1 13H5L6 7Z" />
              <path d="M9 10V6a3 3 0 0 1 6 0v4" />
            </svg>
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-foreground px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            ) : null}
          </Link>

          {authRole ? (
            <button
              type="button"
              onClick={async () => {
                await fetch("/api/auth", { method: "DELETE" });
                setAuthRole(null);
                router.push("/login");
              }}
              className="ml-1 hidden rounded-full border border-border bg-white px-3 py-2 text-sm font-medium text-foreground hover:bg-surface sm:inline-flex"
            >
              Sign out
            </button>
          ) : null}

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
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ transformOrigin: "12px 12px" }}
              />
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                style={{ transformOrigin: "12px 12px" }}
              />
            </svg>
          </button>
        </div>
      </div>

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
