import Image from "next/image";

export default function UserCard( props: { pfpUrl: string, username: string, castTime: string, onchainTime: string } ) {
	return (
		<div className="bg-gray-200 w-72 mr-2 mb-2">
			<div className="flex">
				{/* pfp */}
				{/* <Image
					src={props.pfpUrl}
					alt={`${props.username} profile picture`}
					width={300}
					height={300}
					className="rounded-full"
				/> */}
				{/* user info */}
				<div className="p-2">
					<h3 className="text-md font-bold leading-none">{props.username}</h3>
					<p className="text-sm leading-none">active?</p>
					<p className="text-sm leading-none">casted {props.castTime}</p>
					<p className="text-sm leading-none">onchain {props.onchainTime}</p>
				</div>
			</div>
		</div>
	)
}