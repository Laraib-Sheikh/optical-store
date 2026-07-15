"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  actionLabel,
  actionHref = "#",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-sm text-muted md:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {actionLabel && (
        <Link
          href={actionHref}
          className="group inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
        >
          {actionLabel}
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      )}
    </motion.div>
  );
}