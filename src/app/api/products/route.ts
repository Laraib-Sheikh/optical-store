import { NextRequest, NextResponse } from "next/server";
import { createProduct, getProducts } from "@/lib/db";

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to load products", details: String(error) },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const name = String(payload.name ?? "").trim();
    const image = String(payload.image ?? "").trim();
    const category = String(payload.category ?? "").trim() || null;
    const price = Number(payload.price ?? 0);
    const id = String(payload.id ?? payload.name ?? `product-${Date.now()}`);

    if (!name || !image || !price) {
      return NextResponse.json(
        { error: "Name, image, and price are required" },
        { status: 400 },
      );
    }

    const product = await createProduct({
      id,
      name,
      price,
      image,
      category,
    });

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to save product", details: String(error) },
      { status: 500 },
    );
  }
}
