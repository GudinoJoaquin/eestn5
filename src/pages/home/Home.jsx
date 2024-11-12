import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactConfetti from "react-confetti";
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
  const [timeRemaining, setTimeRemaining] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const targetDate = new Date("2024-11-13T08:30:00").getTime();

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeRemaining("¡La ExpoTec 2024 ya ha comenzado!");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(
          `${days > 1 ? `${days} días` : `${days} dia`} ${
            hours >= 10 ? hours : `0${hours}`
          }:${minutes >= 10 ? minutes : `0${minutes}`}:${
            seconds >= 10 ? seconds : `0${seconds}`
          }`
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="layout">
      {timeRemaining == "¡La ExpoTec 2024 ya ha comenzado!" && <ReactConfetti width={width} height={height} recycle={false}/>}
      <div className="bg-black">
        <Parallax>
          <TitleHome />
          <main className="mt-[10vw] xl:mt-0 2xl:mt-0">
            <div className="flex justify-center mt-[30px]">
              <div className="xl:w-[400px] xl:h-[150px] w-[300px] h-[80px] border border-white xl:rounded-[20px] rounded-[10px] flex justify-center items-center">
                
                <p className="text-white text-center xl:text-[20px] text-[12px] font-semibold">
                  Se acerca la ExpoTec 2024. Los días miercoles 13 y jueves 14
                  de noviembre
                  <p className="mt-[10px]">
                    Faltan: {}
                    {timeRemaining}
                  </p>
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
