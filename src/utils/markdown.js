import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Markdown 파일 디렉토리 설정
const contentDirectory = path.join(process.cwd(), "/src/content/news");

export const getAllNews = () => {
  const fileNames = fs.readdirSync(contentDirectory).reverse();

  return fileNames.map((fileName) => {
    const filePath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // gray-matter로 메타데이터와 콘텐츠 분리
    const { data, content } = matter(fileContents);

    return {
      ...data, // YAML Front Matter 데이터
      content, // Markdown 본문
    };
  });
};
