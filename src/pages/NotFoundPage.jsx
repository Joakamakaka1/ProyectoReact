import React from "react";
import Header from "../components/NavBar";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header siempre visible en la parte superior */}
      <Header />

      {/* Contenedor principal para el mensaje 404 */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center bg-white p-8 max-w-4lg w-full">
          <h1 className="text-8xl font-bold mb-10">404</h1>
          <p className="text-3xl mt-4">Esta página no se pudo encontrar</p>
          <p className="text-md mt-2 ">
            Lo sentimos, pero esta página actualmente no se pudo encontrar o no
            está disponible todavía.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
