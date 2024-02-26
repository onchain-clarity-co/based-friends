import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Onchain Clarity",
  description: "Discover what your social circle is doing onchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} box-border flex flex-col`}>

        {/* Header */}
        <Header />

        {/* Body */}
        {children}

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}
