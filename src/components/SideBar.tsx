export default async function SideBar() {
	return (
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
	)
}