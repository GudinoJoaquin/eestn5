import React from "react";
import { Link } from "react-router-dom";
import Parallax from "../../components/Parallax";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import imagen from "../../assets/img/idi2_OLD.jpeg";
import l1 from "../../assets/img/l1b.svg";
import l2 from "../../assets/img/l2b.svg";
import l3 from "../../assets/img/l3b.svg";
import l4 from "../../assets/img/l4b.svg";

export default function Nosotros() {
  return (
    <>
      <Parallax>
        <Nav />
        <header className="text-white flex flex-col justify-center items-center h-[90%] mx-[70px]">
          <h1 className="text-[100px] font-bold">Sobre nosotros</h1>
          <p className=" text-start text-[30px]  text-wrap">
            Podes seguir navegando y conociendonos más
          </p>
          <p className="flex gap-[10px] text-[20px]">
            <Link className="hover:text-green-400 trnasition duration-[.2s]">
              Inicio
            </Link>{" "}
            /
            <Link className="hover:text-green-400 trnasition duration-[.2s]">
              Contacto
            </Link>{" "}
            /
            <Link className="hover:text-green-400 trnasition duration-[.2s]">
              Anuncios
            </Link>{" "}
            /
            <Link className="hover:text-green-400 trnasition duration-[.2s]">
              Especialidades
            </Link>
          </p>
        </header>

        <main className="mt-[100px]">
          <section className="flex">
            <div className="flex flex-col flex-1 justify-center items-center">
              <h2 className="text-red-500 font-bold text-[70px]">Nosotros</h2>
              <p className="mx-[70px] mt-[10px] text-[20px] text-pretty text-start">
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
            <div className="flex flex-1 justify-center items-center">
              <img
                src={imagen}
                alt=""
                width={600}
                className="rounded-[20px] hover:scale-[1.1] transition duration-[.3s]"
              />
            </div>
          </section>

          <section className="flex mt-[100px]">
            <div className="flex flex-col gap-[40px] mt-[40px] ml-[50px]">
              <img
                src={l1}
                alt=""
                width={250}
                className="hover:scale-[1.1] transition duration-[.3s]"
              />
              <img
                src={l2}
                alt=""
                width={250}
                className="hover:scale-[1.1] transition duration-[.3s]"
              />
            </div>
            <div className="">
              <h2 className="text-[70px] font-bold text-[#008000]">
                Nuestros Objetivos
              </h2>
              <p className="text-[20px] mx-[60px]">
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
            <div className="flex flex-col gap-[40px] mt-[40px] mr-[50px]">
              <img
                src={l3}
                alt=""
                width={250}
                className="hover:scale-[1.1] transition duration-[.3s]"
              />
              <img
                src={l4}
                alt=""
                width={250}
                className="hover:scale-[1.1] transition duration-[.3s]"
              />
            </div>
          </section>

          <section className="mt-[70px] mb-[40px]">
            <h2 className="text-red-500 text-[70px] font-bold">
              Únete a nosotros
            </h2>
            <p className="text-[20px] mx-[200px] mb-[40px]">
              Si estás interesado en formar parte de nuestra comunidad educativa
              o deseas obtener más información, ¡no dudes en ponerte en contacto
              con nosotros! Estamos aquí para ayudarte a alcanzar tus metas
              educativas y profesionales.
            </p>
            <Link to='../contacto' className="bg-red-500 text-[25px] font-semibold text-white p-[10px] px-[30px] hover:bg-red-600 transition duration-[.3s]">
              Contáctanos
            </Link>
          </section>
        </main>

        <Footer />
      </Parallax>
    </>
  );
}
