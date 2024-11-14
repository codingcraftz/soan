"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-gray-200">
      <Link href="/">
        <h1 className="text-2xl font-semibold">정소안</h1>
      </Link>
      <nav className="flex space-x-4">
        <Link href="/music" className="text-gray-500 hover:text-gray-800">
          Music
        </Link>
        <Link href="/news" className="text-gray-500 hover:text-gray-800">
          News
        </Link>
        <Link href="/schedule" className="text-gray-500 hover:text-gray-800">
          Schedule
        </Link>
        <Link href="/contact" className="text-gray-500 hover:text-gray-800">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
