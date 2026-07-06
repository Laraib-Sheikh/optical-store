import { NextRequest, NextResponse } from "next/server";
import { getUserByEmail } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@optical.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "optical123";
const AUTH_COOKIE_NAME = "vdure-user";
const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "").trim();
  const role = String(body.role ?? "customer").trim();

  if (role === "admin") {
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid admin credentials" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true, role: "admin" });
    response.cookies.set(AUTH_COOKIE_NAME, "admin", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: AUTH_COOKIE_MAX_AGE,
    });
    return response;
  }

  if (role === "customer") {
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const user = await getUserByEmail(email);
    if (!user || user.role !== "customer" || !verifyPassword(password, user.password_hash)) {
      return NextResponse.json({ error: "Invalid login credentials" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true, role: "customer" });
    response.cookies.set(AUTH_COOKIE_NAME, "customer", {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: AUTH_COOKIE_MAX_AGE,
    });
    // also set the email so client can include it with orders
    response.cookies.set("vdure-email", email, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: AUTH_COOKIE_MAX_AGE,
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid role" }, { status: 400 });
}

export async function GET(req: NextRequest) {
  const roleCookie = req.cookies.get(AUTH_COOKIE_NAME);
  const emailCookie = req.cookies.get("vdure-email");
  const role = roleCookie?.value ?? null;
  const email = emailCookie?.value ?? null;
  return NextResponse.json({ role, email });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(AUTH_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  response.cookies.set("vdure-email", "", { path: "/", maxAge: 0 });
  return response;
}
