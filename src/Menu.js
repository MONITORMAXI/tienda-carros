import React from "react";
import "./App.css";

function Menu() {
  return (
    <nav className="menu-navegacion">
      <h2 className="logo">🏎️ AutoElite</h2>
      <ul>
        <li>Inicio</li>
        <li>Catálogo</li>
        <li>Financiación</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Menu;