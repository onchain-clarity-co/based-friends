import AuthButton from "@/components/AuthButton";

export default async function Header() {
	return (
		<>
			<header className="px-1 py-4 flex items-center justify-between content-center">
				<h1 className="text-6xl" style={{marginTop: '20px', marginLeft: '100px'}}>
					<span style={{color: '#2954ED'}}>Based</span> <span style={{color: '#FFF'}}>Friends</span>
				</h1>
				<div style={{marginRight: '100px', marginTop: '20px'}}>
					<AuthButton/>
				</div>
			</header>
			<hr style={{width: '90%', margin: '0 auto'}}/>
		</>
	)
}            
           