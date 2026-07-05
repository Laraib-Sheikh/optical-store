import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SummerSaleSection() {
  return (
    <section
      id="sunglasses"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16">
          <div className="relative z-10 flex flex-col gap-4 text-white">
            <span className="text-sm font-semibold uppercase tracking-widest text-white/90">
              Summer Sale
            </span>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Discover premium sunglasses designed for your summer adventures.
            </h2>
            <div>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-white/90"
              >
                Explore Now
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
            <Image
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=450&fit=crop"
              alt="Premium summer sunglasses"
              fill
              className="rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
