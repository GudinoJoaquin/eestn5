import React from "react";
import { Link } from "react-router-dom";
import Parallax from "../components/Parallax";
export default function NotFound() {
  return (
    <Parallax parallax="completo2">
      <h1 className="text-white font-bold text-[200px]">404</h1>
      <h2 className="text-white font-semibold text-[70px] mb-[60px]">
        Pagina no encontrada
      </h2>
      <Link to='/' className="text-white text-[30px] underline decoration-white ">Volver al inicio</Link>
    </Parallax>
  );
}
