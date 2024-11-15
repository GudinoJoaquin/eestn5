import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactConfetti from "react-confetti";
import miercoles from "../../assets/img/miercoles.webp";
import jueves from "../../assets/img/jueves.webp";
import useWindowSize from "../../assets/hooks/useWindowSize";
import Parallax from "../../components/Parallax";
import video from "../../assets/img/video.mp4";
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
          {width <= 800 && (
            <div className="flex gap-[20px] p-[15px] items-center">
              <video
                src={video}
                autoPlay
                muted
                loop
                className="w-[100px] h-[100px] rounded-full object-fill bg-black hover:scale-[1.15] transition duration-[.3s]"
                onClick={() => setIsExpoModalOpen(true)}
              ></video>
              <p className="text-white font-semibold text-[12px]">
                👈 Haz click aqui para ver los horarios de la ExpoTec
              </p>
            </div>
          )}

          <TitleHome />
          <main className="mt-[10vw] xl:mt-0 2xl:mt-0">
            <div className="flex gap-[200px] justify-center mt-[30px]">
              <div onClick={() => window.location.href = '/#/galeria'} className="xl:w-[400px] xl:h-[150px] w-[300px] h-[80px] border border-white xl:rounded-[20px] rounded-[10px] flex justify-center items-center hover:scale-[1.10] transition duration-[.3s] hover:cursor-pointer">
                <p className="text-white text-center xl:text-[20px] text-[12px] font-semibold">
                  La ExpoTec 2024 ya ha finalizado. Pero podes revivir los mejores momentos en la <b className="underline">Galeria de imagenes</b>
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
              {/* <HomeButton text="Galeria" img={anuncio} to="/galeria" /> */}
            </div>
          </main>
        </Parallax>
      </div>
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}