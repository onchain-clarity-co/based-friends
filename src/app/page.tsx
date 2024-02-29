"use client";

import FriendsList from "@/components/FriendsList";
import SideBar from "@/components/SideBar";
import LoadingPage from "../components/LoadingPage";
import LogInPage from "../components/LogInPage";
import ErrorPage from "../components/ErrorPage";
import { useState } from "react";
import { useProfile } from "@farcaster/auth-kit";
import useSWR, { Fetcher } from "swr";
import { DOMAIN } from "@/utils/config";
import { type FormattedAirstackData } from "@/pages/api/friends";

function filterBySearch(data: FormattedAirstackData[], query: string) {
  const searchInput = new RegExp(query)
  return data.filter((user) => searchInput.test(user.username))
}

const fetcher: Fetcher<FormattedAirstackData[], string> = (fid: string) => 
	fetch(`${DOMAIN}/api/friends?fid=${fid}`).then(res => res.json())


export default function HomePage() {

  // fetch data
  const {
		isAuthenticated,
		profile: { username, fid }
	} = useProfile();
	const { data, error, isLoading } = useSWR(fid ? fid.toString() : undefined, fetcher)
	
  // set sort & filter state
  const [searchInput, setSearchInput] = useState("");

  // sort & filter handler functions
	function handleSearchChange(val: string) {
		setSearchInput(val)
	}

  // return error pages
  if (!isAuthenticated || !fid) return <LogInPage />
  if (isLoading) return <LoadingPage />
  if (error) return <ErrorPage />
  if (!data) return <p>Unexpected Issue... Please Refresh</p>

  const results = filterBySearch(data, searchInput)

  return (
    <main className="flex px-20">
      {/* side bar */}
      <SideBar searchInput={searchInput} onSearchChange={handleSearchChange} />
      
      {/* main body */}
      <div className="w-full pl-2 ml-56">
        <FriendsList userList={results} />
      </div>
    </main>
  )
}
