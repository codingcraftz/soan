"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen text-gray-800 font-sans w-full">
      {/* 반응형 레이아웃 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Albums */}
        <div className="flex flex-col justify-center items-center text-center order-1">
          <h2 className="text-3xl font-semibold mb-4">Albums</h2>
          <p className="mb-6 text-gray-600">음악과 함께 떠나는 작은 여행</p>
          <Link
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
            href="/albums"
          >
            음악 들으러 가기
          </Link>
        </div>

        {/* 첫 번째 이미지 */}
        <div className="flex items-center justify-center overflow-hidden order-2">
          <Image
            src="/images/home_1.jpg"
            alt="soan"
            className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-lg object-bottom"
            width={300}
            height={300}
          />
        </div>

        {/* 두 번째 이미지 */}
        <div className="flex items-center justify-center overflow-hidden order-4 md:order-3">
          <Image
            src="/images/home_2.jpg"
            alt="soan"
            className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>

        {/* News */}
        <div className="flex flex-col justify-center items-center text-center order-3 md:order-4">
          <h2 className="text-3xl font-semibold mb-4">News</h2>
          <p className="mb-6 text-gray-600">
            공연 일정, 앨범 발매 소식 등 다양한 소식
          </p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600">
            우리의 이야기 보러가기
          </button>
        </div>
      </section>
    </main>
  );
}
