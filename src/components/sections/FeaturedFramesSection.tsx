import { products } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function FeaturedFramesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        title="Frames you will love"
        subtitle="Choose the perfect frames for your face or your style."
      />
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <RevealItem key={`featured-${product.id}`}>
            <ProductCard product={product} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}