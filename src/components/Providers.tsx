import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import AuthKitProvider from '@/components/AuthKitProvider';
import NextUIProvider from '@/components/NextUIProvider';
import { DOMAIN } from "@/utils/config";

const config = {
	relay: 'https://relay.farcaster.xyz',
	rpcUrl: 'https://mainnet.optimism.io',
	domain: DOMAIN,
	siweUri: `http://${DOMAIN}/`,
};

export default async function Providers({ children }: { children: React.ReactNode }) {
  
	const session = await getServerSession();
	
	return (
		<SessionProvider session={session}><AuthKitProvider config={config}><NextUIProvider>
			{children}
		</NextUIProvider></AuthKitProvider></SessionProvider>
	)
}