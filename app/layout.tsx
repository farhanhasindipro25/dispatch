import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./components/providers/ConvexClientProvider";
import Toast from "./components/ui/Toast";

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
        <main>
          <Toast />
          <ConvexClientProvider>{children}</ConvexClientProvider>
          {children}
        </main>
      </body>
    </html>
  );
}
