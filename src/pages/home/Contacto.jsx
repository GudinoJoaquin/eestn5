import React, { useState } from "react";
import Nav from "../../components/Nav";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";

export default function Contacto() {
  return (
    <>
      <Parallax>
        <Nav />
        <header className="text-white flex flex-col justify-center items-start h-[90%] mx-[70px]">
          <h1 className="text-[100px] font-bold">Contáctanos</h1>
          <p className=" text-start text-[25px]  text-wrap">
            Nos encanta escuchar de ti y estamos aquí para ayudarte en lo que
            necesites. Puedes contactarnos mediante nuestro formulario de
            contacto en línea para cualquier pregunta o sugerencia que tengas.
            Además, síguenos en nuestras redes sociales{" "}
            <span className="text-sky-500 font-semibold hover:brightness-[2] transition duration-[.2s]">
              Facebook
            </span>{" "}
            e{" "}
            <span className="text-pink-600 font-semibold hover:brightness-[2] transition duration-[.2s]">
              Instagram{" "}
            </span>
            para mantenerte al día con las últimas noticias, eventos y
            actividades de nuestra escuela. Y si prefieres hablar en persona, te
            solicitamos que acuerdes una entrevista por este formulario o por
            correo electrónico. Esperamos saber pronto de ti y nos agrada
            conectarnos contigo y únete a nuestra comunidad en línea.
          </p>
        </header>

        <section class="sm:flex mx-[10vw] sm:gap-[10vw] sm:justify-center mt-[70px] mb-[50px]">
          <form
            action="https://formsubmit.co/infoT5@eest5mdp.edu.ar"
            method="POST"
            class="flex flex-col flex-1"
          >
            <h4 class="sm:text-[2vw] sm:py-[2vw] sm:text-start text-[5vw]">
              Enviar mensaje
              <hr class="border-[1.5px] border-red-500 mr-[600px] mt-[3px] w-[40px]" />
            </h4>
            <input
              class="border-solid border border-gray-300 focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s]"
              type="text"
              placeholder="Nombre"
              name="Nombre"
              required
            />
            <input
              class="border-solid border border-gray-300 focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s]"
              type="email"
              placeholder="Email"
              name="Email"
              required
            />
            <textarea
              class="border-solid border border-gray-300 focus:ring-[3px] focus:ring-red-500 focus:ring-opacity-30 focus:outline-none rounded-[5px] p-[.5vw] m-[.5vw] placeholder:italic transition duration-[.3s] resize-none"
              rows="17"
              name="Texto"
              required
            ></textarea>
            <button
              class="bg-[#f85c70] text-white rounded-[5px] p-[.5vw] m-[.5vw] hover:bg-[#f63750] transition duration-[.3s]"
              type="submit"
            >
              Enviar
            </button>
          </form>

          <div class="flex-2">
            <div class="">
              <h4 class="sm:text-[2vw] sm:text-nowrap sm:py-[2vw] text-[5vw] mt-[20px]">
                Manténgase en contacto
                <hr class="border-[1.5px] border-red-500 w-[45px] mt-[3px]" />
              </h4>
              <div class="">
                <h6 class="sm:[mx-[50px] text-[20px]] mx-[50px] mt-[20px] text-[20px]">
                  <i class="fa fa-map ml-[-39px] mr-[10px]"></i>
                  Dirección:
                  <br />
                  <a
                    href="https://www.google.com/maps/place/Escuela+De+Educación+Secundaria+Técnica+Nº5+'Amancio+Williams'/@-38.0104666,-57.5894172,15z/data=!4m6!3m5!1s0x9584dec66cad85ff:0x2a201849dd878504!8m2!3d-38.011481!4d-57.5806625!16s%2Fg%2F1hf3y76ld?entry=ttu"
                    class="sm:text-[1.3vw] hover:text-red-500 underline underline-offset-2"
                  >
                    Av. Juan B. Justo 4287, B7608 Mar del Plata, Provincia de
                    Buenos Aires
                  </a>
                </h6>
              </div>
              <div class="mt-[20px] mb-[50px]">
                <h6 class="sm:[mx-[50px] text-[20px]] mx-[50px] mt-[20px] text-[20px]">
                  <i class="fa fa-envelope ml-[-39px] mr-[14px]"></i>
                  Email:
                  <br />
                  <a
                    href=""
                    class="sm:text-[1.3vw] text-red-400 hover:text-red-600"
                  >
                    infoT5@gmail.com
                  </a>
                </h6>
              </div>
              <button
                class="bg-green-800 text-white rounded-[5px] px-[10px] py-[.5vw] m-[.5vw] hover:bg-green-700 transition duration-[.3s] w-full"
                type="button"
                onclick="window.open('https://www.google.com/maps/uv?pb=!1s0x9584dec66cad85ff%3A0x2a201849dd878504!3m1!7e115!4s%2Fmaps%2Fplace%2Feestn5%2F%40-38.0116482%2C-57.5808331%2C3a%2C75y%2C38.81h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sYnnzVpfm0XdvSz50K7sWZg*212e0*214m2*213m1*211s0x9584dec66cad85ff%3A0x2a201849dd878504%3Fsa%3DX%26ved%3D2ahUKEwi-srXVtYGGAxV3kJUCHfIcAq4Qpx96BAhLEAA!5seestn5%20-%20Buscar%20con%20Google!15sCgIgAQ&imagekey=!1e2!2sYnnzVpfm0XdvSz50K7sWZg&hl=es&ved=1t%3A206134&ictx=111', '_blank')"
              >
                ¡Visítanos Ahora!
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </Parallax>
    </>
  );
}
