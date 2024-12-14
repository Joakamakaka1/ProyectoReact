import React from "react";
import AvionHeader from "../assets/img/avionHeader.webp";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
        {/* Logo y búsqueda */}
        <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2 text-lg font-bold text-gray-800">
                <i className="fas fa-plane text-green-600"></i>
                <span>Buscar vuelo</span>
            </span>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-900">FlyNow</h1>

        {/* Botones de Login y Registro */}
        <div className="flex items-center space-x-4">
            <button className="text-gray-800 font-medium"><Link to="/login">Login</Link></button>
            <button className="bg-green-600 text-white py-2 px-4 rounded-md">
                <Link to="/register">Registrarse</Link>
            </button>
        </div>
    </nav>
);
};

export default Header;
