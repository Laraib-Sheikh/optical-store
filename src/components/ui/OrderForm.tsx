"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { OrderItem } from "@/types";

interface OrderFormProps {
  cartItems: OrderItem[];
  userEmail: string;
  onOrderPlaced: () => void;
}

export default function OrderForm({ cartItems, userEmail, onOrderPlaced }: OrderFormProps) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("Home Delivery");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [paymentProof, setPaymentProof] = useState("");
  const [proofPreview, setProofPreview] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPaymentProof("");
      setProofPreview("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPaymentProof(reader.result);
        setProofPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("saving");
    setMessage("");

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail,
        customerName: name,
        address,
        phone,
        deliveryOption,
        paymentMethod,
        paymentProof: paymentMethod === "COD" ? paymentProof : paymentProof,
        cartItems,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setStatus("error");
      setMessage(result.error ?? "Unable to place order.");
      return;
    }

    setStatus("saved");
    setMessage("Order placed successfully.");
    setName("");
    setAddress("");
    setPhone("");
    setPaymentProof("");
    setProofPreview("");
    onOrderPlaced();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-border bg-white p-8 shadow-sm">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Shipping details</h2>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Full name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Address</span>
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
            rows={3}
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Phone number</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Delivery option</span>
          <select
            value={deliveryOption}
            onChange={(event) => setDeliveryOption(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            <option>Home Delivery</option>
            <option>Pick up</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Payment method</span>
          <select
            value={paymentMethod}
            onChange={(event) => setPaymentMethod(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            <option>COD</option>
            <option>EasyPaisa</option>
            <option>JazzCash</option>
          </select>
        </label>

        {(paymentMethod === "EasyPaisa" || paymentMethod === "JazzCash" || paymentMethod === "COD") && (
          <label className="block">
            <span className="text-sm font-medium text-foreground">Upload payment proof</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:text-white focus:border-accent focus:outline-none"
              required
            />
          </label>
        )}

        {proofPreview ? (
          <div className="rounded-2xl border border-border bg-white p-4">
            <span className="text-sm font-medium text-foreground">Payment proof preview</span>
            <img src={proofPreview} alt="Payment proof preview" className="mt-3 max-h-52 w-full rounded-2xl object-cover" />
          </div>
        ) : null}
      </div>

      <div className="space-y-3">
        <Button type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Placing order..." : "Place Order"}
        </Button>
        {message ? (
          <p className={`text-sm ${status === "saved" ? "text-success" : "text-destructive"}`}>
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
