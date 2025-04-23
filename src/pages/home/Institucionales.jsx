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
  const sec = queryParams.get("sec") || "ra";
  const [section, setSection] = useState(sec);
  const navigate = useNavigate()

  const handleClick = () => {
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    navigate(`/institucionales?sec=${section}`)
  }, [section])

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
            onClick={() => navigate("/institucionales?sec=ai")}
          >
            Acuerdo institucional
          </p>
          <p
            className="text-nowrap underline hover:text-red-500 transition duration-[.3s] cursor-pointer"
            onClick={() => navigate("/institucionales?sec=ra")}
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
            <p className="mx-[60px] my-[10px] text-center lg:text-wrap lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              rerum error similique? At neque fugiat excepturi iusto eum
              molestiae eaque. Quasi sit, placeat consequatur quas nostrum
              accusantium illum vitae at.
            </p>
            <p className="mx-[60px] my-[10px] text-center lg:text-wrap lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              rerum error similique? At neque fugiat excepturi iusto eum
              molestiae eaque. Quasi sit, placeat consequatur quas nostrum
              accusantium illum vitae at.
            </p>
            <p className="mx-[60px] my-[10px] text-center lg:text-wrap lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              rerum error similique? At neque fugiat excepturi iusto eum
              molestiae eaque. Quasi sit, placeat consequatur quas nostrum
              accusantium illum vitae at.
            </p>
          </main>
        )}
      </main>

      {/* <main className="mt-8 mx-[30px] xl:mx-[70px] md:mt-24">
          <section className=" w-full mb-[20px] mt-[90px]">
            <article className="mb-[50px] border-b-2 pb-[30px] border-gray-600/50">
              <h2 className="font-medium mb-[5px] lg:text-[25px]">5/12/24</h2>
              <h2 className="font-bold mb-[10px] text-[25px] lg:text-[40px]">
                Nuevo regimen academico
              </h2>
              <p className="mb-[10px] lg:text-[24px]">
                Dejamos a disposición la información sobre el nuevo régimen
                académico y videos explicativos hechos por alumnos que ayudarán
                a entender lo que entrará en vigencia a partir del próximo año.
              </p>
              <div className="grid place-items-center">
                <video src={video} controls autoPlay></video>
              </div>
            </article>
          </section>
      </main> */}
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </body>
  );
}
