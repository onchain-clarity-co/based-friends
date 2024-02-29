import UserCard from "@/components/UserCard";
import { type FormattedAirstackData } from "@/pages/api/friends";

export default function FriendsList({ userList }: { userList: FormattedAirstackData[] }) {

	const userCards = userList.map((user, i) => {
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
		<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5">
			{userCards}
		</section>
	)
}