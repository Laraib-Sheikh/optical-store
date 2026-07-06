"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/types";
import Button from "@/components/ui/Button";
import ProductForm from "@/components/ui/ProductForm";

export default function AdminProductManager() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Unable to load products");
      }
      const data = (await response.json()) as Product[];
      setProducts(data);
    } catch (err) {
      setError("Unable to load products. Please refresh.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Inventory</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            View all saved products and add new items from this admin panel.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="button" variant="secondary" onClick={() => setShowForm((value) => !value)}>
            {showForm ? "Hide form" : "Add new item"}
          </Button>
          <Button type="button" variant="outline" onClick={fetchProducts}>
            Refresh list
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={async () => {
              await fetch("/api/auth", { method: "DELETE" });
              router.push("/login");
            }}
          >
            Sign out
          </Button>
        </div>
      </div>

      {showForm && (
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <ProductForm onSave={() => {
            fetchProducts();
            setShowForm(false);
          }} />
        </div>
      )}

      <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h3 className="text-xl font-semibold text-foreground">All products</h3>
          {loading && <p className="text-sm text-muted-foreground">Loading…</p>}
        </div>

        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : products.length === 0 && !loading ? (
          <p className="text-sm text-muted-foreground">No products have been added yet.</p>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="grid gap-4 rounded-3xl border border-border bg-surface p-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-semibold text-foreground">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.category || "Uncategorized"}</p>
                  <p className="mt-2 text-sm text-foreground">Rs.{product.price.toLocaleString("en-IN")}</p>
                </div>
                <div className="h-24 w-24 overflow-hidden rounded-2xl bg-white">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
