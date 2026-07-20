import Image from "next/image";
import { lensTypes } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function LensTypeSection() {
  return (
    <section id="lens" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Lens Type"
          subtitle="Choose your glasses according to lense"
          align="center"
        />
        <RevealGroup className="flex flex-wrap items-end justify-center gap-x-8 gap-y-10 sm:gap-x-12 lg:justify-between lg:gap-x-4">
          {lensTypes.map((lens) => (
            <RevealItem key={lens.id}>
              <button
                type="button"
                className="group flex flex-col items-center"
              >
                <Image
                  src={lens.image!}
                  alt={lens.label}
                  width={130}
                  height={150}
                  className="h-auto w-[5.5rem] transition-transform duration-200 group-hover:scale-105 sm:w-24"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
