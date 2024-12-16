// src/app/news/page.jsx

import { getAllNews } from "@/utils/markdown";
import NewsList from "./NewsList";

export default async function NewsPage() {
  const newsList = getAllNews(); // 서버에서 데이터 읽기

  return (
    <main className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">News</h1>
        <NewsList newsList={newsList} />
      </div>
    </main>
  );
}
