"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // HTML 태그 렌더링
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"; // 아이콘 추가

function NewsList({ newsList }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleContent = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-8 pb-10 max-w-screen-md">
      {newsList.map((news) => (
        <div
          key={news.id}
          className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden cursor-pointer"
        >
          {/* 제목과 날짜 */}
          <div
            className={`p-6 flex justify-between items-center ${
              expandedId === news.id ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-200 transition-colors duration-300`}
            onClick={() => toggleContent(news.id)}
          >
            <div className="flex flex-1 flex-col md:flex-row items-start md:items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {news.title}
              </h2>
              <p className="text-sm text-gray-500">
                {new Date(news.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </div>
            <span className="text-gray-500 text-2xl ml-4">
              {expandedId === news.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </div>

          {/* 내용 */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedId === news.id ? "h-full" : "max-h-0"
            }`}
          >
            <div className="p-6 border-t border-gray-200 leading-relaxed bg-white flex">
              <ReactMarkdown
                className="prose prose-indigo"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]} // HTML 태그 지원
                components={{
                  hr: () => <hr className="my-4" />,
                  h1: ({ node, children }) => (
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ node, children }) => (
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ node, children }) => (
                    <h3 className="text-xl font-medium text-gray-600 py-4">
                      {children}
                    </h3>
                  ),
                  img: ({ node, ...props }) => (
                    <Image
                      {...props}
                      alt={props.alt || ""}
                      className="w-full h-auto rounded-lg shadow"
                      width={600}
                      height={400}
                    />
                  ),
                  p: ({ node, children }) => {
                    // <p> 내부에 이미지가 포함된 경우 분리
                    const isImage = node.children.some(
                      (child) => child.tagName === "img",
                    );
                    if (isImage) return <>{children}</>;
                    return <p className="mb-1">{children}</p>;
                  },
                  iframe: ({ node, ...props }) => (
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        {...props}
                        className="w-full h-full rounded-lg shadow"
                        allowFullScreen
                      />
                    </div>
                  ),
                }}
              >
                {news.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
