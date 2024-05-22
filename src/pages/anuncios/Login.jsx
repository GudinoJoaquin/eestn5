// Login.jsx
import React, { useState } from "react";
import Input from "../../components/Input";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    document.cookie = "UserType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    const user = event.target.elements.user.value;
    const pass = event.target.elements.pass.value;

    const userType = user === "admin" && pass === 'admin' ? "admin" : "user";

    // Crear la cookie con una duración adecuada
    document.cookie = `UserType=${userType}; path=/; max-age=${60 * 60};`;

    // Redirigir a la página de anuncios
    window.location.href = 'http://localhost:5173/anuncios';
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
