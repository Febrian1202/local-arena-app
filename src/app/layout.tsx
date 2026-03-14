import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`}>
        <Navbar />

        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
