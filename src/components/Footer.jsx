import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#8DD3BB] pt-12">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Nuestros destinos */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Nuestros destinos</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">París</a></li>
                        <li><a href="#" className="hover:underline">Bangkok</a></li>
                        <li><a href="#" className="hover:underline">Nueva York</a></li>
                        <li><a href="#" className="hover:underline">Cádiz</a></li>
                    </ul>
                </div>

                {/* Nuestras actividades */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Nuestras actividades</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Turismo</a></li>
                        <li><a href="#" className="hover:underline">Aventuras</a></li>
                        <li><a href="#" className="hover:underline">Relajación</a></li>
                        <li><a href="#" className="hover:underline">Culturales</a></li>
                    </ul>
                </div>

                {/* Blogs */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Blogs</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Guía de viaje</a></li>
                        <li><a href="#" className="hover:underline">Consejos de viaje</a></li>
                        <li><a href="#" className="hover:underline">Ofertas especiales</a></li>
                        <li><a href="#" className="hover:underline">Historias de viajeros</a></li>
                    </ul>
                </div>

                {/* Sobre nosotros */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Sobre nosotros</h3>
                    <ul>
                        <li><a href="#" className="hover:underline">Quiénes somos</a></li>
                        <li><a href="#" className="hover:underline">Misión y visión</a></li>
                    </ul>
                </div>

                {/* Contáctanos */}
                <div>
                    <Link to="/contact"><h3 className="text-xl font-bold mb-4">Contáctanos</h3></Link>
                    <ul>
                        <li><a href="/contact" className="hover:underline">Formulario de contacto</a></li>
                        <li><a href="mailto:contacto@miapp.com" className="hover:underline">contacto@miapp.com</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-12 pb-6">
                <p>© 2024 FlyNow. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};


export default Footer;
