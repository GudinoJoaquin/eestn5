import React from "react";

export default function Bento({ img, alt, size, onClick, isModalOpen }) {
  const sizeClasses =
    size === "large"
      ? "col-span-2 row-span-2"
      : size === "medium"
      ? "col-span-1 row-span-2"
      : size === "stretch"
      ? "col-span-2 row-span-1"
      : "";

  const imageExtensions = [".jpg", ".jpeg", "png", ".gif", ".bmp", ".webp"];
  const videoExtensions = [".mp4", ",avi", ".mov", ".webm", ".mkv"];

  return (
    <div
      className={`overflow-hidden rounded-lg shadow-lg ${sizeClasses}`}
      onClick={() => onClick(img, alt)}
    >
      {imageExtensions.some((extension) =>
        img.toLowerCase().endsWith(extension)
      ) ? (
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover cursor-pointer"
        />
      ) : (
        <video
          src={img}
          controls
          loop
          onPause={isModalOpen}
          className="w-full h-full object-cover cursor-pointer"
        ></video>
      )}
    </div>
  );
}
