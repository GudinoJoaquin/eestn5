import React from "react";
import Home from "./pages/home/Home.jsx";
import Contacto from "./pages/home/Contacto.jsx";
import Nosotros from "./pages/home/Nosotros.jsx";
import Especialidades from "./pages/home/Especialidades.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Anuncios from "./pages/anuncios/Anuncios.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anuncios/*" element={<Anuncios/>}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/especialidades" element={<Especialidades />} />
      </Routes>
    </Router>
  );
}
