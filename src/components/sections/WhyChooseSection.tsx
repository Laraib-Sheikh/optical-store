"use client";

import { motion } from "framer-motion";
import { features } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const BLOB_COLORS = ["bg-indigo-100", "bg-rose-100", "bg-emerald-100"];

export default function WhyChooseSection() {
  return (
    <section id="features" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose V-Dure"
          subtitle="Premium eyewear designed for comfort, quality, and everyday confidence."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <RevealItem key={feature.title}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-full rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, -6, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${BLOB_COLORS[index % BLOB_COLORS.length]}`}
                  role="img"
                  aria-hidden="true"
                >
                  {feature.icon}
                </motion.span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}