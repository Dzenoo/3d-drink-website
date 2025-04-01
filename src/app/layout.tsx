import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Energy",
  description: "3D Website for Energy Drink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
