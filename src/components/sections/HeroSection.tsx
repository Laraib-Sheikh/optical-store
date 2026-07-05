"use client";

import Image from "next/image";
import { genderFilters } from "@/data/site-data";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function HeroSection() {
  const [activeGender, setActiveGender] = useState<string>("Men");

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            See Better, Look Better!
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Elevate your vision with stylish, high-quality eyewear crafted for
            everyday confidence. Discover frames that blend comfort, durability,
            and timeless design.
          </p>
          <div>
            <Button size="lg">Shop Now</Button>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {genderFilters.map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() => setActiveGender(gender)}
                className={cn(
                  "rounded-full border px-6 py-2 text-sm font-medium transition-colors",
                  activeGender === gender
                    ? "border-foreground bg-foreground text-white"
                    : "border-border bg-white text-foreground hover:border-foreground/30",
                )}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5" />
          <Image
            src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=800&fit=crop"
            alt="Stylish eyewear collection"
            fill
            className="rounded-3xl object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
