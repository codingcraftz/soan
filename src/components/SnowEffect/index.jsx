"use client";

import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <>
      <Snowfall
        color="#FFB6C1" // 눈송이 색상 #FFB6C1
        snowflakeCount={30} // 눈송이 개수
      />
    </>
  );
}
