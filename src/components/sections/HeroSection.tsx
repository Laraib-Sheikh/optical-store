import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/design/hero.jpg"
          alt="Premium tortoiseshell sunglasses on stone"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[360px] max-w-7xl flex-col justify-center gap-4 px-4 py-16 sm:min-h-[460px] sm:gap-5 sm:px-6 sm:py-20 lg:min-h-[560px] lg:px-8">
        <h1 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          See Better , Look Better!
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
          Elevate your vision with stylish, high-quality eyewear crafted for
          everyday confidence. Discover frames that blend comfort, durability,
          and timeless design.
        </p>
        <div>
          <Button variant="light" size="lg">
            Shop Now
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
