"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const categories = ["Eyeglasses", "Sunglasses", "Contact Lenses", "Prescription", "Accessories"];

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setImage("");
      setImagePreview("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("saving");
    setMessage("");

    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price: Number(price), image, category }),
    });

    if (!response.ok) {
      const result = await response.json();
      setStatus("error");
      setMessage(result.error ?? "Unable to save product.");
      return;
    }

    setStatus("saved");
    setMessage("Product saved successfully.");
    setName("");
    setPrice("");
    setImage("");
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Product name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Price</span>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
            required
            min="0"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Upload Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground file:mr-4 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:text-white focus:border-accent focus:outline-none"
          required
        />
      </label>

      {imagePreview ? (
        <div className="rounded-2xl border border-border bg-white p-4">
          <span className="text-sm font-medium text-foreground">Preview</span>
          <img src={imagePreview} alt="Image preview" className="mt-3 max-h-52 w-full rounded-2xl object-cover" />
        </div>
      ) : null}

      <label className="block">
        <span className="text-sm font-medium text-foreground">Category</span>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Saving..." : "Save Product"}
        </Button>
        {status === "saved" && <p className="text-sm text-success">{message}</p>}
        {status === "error" && <p className="text-sm text-destructive">{message}</p>}
      </div>
    </form>
  );
}
