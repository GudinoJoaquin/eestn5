// Anuncios.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import UserAnuncios from "./UserAnuncios";
import AdminAnuncios from "./AdminAnuncios";
import CrearAnuncio from './CrearAnuncio'
import Login from "./Login";

export default function Anuncios() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/adminadminadminadminadminadminadminadminadminadminadminadmin" element={<AdminAnuncios />} />
      <Route path="adminadminadminadminadminadminadminadminadminadminadminadmin/crearAnuncio" element={<CrearAnuncio />} />
      <Route path="/" element={<UserAnuncios />} />
    </Routes>
  );
}
