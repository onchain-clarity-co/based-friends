import FriendsList from "@/components/FriendsList";
import UserCard from "@/components/UserCard";
import SideBar from "@/components/SideBar";
import { fetchAirstackData } from "@/pages/api/friends";
import { DOMAIN } from "@/utils/config";

export default async function HomePage() {

  return (
    <main className="flex">
      {/* side bar */}
      <SideBar />
      
      {/* main body */}
      <div className="w-full p-2">
        <FriendsList />
      </div>
    </main>
  )
}
