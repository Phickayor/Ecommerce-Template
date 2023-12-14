import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["300", "400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Template",
  description: "An E-commerce site template",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
