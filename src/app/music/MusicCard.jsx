"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

const MusicCard = ({ youtubeUrl, title, artist }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isClient, setIsClient] = useState(false); // 클라이언트 전용 설정
  const videoId = youtubeUrl.split("v=")[1].split("&")[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    setIsClient(true); // 클라이언트에서만 렌더링
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    if (!isSeeking) {
      setProgress(state.played * 100);
      setPlayedSeconds(state.playedSeconds);
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeekMouseDown = () => {
    setIsSeeking(true);
  };

  const handleSeekChange = (e) => {
    setProgress(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    setIsSeeking(false);
    const newProgress = parseFloat(e.target.value) / 100;
    playerRef.current.seekTo(newProgress);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72">
      {/* 앨범 이미지 및 플레이 버튼 */}
      <div className="relative">
        <img
          src={thumbnailUrl}
          alt="Album Cover"
          className="w-full h-48 object-cover"
        />
        <button
          className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white w-10 h-10 flex items-center justify-center rounded-full"
          onClick={handlePlayPause}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>

      {/* 앨범 정보 */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{artist}</p>
        {/* 재생바 및 시간 */}
        <div className="w-full mt-4 mb-2 flex items-center space-x-2 text-gray-600">
          <span>{formatTime(playedSeconds)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className="w-full appearance-none h-2 bg-gray-300 rounded-full outline-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #4A5568 ${progress}%, #E2E8F0 ${progress}%)`,
            }}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* 숨겨진 ReactPlayer (음악 재생용) */}
      {isClient && (
        <ReactPlayer
          ref={playerRef}
          url={youtubeUrl}
          playing={isPlaying}
          onProgress={handleProgress}
          onDuration={handleDuration}
          width="0"
          height="0"
        />
      )}
    </div>
  );
};

export default MusicCard;
