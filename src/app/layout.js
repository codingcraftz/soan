// src/app/layout.js

import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";
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
  description: "가수 정소안의 공연, 앨범발매 등 각종 소식을 전해드립니다.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Nanum+Gothic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
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
