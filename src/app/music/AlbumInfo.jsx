// src/app/music/AlbumInfo.jsx

import React from "react";

const AlbumInfo = ({ title, subTitle, releaseDate, description }) => {
  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-500 mb-2">
        {subTitle} -Released {releaseDate}
      </p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AlbumInfo;
