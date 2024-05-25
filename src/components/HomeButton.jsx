import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomeButton({ text, img, to }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Mostrar el botón después de 1200 milisegundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1300);

    // Limpiar el temporizador cuando el componente se desmonte o actualice
    return () => clearTimeout(timer);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <Link
      to={to}
      className={`bg-verde-oscuro w-[35%] md:w-[150px] md:h-[200px] rounded-[20px] flex justify-center items-center flex-col ${showButton ? 'opacity-100 scale-100 transition-all duration-500' : 'opacity-0 scale-95'} hover:scale-110 transition duration-300 ease-in-out mb-4 md:mb-0 text-white font-semibold text-[14px] md:text-[16px] p-4 backdrop-blur-[10px] border border-white-600 hover:border-white shadow-md`}
    >
      <img src={img} alt="" width="60px" className="mb-2" />
      <p className="text-center">
        {text.split(" ")[0]} <br />
        {text.split(" ")[1]}
      </p>
    </Link>
  );
}
