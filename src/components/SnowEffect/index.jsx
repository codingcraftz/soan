"use client";

import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Snowfall
        color="#FFB6C1" // 눈송이 색상 (연핑크)
        snowflakeCount={30} // 눈송이 개수
      />
    </div>
  );
}
