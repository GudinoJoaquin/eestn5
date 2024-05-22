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
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userTypeCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("UserType="));

    if (userTypeCookie) {
      const userTypeValue = userTypeCookie.split("=")[1];
      setUserType(userTypeValue);
    } else {
      setUserType("user"); // O cualquier valor predeterminado que desees
    }
    setLoading(false); // Marcar la carga como completa
  }, []);

  if (loading) {
    return <div>Loading...</div>; // O cualquier componente de carga que desees
  }

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
