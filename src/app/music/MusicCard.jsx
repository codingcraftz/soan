"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaPause, FaPlay } from "react-icons/fa";

import { Box, Text } from "@radix-ui/themes";

const MusicCard = ({ youtubeUrl, title, artist }) => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isClient, setIsClient] = useState(false); // Client-only rendering
  const videoId = youtubeUrl.split("v=")[1].split("&")[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Box className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden w-72">
      {/* Album image and play/pause button */}
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
          {isPlaying ? (
            <FaPause width="24" height="24" />
          ) : (
            <FaPlay width="20" height="20" />
          )}
        </button>
      </div>

      {/* Album info */}
      <div className="p-4">
        <Text size="4" className="font-semibold">
          {title}
        </Text>
        <Text size="2" className="text-gray-500">
          {artist}
        </Text>
        <div className="w-full mt-4 mb-2 flex items-center space-x-2 text-gray-600">
          <span>{formatTime(playedSeconds)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onMouseDown={() => setIsSeeking(true)}
            onChange={(e) => setProgress(parseFloat(e.target.value))}
            onMouseUp={(e) => {
              setIsSeeking(false);
              const newProgress = parseFloat(e.target.value) / 100;
              playerRef.current.seekTo(newProgress);
            }}
            className="w-full appearance-none h-2 bg-gray-300 rounded-full outline-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--accent-color) ${progress}%, #E2E8F0 ${progress}%)`,
            }}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Hidden ReactPlayer for music playback */}
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
    </Box>
  );
};

export default MusicCard;
