import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Parallax from "../../components/Parallax";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import imagen from "../../assets/img/eestn5_3.jpg";
import DevsModal from "../../components/DevsModal";

import InScroll from "../../logic/inScroll";

import l1 from "../../assets/img/l1.svg";
import l2 from "../../assets/img/l2.svg";
import l3 from "../../assets/img/l3.svg";
import l4 from "../../assets/img/l4.svg";
import l1b from "../../assets/img/l1b.svg";
import l2b from "../../assets/img/l2b.svg";
import l3b from "../../assets/img/l3b.svg";
import l4b from "../../assets/img/l4b.svg";

export default function Nosotros() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const savedTheme = localStorage.getItem("theme");

  return (
    <body className="bg-white dark:bg-[#2D2D2D] dark:text-white">
      <Parallax>
        <Nav />
        <header className="text-white flex flex-col justify-center items-center h-[100%] mx-4 md:mx-[70px]">
          <h1 className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-bold animate-fade-in-down">
            +38 Años Enseñando
          </h1>
          <p className="text-center text-[16px] md:text-[20px] lg:text-[24px] text-wrap mb-5 animate-fade-in">
            Desde 1986 brindando una educacion de calidad
          </p>
          <p className="flex flex-wrap gap-[10px] text-[12px] md:text-[16px] md:mx-[300px] animate-fade-in-up mx-[10%]">
            Nuestra escuela se fundo en Mar Del Plata en 1986 conocida por el
            nombre de ENET N°3, que posterior mente fue renombrada EET N°5 en
            1994
          </p>
          <div className="flex items-center justify-center w-16 h-16 mt-20 animate-jump animate-iteration-count-infinite">
            <svg
              onClick={handleClick}
              xmlns="http://www.w3.org/2000/svg"
              className=" w-12 h-12 text-white-700 animate-bounce cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </header>
      </Parallax>
      <main ref={contentRef} className="mt-20 md:mt-24">
        <InScroll>
          <section
            id="nosotros"
            className="flex flex-col md:flex-row md:justify-around items-center animate-heartbeat"
          >
            <div className="flex flex-col flex-1 justify-center items-center text-center px-4 md:px-8 animate-fade-in-right">
              <h2 className="text-red-700 dark:text-red-500 font-bold text-3xl md:text-4xl lg:text-5xl">
                Nosotros
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-center mx-10">
                Somos la Escuela de Educación Secundaria Técnica N°5. Estamos
                situados en la hermosa ciudad de Mar del Plata, en la provincia
                de Buenos Aires, Argentina.
                <br />
                <br />
                Desde 1986, nos hemos dedicado a brindar una educación de
                calidad en el ámbito técnico, preparando a nuestros estudiantes
                para enfrentar los desafíos del mundo moderno en un espacio que
                inspira al aprendizaje y el crecimiento.
                <br />
                <br />
                Nuestros estudiantes tienen la oportunidad de adquirir
                habilidades prácticas y especializadas que los prepararán para
                una exitosa carrera profesional en diversos campos.
                <br />
                <br />
                Nuestra institución ofrece diferentes especializaciones técnicas
                en informática, electrónica y construcciones.
              </p>
            </div>
            <div className="hidden md:flex md:flex-col flex-1 justify-center items-center animate-fade-in-left">
              <img src={imagen} alt="" className="w-9/12 h-auto rounded-2xl" />
              <Link
                to="../galeria"
                className="bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-md md:text-lg font-medium translate-y-[25px] text-white py-2 px-6 md:px-8 rounded-md shadow-md transition duration-300 hover:bg-red-950"
              >
                Ver galeria de imagenes
              </Link>
            </div>
          </section>
        </InScroll>
        <InScroll>
          <section
            id="objetivos"
            className="flex flex-col md:flex-row mt-20 md:mt-24 items-center animate-heartbeat"
          >
            <div className="hidden md:flex flex-col items-center gap-6 mt-10 ml-4 md:ml-12 md:w-1/4">
              <img
                src={l1b}
                alt=""
                className="w-24 md:w-28 lg:w-32 hover:scale-105 transition duration-300"
              />
              <img
                src={l2b}
                alt=""
                className="w-24 md:w-28 lg:w-32 hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex-1 px-4 md:px-8 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 dark:text-green-500 text-center">
                Nuestros Objetivos
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-relaxed text-center mx-10">
                Nuestro principal objetivo en la EEST N°5 es proporcionar una
                educación integral y de calidad que prepare a nuestros
                estudiantes para enfrentar los desafíos del mundo actual y
                futuro.
                <br />
                <br />
                Buscamos fomentar el desarrollo de habilidades técnicas,
                críticas y sociales en un ambiente inclusivo y respetuoso, donde
                cada estudiante pueda alcanzar su máximo potencial y contribuir
                positivamente a la sociedad.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center gap-6 mt-10 mr-4 md:mr-12 md:w-1/4">
              <img
                src={l3b}
                alt=""
                className="w-24 md:w-28 lg:w-32 hover:scale-105 transition duration-300"
              />
              <img
                src={l4b}
                alt=""
                className="w-24 md:w-28 lg:w-32 hover:scale-105 transition duration-300"
              />
            </div>
          </section>
        </InScroll>
        <InScroll>
          <section
            id="contacto"
            className="mt-20 mb-10 text-center animate-heartbeat"
          >
            <h2 className="text-red-700 dark:text-red-500 text-3xl md:text-4xl lg:text-5xl font-bold">
              Únete a nosotros
            </h2>
            <p className="text-sm md:text-base lg:text-lg md:mx-32 mt-4 mb-10 leading-relaxed mx-10">
              Si estás interesado en formar parte de nuestra comunidad educativa
              o deseas obtener más información, ¡no dudes en ponerte en contacto
              con nosotros! Estamos aquí para ayudarte a alcanzar tus metas
              educativas y profesionales.
            </p>
            <Link
              to="../contacto"
              className="bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-md md:text-lg lg:text-xl font-semibold text-white py-2 px-6 md:px-8 rounded-md shadow-md transition duration-300 hover:bg-red-950"
            >
              Contáctanos
            </Link>
          </section>
        </InScroll>
      </main>
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </body>
  );
}
