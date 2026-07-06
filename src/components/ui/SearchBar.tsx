"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "search...",
}: SearchBarProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative hidden md:block">
      <motion.input
        type="search"
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        animate={{ width: focused ? 240 : 192 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-full border border-border bg-surface py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        aria-label="Search products"
      />
      <motion.span
        animate={{ scale: focused ? 1.1 : 1, color: focused ? "var(--accent)" : "var(--muted)" }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
      </motion.span>
    </div>
  );
}