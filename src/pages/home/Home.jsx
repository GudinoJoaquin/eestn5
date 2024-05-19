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
        <header className="text-white text-nowrap translate-y-[20px]">
          <h1 className="font-bold text-[40px] md:text-[70px]">
            E. E. S. T. N°5
          </h1>
          <hr className="mx-[80px] md:mx-[530px] border-[2px]" />
          <h2 className="font-semibold text-[40px] md:text-[40px]">
            Amancio Williams
          </h2>
          <h3 className="text-[20px]">Mar del Plata</h3>
        </header>
        <main className="flex flex-row justify-center items-center mt-[100px] gap-[50px]">
          <HomeButton text="Nuestro contacto" img={comunicar} to="./Contacto" />
          <HomeButton text="Feed back" img={anuncio} to="" />
          <HomeButton text="Sobre nosotros" img={equipo} to="" />
          <HomeButton text="Nuestras especialidades" img={experto} to="" />
        </main>
      </Parallax>
      <Footer />
    </>
  );
}
