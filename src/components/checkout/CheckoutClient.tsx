"use client";

import { useMemo, useState, useEffect } from "react";
import { useCart } from "@/components/ui/CartProvider";
import OrderForm from "@/components/ui/OrderForm";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function CheckoutClient() {
  const { items, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const router = useRouter();

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const userEmail = ""; // not yet available from cookies
  const [userEmailState, setUserEmailState] = useState("");

  // fetch signed-in user's email from auth endpoint
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/auth", { credentials: "same-origin" });
        if (!mounted || !res.ok) return;
        const data = await res.json();
        if (data?.email) setUserEmailState(data.email);
      } catch (e) {
        // ignore
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (orderPlaced) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-foreground">Thank you</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your order has been submitted and the admin will review the details.
          </p>
          <div className="mt-8">
            <Button onClick={() => {
              clearCart();
              router.push("/");
            }}>
              Back to shop
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-foreground">Checkout</h1>
          <p className="mt-2 text-sm text-muted-foreground">Complete your order below.</p>

          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-border bg-surface p-6">
              <h2 className="text-lg font-semibold text-foreground">Selected products</h2>
              {items.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">Your cart is empty.</p>
              ) : (
                <div className="mt-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 rounded-3xl border border-border bg-white p-4">
                      <div className="h-20 w-20 overflow-hidden rounded-2xl bg-slate-100">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold text-foreground">Rs.{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  ))}
                  <div className="rounded-3xl border border-border bg-white p-4">
                    <p className="font-semibold text-foreground">Total</p>
                    <p className="text-2xl font-semibold text-foreground">Rs.{total.toLocaleString("en-IN")}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <OrderForm
            cartItems={items.map((item) => ({
              id: item.id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              image: item.image,
            }))}
            userEmail={userEmailState || userEmail}
            onOrderPlaced={() => setOrderPlaced(true)}
          />
        </section>
      </div>
    </main>
  );
}
