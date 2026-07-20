import Image from "next/image";
import { lensTypes } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function LensTypeSection() {
  return (
    <section id="lens" className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Lens Type"
          subtitle="Choose your glasses according to lense"
          align="center"
        />
        <RevealGroup className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-4">
          {lensTypes.map((lens) => (
            <RevealItem key={lens.id}>
              <button
                type="button"
                className="group mx-auto flex w-full max-w-[6.5rem] flex-col items-center sm:max-w-[5.5rem]"
              >
                <Image
                  src={lens.image!}
                  alt={lens.label}
                  width={130}
                  height={150}
                  className="h-auto w-full transition-transform duration-200 group-hover:scale-105"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
