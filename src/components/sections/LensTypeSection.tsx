import Image from "next/image";
import { lensTypes } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function LensTypeSection() {
  return (
    <section id="lens" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Lens Type"
          subtitle="Choose your glasses according to lense"
        />
        <div className="rounded-3xl bg-surface px-4 py-8 sm:px-8">
          <RevealGroup className="flex flex-wrap justify-center gap-x-8 gap-y-6 sm:gap-x-10">
            {lensTypes.map((lens) => (
              <RevealItem key={lens.id}>
                <button
                  type="button"
                  className="group flex w-16 flex-col items-center gap-2 sm:w-20"
                >
                  <div className="relative h-12 w-16 overflow-hidden opacity-70 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 sm:h-14 sm:w-20">
                    <Image
                      src={lens.image}
                      alt={lens.label}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                  <p className="text-center text-xs font-medium text-muted transition-colors group-hover:text-foreground">
                    {lens.label}
                  </p>
                </button>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}