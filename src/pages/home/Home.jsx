import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";
import HomeButton from "../../components/HomeButton";
import comunicar from "../../assets/img/comunicar.svg";
import anuncio from "../../assets/img/anuncio-publicitario (1).svg";
import equipo from "../../assets/img/equipo.svg";
import experto from "../../assets/img/experto.svg";

export default function App() {
  return (
    <>
      <Parallax>
        <header className="text-white text-center">
          <div className="mx-auto max-w-xl pt-10">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl mb-1 md:mb-2 lg:mb-3">
              <span className="text-4xl md:text-6xl lg:text-7xl">E. E. S. T. N°5</span>
              <hr className="my-1 md:my-2 lg:my-3 mx-auto w-1/2 md:w-2/3 lg:w-1/2 border-2" />
            </h1>
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 lg:mt-3">
              Amancio Williams
            </h2>
          </div>
        </header>
        <body className=""></body>
        <main className="flex flex-wrap justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          <HomeButton text="Nuestro contacto" img={comunicar} to="/contacto" />
          <HomeButton text="Ver Anuncios" img={anuncio} to="/anuncios" />
          <HomeButton text="Sobre nosotros" img={equipo} to="/nosotros" />
          <HomeButton text="Nuestras especialidades" img={experto} to="/especialidades" />
        </main>
      </Parallax>
      <Footer />
    </>
  );
}
