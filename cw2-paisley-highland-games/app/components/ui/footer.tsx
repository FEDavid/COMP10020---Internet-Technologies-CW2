// Referencing - https://nextjs.org/docs/app/getting-started/linking-and-navigating

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-8 py-4 shadow-md dark:bg-gray-900">
        <ul className="flex space-x-6 justify-center">
            <li>
                <Link href="/privacy" className="text-gray-800 dark:text-gray-200 hover:underline">
                    Privacy Policy
                </Link>
            </li>
            <li>
                <Link href="/terms" className="text-gray-800 dark:text-gray-200 hover:underline">
                    Terms of Service
                </Link>
            </li>
            <li>
                <Link href="/sitemap" className="text-gray-800 dark:text-gray-200 hover:underline">
                    Sitemap
                </Link>
            </li>
        </ul>
    </footer>
  );
}
