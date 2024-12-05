import React, { useState } from "react";
import Parallax from "../../components/Parallax";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import DevsModal from "../../components/DevsModal";

export default function Institucionales() {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsHidden("hidden");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHidden, setIsHidden] = useState("hidden");
  const [month, setMonth] = useState("Todo");
  const cantidad = [1, 2, 3, 4, 5, 6];
  const meses = [
    "Todo",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <body className="bg-white dark:bg-[#2D2D2D] dark:text-white">
      <Parallax parallax="real">
        <Nav />
        <header className="text-white flex flex-col justify-center items-center h-[100%] mx-4 md:mx-[70px]"></header>
      </Parallax>
      <main className="mt-8 mx-[30px] xl:mx-[70px] md:mt-24">
        <aside
          className="border border-gray-700 rounded-[5px] w-[30%] mb-[50px] h-auto p-[5px] transition-all duration-[.3s] absolute bg-white dark:bg-[#343434] translate-y-[-60px]"
          onClick={() => setIsHidden(isHidden ? "" : "hidden")}
        >
          <div className="p-[3px]">{month}</div>
          {meses.map((mes, index) => (
            <div
              className={`${isHidden} border-t border-gray-500 p-[3px] transition-all duration-[.2s] hover:bg-gray-400/75 dark:hover:bg-[#282828]`}
              key={index}
              onClick={() => setMonth(mes)}
            >
              {mes}
            </div>
          ))}
        </aside>
        <section className=" w-full mb-[20px] mt-[90px]">
          {cantidad.map((elemento) => (
            <article
              key={elemento}
              className="mb-[50px] border-b-2 pb-[30px] border-gray-600/50"
            >
              <h2 className="font-medium mb-[5px]">5/12/24</h2>
              <h2 className="font-bold mb-[10px] text-[25px]">
                Nuevo regimen academico
              </h2>
              <p className="mb-[10px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                autem porro unde perferendis earum vero
              </p>
              <p className="text-sky-900 hover:text-blue-700 dark:text-sky-300 dark:hover:text-blue-500 cursor-pointer underline transition duration-[.2s]">
                Ver PDF
              </p>
            </article>
          ))}
        </section>
      </main>
      <Footer modal={(estado) => setIsModalOpen(estado)} />
      {isModalOpen && <DevsModal onClose={() => setIsModalOpen(false)} />}
    </body>
  );
}
