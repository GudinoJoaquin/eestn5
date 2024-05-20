import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg backdrop-brightness-75 p-2 sm:p-4 select-none">
  <div className="flex flex-col md:flex-row justify-center items-center text-center">
    
    {/* Navigation Links */}
    <div className="w-full md:w-1/3 mb-2 sm:mb-0 flex justify-center">
      <ul className="list-none p-0 m-0 flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
        <li className="relative text-base transition duration-[.3s]">
          <Link to="../contacto" className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full">Contactanos</Link>
        </li>
        <li className="relative text-base transition duration-[.3s]">
          <Link to="../feedback" className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full">Feedback</Link>
        </li>
        <li className="relative text-base transition duration-[.3s]">
          <Link to="../nosotros" className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full">Nosotros</Link>
        </li>
        <li className="relative text-base transition duration-[.3s]">
          <Link to="../especialidades" className="relative text-white decoration-white link-hover before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[1px] before:bg-white before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full">Especialidades</Link>
        </li>
      </ul>
    </div>
    
    {/* Center Text */}
    <div className="w-full md:w-1/3 flex justify-center">
      <p className="text-white text-sm sm:text-base md:text-lg font-semibold">Mar Del Plata</p>
    </div>

    {/* Social Icons */}
    <div className="w-full md:w-1/3 flex justify-center">
      <ul className="list-none p-0 m-0 flex justify-center gap-[10px] sm:gap-[20px]">
        <li className="inline-block scale-[0.75] hover:scale-[0.85] hover:bg-sky-600 rounded-full transition duration-[.3s]">
          <SocialIcon url="https://www.facebook.com/EESTN5MDP/" bgColor="transparent"/>
        </li>
        <li className="inline-block scale-[0.75] hover:scale-[0.85] hover:bg-pink-600 rounded-full transition duration-[.3s]">
          <SocialIcon url="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la" bgColor="transparent"/>
        </li>
        <li className="inline-block scale-[0.75] hover:scale-[0.85] hover:bg-red-600 rounded-full transition duration-[.3s]">
          <SocialIcon url="mailto:infoT5@gmail.com" bgColor="transparent" />
        </li>
      </ul>
    </div>
  </div>
</footer>
  );
}
