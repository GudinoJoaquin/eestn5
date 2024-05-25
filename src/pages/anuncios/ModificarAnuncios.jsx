import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import ThemeSwitch from "../../components/ThemeSwitch";
import Loader from "react-js-loader";

export default function ModificarAnuncio() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id") || "ID del anuncio";
  const titulo = urlParams.get("titulo") || "Titulo del Anuncio";

  const [anuncio, setAnuncio] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://server-xi-lemon.vercel.app/anuncios?id=${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data.length > 0) {
          setAnuncio(data[0]); // Establecer el anuncio encontrado con el ID dado
        } else {
          console.error("Anuncio no encontrado");
        }
        setLoading(false); // Establecer loading en false una vez que se cargan los datos
      } catch (error) {
        console.error(error);
        setLoading(false); // Establecer loading en false en caso de error
      }
    };

    fetchData();
  }, [id, titulo]); // Dependencia: id y titulo

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <Loader
          type="spinner-default"
          bgColor={"#3b83f6"}
          title={"Cargando..."}
          color={"#3b83f6"}
          size={100}
        />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 h-[100.2vh] mt-[-2px] mb-[-2px]">
      <header className="flex justify-end items-center gap-[30px] md:translate-y-[2px] translate-y-[20px] ml-[10px] dark:text-slate-200">
        <Link
          className="hover:text-emerald-600 scale-[1.2] font-semibold text-[20px] transition duration-[.3s]"
          to="../"
        >
          Inicio
        </Link>
        <Link
          className="hover:text-orange-600 scale-110 font-semibold text-[20px] transition duration-[.3s]"
          to="../crearAnuncio"
        >
          Crear anuncio
        </Link>
        <ThemeSwitch />
      </header>
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-md mt-[60px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Modificar anuncio
        </h2>

        <form
          method="post"
          action="https://server-xi-lemon.vercel.app/admin/editar-anuncio"
        >
          <Input
            label="Titulo"
            type="text"
            name="titulo"
            value={anuncio.titulo}
            placeholder={anuncio.titulo}
          />

          <input type="hidden" name="anuncioID" value={anuncio.id} />

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-900"
              htmlFor="bio"
            >
              Mensaje
            </label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-300 dark:bg-slate-900 dark:text-slate-200 border-none focus:outline-none  rounded-md text-gray-900 resize-none"
              rows="3"
              name="mensaje"
              id="bio"
              defaultValue={anuncio.mensaje} // Usa defaultValue para establecer el valor inicial del textarea
            ></textarea>
          </div>

          <Input
            label="Imagen"
            type="text"
            name="imagen"
            placeholder="Insertar url de la imagen"
            value={anuncio.imagen}
          />

          <Input
            label="Contenido adjunto"
            type="text"
            name="adjunto"
            placeholder="Insertar enlace contenido adjunto"
            value={anuncio.contenido_adjunto}
          />

          <div className="flex justify-center mt-[20px]">
            <button
              className="bg-gray-900 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
