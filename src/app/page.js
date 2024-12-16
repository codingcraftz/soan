// app/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800 font-sans w-full">
      <section className="grid grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-semibold mb-4">Albums</h2>
          <p className="mb-6 text-gray-600">음악과 함께 떠나는 작은 여행</p>
          <Link
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
            href="/albums"
          >
            음악 들으러 가기
          </Link>
        </div>

        <div className="flex items-center justify-center overflow-hidden">
          <Image
            src="/images/home_1.jpg"
            alt="soan"
            className="w-full h-72 object-cover rounded-lg shadow-lg object-bottom"
            width={300}
            height={300}
          />
        </div>

        <div className="flex items-center justify-center overflow-hidden">
          <Image
            src="/images/home_2.jpg"
            alt="soan"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-semibold mb-4">News</h2>
          <p className="mb-6 text-gray-600">
            공연 일정, 앨범 발매 소식 등 다양한 소식
          </p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
            우리의 이야기 보러가기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-center space-x-6 p-6 border-t border-gray-200">
        <a href="#" aria-label="Website">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
        <a href="#" aria-label="Apple Music">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-800" /* 아이콘 추가 */
          ></svg>
        </a>
      </footer>
    </main>
  );
}
