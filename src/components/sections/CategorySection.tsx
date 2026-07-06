import Image from "next/image";
import { categoryItems } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader title="Frames For Your Gender" />
      <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {categoryItems.map((item) => (
          <RevealItem key={item.id}>
            <button
              type="button"
              className="group flex w-full flex-col items-center gap-3 rounded-2xl border border-border bg-white p-4 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="112px"
                />
              </div>
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}