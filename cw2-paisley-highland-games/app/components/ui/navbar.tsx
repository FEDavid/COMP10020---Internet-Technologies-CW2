// Referencing - https://nextjs.org/docs/app/getting-started/linking-and-navigating

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full px-8 pt-4 pb-5 shadow-md bg-gray-100 dark:bg-gray-900 mb-2 flex justify-between items-center">
            <div id="leftside_nav" className="flex flex-row gap-8">
                <p className="font-black">Paisley Highland Games</p>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-gray-800 dark:text-gray-200 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/events" className="text-gray-800 dark:text-gray-200 hover:underline">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link href="/teams" className="text-gray-800 dark:text-gray-200 hover:underline">
                            Teams
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:underline">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:underline">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
            <div id="rightside_nav" className="flex flex-row gap-8 items-center">
                <div id="searchbar" className="w-48 bg-gray-300 rounded-4xl px-3 py-1 text-(--background)">Search</div>
                <Link href="/profile" className="flex flex-row items-center gap-2 cursor-pointer bg-(--background) px-3 py-1 rounded-4xl hover:shadow-md">
                    <p className="px-2">Login</p>
                    <div id="profile_icon" className="w-8 h-8 bg-gray-400 rounded-full inline-block"></div>
                </Link>
            </div>
        </nav>
    );
}
