import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-md py-4 flex items-center justify-between px-20">
      {/* Logo y búsqueda */}
      <div className="flex items-center space-x-4 ">
        <span className="flex items-center space-x-2 text-lg font-bold text-gray-800">
          <Link to="/product">
            <span> &#9992; Buscar vuelo</span>
          </Link>
        </span>
      </div>

      {/* Título */}
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-900">FlyNow</h1>
      </Link>

      {/* Botones de Login y Registro */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-800 font-medium">
          <Link to="/login">Login</Link>
        </button>
        <button className="bg-[#112211] text-white py-2 px-4 rounded-md">
          <Link to="/register">Registrarse</Link>
        </button>
      </div>
    </nav>
  );
};

export default Header;
