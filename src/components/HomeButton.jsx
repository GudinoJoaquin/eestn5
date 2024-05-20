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
      <div className="container bg-transparent backdrop-blur-[10px] backdrop-brightness-[.5] w-[150px] md:w-[200px] h-[200px] md:h-[190px] rounded-[20px] flex justify-center items-center flex-col hover:scale-[1.1] hover:backdrop-brightness-[0.3] transition duration-[.3s] mb-4 md:mb-0">
        <img src={img} alt="" width="60px" className="mb-2" />
        <p className="text-white font-semibold text-[14px] md:text-[16px] mt-2 md:mt-4">
          {primerPalabra} <br />
          {segundaPalabra}
        </p>
      </div>
    </Link>
  );
}