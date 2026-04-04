import type { Metadata } from "next";
import "./globals.css";
import { inter, orbitron } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Local Arena - Esports Manager",
  description: "Platform manajemen turnamen esports terlengkap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${orbitron.variable} font-foreground bg-background antialiased`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
