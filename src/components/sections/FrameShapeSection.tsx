import { frameShapes } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import FrameShapeIcon from "@/components/ui/FrameShapeIcon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function FrameShapeSection() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Frame Shape"
          subtitle="Choose the perfect frames for your face or your style."
          align="center"
        />
      </div>
      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <RevealGroup className="flex flex-wrap items-end justify-center gap-x-6 gap-y-8 sm:gap-x-8 md:justify-between">
            {frameShapes.map((shape) => (
              <RevealItem key={shape.id}>
                <button
                  type="button"
                  className="group flex w-[4.5rem] flex-col items-center gap-2 sm:w-20"
                >
                  <FrameShapeIcon
                    id={shape.id}
                    className="h-10 w-14 text-foreground transition-transform duration-200 group-hover:scale-110 sm:h-12 sm:w-16"
                  />
                  <p className="text-center text-xs font-medium text-muted transition-colors group-hover:text-foreground">
                    {shape.label}
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
