import Image from "next/image";
import { IconContext } from "react-icons";
import { LuCircle } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
import { Tooltip } from "@nextui-org/react";

export default function UserCard( props: { 
		pfpUrl: string | undefined, 
		username: string, 
		castTime: Date, 
		onchainTime: Date | undefined 
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

	const castTooltip = (
		<div>
			<span className="block text-xs leading-none">{castMsg}</span>
		</div>
	)
	const baseTooltip = (
		<div>
			<span className="block text-xs leading-none">{onchainMsg}</span>
		</div>
	)
	const infoTooltip = (
		<div>
			<span className="block text-xs leading-none">fid: {'250'}</span>
			<span className="block text-xs leading-none">{'250'} likes</span>
			<span className="block text-xs leading-none">{'12'} recasts</span>
		</div>
	) // placeholder data

	return (
		<div className="bg-gray-200 rounded-md p-1.5 truncate flex justify-between">
			{/* profile */}
			<div className="flex items-center">
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
				{/* profile info */}
				<div className="flex flex-col ml-1">
					{/* display name */}
					<h3 className="text-md leading-none">{'Display Name'}</h3>
					{/* username */}
					<h3 className="text-sm leading-none">{props.username}</h3>
					{/* online / active bar */}
					<div className="flex items-center mb-0.5">
						<IconContext.Provider value={{color: 'green', size:'8px'}}>
							<Tooltip content={castTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom-start">
								<span className=""><LuCircle /></span>
							</Tooltip>
						</IconContext.Provider>
						<span className="text-xs leading-none ml-0.5 mr-1">online</span>
						<IconContext.Provider value={{color: 'blue', size:'8px'}}>
							<Tooltip content={baseTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom-start">
								<span className=""><LuCircle /></span>
							</Tooltip>
						</IconContext.Provider>
						<span className="text-xs leading-none ml-0.5">active onchain</span>
					</div>
				</div>
			</div>
			{/* user stats */}
			<div className="flex flex-col">
				<IconContext.Provider value={{size:'12px'}}>
					<Tooltip content={infoTooltip} size="sm" radius="sm" closeDelay={10} offset={3} placement="right">
						<span><LuInfo /></span>
					</Tooltip>
				</IconContext.Provider>
			</div>
		</div>
	)
}