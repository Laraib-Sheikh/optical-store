"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Button from "./Button";
import { useCart } from "@/components/ui/CartProvider";

interface ProductCardProps {
  product: Product;
}

const CHIP_COLORS = ["bg-indigo-100", "bg-rose-100", "bg-indigo-100"];

function chipColorFor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash = (hash + id.charCodeAt(i)) % CHIP_COLORS.length;
  }
  return CHIP_COLORS[hash];
}

export default function ProductCard({ product }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (added) return;
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-xl"
    >
      <div
        className={`relative aspect-square overflow-hidden ${chipColorFor(product.id)}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        <button
          type="button"
          onClick={() => setWishlisted((v) => !v)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wishlisted}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition-colors hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={wishlisted ? "var(--accent)" : "none"}
            stroke={wishlisted ? "var(--accent)" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 20s-7-4.35-9.5-8.8C.8 8 2.2 4.5 5.6 4a4.9 4.9 0 0 1 6.4 2 4.9 4.9 0 0 1 6.4-2c3.4.5 4.8 4 3.1 7.2C19 15.65 12 20 12 20Z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-base font-medium text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 text-lg font-semibold text-foreground">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="relative mt-auto flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={handleAddToCart}
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-1"
                >
                  Added ✓
                </motion.span>
              ) : (
                <motion.span
                  key="buy"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  Buy Now
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}