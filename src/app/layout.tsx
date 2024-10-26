import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
