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

  const userEmail = "";
  const [userEmailState, setUserEmailState] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/auth", { credentials: "same-origin" });
        if (!mounted || !res.ok) return;
        const data = await res.json();
        if (data?.email) setUserEmailState(data.email);
      } catch {
        // ignore
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (orderPlaced) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-8">
          <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Thank you</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your order has been submitted and the admin will review the details.
          </p>
          <div className="mt-8">
            <Button
              onClick={() => {
                clearCart();
                router.push("/");
              }}
            >
              Back to shop
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
        <section className="rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-8">
          <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Checkout</h1>
          <p className="mt-2 text-sm text-muted-foreground">Complete your order below.</p>

          <div className="mt-6 space-y-4 sm:mt-8">
            <div className="rounded-3xl border border-border bg-surface p-4 sm:p-6">
              <h2 className="text-lg font-semibold text-foreground">Selected products</h2>
              {items.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">Your cart is empty.</p>
              ) : (
                <div className="mt-4 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-3 rounded-3xl border border-border bg-white p-4 sm:flex-row sm:items-center"
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-20 sm:w-20">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-semibold text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="shrink-0 text-sm font-semibold text-foreground sm:text-right">
                        Rs.{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  ))}
                  <div className="rounded-3xl border border-border bg-white p-4">
                    <p className="font-semibold text-foreground">Total</p>
                    <p className="text-xl font-semibold text-foreground sm:text-2xl">
                      Rs.{total.toLocaleString("en-IN")}
                    </p>
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
