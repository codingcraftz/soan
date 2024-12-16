// src/components/Header/index.jsx

"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 md:px-12 border-b border-gray-300 font-quicksand w-full bg-gray-100">
      <Link href="/">
        <h1 className="text-2xl font-semibold font-korean">정소안</h1>
      </Link>
      <nav className="flex space-x-4 curosr-pointer">
        <Link
          href="/albums"
          className="text-gray-500 hover:text-gray-800 font-quicksand"
        >
          Album
        </Link>
        <Link
          href="/news"
          className="text-gray-500 hover:text-gray-800 font-quicksand"
        >
          News
        </Link>
        <Link
          href="/contact"
          className="text-gray-500 hover:text-gray-800 font-quicksand"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
