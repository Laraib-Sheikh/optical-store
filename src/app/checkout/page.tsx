import { requireUser } from "@/lib/auth";
import CheckoutClient from "@/components/checkout/CheckoutClient";

export default async function CheckoutPage() {
  await requireUser("/login");

  return <CheckoutClient />;
}
