import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Button from "@/components/ui/Button";
import { requireUser } from "@/lib/auth";

export default function CheckoutPage() {
  requireUser("/login");

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-foreground">Checkout</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          You are signed in. Complete your order below.
        </p>
        <div className="mt-8 space-y-5">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <h2 className="text-lg font-semibold text-foreground">Order summary</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              This demo page requires login before checkout. Add cart logic here.
            </p>
          </div>
          <Button className="w-full">Place Order</Button>
        </div>
      </div>
    </main>
  );
}
