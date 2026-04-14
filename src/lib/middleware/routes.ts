import type { UserRole as Role } from "@/types/user";
export const PUBLIC_ROUTES = [
  "/", "/login", "/register", "/about", "/contact",
];

export const PROTECTED_ROUTES: Record<string, Role[]> = {
  "/dashboard": ["ADMIN", "CAPTAIN"],
  "/team": ["ADMIN", "CAPTAIN"],
  "/tournament": ["ADMIN", "CAPTAIN"],
  "/admin": ["ADMIN"],
};
