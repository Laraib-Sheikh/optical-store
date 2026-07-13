import { lensTypes } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import LensTypeIcon from "@/components/ui/LensTypeIcon";
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
        <RevealGroup className="flex flex-wrap items-end justify-center gap-x-10 gap-y-8 sm:gap-x-14 md:justify-between md:px-8">
          {lensTypes.map((lens) => (
            <RevealItem key={lens.id}>
              <button
                type="button"
                className="group flex w-20 flex-col items-center gap-3 sm:w-24"
              >
                <LensTypeIcon
                  id={lens.id}
                  className="h-14 w-14 text-foreground transition-transform duration-200 group-hover:scale-110 sm:h-16 sm:w-16"
                />
                <p className="text-center text-sm font-medium text-foreground">
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
