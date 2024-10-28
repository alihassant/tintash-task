import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"], // Customize weights as needed
  subsets: ["latin"],
  variable: "--font-poppins", // Adds CSS variable
});

export const metadata: Metadata = {
  title: "Tintash",
  description: "Tintash Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
