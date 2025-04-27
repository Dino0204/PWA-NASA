import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/widget/footer/ui";

export const metadata: Metadata = {
  title: "NASA",
  manifest: "/manifest.json",
  icons: "/icon512_rounded.png",
  description: "PWA with NASA OPEN API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased grid h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
