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
          <div class="mx-auto max-w-xl pt-10">
            <h1 class="font-bold text-3xl md:text-5xl lg:text-6xl ">
              <span class="text-4xl md:text-6xl lg:text-7xl">
                E. E. S. T. N°5
              </span>
            </h1>
            <h2 class="font-semibold text-xl md:text-2xl lg:text-3xl">
              Amancio Williams
            </h2>
            <hr class="my-1 md:my-2 lg:my-3 mx-auto w-1/4 md:w-1/3 lg:w-1/3 border-1" />
            <h3 class="text-1xl md:text-2xl lg:text-2xl">
              Mar Del Plata
            </h3>
          </div>
        </header>
        <body className=""></body>
        <main className="flex flex-wrap justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          <HomeButton text="Nuestro Contacto" img={comunicar} to="/contacto" />
          <HomeButton text="Ver Anuncios" img={anuncio} to="/anuncios" />
          <HomeButton text="Sobre Nosotros" img={equipo} to="/nosotros" />
          <HomeButton text="Nuestras Especialidades"img={experto} to="/especialidades"/>
        </main>
      </Parallax>
      <Footer />
    </>
  );
}
