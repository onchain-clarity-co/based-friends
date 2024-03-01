import UserCard from "@/components/UserCard";
import { type FormattedAirstackData } from "@/pages/api/friends";

export default function FriendsList({ userList }: { userList: FormattedAirstackData[] }) {

	const userCards = userList.map((user, i) => {
		return (
			<UserCard 
				key={i}
				displayName={user.displayName}
				username={user.username} 
				fid={user.fid}
				pfpUrl={user.avatar}
				castTime={user.latestFarcasterAction} 
				followsMe={user.followsMe}
				onchainTime={user.latestBaseAction} 
				onchainHash={user.latestBaseActionHash} />
		)
	})

	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5">
			{userCards}
		</section>
	)
}