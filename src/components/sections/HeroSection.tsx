"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { heroSlides } from "@/data/site-data";
import Button from "@/components/ui/Button";

const AUTO_PLAY_MS = 5000;

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const slideCount = heroSlides.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext]);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStart === null) return;

    const diff = touchStart - event.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    setTouchStart(null);
  };

  return (
    <section
      className="relative isolate overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Featured eyewear"
    >
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={heroSlides[activeIndex].id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[activeIndex].image}
              alt={heroSlides[activeIndex].alt}
              fill
              priority={activeIndex === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
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

      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2 sm:bottom-6">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(index)}
            className="rounded-full p-2"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex}
          >
            <span
              className={`block h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          </button>
        ))}
      </div>

      {slideCount > 1 ? (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/45 sm:left-4 sm:inline-flex"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/45 sm:right-4 sm:inline-flex"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      ) : null}
    </section>
  );
}
