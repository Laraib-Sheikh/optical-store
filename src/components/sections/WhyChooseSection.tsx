import { features } from "@/data/site-data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WhyChooseSection() {
  return (
    <section id="features" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose V-Dure"
          subtitle="Premium eyewear designed for comfort, quality, and everyday confidence."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-md"
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
