import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    userEmail,
    customerName,
    address,
    phone,
    deliveryOption,
    paymentMethod,
    paymentProof,
    cartItems,
  } = body;

  // If the client didn't include `userEmail`, try to read it from the auth cookie.
  const cookieEmail = req.cookies.get("vdure-email")?.value ?? null;
  const finalUserEmail = userEmail || cookieEmail || "";

  if (!finalUserEmail || !customerName || !address || !phone || !deliveryOption || !paymentMethod || !cartItems?.length) {
    return NextResponse.json({ error: "All order fields are required" }, { status: 400 });
  }

  const order = await createOrder({
    id: uuidv4(),
    user_email: finalUserEmail,
    customer_name: customerName,
    address,
    phone,
    delivery_option: deliveryOption,
    payment_method: paymentMethod,
    payment_proof: paymentProof ?? null,
    cart_items: cartItems,
    status: "pending",
    created_at: new Date().toISOString(),
  });

  return NextResponse.json({ success: true, order });
}
