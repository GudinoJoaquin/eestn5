import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav.jsx";
import Parallax from "../../components/Parallax.jsx";
import Footer from "../../components/Footer.jsx";
import idi2o from "../../assets/img/idi2o.jpeg";
import Bento from "../../components/Bento.jsx";
import Modal from "../../components/Modal.jsx";
import DevsModal from "../../components/DevsModal.jsx";

export default function Galeria() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDevsModalOpen, setIsDevsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openModal = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="bg-white dark:bg-[#2D2D2D] dark:text-white grid h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Parallax>
        <Nav />
        <header className="text-white flex justify-center items-start h-[90%] mx-[5%] md:mx-[70px] relative">
          <div className="mt-[50px] flex flex-col justify-center items-center">
            <h1 className="animate-fade-in-right text-[40px] md:text-5xl lg:text-6xl font-bold mt-[220px] md:mb-8 md:mt-20 text-center md:text-left m-10">
              Galeria de imagenes
            </h1>
            <p className=" text-[3vh] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              officiis, perferendis dignissimos accusantium assumenda natus aut
              similique placeat non. Cum, excepturi magni enim provident aliquid
              deserunt harum laboriosam soluta repudiandae.
            </p>
          </div>

          {/* Contenedor de las imágenes Polaroid */}
          {screenWidth >= 738 ? (
            <div className="relative flex mt-[300px] translate-x-[-100px]">
              <div
                className="bg-white 2xl:p-[16px] p-[16px] 2xl:pb-[70px] pb-[70px] border border-gray-300 shadow-lg transform rotate-[10deg] 2xl:w-[400px] w-[350px] 2xl:h-[350px] h-[150px] translate-y-[-200px] translate-x-[100px]"
                onClick={() => openModal(idi2o)}
              >
                <img src={idi2o} alt="Placeholder 1" className="w-full" />
              </div>
            </div>
          ) : (
            ""
          )}
        </header>
      </Parallax>
      <main>
        <div className="bg-white dark:bg-[#2D2D2D] dark:text-white py-10 flex justify-center">
          <div className="w-full max-w-[80vw] px-5">
            <h1 className="text-[25px] font-bold text-center mb-8">
              Galería de Imágenes
            </h1>

            {/* Bentogrid layout */}
            <div className="grid grid-cols-2 gap-[22px] mx-auto select-none">
              <Bento
                img={idi2o}
                alt="Escuela"
                size="large"
                onClick={() => openModal(idi2o)}
              />
              <Bento
                img={idi2o}
                alt="Escuela"
                size="medium"
                onClick={() => openModal(idi2o)}
              />
              <Bento
                img={idi2o}
                alt="Escuela"
                size="small"
                onClick={() => openModal(idi2o)}
              />
              <Bento
                img={idi2o}
                alt="Escuela"
                size="small"
                onClick={() => openModal(idi2o)}
              />
              {/* Agrega más Bentos según sea necesario */}
            </div>
          </div>
        </div>
      </main>
      <Footer modal={(estado) => setIsDevsModalOpen(estado)} />
      {isDevsModalOpen && (
        <DevsModal onClose={() => setIsDevsModalOpen(false)} />
      )}

      {/* Modal */}
      {isModalOpen && (
        <Modal
          img={modalImage}
          alt="Imagen de la galería"
          onClose={closeModal}
        />
      )}
    </div>
  );
}
