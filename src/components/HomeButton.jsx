import React from "react";
import { Link } from "react-router-dom";

export default function HomeButton({ text, img, to }) {
  const [primerPalabra, segundaPalabra] = text.split(" ");

  return (
    <Link to={to} className="bg-verde-oscuro w-[35%] md:w-[150px] md:h-[200px] rounded-[20px] flex justify-center items-center flex-col hover:scale-110 transition duration-300 ease-in-out mb-4 md:mb-0 text-white font-semibold text-[14px] md:text-[16px] p-4 backdrop-blur-[10px] border border-white-600  hover:border-white shadow-md">
      <img src={img} alt="" width="60px" className="mb-2" />
      <p className="text-center">
        {primerPalabra} <br />
        {segundaPalabra}
      </p>
    </Link>
  );
}
