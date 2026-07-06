import { requireAdmin } from "@/lib/auth";
import AdminProductManager from "@/components/admin/AdminProductManager";

export default async function AdminAddProductPage() {
  await requireAdmin();

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-foreground">Admin Product Manager</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          View your existing inventory or add a new item from the admin panel.
        </p>
      </div>
      <div className="mt-8">
        <AdminProductManager />
      </div>
    </main>
  );
}
