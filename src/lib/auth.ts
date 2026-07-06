import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AUTH_COOKIE_NAME = "vdure-user";

export type UserRole = "customer" | "admin" | null;

export function getCurrentUserRole(): UserRole {
  const cookie = cookies().get(AUTH_COOKIE_NAME);
  if (!cookie) return null;
  if (cookie.value === "admin") return "admin";
  if (cookie.value === "customer") return "customer";
  return null;
}

export function requireUser(redirectTo = "/login"): UserRole {
  const role = getCurrentUserRole();
  if (!role) redirect(redirectTo);
  return role;
}

export function requireAdmin(redirectTo = "/admin/login"): UserRole {
  const role = getCurrentUserRole();
  if (role !== "admin") redirect(redirectTo);
  return role;
}
