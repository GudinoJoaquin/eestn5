import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useWindowSize from "../../assets/hooks/useWindowSize";
import Parallax from "../../components/Parallax";
import "../../assets/css/layout.css";
import Footer from "../../components/Footer";
import HomeButton from "../../components/HomeButton";
import TitleHome from "../../components/Title";
import comunicar from "../../assets/img/comunicar.svg";
import anuncio from "../../assets/img/anuncio-publicitario (1).svg";
import equipo from "../../assets/img/equipo.svg";
import experto from "../../assets/img/experto.svg";
import document from "../../assets/img/documento.png";
import Carousel from "../../components/Carousel";
import DevsModal from "../../components/DevsModal";
import Noticia from "../../components/Noticia";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <div className="bg-black">
        <Parallax parallax="home">
          <TitleHome />
          <main className="mt-[10vw] xl:mt-0 2xl:mt-0">
            <Noticia href="/#/institucionales" text="Las novedades sobre el nuevo regimen academico las encontraran en " boldText="Institucionales"/>
            <Carousel />
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 xl:mt-[-10px] animate-fade-in-up">
              <HomeButton
                text="Nuestro Contacto"
                img={comunicar}
                to="/contacto"
              />
              <HomeButton text="Ver Anuncios" img={anuncio} to="/anuncios" />
              <HomeButton text="Sobre Nosotros" img={equipo} to="/nosotros" />
              <HomeButton
                text="Nuestras Especialidades"
                img={experto}
                to="/especialidades"
              />
              <HomeButton
                text="Institucionales"
                img={document}
                to="/institucionales"
              />
            </div>
          </main>
        </Parallax>
      </div>
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
