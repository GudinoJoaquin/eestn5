import React, { useState, useEffect } from "react";

const Carousel = () => {
  // Estado para almacenar el índice del anuncio actual en el carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  // Estado para almacenar los primeros tres anuncios obtenidos de la API
  const [firstThreeAds, setFirstThreeAds] = useState([]);
  // Estado para controlar el estado de carga
  const [loading, setLoading] = useState(true);

  // Efecto para obtener los primeros tres anuncios de la API al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://anuncios.vercel.app/anuncios/");
        const data = await response.json();
        // Almacena los primeros tres anuncios en el estado
        setFirstThreeAds(data.slice(0, 3));
        setLoading(false); // Marca la carga como completa
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false); // Marca la carga como completa incluso si hay error
      }
    };

    fetchData(); // Llama a la función para obtener los datos
  }, []);

  // Función para actualizar el índice del anuncio actual en el carrusel
  const updateIndex = (newIndex) => {
    setCurrentIndex((newIndex + firstThreeAds.length) % firstThreeAds.length);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto p-4 sm:p-10">
      <div className="overflow-hidden rounded-lg shadow-lg border border-white bg-opacity-50 backdrop-blur-md relative">
        <div
          className="flex transition-transform duration-700 ease-in-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {loading ? ( // Si está cargando, muestra un mensaje de carga
            <div className="w-full h-24 sm:h-32 flex items-center justify-center">
              Cargando...
            </div>
          ) : (
            // Muestra los tres primeros anuncios obtenidos
            firstThreeAds.map((ad, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full h-24 sm:h-32 bg-transparent flex items-center justify-center`}
              >
                {/* Muestra el título del anuncio y establece un enlace al hacer clic */}
                <span className="text-white text-sm sm:text-xl cursor-pointer m-2 sm:m-5" onClick={() => window.location.href = 'https://eestn5-rho.vercel.app/#/anuncios'}>{ad.titulo}</span>
              </div>
            ))
          )}
        </div>
        {/* Indicadores de posición del carrusel dentro de la tarjeta */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2">
          {firstThreeAds.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                currentIndex === index
                  ? "bg-white transition-all duration-500"
                  : "bg-gray-500 transition-all duration-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
      {/* Flechas fuera de la tarjeta y centradas verticalmente */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-center">
        <svg
          onClick={() => updateIndex(currentIndex - 1)}
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 sm:w-8 h-6 sm:h-8 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center">
        <svg
          onClick={() => updateIndex(currentIndex + 1)}
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 sm:w-8 h-6 sm:h-8 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
