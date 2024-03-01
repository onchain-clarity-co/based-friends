import Image from "next/image";
import { IconContext } from "react-icons";
import { LuCircle } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
import { Avatar, Tooltip } from "@nextui-org/react";

export default function UserCard( props: { 
		displayName: string
		username: string
		fid: string
		pfpUrl: string | undefined
		castTime: Date
		followsMe: boolean
		onchainTime: Date | undefined
		onchainHash: string | undefined
	} ) {

	function createCastMsg(milliseconds: number) {
		if ((milliseconds / (1000)) < 60) {
			return `seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return '... a long time ago'
		}
	}
	const castMillisDiff = Date.now() - new Date(props.castTime).getTime()
	const isOnline = ((castMillisDiff / (1000*60)) < 10)
	const castMsg = createCastMsg(castMillisDiff)

	function createOnchainMsg(milliseconds: number) {
		if ((milliseconds / (1000)) < 60) {
			return `seconds ago`
		} else if ((milliseconds / (1000*60)) < 60) {
			const mins = Math.round(milliseconds / (1000*60))
			return `${mins} min${(mins==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60)) < 24) {
			const hours = Math.round(milliseconds / (1000*60*60))
			return `${hours} hr${(hours==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24)) < 30) {
			const days = Math.round(milliseconds / (1000*60*60*24))
			return `${days} day${(days==1) ? '' : 's'} ago`
		} else if ((milliseconds / (1000*60*60*24*30)) < 6) {
			const months = Math.round(milliseconds / (1000*60*60*24*30))
			return `${months} mo${(months==1) ? '' : 's'} ago`
		} else {
			return '... a long time ago'
		}
	}
	let isActiveOnchain: boolean = false
	let onchainMsg: string = 'hmm... no base txns found'
	if (props.onchainTime) {
		const onchainMillisDiff = Date.now() - new Date(props.onchainTime).getTime()
		isActiveOnchain = ((onchainMillisDiff) / (1000*60*60)) < 24
		onchainMsg = createOnchainMsg(onchainMillisDiff)
	} 

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
			<span className="block text-xs leading-none">fid: {props.fid}</span>
		</div>
	)

	return (
		<div className="bg-gray-200 rounded-md p-2 truncate flex justify-between">
			{/* profile */}
			<div className="flex items-center">
				{/* pfp */}
				{props.pfpUrl ? (
					<Avatar 
						isBordered
						src={props.pfpUrl}
						size="lg" />
				) : (
					<></>
				)}
				{/* profile info */}
				<div className="flex flex-col ml-2">
					{/* display name */}
					<h3 className="text-md leading-none cursor-default font-extrabold">{props.displayName}</h3>
					{/* username */}
					<div className="flex items-center">
						<span className="text-sm leading-none cursor-default">{props.username}</span>
						{props.followsMe ? <span className="text-xs leading-none rounded-sm ml-1.5 cursor-default" style={{border: "1px solid black", padding: "1px"}}>follows you</span> : ''}
					</div>
					{/* online / active bar */}
					<div className="flex items-center">
						{/* online button */}
						<a href={`https://warpcast.com/${props.username}`} target="_blank">
							<Tooltip content={castTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom-start">
								{isOnline ? (
									<span className="text-xs leading-none rounded-md px-1 bg-green-400 text-green-950 font-bold">online</span>
								) : (
									<span className="text-xs leading-none rounded-md px-1 bg-gray-300 text-gray-950 font-bold">offline</span>
								)}
							</Tooltip>
						</a>
						{/* onchain button */}
						<a href={`https://onceupon.gg/${props.onchainHash}`} target="_blank">
							{isActiveOnchain ? (
								<Tooltip content={baseTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom-start">
									<span className="text-xs leading-none ml-0.5 rounded-md px-1 bg-blue-400 text-blue-950 font-bold">
										active onchain
									</span>
								</Tooltip>
							) : (
								<Tooltip content={baseTooltip} size="sm" radius="sm" closeDelay={10} offset={0} placement="bottom-start">
									<span className="text-xs leading-none ml-0.5 rounded-md px-1 bg-gray-300 text-gray-950 font-bold">
										not active onchain
									</span>
								</Tooltip>
							)}
						</a>
					</div>
				</div>
			</div>
			{/* user stats */}
			<div className="flex">
				<IconContext.Provider value={{size:'12px'}}>
					<a href="https://app.converse.xyz/conversation" target="_blank">
						<LuMessagesSquare />
					</a>
					<Tooltip content={infoTooltip} size="sm" radius="sm" closeDelay={10} offset={3} placement="right">
						<span className="ml-1 h-min"><LuInfo /></span>
					</Tooltip>
				</IconContext.Provider>
			</div>
		</div>
	)
}