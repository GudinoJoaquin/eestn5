import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg backdrop-brightness-75 p-2 select-none">
      <div className="sm:flex sm:flex-wrap sm:justify-between sm:items-center select-none">
        <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 sm:mb-0 text-center select-none">
          <ul className="list-none p-0 m-0 flex justify-center gap-[50px] text-[20px]">
            <li className="text-white underline decoration-[2px] hover:decoration-red-500 hover:scale-[1.2] transition duration-[.3s]">
              <Link to='../contacto' className="decoration-white">Contactanos</Link>
              
            </li>
            <li className="text-white underline decoration-[2px] hover:decoration-red-500 hover:scale-[1.2] transition duration-[.3s]">
              <Link to='../feedback' className="decoration-white">Feedback</Link>
              
            </li>
            <li className="text-white underline decoration-[2px] hover:decoration-red-500 hover:scale-[1.2] transition duration-[.3s]">
              <Link to='../nosotros' className="decoration-white">Nosotros</Link>
              
            </li>
            <li className="text-white underline decoration-[2px] hover:decoration-red-500 hover:scale-[1.2] transition duration-[.3s]">
              <Link to='../especialidades' className="decoration-white">Especialidades</Link>
              
            </li>
          </ul>
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-center select-none">
          <ul className="list-none p-0 m-0 flex justify-center gap-[20px]">
            <li className="inline-block hover:scale-[1.1] hover:bg-sky-600 rounded-[50%] transition duration-[.3s]">
              <SocialIcon url="https://www.facebook.com/EESTN5MDP/" bgColor="transparent"/>
            </li>
            <li className="inline-block hover:scale-[1.1] hover:bg-pink-600 rounded-[50%] transition duration-[.3s]">
              <SocialIcon url="https://www.instagram.com/tecnicacinco_mdq/?hl=es-la" bgColor="transparent"/>
            </li>
            <li className="inline-block hover:scale-[1.1] hover:bg-red-600 rounded-[50%] transition duration-[.3s]">
              <SocialIcon url="mailto:infoT5@gmail.com" bgColor="transparent" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
