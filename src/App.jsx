import React from "react";
import Home from "./pages/home/Home.jsx";
import Contacto from "./pages/home/Contacto.jsx";
import Nosotros from "./pages/home/Nosotros.jsx";
import Especialidades from "./pages/home/Especialidades.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import UserAnuncios from "./pages/anuncios/UserAnuncios.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/anuncios" element={<UserAnuncios />} />
        <Route path="/especialidades" element={<Especialidades />} />
      </Routes>
    </Router>
  );
}
