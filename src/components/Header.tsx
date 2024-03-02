import Image from "next/image";
import AuthButton from "@/components/AuthButton";

export default async function Header() {
	return (
		<header className="fixed top-0 z-50 w-full h-20 px-20 flex flex-col justify-end" style={{backgroundColor: '#313131'}}>
			<div className="flex justify-between items-end pb-1">
				<Image 
					src="/BasedFriendsClear.png"
					alt="based friends logo"
					width={1018}
					height={121}
					className="h-12 w-auto" />
				<AuthButton/>
			</div>
			<hr className="w-full mb-2"/>
		</header>
	)
}            