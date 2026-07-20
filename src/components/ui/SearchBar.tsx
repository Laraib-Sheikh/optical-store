"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  variant?: "inline" | "overlay";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function SearchBar({
  placeholder = "search...",
  className,
  variant = "inline",
  open = false,
  onOpenChange,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (variant === "overlay" && open) {
      inputRef.current?.focus();
    }
  }, [open, variant]);

  if (variant === "overlay") {
    return (
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="px-4 py-3">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="search"
                  placeholder={placeholder}
                  className="w-full rounded-full border border-border bg-white py-2.5 pl-4 pr-10 text-base text-foreground placeholder:text-muted focus:border-foreground focus:outline-none"
                  aria-label="Search products"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
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
                </span>
              </div>
              <button
                type="button"
                onClick={() => onOpenChange?.(false)}
                className="mt-2 text-sm font-medium text-muted"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
  }

  return (
    <div className={cn("relative hidden lg:block", className)}>
      <input
        type="search"
        placeholder={placeholder}
        className="w-44 rounded-full border border-border bg-white py-2 pl-4 pr-10 text-sm text-foreground placeholder:text-muted focus:w-56 focus:border-foreground focus:outline-none xl:w-52 xl:focus:w-60"
        aria-label="Search products"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted">
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
      </span>
    </div>
  );
}
