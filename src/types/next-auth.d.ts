import { DefaultSession } from "next-auth";
import { UserRole } from "./user";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
    id: string;
  }
}
