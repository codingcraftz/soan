// src/app/news/page.jsx

import { getAllNews } from "@/utils/markdown";
import NewsList from "./NewsList";

export default async function NewsPage() {
  const newsList = getAllNews();

  return (
    <main className="bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl font-semibold py-6 text-gray-600 text-center">
          정소안의 이야기
        </h1>
        <NewsList newsList={newsList} />
      </div>
    </main>
  );
}
