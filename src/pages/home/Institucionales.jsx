import React, { useState, useEffect } from "react";
import Parallax from "../../components/Parallax";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import DevsModal from "../../components/DevsModal";
import { useLocation, useNavigate } from "react-router-dom";

import video from "../../assets/img/regimen académico por estudiantes 3.mp4";

export default function Institucionales() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sec = queryParams.get("seccion") || "ai";
  const [section, setSection] = useState(sec);
  const navigate = useNavigate();

  const handleClick = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    navigate(`/institucionales?seccion=${section}`);
  }, [section]);

  return (
    <body className="bg-white dark:bg-[#2D2D2D] dark:text-white">
      <Parallax parallax="real">
        <Nav />
        <header className="text-white flex flex-col justify-center items-center mx-4 md:items-center md:mx-[70px]">
          <h1 className="text-4xl md:text-5xl lg:text-[120px] font-bold mt-8 mb-4 md:mb-8 md:mt-20 text-center md:text-left m-10 animate-fade-in-right">
            Institucionales
          </h1>
          <p className="text-[30px] mt-[20px] mb-[50px]">
            Desliza hacia abajo para ver las novedades más recientes
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
      <main className="lg:flex lg:ml-[100px]">
        <section className="flex justify-center lg:hidden mt-[50px]">
          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="text-[20px] bg-white border border-[#2D2D2D] dark:bg-[#2D2D2D] dark:text-white dark:border-white px-[10px] py-[5px] rounded-[5px]"
          >
            <option className="" value="ai">
              Acuerdo institucional
            </option>
            <option className="" value="ra">
              Regimen Academico
            </option>
          </select>
        </section>
        <aside className="hidden lg:flex flex-col mt-[40px] ">
          <p
            className="text-nowrap underline hover:text-red-500 transition duration-[.3s] cursor-pointer"
            onClick={() => navigate("/institucionales?seccion=acuerdo-institucional")}
          >
            Acuerdo institucional
          </p>
          <p
            className="text-nowrap underline hover:text-red-500 transition duration-[.3s] cursor-pointer"
            onClick={() => navigate("/institucionales?seccion=regimen-academico")}
          >
            Regimen academico
          </p>
        </aside>

        {sec === "ra" ? (
          <main className="mt-8 mx-[30px] xl:mx-[70px] md:mt-24 lg:mt-[40px]">
            <section className=" w-full mb-[20px]">
              <article className="mb-[50px] border-b-2 pb-[30px] border-gray-600/50">
                <h2 className="font-medium mb-[5px] lg:text-[25px]">5/12/24</h2>
                <h2 className="font-bold mb-[10px] text-[25px] lg:text-[30px]">
                  Nuevo regimen academico
                </h2>
                <p className="mb-[10px] lg:text-[24px]">
                  Dejamos a disposición la información sobre el nuevo régimen
                  académico y videos explicativos hechos por alumnos que
                  ayudarán a entender lo que entrará en vigencia a partir del
                  próximo año.
                </p>
                <div className="grid place-items-center">
                  <video src={video} controls autoPlay></video>
                </div>
              </article>
            </section>
          </main>
        ) : (
          <main className="flex flex-col items-center mt-[40px]">
            <h2 className="mb-[20px] font-bold text-[30px]">
              Acuerdo institucional
            </h2>
            <section className="flex flex-col mx-[30px]">
              <h2 className="font-semibold text-[25px]">Presentación</h2>
              <div className="my-[10px] text-left indent-4  lg:text-wrap lg:text-left flex flex-col gap-[20px]">
                <p>
                  La educación técnico profesional introduce a los estudiantes,
                  jóvenes y adultos, en un recorrido de profesionalización a
                  partir del acceso a una base de conocimientos y de habilidades
                  profesionales que les permita su inserción en áreas
                  ocupacionales cuya complejidad exige haber adquirido una
                  formación general, una cultura científica tecnológica
                  profesional, así como continuar aprendiendo durante toda su
                  vida.
                </p>
                <p>
                  A las familias, docentes y estudiantes del Establecimiento
                </p>
                <p>
                  La redacción de este AIC sostiene en primer lugar la finalidad
                  educativa, como referente principal de las normas internas de
                  esta institución. Es objetivo de la misma educar para el
                  crecimiento personal y la participación responsable de los
                  estudiantes, favoreciendo elejercicio de la libertad, el
                  compromiso, el dialogo y la valoración de las diferencias. La
                  Resolución 1709/09 de la Provincia de Buenos Aires proporciona
                  un nuevo intento para la transformación educativa: valorar a
                  la escuela como unidad que reflexiona sobre sus problemas y
                  que tiene la facultad de diseñar estrategias de resolución.
                  Mediante el trabajo en equipo que prioriza las cuestiones
                  pedagógicas, la Institución genera mecanismos que mejores los
                  aprendizajes de todos los estudiantes y un clima de
                  convivencia democrática,{" "}
                  <strong>
                    {" "}
                    promoviendo que todos son sujetos de respecto.
                  </strong>
                </p>
                <p>
                  El proceso de elaboración y puesta en marcha del AIC requiere
                  de una cultura de colaboración entre quienes participan como
                  integrantes de la comunidad educativa. En este sentido, el
                  trabajo en equipo adquiere un valor fundamental como
                  herramienta de intercambio entre personas: adolescentes,
                  jóvenes y adultos que buscan arribar a acuerdos. Los
                  principios fundacionales de este AIC son:{" "}
                  <strong> Cooperativismo y solidaridad: </strong> es necesario
                  aprender a trabajar juntos, sumando esfuerzos y compartir con
                  los demás, ejerciendo la confianza y la ayuda mutua.
                </p>
                <p>
                  <strong>Comunicación: </strong> los miembros de la comunidad,
                  jóvenes y adultos, deben aprender a observar cuidadosamente, a
                  comunicarse con precisión y a escuchar sensiblemente. Aprecio
                  por la diversidad: aprender a respetar y apreciar las
                  diferencias entre personas
                </p>
                <p>
                  <strong>Expresión positiva de las emociones:</strong> aprender
                  a expresar los sentimientos a partirdel autocontrol,
                  encauzando la ira, el enfado y la frustración hacia las formas
                  no agresivas ni destructivas
                </p>
                <p>
                  <strong>Resolución de situaciones conflictivas: </strong>
                  aprender a responder creativamente a lascuestiones planteadas
                  en el contexto de una comunidad solidaria y de apoyo. Este
                  aprendizaje cooperativo implica para los jóvenes no solo
                  aprender contenidos, sinoaprender a relacionarse con el otro
                  en un clima de respeto y participación
                </p>
              </div>
            </section>
          </main>
        )}
      </main>
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </body>
  );
}
