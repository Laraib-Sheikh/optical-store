import Image from "next/image";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Button from "./Button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
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
        <div className="mt-auto flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Add To Cart
          </Button>
          <Button variant="primary" size="sm" className="flex-1">
            Buy Now
          </Button>
        </div>
      </div>
    </article>
  );
}
