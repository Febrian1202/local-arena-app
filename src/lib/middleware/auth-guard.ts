import { UserRole } from "@/types/user";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "./routes";
import { NextRequest, NextResponse } from "next/server";

export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );
}

export function getRequiredRoles(pathname: string): UserRole[] | null {
  for (const [route, roles] of Object.entries(PROTECTED_ROUTES)) {
    if (pathname === route || pathname.startsWith(route + "/")) {
      return roles;
    }
  }
  return null;
}

export function handlePublicRoute(
  request: NextRequest,
  isAuth: boolean,
): NextResponse | null {
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return null;
}

export function handledProtectedRoute(
  request: NextRequest,
  isAuth: boolean,
  userRole: UserRole | undefined,
  requiredRoles: UserRole[],
): NextResponse | null {
  if (!isAuth) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (!userRole || !requiredRoles.includes(userRole)) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  return null;
}
