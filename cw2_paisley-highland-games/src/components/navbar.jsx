// src/components/Navbar.jsx
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          JobBoard<span className="text-blue-500">.</span>
        </Link>

        <ul className="flex items-center space-x-6">
          <li><Link href="/jobs" className="hover:text-blue-400">Jobs</Link></li>
          <li><Link href="/providers" className="hover:text-blue-400">Providers</Link></li>
          <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
          <li>
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
