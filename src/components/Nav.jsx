import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/img/logo.svg";
import ThemeSwitch from "./ThemeSwitch";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const navRef = useRef();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsTransparent(!isTransparent);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="">
      <nav
        ref={navRef}
        id="navbar"
        className={`fixed h-[120vh] top-[-15px] ${
          isTransparent
            ? "bg-transparent left-[-50px]"
            : "bg-black bg-opacity-90 left-0"
        } w-40 z-50 transition-all duration-500 ease-in-out pointer-events-none`}
      >
        <div
          id="logo"
          className="cursor-pointer flex flex-col items-center justify-center h-28 p-2 pointer-events-auto "
          onClick={toggleNav}
        >
          <img src={logo} alt="Logo" className="w-20 h-auto bg-transparent" />
          <p className="text-white text-lg font-semibold bg-transparent"></p>
        </div>
        <div
          id="options"
          className={`flex flex-col space-y-2 pointer-events-auto ${
            isNavOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="text-lg text-slate-200 mx-auto transition duration-300 ease-in-out hover:text-green-500"
          >
            Inicio
          </Link>
          <Link
            to="/anuncios"
            className="text-lg text-slate-200 mx-auto transition duration-300 ease-in-out hover:text-green-500"
          >
            Anuncios
          </Link>
          <Link
            to="../../especialidades"
            className="text-lg text-slate-200 mx-auto transition duration-300 ease-in-out hover:text-green-500"
          >
            Especialidades
          </Link>
          <Link
            to="../../nosotros"
            className="text-lg text-slate-200 mx-auto transition duration-300 ease-in-out hover:text-green-500"
          >
            Nosotros
          </Link>
          <Link
            to="../../contacto"
            className="text-lg text-slate-200 mx-auto transition duration-300 ease-in-out hover:text-green-500"
          >
            Contacto
          </Link>
          <div className="flex justify-center items-center relative left-[10px]">
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}
