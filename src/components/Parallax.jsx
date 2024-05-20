import React from "react";
import "../assets/css/Parallax.css";

export default function Parallax({ children, parallax = 'completo' }) {
  return <div className={`parallax-${parallax}`}>{children}</div>;
}
