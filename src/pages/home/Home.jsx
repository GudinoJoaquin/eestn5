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
import Carousel from "../../components/Carousel";
import DevsModal from "../../components/DevsModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <div className="bg-black">
        <Parallax parallax="home">

          <TitleHome />
          <main className="mt-[10vw] xl:mt-0 2xl:mt-0">
            <div className="flex gap-[200px] justify-center mt-[30px]">
              
              <div onClick={() => window.location.href = '/#/galeria'} className="xl:w-[400px] xl:h-[150px] w-[320px] h-[80px] border border-white xl:rounded-[20px] rounded-[10px] hover:scale-[1.10] flex justify-center items-center transition duration-[.3s] hover:cursor-pointer">
                <p className="text-white text-center xl:text-[20px] text-[12px] font-semibold">
                  La ExpoTec 2024 ya ha terminado, pero podes revivir los mejores momentos en la <b className="underline">Galeria de imagenes</b>
                </p>
              </div>
            </div>
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
              <HomeButton text="Galeria" img={anuncio} to="/galeria" />
            </div>
          </main>
        </Parallax>
      </div>
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}