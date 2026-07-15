"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function SummerSaleSection() {
  return (
    <section
      id="sunglasses"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600">
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/30 blur-3xl"
          />
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">
            <div className="relative z-10 flex flex-col gap-4 text-white">
              <span className="text-sm font-semibold uppercase tracking-widest text-white/90">
                Summer Sale
              </span>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Discover premium sunglasses designed for your summer adventures.
              </h2>
              <div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-white/90"
                >
                  Explore Now
                </Button>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto aspect-[4/3] w-full max-w-md"
            >
              <Image
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=450&fit=crop"
                alt="Premium summer sunglasses"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}