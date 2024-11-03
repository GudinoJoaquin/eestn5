import React, { useState } from "react";
import Nav from "../../components/Nav.jsx";
import Parallax from "../../components/Parallax.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import DevsModal from "../../components/DevsModal.jsx";

export default function Contacto() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-[#2D2D2D] dark:text-white">
      <Parallax>
        <Nav />
        <header className="text-white flex flex-col justify-center items-start h-[90%] mx-[5%] md:mx-[70px] ">
          <h1 className="animate-fade-in-right text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-4 md:mb-8 md:mt-20 text-center md:text-left m-10">
            Ponte en contacto con nosotros
          </h1>
          <p className="z-10 text-center text-[4vw] md:text-[25px] text-wrap mt-10 relative backdrop-blur-lg mx-10 animate-fade-in-down">
            Nos encanta escuchar de ti y estamos aquí para ayudarte en lo que
            necesites. Puedes contactarnos mediante nuestro formulario de
            contacto en línea para cualquier pregunta o sugerencia que tengas.
            Además, síguenos en nuestras redes sociales{" "}
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-blue-700 font-semibold hover:brightness-[2] transition duration-[.2s]"
            >
              Facebook
            </a>{" "}
            e{" "}
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-red-500 font-semibold hover:brightness-[2] transition duration-[.2s]"
            >
              Instagram
            </a>{" "}
            para mantenerte al día con las últimas noticias, eventos y
            actividades de nuestra escuela. Y si prefieres hablar en persona, te
            solicitamos que acuerdes una entrevista por este formulario o por
            correo electrónico. Esperamos saber pronto de ti y nos agrada
            conectarnos contigo y únete a nuestra comunidad en línea.
          </p>
        </header>
      </Parallax>
      <section className="flex flex-col md:flex-col lg:flex-row mx-[10vw] lg:gap-[10vw] lg:justify-center mt-[70px] mb-[50px]">
        <form
          action="https://formsubmit.co/infoT5@eest5mdp.edu.ar"
          method="POST"
          className="flex flex-col flex-1"
        >
          <h4 className="sm:text-[2vw] sm:py-[2vw] sm:text-start text-[5vw]">
            Enviar mensaje
            <hr className="border-[1.5px] border-red-500 mr-[600px] mt-[3px] w-[40px]" />
          </h4>
          <input
            className="dark:bg-[#383838] bg-[#e6e6e6] focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s]"
            type="text"
            placeholder="Nombre"
            name="Nombre"
            required
          />
          <input
            className="dark:bg-[#383838] bg-[#e6e6e6] focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s]"
            type="email"
            placeholder="Email"
            name="Email"
            required
          />
          <textarea
            className="dark:bg-[#383838] bg-[#e6e6e6] focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s] resize-none"
            rows="17"
            name="Texto"
            required
          ></textarea>
          <button
            className="bg-[#f85c70] text-white rounded-[5px] p-[.5vw] m-[.5vw] hover:bg-[#f63750] transition duration-[.3s]"
            type="submit"
          >
            Enviar
          </button>
        </form>

        <div className="flex-2 mt-[30px] lg:mt-0">
          <div>
            <h4 className="sm:text-[2vw] sm:text-nowrap sm:py-[2vw] text-[5vw] mt-[20px]">
              Manténgase en contacto
              <hr className="border-[1.5px] border-red-500 w-[45px] mt-[3px]" />
            </h4>
            <div>
              <h6 className="mx-[50px] mt-[20px] text-[20px]">
                <i className="fa fa-map ml-[-39px] mr-[10px]"></i>
                Dirección:
                <br />
                <Link
                  to="https://www.google.com/maps/place/Escuela+De+Educación+Secundaria+Técnica+Nº5+'Amancio+Williams'/@-38.0104666,-57.5894172,15z/data=!4m6!3m5!1s0x9584dec66cad85ff:0x2a201849dd878504!8m2!3d-38.011481!4d-57.5806625!16s%2Fg%2F1hf3y76ld?entry=ttu"
                  target="_blank"
                  className="sm:text-[1.3vw] hover:text-red-500 underline underline-offset-2"
                >
                  Av. Juan B. Justo 4287, B7608 Mar del Plata, Provincia de
                  Buenos Aires
                </Link>
              </h6>
            </div>
            <div className="mt-[20px] mb-[50px]">
              <h6 className="mx-[50px] mt-[20px] text-[20px]">
                <i className="fa fa-envelope ml-[-39px] mr-[14px]"></i>
                Email:
                <br />
                <a
                  href="mailto:infoT5@eest5mdp.edu.ar"
                  className="sm:text-[1.3vw] text-red-400 hover:text-red-600"
                >
                  infoT5@eest5mdp.edu.ar
                </a>
              </h6>
            </div>
            <div className="w-full h-full">
              <Link
                className="border-2 flex justify-center items-center border-green-700 text-green-700 hover:text-white dark:text-white font-semibold text-[20px] rounded-[5px] px-[10px] py-[1vw] m-[.5vw] hover:bg-green-700 transition duration-[.3s] w-full"
                to="https://www.google.com/maps/uv?pb=!1s0x9584dec66cad85ff%3A0x2a201849dd878504!3m1!7e115!4s%2Fmaps%2Fplace%2Feestn5%2F%40-38.0116482%2C-57.5808331%2C3a%2C75y%2C38.81h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sYnnzVpfm0XdvSz50K7sWZg*212e0*214m2*213m1*211s0x9584dec66cad85ff%3A0x2a201849dd878504%3Fsa%3DX%26ved%3D2ahUKEwi-srXVtYGGAxV3kJUCHfIcAq4Qpx96BAhLEAA!5seestn5%20-%20Buscar%20con%20Google!15sCgIgAQ&imagekey=!1e2!2sYnnzVpfm0XdvSz50K7sWZg&hl=es&ved=1t%3A206134&ictx=111"
                target="_blank"
              >
                ¡Visítanos Ahora!
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
