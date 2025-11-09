// Referencing - https://nextjs.org/docs/app/getting-started/linking-and-navigating

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full  px-8 py-4 shadow-md bg-gray-100 dark:bg-gray-900 mb-2">
        <ul className="flex space-x-6">
            <li>
                <Link href="/" className="text-gray-800 dark:text-gray-200 hover:underline">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:underline">
                    About
                </Link>
            </li>
            <li>
                <Link href="/events" className="text-gray-800 dark:text-gray-200 hover:underline">
                    Events
                </Link>
            </li>
            <li>
                <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:underline">
                    Contact
                </Link>
            </li>
            <li>
                <Link href="/teams" className="text-gray-800 dark:text-gray-200 hover:underline">
                    Teams
                </Link>
            </li>
        </ul>
    </nav>
  );
}
