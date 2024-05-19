import React from "react";
import { Link } from "react-router-dom";
import comunicar from "../assets/img/comunicar.svg";
import anuncio from "../assets/img/anuncio-publicitario (1).svg";
import equipo from "../assets/img/equipo.svg";
import experto from "../assets/img/experto.svg";

export default function HomeButton({ text, img, to }) {
  const [primerPalabra, segundaPalabra] = text.split(" ");

  return (
    <Link to={to}>
      <div className="bg-transparent backdrop-blur-[10px] backdrop-brightness-[.5] shadow-lg shadow-black w-[200px] h-[270px] rounded-[20px] flex justify-center items-center flex-col hover:scale-[1.1] hover:backdrop-brightness-[.2] transition duration-[.3s]">
        <img src={img} alt="" width="120px" className="" />
        <p className="text-white font-semibold text-[20px] mt-[20px]">
          {primerPalabra} <br />
          {segundaPalabra}
        </p>
      </div>
    </Link>
  );
}
