import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import LenisProvider from "@/provider/LenisProvider.tsx";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Quanta - Digital Design Agency",
  description:
    "Quanta is a digital design agency crafting high-conversion websites, UI/UX, and brand identities for modern businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black">
        <Header />
        <main>
          <LenisProvider>{children}</LenisProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
