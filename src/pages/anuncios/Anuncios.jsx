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
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <div>Loading...</div>; // O cualquier componente de carga que desees
  }

  const userType = "admin";

  return (
    <>
      <Routes>
        <Route path="/crearAnuncio" element={<CrearAnuncio />} />
        <Route path="/editarAnuncio" element={<ModificarAnuncio />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={userType === "admin" ? <AdminAnuncios /> : <UserAnuncios />}
        />
      </Routes>
    </>
  );
}
