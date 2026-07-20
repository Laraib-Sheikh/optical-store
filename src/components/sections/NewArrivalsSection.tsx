import { products } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function NewArrivalsSection() {
  return (
    <section
      id="featured"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
    >
      <SectionHeader title="New Arrivals" actionLabel="See All" />
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <RevealItem key={product.id}>
            <ProductCard product={product} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
