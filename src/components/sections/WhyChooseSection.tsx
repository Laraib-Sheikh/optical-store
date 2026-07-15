"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { features } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const BLOB_STYLES = [
  "bg-pastel-blue -rotate-6",
  "bg-pastel-lilac rotate-6",
  "bg-pastel-mint rotate-3",
];

export default function WhyChooseSection() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose V-Dure"
          subtitle="Premium eyewear designed for comfort, quality, and everyday confidence."
          align="center"
        />
        <RevealGroup className="grid gap-10 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <RevealItem key={feature.title}>
              <div className="relative mx-auto max-w-sm pt-4">
                <div
                  className={`absolute inset-x-3 inset-y-0 rounded-3xl ${BLOB_STYLES[index % BLOB_STYLES.length]}`}
                  aria-hidden="true"
                />
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="relative flex h-full flex-col items-center rounded-3xl bg-white px-6 py-10 text-center shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative mb-5 h-14 w-14">
                    <Image
                      src={feature.icon}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    {feature.description}
                  </p>
                </motion.article>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
