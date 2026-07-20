import { frameShapes } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import FrameShapeIcon from "@/components/ui/FrameShapeIcon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function FrameShapeSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Frame Shape"
          subtitle="Choose the perfect frames for your face or your style."
          align="center"
        />
      </div>
      <div className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <RevealGroup className="grid grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-4 sm:gap-x-4 md:grid-cols-5 lg:grid-cols-9">
            {frameShapes.map((shape) => (
              <RevealItem key={shape.id}>
                <button
                  type="button"
                  className="group mx-auto flex w-full max-w-[5rem] flex-col items-center gap-2 sm:max-w-none"
                >
                  <FrameShapeIcon
                    id={shape.id}
                    className="h-9 w-12 text-foreground transition-transform duration-200 group-hover:scale-110 sm:h-10 sm:w-14 md:h-12 md:w-16"
                  />
                  <p className="line-clamp-2 text-center text-[11px] font-medium leading-tight text-muted transition-colors group-hover:text-foreground sm:text-xs">
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
