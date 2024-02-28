"use client";

import UserCard from "@/components/UserCard";
import { useProfile } from "@farcaster/auth-kit";
import { type FormattedAirstackData } from "@/pages/api/friends";
import useSWR, { Fetcher } from "swr";
import { DOMAIN } from "@/utils/config";

const fetcher: Fetcher<FormattedAirstackData[], string> = (fid: string) => 
	fetch(`${DOMAIN}/api/friends?fid=${fid}`).then(res => res.json())

export default function FriendsList() {

	const {
		isAuthenticated,
		profile: { username, fid }
	} = useProfile();

	const { data, error, isLoading } = useSWR(fid ? fid.toString() : undefined, fetcher)

	if (!isAuthenticated || !fid) return <p>Please log in</p>
	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error...</p>
	if (!data) return <p>Friends not found. Refresh.</p>

	const userCards = data.map((user, i) => {
		return (
			<UserCard 
				key={i}
				pfpUrl={user.avatar} 
				username={user.username} 
				castTime={user.latestFarcasterAction} 
				onchainTime={user.latestBaseAction} />
		)
	})
	return (
		<section className="flex flex-wrap">
			{userCards}
		</section>
	)
}