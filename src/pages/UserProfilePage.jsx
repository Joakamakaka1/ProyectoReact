import React from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Perfil */}
      <div className="bg-[#5C5C5C] text-white p-16 text-center relative mx-20 mt-10 rounded-t-lg">
        <div className="w-36 h-36 mx-auto rounded-full bg-gray-300 border-4 border-white overflow-hidden relative">
          <img
            src="/fotoPersona.png"
            alt="Avatar"
            className="rounded-full transform scale-125"
          />
          <div className="absolute top-16 right-1 p-2 rounded-full shadow-md cursor-pointer bg-red-300">
            ✏️
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-2">Joaquin</h2>
        <p className="text-gray-300">joaquin@gmail.com</p>
      </div>

      {/* Tabs */}
      <div className="border-b mt-2 mx-20 rounded-b-lg shadow-lg">
        <ul className="flex">
          <li className="text-[#112211] font-semibold border-b-2 border-green-500 px-4 py-4 ml-2">
            Cuenta
          </li>
        </ul>
      </div>
      {/* Cuenta */}
      <div className="mx-20 mb-10 bg-white mt-6 shadow-lg rounded-md p-6">
        <h3 className="text-xl font-semibold mb-4">Cuenta</h3>
        <div className="space-y-6">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Nombre</p>
              <p className="font-bold">Joaquin</p>
            </div>
            <button className="text-[#112211] border border-green-300 px-6 py-1 rounded-md ">
              Cambiar
            </button>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Correo electrónico</p>
              <p className="font-bold">joaquin@gmail.com</p>
            </div>
            <button className="text-[#112211] border border-green-300 px-6 py-1 rounded-md ">
              Cambiar
            </button>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Contraseña</p>
              <p className="font-bold">************</p>
            </div>
            <button className="text-[#112211] border border-green-300 px-6 py-1 rounded-md ">
              Cambiar
            </button>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Número de teléfono</p>
              <p className="font-bold">+1 000-000-0000</p>
            </div>
            <button className="text-[#112211] border border-green-300 px-6 py-1 rounded-md ">
              Cambiar
            </button>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">DIRECCIÓN</p>
              <p className="font-bold">Cádiz</p>
            </div>
            <button className="text-[#112211] border border-green-300 px-6 py-1 rounded-md ">
              Cambiar
            </button>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">Fecha de nacimiento</p>
              <p className="font-bold">01-02-2003</p>
            </div>
            <button className="text-[#112211 border border-green-300 px-6 py-1 rounded-md ">
              Cambiar
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfilePage;
