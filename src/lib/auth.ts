import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHash } from "crypto";

const AUTH_COOKIE_NAME = "vdure-user";

export type UserRole = "customer" | "admin" | null;

function hashValue(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function hashPassword(password: string) {
  return hashValue(`vdure:${password}`);
}

export function verifyPassword(password: string, hash: string) {
  return hashValue(`vdure:${password}`) === hash;
}

export async function getCurrentUserRole(): Promise<UserRole> {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_NAME);
  if (!cookie) return null;
  if (cookie.value === "admin") return "admin";
  if (cookie.value === "customer") return "customer";
  return null;
}

export async function requireUser(redirectTo = "/login"): Promise<UserRole> {
  const role = await getCurrentUserRole();
  if (!role) redirect(redirectTo);
  return role;
}

export async function requireAdmin(redirectTo = "/admin/login"): Promise<UserRole> {
  const role = await getCurrentUserRole();
  if (role !== "admin") redirect(redirectTo);
  return role;
}
