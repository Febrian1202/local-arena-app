"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(
      "404 Error: User attempted to access non-existent route:",
      pathname,
    );
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <div className="text-center glass p-10 rounded-2xl neon-border-cyan">
        <h1 className="mb-4 text-7xl font-bold font-heading text-glow-cyan text-primary">
          404
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! Arena tidak ditemukan.
        </p>
        <Link
          href="/"
          className="btn btn-primary rounded-full px-8 py-2 hover:scale-105 transition-transform duration-300 glow-cyan"
        >
          Kembali ke Base
        </Link>
      </div>
    </div>
  );
}
