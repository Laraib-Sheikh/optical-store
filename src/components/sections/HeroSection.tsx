import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1600&h=900&fit=crop"
          alt="Stylish tortoiseshell sunglasses resting outdoors"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[440px] max-w-7xl flex-col justify-center gap-6 px-4 py-20 sm:px-6 lg:px-8 lg:min-h-[560px]">
        <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          See Better, Look Better!
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
          Elevate your vision with stylish, high-quality eyewear crafted for
          everyday confidence. Discover frames that blend comfort, durability,
          and timeless design.
        </p>
        <div>
          <Button size="lg">Shop Now →</Button>
        </div>
      </div>
    </section>
  );
}