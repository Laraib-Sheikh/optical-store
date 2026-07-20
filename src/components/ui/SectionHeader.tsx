"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionHref = "#",
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-6 sm:mb-8 md:mb-10",
        isCenter
          ? "flex flex-col items-center text-center"
          : "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div className={cn(isCenter && "max-w-2xl")}>
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-[2rem]">
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-2 text-sm text-muted md:text-base",
              isCenter ? "mx-auto max-w-xl" : "max-w-xl",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {actionLabel && (
        <Link
          href={actionHref}
          className="inline-flex w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
        >
          {actionLabel}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </motion.div>
  );
}
