import AuthButton from "@/components/AuthButton";

export default async function Header() {
	return (
		<header className="px-1 py-4 flex justify-between content-center">
			<h1 className="text-3xl">Onchain Clarity</h1>
			<AuthButton/>
		</header>
	)
}