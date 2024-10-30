import React from "react";

export default function Bento({ img, alt, size, onClick }) {
  const sizeClasses = size === "large" ? "col-span-2 row-span-2" : size === "medium" ? "col-span-1 row-span-2" : "";

  return (
    <div className={`overflow-hidden rounded-lg shadow-lg ${sizeClasses}`} onClick={() => onClick(img, alt)}>
      <img src={img} alt={alt} className="w-full h-full object-cover cursor-pointer" />
    </div>
  );
}
