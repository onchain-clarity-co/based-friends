import Image from "next/image";

export default function UserCard( props: { pfpUrl: string, username: string, castTime: string, onchainTime: string } ) {
	return (
		<div className="w-32 bg-red-600">
			<div className="flex">
				{/* pfp */}
				<Image
					src={props.pfpUrl}
					alt={`${props.username} profile picture`}
					width={300}
					height={300}
					className="rounded-full"
				/>
				{/* user info */}
				<div>
					<h3>{props.username}</h3>
					<p>active?</p>
					<p>casted {props.castTime}</p>
					<p>onchain {props.onchainTime}</p>
				</div>
			</div>
		</div>
	)
}