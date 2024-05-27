import React, { useState, useEffect } from "react";
import AdminCard from "../../components/AdminCard";
import ThemeSwitch from "../../components/ThemeSwitch";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Loader from "react-js-loader";

export default function AdminAnuncios() {
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [currentPage, setCurrentPage] = useState(1);
  const anunciosPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://server-xi-lemon.vercel.app/anuncios";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAnuncios(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calcular el índice del último anuncio de la página actual
  const indexOfLastAd = currentPage * anunciosPerPage;
  // Calcular el índice del primer anuncio de la página actual
  const indexOfFirstAd = indexOfLastAd - anunciosPerPage;
  // Obtener los anuncios de la página actual
  const currentAds = anuncios.slice(indexOfFirstAd, indexOfLastAd);

  return (
    <>
      <div className="bg-white dark:bg-slate-900 ">
        <header className="flex justify-center items-center gap-[30px] md:translate-y-[2px] translate-y-[20px] ml-[10px] dark:text-slate-200">
          <Link
            className="text-emerald-600 scale-[1.2] font-bold text-[20px] transition duration-[.3s]"
            to=""
          >
            Inicio
          </Link>
          <Link
            className="hover:text-orange-600 scale-110 font-bold text-[20px] transition duration-[.3s]"
            to="./crearAnuncio"
          >
            Crear anuncio
          </Link>
        </header>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Loader
              type="spinner-default"
              bgColor={"#3b83f6"}
              title={"Cargando..."}
              color={"#3b83f6"}
              size={100}
            />
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center gap-2 mb-[-50px] mt-[20px]">
              {Array.from(
                { length: Math.ceil(anuncios.length / anunciosPerPage) },
                (_, i) => (
                  <button
                    className="dark:text-slate-200 dark:hover:bg-blue-900 font-semibold underline underline-offset-2 p-[4px] my-2 rounded-sm hover:scale-[1.2] hover:bg-red-100 transition duration-[.3s]"
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>

            {currentAds.map((anuncio) => (
              <AdminCard
                key={anuncio.id}
                id={anuncio.id}
                img={anuncio.imagen}
                titulo={anuncio.titulo}
                mensaje={anuncio.mensaje}
                fecha={anuncio.fecha}
                adjunto={anuncio.contenido_adjunto}
              />
            ))}
            <div className="flex justify-center items-center gap-2">
              {Array.from(
                { length: Math.ceil(anuncios.length / anunciosPerPage) },
                (_, i) => (
                  <button
                    className="dark:text-slate-200 dark:hover:bg-blue-900 font-semibold underline underline-offset-2 p-[4px] my-2 rounded-sm hover:scale-[1.2] hover:bg-red-100 transition duration-[.3s]"
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
