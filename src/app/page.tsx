import UserCard from "@/components/UserCard";
import { fetchAirstackData } from "@/pages/api/friends";
import { DOMAIN } from "@/utils/config";


export default async function HomePage() {

  const airstackData = await fetchAirstackData(347)
  const userCards = airstackData.map((user, i) => {
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
    <main className="flex">
      {/* side bar */}
      <div className="w-1/6 p-2">
        <ul className="">
          <li className="text-md leading-none font-bold mb-1">Filter</li>
          <li className="text-sm leading-none ml-2 mb-1">-</li>
          <li className="text-sm leading-none ml-2 mb-1">active</li>
          <li className="text-sm leading-none ml-2 mb-1">mutuals</li>
        </ul>
        <ul className="">
          <li className="text-md leading-none font-bold mb-1">Sort</li>
          <li className="text-sm leading-none ml-2 mb-1">most interactions</li>
          <li className="text-sm leading-none ml-2 mb-1">least interactions</li>
          <li className="text-sm leading-none ml-2 mb-1">most recent cast</li>
          <li className="text-sm leading-none ml-2 mb-1">least recent cast</li>
          <li className="text-sm leading-none ml-2 mb-1">most recently onchain</li>
          <li className="text-sm leading-none ml-2 mb-1">least recently onchain</li>
        </ul>
      </div>
      {/* main body */}
      <div className="w-full p-2">
        <section>
          <h1>search?</h1>
        </section>
        <section className="flex flex-wrap">
          {userCards}
        </section>
      </div>
    </main>
  )
}
