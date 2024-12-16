import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="min-h-screen min-w-full bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-gray-100 py-5">
          <img
            src="/palmeras.jpeg"
            alt="Register"
            className="w-auto h-[600px] max-w-sm rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          <Link to="/">
            <h1 className="text-3xl font-bold mb-10 md:mb-20">FlyNow</h1>{" "}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Registro</h1>
          <p className="text-gray-600 mb-6 mt-2">
            Vamos a prepararte para que puedas acceder a tu cuenta personal.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block font-medium mb-1">
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu apellido"
                />
              </div>

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

              <div>
                <label htmlFor="phone" className="block font-medium mb-1">
                  Número de Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123456789"
                />
              </div>
            </div>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="block font-medium mb-1"
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-gray-600">
                  Acepto todos los Términos y Políticas de Privacidad
                </label>
              </div>
            </div>

            <Link to="/login">
              <button
                type="submit"
                className="w-full bg-[#8DD3BB] font-medium py-2 px-4 shadow-md rounded-lg mt-3"
              >
                Registrarse
              </button>
            </Link>
          </form>

          <div className="mt-4 text-center">
            <span className="text-gray-600">¿Ya tienes cuenta? </span>
            <Link
              to="/login"
              className="hover:underline font-medium text-[#112211]"
            >
              Inicia sesión aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
