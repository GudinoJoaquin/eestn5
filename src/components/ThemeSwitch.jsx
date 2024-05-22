import React, { useState, useEffect } from "react";

export default function ThemeSwitch() {
  // Leer la preferencia de tema del localStorage o usar false por defecto
  const [isChecked, setIsChecked] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    // Aplicar el tema al cargar el componente basado en la preferencia almacenada
    if (isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => {
      const newChecked = !prevChecked;
      // Guardar la preferencia en localStorage
      localStorage.setItem("theme", newChecked ? "dark" : "light");

      // Aplicar el tema inmediatamente después de cambiar la preferencia
      if (newChecked) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return newChecked;
    });
  };

  return (
    <div className="flex justify-end items-end mb-4 translate-y-[10px] translate-x-[-10px]">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          className="sr-only peer"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="w-24 h-12 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full peer-checked:bg-[#2D2D2D] after:content-['🌑'] after:absolute after:bg-[#1D1D1D] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"></div>
      </label>
    </div>
  );
}
