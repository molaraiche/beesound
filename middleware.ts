import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (token && request.nextUrl.pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/board", request.url));
  }

  if (!token && request.nextUrl.pathname === "/admin/board") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
}

export const config = {
  matcher: ["/admin/board", "/admin"],
};
