import React, { useState, useEffect } from "react";
import UserCard from "../../components/UserCard";
import ThemeSwitch from "../../components/ThemeSwitch";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function UserAnuncios() {
  const [anuncios, setAnuncios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const adsPerPage = 5;

  useEffect(() => {
    const url = "https://server-xi-lemon.vercel.app/anuncios";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAnuncios(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Calcular el índice del último anuncio de la página actual
  const indexOfLastAd = currentPage * adsPerPage;
  // Calcular el índice del primer anuncio de la página actual
  const indexOfFirstAd = indexOfLastAd - adsPerPage;
  // Obtener los anuncios de la página actual
  const currentAds = anuncios.slice(indexOfFirstAd, indexOfLastAd);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Función para manejar el cambio de estado del checkbox

  return (
    <>
      <Nav />
      <div className="dark:bg-slate-900 h-full over">
        <ThemeSwitch />
        <div className="flex justify-center items-center gap-2 mb-[-50px] ">
          {Array.from(
            { length: Math.ceil(anuncios.length / adsPerPage) },
            (_, i) => (
              <button
                className="dark:text-slate-200 dark:hover:bg-blue-900 font-semibold underline underline-offset-2 p-[4px] my-2 rounded-sm hover:scale-[1.2] hover:bg-red-100 transition duration-[.3s]"
                key={i}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
        {currentAds.map((anuncio, index) => (
          <UserCard
            key={index}
            img={anuncio.imagen}
            titulo={anuncio.titulo}
            mensaje={anuncio.mensaje}
            fecha={anuncio.fecha}
            adjunto={anuncio.contenido_adjunto}
          />
        ))}
        {/* Botones de paginación */}
        <div className="flex justify-center items-center gap-2  mt-[20px]">
          {Array.from(
            { length: Math.ceil(anuncios.length / adsPerPage) },
            (_, i) => (
              <button
                className="dark:text-slate-200 dark:hover:bg-blue-900 font-semibold underline underline-offset-2 p-[4px] my-2 rounded-sm hover:scale-[1.2] hover:bg-red-100 transition duration-[.3s]"
                key={i}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
