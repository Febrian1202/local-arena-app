import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { UserRole } from "./types/user";
import {
  getRequiredRoles,
  handledProtectedRoute,
  handlePublicRoute,
  isPublicRoute,
} from "./lib/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuth = !!token;
  const userRole = token?.role as UserRole | undefined;

  if (isPublicRoute(pathname)) {
    return handlePublicRoute(request, isAuth) ?? NextResponse.next();
  }

  const requiredRoles = getRequiredRoles(pathname);

  if (requiredRoles) {
    return (
      handledProtectedRoute(request, isAuth, userRole, requiredRoles) ??
      NextResponse.next()
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
