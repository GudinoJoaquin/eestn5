// Anuncios.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import UserAnuncios from "./UserAnuncios";
import AdminAnuncios from "./AdminAnuncios";
import Login from "./Login";

export default function Anuncios() {
  const [userType, setUserType] = useState("user");
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={<AdminAnuncios />}
      />
      <Route path="/" element={<UserAnuncios />} />
    </Routes>
  );
}
