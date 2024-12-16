// src/app/music/MusicPage.jsx

"use client";

import { MUSIC_LIST } from "@/utils/constant";
import MusicCard from "./MusicCard";
import AlbumInfo from "./AlbumInfo";

export default function MusicPage() {
  return (
    <div className="flex flex-col items-center space-y-12 mb-14 max-w-screen-md ">
      <h1 className="text-2xl font-semibold pt-6 text-gray-600 text-center">
        정소안의 음악일기
      </h1>
      {MUSIC_LIST.map((music, index) => (
        <div
          key={music.youtubeUrl}
          className={`flex flex-col md:flex-row items-center justify-center md:space-x-8 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } w-full max-w-screen-lg`}
        >
          <div className="w-full md:w-1/2 flex justify-center p-4">
            <MusicCard
              youtubeUrl={music.youtubeUrl}
              title={music.title}
              artist={music.artist}
            />
          </div>
          <div className="w-full md:w-1/2 flex p-4">
            <AlbumInfo
              title={music.title}
              subTitle={music.subTitle}
              releaseDate={music.releaseDate}
              description={music.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
