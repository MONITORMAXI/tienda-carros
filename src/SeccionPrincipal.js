import React, { useState } from "react";
import "./App.css";

function SeccionPrincipal() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main className="seccion-principal">
      <h1>Experimenta el poder sobre ruedas</h1>
      <p>Encuentra el vehículo de tus sueños con la máxima exclusividad y garantía.</p>

      {/* Aquí usamos <img> en minúscula y con un enlace de imagen válido */}
      <img 
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80" 
        alt="Concesionario de autos de lujo y deportivos" 
        className="imagen-destacada"
      />

      <br />
      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}
      </button>

      {mostrarMensaje && (
        <p className="mensaje-sorpresa">¡Felicidades! Tienes un mantenimiento premium gratis por tu primer año.</p>
      )}
    </main>
  );
}

export default SeccionPrincipal;