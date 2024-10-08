import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;

  if (token) {
    if (pathname.startsWith("/admin/board")) {
      const userRole = decodeTokenAndGetRole(token);
      if (userRole !== "admin") {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
    return NextResponse.next();
  }

  if (!token && pathname.startsWith("/admin/board")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

function decodeTokenAndGetRole(token: string): string {
  return "admin";
}

export const config = {
  matcher: ["/admin/board/:path*", "/admin"],
};
