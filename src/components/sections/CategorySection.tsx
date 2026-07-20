"use client";

import { useState } from "react";
import { categoryItems } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export default function CategorySection() {
  const [active, setActive] = useState<string>("");

  return (
    <section
      id="eyeglasses"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <SectionHeader title="Frames For Your Gender" align="center" />
      <RevealGroup className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {categoryItems.map((item) => (
          <RevealItem key={item.id}>
            <button
              type="button"
              onClick={() => setActive(item.label)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors sm:px-6",
                active === item.label
                  ? "border-foreground bg-foreground text-white"
                  : "border-foreground bg-white text-foreground hover:bg-surface",
              )}
            >
              {item.label}
            </button>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
