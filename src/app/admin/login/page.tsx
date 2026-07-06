"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role: "admin" }),
    });

    setSubmitting(false);
    if (!response.ok) {
      const result = await response.json();
      setError(result.error ?? "Unable to sign in");
      return;
    }

    router.push("/admin/add-product");
  };

  return (
    <main className="mx-auto max-w-lg px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-foreground">Admin Login</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter admin credentials to manage products.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-foreground">Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">Password</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
              required
            />
          </label>

          <div className="space-y-3">
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Signing in..." : "Sign in"}
            </Button>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
          </div>
        </form>
      </div>
    </main>
  );
}
