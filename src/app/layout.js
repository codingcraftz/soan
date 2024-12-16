import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import SnowEffect from "@/components/SnowEffect";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "가수 정소안의 음악세상",
  description: "앨범발매, 공연 및 강종 소식을 전해드립니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>가수 정소안의 음악세상</title>
        <meta
          name="description"
          content="앨범발매, 공연 및 강종 소식을 전해드립니다."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://soan-music.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="가수 정소안의 음악세상" />
        <meta
          property="og:description"
          content="가수 정소안의 공연, 앨범발매 등 각종 소식을 전해드립니다."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/15d3fec1-b86e-4232-8afa-2f33647e9183.jpg?token=Eu-sLlTkyjOpPGfXtkh8oIaGcvaFGW0CKTL4-5R_w0U&height=564&width=1075&expires=33270341548"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="soan-music.vercel.app" />
        <meta property="twitter:url" content="https://soan-music.vercel.app/" />
        <meta name="twitter:title" content="가수 정소안의 음악세상" />
        <meta
          name="twitter:description"
          content="가수 정소안의 공연, 앨범발매 등 각종 소식을 전해드립니다."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/15d3fec1-b86e-4232-8afa-2f33647e9183.jpg?token=Eu-sLlTkyjOpPGfXtkh8oIaGcvaFGW0CKTL4-5R_w0U&height=564&width=1075&expires=33270341548"
        />

        {/* 폰트 추가 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center w-full`}
      >
        <Header />
        <SnowEffect />
        <div className="flex flex-col bg-gray-100 w-full items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
