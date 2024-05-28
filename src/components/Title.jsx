import React, { useState, useEffect } from "react";

export default function TitleHome() {
  return (
    <header className="text-white text-center">
      <div className="mx-auto max-w-xl pt-10">
        <h1
          className={`font-bold text-3xl md:text-5xl lg:text-6xl animate-fade-in-down`}
        >
          <span className="text-4xl md:text-6xl lg:text-7xl">
            E. E. S. T. N°5
          </span>
        </h1>
        <h2
          className={`font-semibold text-xl md:text-2xl lg:text-3xl animate-pulse-fade-in`}
        >
          Amancio Williams
        </h2>
        <hr
          className={`my-1 md:my-2 lg:my-3 mx-auto w-1/4 md:w-1/3 lg:w-1/3 border-1  animate-expand-horizontally`}
        />
        <h3 className={`text-1xl md:text-2xl lg:text-2xl  animate-zoom-in`}>
          {"Mar del Plata"}
        </h3>
      </div>
    </header>
  );
}
