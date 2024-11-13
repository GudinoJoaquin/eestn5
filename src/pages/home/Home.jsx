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
  const [timeRemaining, setTimeRemaining] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpoModalOpen, setIsExpoModalOpen] = useState(false);
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
          `${hours >= 10 ? hours : `0${hours}`}:${
            minutes >= 10 ? minutes : `0${minutes}`
          }:${seconds >= 10 ? seconds : `0${seconds}`}`
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      {timeRemaining == "¡La ExpoTec 2024 ya ha comenzado!" && (
        <ReactConfetti width={width} height={height} recycle={false} />
      )}
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
              {width > 800 && (
                <div className="mt-[-350px] translate-y-[170px] border-[2px] border-white rounded-[15px] p-[6px] hover:scale-[1.05] transition duration-[.3s]">
                  <img
                    className="w-[350px] rounded-[10px] cursor-pointer"
                    src={miercoles}
                    alt=""
                    onClick={() => window.open(miercoles, "_blank")}
                  />
                </div>
              )}
              <div className="xl:w-[400px] xl:h-[150px] w-[300px] h-[80px] border border-white xl:rounded-[20px] rounded-[10px] flex justify-center items-center">
                {timeRemaining == "¡La ExpoTec 2024 ya ha comenzado!" ? (
                  <p className="text-white text-center xl:text-[20px] text-[12px] font-semibold">
                    {timeRemaining}
                    <p className="mt-[10px]">
                      ¡¡Será los días miercoles 13 y jueves 14!!
                    </p>
                  </p>
                ) : (
                  <p className="text-white text-center xl:text-[20px] text-[12px] font-semibold">
                    Se acerca la ExpoTec 2024. Los días miercoles 13 y jueves 14
                    de noviembre
                    <p className="mt-[10px]">Faltan {timeRemaining}</p>
                  </p>
                )}
              </div>
              {width > 800 && (
                <div className="mt-[-350px] translate-y-[170px] border-[2px] border-white rounded-[15px] p-[6px] hover:scale-[1.05] transition duration-[.3s]">
                  <img
                    className="w-[350px] rounded-[10px] cursor-pointer"
                    src={jueves}
                    alt=""
                    onClick={() => window.open(jueves, "_blank")}
                  />
                </div>
              )}
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
      {isExpoModalOpen && (
        <ExpoModal onClose={() => setIsExpoModalOpen(false)} />
      )}
    </div>
  );
}

function ExpoModal({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  //onCLick{() => window.open(url, "_blank")}

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-[10px] xl:w-[40vw] w-[80vw] h-auto flex backdrop-brightness-50">
        <div className="text-black flex-1 p-[15px] text-[25px] font-bold">
          <main className="text-[25px] font-bold px-[10px]">
            <img src={miercoles} alt="" />
            <img src={jueves} alt="" />
          </main>
        </div>
      </div>
    </div>
  );
}
