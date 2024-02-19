import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DISPATCH",
  description: "Linktree on steroids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider></body>
    </html>
  );
}
