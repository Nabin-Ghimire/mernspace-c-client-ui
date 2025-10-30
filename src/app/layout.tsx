// app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header";
import StoreProvider from "./storeProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "My App",
  description: "Using Manrope with Next.js + Tailwind v4 + shadcn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <StoreProvider>
        <body className="antialiased">
          <Header />
          <main>{children}</main>
        </body>
      </StoreProvider>
    </html>
  );
}

