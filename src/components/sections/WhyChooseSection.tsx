"use client";

import { motion } from "framer-motion";
import { features } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function WhyChooseSection() {
  return (
    <section id="features" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose V-Dure"
          subtitle="Premium eyewear designed for comfort, quality, and everyday confidence."
        />
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <RevealItem key={feature.title}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-full rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
              >
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, -6, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-block text-3xl"
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