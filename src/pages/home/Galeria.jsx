import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav.jsx";
import Parallax from "../../components/Parallax.jsx";
import Footer from "../../components/Footer.jsx";
import idi2o from "../../assets/img/idi2o.jpeg"; // Puedes seguir usando esta imagen si lo deseas
import Bento from "../../components/Bento.jsx"; // Asegúrate de que este componente esté correctamente configurado
import Modal from "../../components/Modal.jsx";
import DevsModal from "../../components/DevsModal.jsx";

export default function Galeria() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDevsModalOpen, setIsDevsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [image, setImage] = useState([]); // Estado para almacenar las imágenes obtenidas
  const [selectedAlbum, setSelectedAlbum] = useState(""); // Estado para el álbum seleccionado
  const [selectedDate, setSelectedDate] = useState(""); // Estado para la fecha seleccionada

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Realizar el fetch para obtener las imágenes desde el backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Construir la URL con los parámetros de álbum y fecha
        let url = "http://localhost:1234/getImg";
        if (selectedAlbum) {
          url += `?album=${selectedAlbum}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log("Datos obtenidos:", data);
        // Verifica que 'data.images' tenga datos
        if (data.images) {
          setImage(data.images); // Establecer las imágenes obtenidas
        } else {
          console.log("No se encontraron imágenes.");
        }
      } catch (error) {
        console.error("Error al obtener las imágenes:", error);
      }
    };

    fetchImages();
  }, [selectedAlbum, selectedDate]); // Vuelve a cargar las imágenes cuando se cambia el álbum o la fecha seleccionada

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
          <div className="flex flex-col justify-center items-center xl:mr-[-50px]">
            <h1 className="animate-fade-in-right text-[40px] md:text-5xl lg:text-6xl font-bold mt-[160px] xl:mt-[300px] md:mb-8 md:mt-20 text-center md:text-left m-10">
              Galeria de imagenes
            </h1>
            <p className="text-[3vh]">
              En la galeria de imagenes podras ver las fotos y videos de los
              eventos más memorables de la escuela y recordar aquellas jornadas
            </p>
          </div>
          {screenWidth >= 738 ? (
            <div className="relative flex mt-[300px]">
              <div className="bg-white 2xl:p-[16px] p-[16px] 2xl:pb-[70px] pb-[70px] border border-gray-300 shadow-lg transform rotate-[20deg] 2xl:w-[400px] w-[350px] 2xl:h-[350px] h-[300px] translate-y-[-120px] translate-x-[130px]">
                <img src={idi2o} alt="Placeholder 1" className="w-full" />
              </div>
              <div className="bg-white 2xl:p-[16px] p-[16px] 2xl:pb-[70px] pb-[70px] border border-gray-300 shadow-lg transform rotate-[-20deg] 2xl:w-[400px] w-[350px] 2xl:h-[350px] h-[300px] translate-y-[100px] translate-x-[10px]">
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
          <div className="w-full xl:w-[80vw] max-w-[100vw] px-5">
            <h1 className="text-[25px] xl:text-[30px] font-bold text-center mb-8">
              Galería de Imágenes
            </h1>
            {/* Selector de álbumes usando radio buttons */}
            <div className="mb-6 flex justify-center space-x-6">
              <div onClick={() => setSelectedAlbum("")}>Todos</div>
              <div onClick={() => setSelectedAlbum("ExpoTec 2024")}>
                ExpoTec 2024
              </div>
              <div onClick={() => setSelectedAlbum("Kermés")}>Kermés</div>
            </div>

            {/* Selector de fecha */}

            <div className="grid grid-cols-2 xl:grid-cols-5 gap-[22px] mx-auto select-none">
              {image.length > 0 ? (
                image.map((img, index) => (
                  <Bento
                    key={index}
                    img={img.url}
                    onClick={() => openModal(img)} // Llama a la función de apertura de modal
                    isModalOpen={isModalOpen}
                  />
                ))
              ) : (
                <p>No hay imágenes disponibles.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer modal={(estado) => setIsDevsModalOpen(estado)} />
      {isDevsModalOpen && (
        <DevsModal onClose={() => setIsDevsModalOpen(false)} />
      )}
      {isModalOpen && (
        <Modal
          img={modalImage.url}
          fecha={modalImage.fecha}
          descripcion={modalImage.descripcion}
          alt="Imagen de la galería"
          onClose={closeModal}
        />
      )}
    </div>
  );
}
