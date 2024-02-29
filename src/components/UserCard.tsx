import Image from "next/image";
import { IconContext } from "react-icons";
import { LuCircle } from "react-icons/lu";

export default function UserCard( props: { 
		pfpUrl: string | undefined, 
		username: string, 
		castTime: Date, 
		onchainTime: Date | null 
	} ) {

	function createCastMsg(milliseconds: number) {
		if ((milliseconds / (1000)) < 60) {
			return `Casted seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `Casted ${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `Casted ${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `Casted ${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `Casted ${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return 'Casted... a long time ago'
		}
	}
	const castMillisDiff = Date.now() - new Date(props.castTime).getTime()
	const castMsg = createCastMsg(castMillisDiff)

	function createOnchainMsg(milliseconds: number) {
		if ((milliseconds / (1000)) < 60) {
			return `Casted seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `Onchain ${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `Onchain ${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `Onchain ${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `Onchain ${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return 'Onchain... a long time ago'
		}
	}
	const onchainMsg = props.onchainTime ? createOnchainMsg(Date.now() - new Date(props.onchainTime).getTime()) : undefined

	return (
		<div className="bg-gray-200 rounded-md truncate">
			<div className="flex p-2 items-center">
				{/* pfp */}
				{props.pfpUrl ? (
					<Image 
						src={props.pfpUrl} 
						alt={`${props.username} profile picture`}
						width={300}
						height={300}
						className="rounded-full max-w-12 max-h-12 w-12 h-12"
					/>
				) : (
					<></>
				)}
				{/* user info */}
				<div className="pl-2">
					{/* username */}
					<h3 className="text-sm font-bold leading-none">{props.username}</h3>
					{/* online / active bar */}
					<div className="flex items-center mb-0.5">
						<IconContext.Provider value={{color: 'green', size:'10px'}}>
							<LuCircle />
						</IconContext.Provider>
						<span className="text-xs leading-none ml-0.5 mr-1">online</span>
						<IconContext.Provider value={{color: 'green', size:'10px'}}>
							<LuCircle />
						</IconContext.Provider>
						<span className="text-xs leading-none ml-0.5">active onchain</span>
					</div>
					{/* cast / onchain recency */}
					<span className="block text-xs leading-none">{castMsg}</span>
					<span className="block text-xs leading-none">{onchainMsg}</span>
				</div>
			</div>
		</div>
	)
}