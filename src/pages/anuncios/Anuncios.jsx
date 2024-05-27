// Anuncios.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserAnuncios from "./UserAnuncios";
import AdminAnuncios from "./AdminAnuncios";
import CrearAnuncio from "./CrearAnuncio";
import ModificarAnuncio from "./ModificarAnuncios";
import Login from "./Login";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function Anuncios() {
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState("user");

  useEffect(() => {
    const cookieValue = getCookie("userType");
    if (cookieValue) {
      setUserType(cookieValue);
    }
    setLoading(false);
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  const handleLogout = () => {
    // Hacer la petición para cerrar sesión
    fetch("/logout", { method: "POST" })
      .then(() => {
        setUserType("user");
      })
      .catch((err) => console.error(err));
  };

  if (loading) {
    return <div>Loading...</div>; // O cualquier componente de carga que desees
  }

  return (
    <>
      <Nav onLogout={handleLogout} />
      <Routes>
        <Route path="/crearAnuncio" element={<CrearAnuncio />} />
        <Route path="/editarAnuncio" element={<ModificarAnuncio />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={userType === "hola" ? <AdminAnuncios /> : <UserAnuncios />}
        />
      </Routes>
      <Footer />
    </>
  );
}
