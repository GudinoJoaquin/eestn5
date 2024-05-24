// Login.jsx
import React, { useState } from "react";
import Input from "../../components/Input";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = event.target.elements.user.value;
    const pass = event.target.elements.pass.value;
    const type = JSON.stringify([user, pass]);

    sessionStorage.setItem("user", type);

    console.log(sessionStorage.getItem("user"));

    window.location.href = 'http://localhost:5173/anuncios'
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
