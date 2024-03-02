import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const font = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Based Friends",
  description: "Look who is online and onchain.",
  metadataBase: new URL("https://basedfriends.xyz"),
  openGraph: {images:["sharing.jpg"]}
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" style={{backgroundColor: '#313131'}}>
      <body className={`${font.className} box-border pt-20 pb-10 flex flex-col bg-inherit`}>
        <Providers>

          {/* Header */}
          <Header />

          {/* Body */}
          {children}

          {/* Footer */}
          <Footer />

        </Providers>
      </body>
    </html>
  );
}
