"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // HTML 태그 렌더링
import Image from "next/image";
import { useState } from "react";

function NewsList({ newsList }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleContent = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-8">
      {newsList.map((news) => (
        <div
          key={news.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div
            className="p-6 cursor-pointer flex justify-between items-center"
            onClick={() => toggleContent(news.id)}
          >
            <h2 className="text-xl font-semibold">{news.title}</h2>
            <p className="text-sm text-gray-500">
              {new Date(news.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>

          {/* 내용 */}
          {expandedId === news.id && (
            <div className="p-6 border-t border-gray-200">
              {/* Markdown Content */}
              <ReactMarkdown
                className="prose prose-indigo"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]} // HTML 태그 지원
                components={{
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
                    return <p>{children}</p>;
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
          )}
        </div>
      ))}
    </div>
  );
}

export default NewsList;
