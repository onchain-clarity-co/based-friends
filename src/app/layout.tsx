import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import AuthKitProvider from '@/components/AuthKitProvider';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DOMAIN } from "@/utils/config";

const font = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Based Friends",
  description: "Look who is online and onchain.",
};

const config = {
  relay: 'https://relay.farcaster.xyz',
  rpcUrl: 'https://mainnet.optimism.io',
  domain: DOMAIN,
  siweUri: `http://${DOMAIN}/`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${font.className} box-border pt-20 flex flex-col`} style={{backgroundColor: '#313131'}}>
        <SessionProvider session={session}><AuthKitProvider config={config}>

          {/* Header */}
          <Header />

          {/* Body */}
          {children}

          {/* Footer */}
          <Footer />

        </AuthKitProvider></SessionProvider>
      </body>
    </html>
  );
}
