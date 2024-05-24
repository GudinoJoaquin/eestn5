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
  const [userType, setUserType] = useState('user');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem('user')
    data ? setLoading(false) : setLoading(true)
    const [user, pass] = JSON.parse(data)
    if(user === 'admin' && pass === 'admin'){
      setUserType('admin')
    }
    
  }, []);

  if (loading) {
    return <div>Loading...</div>; // O cualquier componente de carga que desees
  }

  return (
    <>
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
    </>
  );
}
