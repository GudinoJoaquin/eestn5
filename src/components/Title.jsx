import React, { useState, useEffect } from "react";

export default function TitleHome() {
  const [eestn5Opacity, setEestn5Opacity] = useState(0);
  const [amancioOpacity, setAmancioOpacity] = useState(0);
  const [marDelPlataOpacity, setMarDelPlataOpacity] = useState(0);
  const [hrOpacity, setHrOpacity] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setEestn5Opacity(1);
    }, 200);
    const timer2 = setTimeout(() => {
      setAmancioOpacity(1);
    }, 600);
    const timer3 = setTimeout(() => {
      setMarDelPlataOpacity(1);
    }, 1000);
    const timer4 = setTimeout(() => {
      setHrOpacity(1);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []); 

  return (
    <header className="text-white text-center">
      <div className="mx-auto max-w-xl pt-10">
        <h1 className={`font-bold text-3xl md:text-5xl lg:text-6xl transition-opacity duration-1000 opacity-${eestn5Opacity}`}>
          <span className="text-4xl md:text-6xl lg:text-7xl">E. E. S. T. N°5</span>
        </h1>
        <h2 className={`font-semibold text-xl md:text-2xl lg:text-3xl transition-opacity duration-1000 opacity-${amancioOpacity}`}>
          Amancio Williams
        </h2>
        <hr className={`my-1 md:my-2 lg:my-3 mx-auto w-1/4 md:w-1/3 lg:w-1/3 border-1 transition-opacity duration-1000 opacity-${hrOpacity}`} />
        <h3 className={`text-1xl md:text-2xl lg:text-2xl transition-opacity duration-1000 opacity-${marDelPlataOpacity}`}>
          Mar Del Plata
        </h3>
      </div>
    </header>
  );
}
