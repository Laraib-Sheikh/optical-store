"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function SummerSaleSection() {
  return (
    <section id="sunglasses" className="relative isolate overflow-hidden">
      <Reveal>
        <div className="relative min-h-[360px] md:min-h-[480px]">
          <Image
            src="/design/summer-sale.jpg"
            alt="Hand holding sunglasses against a summer sky"
            fill
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl flex-col justify-center gap-5 px-4 py-16 sm:px-6 md:min-h-[480px] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-md"
            >
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Summer Sale
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                Discover premium sunglasses designed for your summer adventures.
              </p>
              <div className="mt-6">
                <Button variant="primary" size="lg">
                  Explore Now
                  <span aria-hidden="true">→</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
