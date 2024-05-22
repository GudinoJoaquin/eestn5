// Anuncios.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserAnuncios from "./UserAnuncios";
import AdminAnuncios from "./AdminAnuncios";
import CrearAnuncio from "./CrearAnuncio";
import ModificarAnuncio from "./ModificarAnuncios";
import NotFound from "../NotFound";
import Login from "./Login";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Anuncios() {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Obtener el valor de la cookie "UserType"
    const userTypeCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("UserType="));

    // Si la cookie existe, establecer el estado userType
    if (userTypeCookie) {
      const userTypeValue = userTypeCookie.split("=")[1];
      setUserType(userTypeValue);
    } else {
      // Si no hay cookie, redirigir a la página de inicio de sesión
      // Esto es opcional y depende de tu flujo de la aplicación
      setUserType("user"); // O cualquier valor predeterminado que desees
    }
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/crearAnuncio"
          element={userType === "admin" ? <CrearAnuncio /> : <Login />}
        />
        <Route
          path="/editarAnuncio"
          element={userType === "admin" ? <ModificarAnuncio /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={userType === "admin" ? <AdminAnuncios /> : <UserAnuncios />}
        />
      </Routes>
      <Footer />
    </>
  );
}
