import { requireAdmin } from "@/lib/auth";
import ProductForm from "@/components/ui/ProductForm";

export default async function AdminAddProductPage() {
  await requireAdmin();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-foreground">Add Product</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Create or update your glasses inventory, including category.
        </p>
        <ProductForm />
      </div>
    </main>
  );
}
