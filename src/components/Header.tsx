export default async function Header() {
    return (
        <header className="px-1 py-4 flex justify-between content-center bg-red-200">
            <h1 className="text-3xl bg-green-50">Onchain Clarity</h1>
            <button className="bg-green-50 align-middle">Connect Wallet</button>
        </header>
    )
}