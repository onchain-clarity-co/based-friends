import FriendsList from "@/components/FriendsList";
import SideBar from "@/components/SideBar";

export default async function HomePage() {

  return (
    <main className="flex px-20">
      {/* side bar */}
      <SideBar />
      
      {/* main body */}
      <div className="w-full pl-2 ml-56">
        <FriendsList />
      </div>
    </main>
  )
}
