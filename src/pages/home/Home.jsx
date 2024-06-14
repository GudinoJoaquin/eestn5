import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";
import HomeButton from "../../components/HomeButton";
import TitleHome from "../../components/Title";
import comunicar from "../../assets/img/comunicar.svg";
import anuncio from "../../assets/img/anuncio-publicitario (1).svg";
import equipo from "../../assets/img/equipo.svg";
import experto from "../../assets/img/experto.svg";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Parallax>
          <TitleHome />
          <main>
          <Carousel/>
            <div className="flex flex-wrap justify-center items-center  gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 animate-fade-in-up">
              <HomeButton text="Nuestro Contacto" img={comunicar} to="/contacto" />
              <HomeButton text="Ver Anuncios" img={anuncio} to="/anuncios" />
              <HomeButton text="Sobre Nosotros" img={equipo} to="/nosotros" />
              <HomeButton text="Nuestras Especialidades" img={experto} to="/especialidades" />
            </div>
          </main>
        </Parallax>
        <Footer />
      </div>
    </>
  );
}
