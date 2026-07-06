import Image from "next/image";
import { lensTypes } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function LensTypeSection() {
  return (
    <section id="lens" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Lens Type"
          subtitle="Choose your glasses according to lense"
        />
        <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {lensTypes.map((lens) => (
            <RevealItem key={lens.id}>
              <button
                type="button"
                className="group w-full overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={lens.image}
                    alt={lens.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="py-4 text-center text-sm font-medium text-foreground">
                  {lens.label}
                </p>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}