import React from "react";
import Header from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-gray-100">
      {/* Header */}
      <Header />
      {/* Contenido principal 404 */}
      <div className="flex-1 flex items-center justify-center ">
        <div className="text-center bg-gray-100 p-8 max-w-4lg w-full">
          <h1 className="text-9xl font-bold mb-10">404</h1>
          <p className="text-4xl mt-4 mb-4">Esta página no se pudo encontrar</p>
          <p className="text-md mt-2 ">
            Lo sentimos, pero esta página actualmente no se pudo encontrar o no
            está disponible todavía.
          </p>
          <button className="bg-[#8DD3BB] font-medium py-2 px-20 rounded-md mt-6">
            <Link to="/">Volver al inicio</Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
