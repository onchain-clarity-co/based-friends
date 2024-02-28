import UserCard from "@/components/UserCard";
import SideBar from "@/components/SideBar";
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
      <SideBar />
      
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
