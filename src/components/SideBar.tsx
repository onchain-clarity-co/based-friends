import { LuSearch } from "react-icons/lu";
import { LuUserCheck2 } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { LuUserPlus2 } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";

export default function SideBar() {
	return (
    <div className="fixed top-20 w-56 text-white mt-4">
			{/* Search Box */}
			<div className="mt-1 flex items-center">
				<LuSearch />
				<input 
					type="search" 
					placeholder="Search..."
					className="leading-none rounded-sm shadow-sm w-full bg-transparent ml-1"
				/>
			</div>

			<hr className="w-full mb-1"/>

			{/* Filters */}
			<ul className="">
				<li className="text-md leading-none mb-1 flex items-center">
					<LuUserCheck2 />
					<button
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue ml-1">
						Following
					</button>
				</li>
				<li className="text-md leading-none mb-1 flex items-center">
					<LuUsers2 />
					<button 
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue ml-1">
						Mutual
					</button>
				</li>
				<li className="text-md leading-none mb-1 flex items-center">
					<LuUserPlus2 />
					<button 
						type="button" 
						className="cursor-pointer hover:text-lightblue active:text-darkblue ml-1">
						Follows Me
					</button>
				</li>
			</ul>

			<hr className="w-full mb-1"/>

			{/* Sorts */}
			<ul className="flex mb-1">
				<li className="text-md leading-none">
					<label>
						<input type="radio" name="sort" value="most" checked={true} />
						<span className="ml-1">Most</span>
					</label>
				</li>
				<li className="text-md leading-none ml-2">
					<label>
						<input type="radio" name="sort" value="least" />
						<span className="ml-1">Least</span>
					</label>
				</li>
			</ul>
			<ul className="">
				<li className="text-md leading-none mb-1 flex items-center">
					<LuHeart />
					<button type="button" className="ml-1">Interactions</button>
				</li>
				<li className="text-md leading-none mb-1 flex items-center">
					<LuMessagesSquare />
					<button type="button" className="ml-1">Recently Casted</button>
				</li>
				<li className="text-md leading-none mb-1 flex items-center">
					<LuLayers />
					<button type="button" className="ml-1">Recently Onchain</button>
				</li>
			</ul>
		</div>
	)
}