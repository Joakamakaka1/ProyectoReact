import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="min-h-screen min-w-full bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-2 w-3/4 overflow-hidden">
        {/* Sección de formulario */}
        <div className="flex flex-col justify-center p-10">
          <Link to="/">
            <h1 className="text-3xl font-bold mb-20">FlyNow</h1>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Contacto</h1>
          <p className="text-gray-600 mb-6 mt-2">
            Ponte en contacto con nosotros
          </p>
          <form className="space-y-4">
            {/* Campo de correo electrónico */}
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="correo@ejemplo.com"
              />
            </div>

            {/* Campo de contraseña */}
            <div>
              <label htmlFor="password" className="block font-medium mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>

            {/* Campo de mensaje */}
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu mensaje aquí"
                rows="4"
              ></textarea>
            </div>

            {/* Botón de acceso */}
            <Link to="/">
              <button
                type="submit"
                className="w-full py-2 mt-4 px-4 shadow-md bg-[#8DD3BE] font-medium rounded-lg"
              >
                Enviar
              </button>
            </Link>
          </form>
        </div>

        {/* Sección de imagen */}
        <div className="flex items-center justify-center bg-gray-100 py-5">
          <img
            src="https://via.placeholder.com/400x700"
            alt="Login Illustration"
            className="w-auto h-auto max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
