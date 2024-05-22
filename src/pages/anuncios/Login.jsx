import React, { useState } from "react";
import Input from "../../components/Input";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    document.cookie = "UserType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Obtener los valores de usuario y contraseña del formulario
    const user = event.target.elements.user.value;
    const pass = event.target.elements.pass.value;

    // Comprobar si el usuario es admin o user (simulado aquí con una condición)
    const userType = user === "admin" && pass === 'admin' ? "admin" : "user";

    // Crear la cookie
    document.cookie = `UserType=${userType}; Max-Age=1`;
    
    // Redirigir o hacer cualquier otra acción necesaria después de enviar el formulario
    window.location.href = 'https://eestn5-rho.vercel.app/anuncios'
    // Aquí puedes redirigir a otra página, etc.
  };

  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 p-8 rounded-lg shadow-md mt-[60px]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Crear anuncio
      </h2>

      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="user" />
        <Input label="Contraseña" type="password" name="pass" />

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
  );
}
