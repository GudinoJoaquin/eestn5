import { useState, useEffect } from "react";
import Input from "../../components/Input";
import ThemeSwitch from "../../components/ThemeSwitch";
import { Link } from "react-router-dom";

export default function CrearAnuncio() {

  const [currentPath, setCurrentPath] = useState(window.location.search)

  return (
    <div className="bg-white dark:bg-slate-900 mt-[-2px] h-[100vh]">
      <header className="flex justify-end items-center gap-[50px] md:mt-[2px] mt-[20px] ml-[10px]">
        <Link
          className="hover:text-emerald-600 hover:scale-[1.2] font-semibold text-[20px] transition duration-[.3s] dark:text-white"
          to="/anuncios/"
        >
          <p className="hover:text-emerald-600 transition duration-[.3s]">
            Inicio
          </p>
        </Link>
        <Link
          className="text-orange-600 scale-110 font-bold text-[20px] transition duration-[.3s]"
          to=""
        >
          Crear anuncio
        </Link>
        <ThemeSwitch />
      </header>
      {currentPath === "/" && <AdminAnuncios />}
      <div class="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-2xl mt-[40px]">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Crear anuncio
        </h2>

        <form
          method="post"
          action="https://server-xi-lemon.vercel.app/admin/enviar-anuncio"
        >
          <Input label="Titulo" type="text" name="titulo" />

          {/* <FileInput label='Subir imagen o pdf' name='imagen'/> */}

          <div class="mb-4">
            <label
              class="block text-sm font-medium text-gray-900 dark:text-slate-200"
              for="bio"
            >
              Mensaje
            </label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-300 dark:bg-slate-900 dark:text-slate-200 border-none focus:outline-none  rounded-md text-gray-900 resize-none"
              rows="3"
              name="mensaje"
              id="bio"
            ></textarea>
          </div>
          <Input
            label="Imagen"
            type="text"
            name="imagen"
            placeholder="Ingresar url de la imagen"
          />
          <Input
            label="Contenido adjunto"
            type="text"
            name="adjunto"
            placeholder="Enlace del contenido adjunto"
          />

          <div class="flex justify-center mt-[20px]">
            <button
              class="bg-gray-900 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-slate-950 dark:hover:text-slate-200 dark:hover:border-2 dark:hover:border-slate-200 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
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
