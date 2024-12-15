import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/NavBar";
import Footer from "../components/Footer";

const ProductFinalDetailPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />

      <div className="pt-7 flex justify-between items-center mx-20 mb-10">
        <div>
          <h1 className="text-2xl text-[#112211] font-semibold">Ryanair A380 Airbus</h1>
          <p className="text-[#112211]  text-sm mt-2">Sevilla</p>
          <div className="flex items-center mt-2">
            <span className="border border-green-200 rounded-md py-1 px-3">
              4.2
            </span>
            <span className="ml-2 font-medium text-[#112211]">Muy bueno</span>
            <span className="ml-1">54 opiniones</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl text-[#FF8682] font-bold">$240</p>
          <button className="bg-[#8DD3BB] font-medium px-4 py-2 rounded-md mt-1">
            Reserva ahora
          </button>
        </div>
      </div>

      <div className="mx-20">
        <div className="w-full h-96 overflow-hidden rounded-lg mt-4">
          <img
            src="https://via.placeholder.com/1920x600"
            alt="airplane"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#8DD3BB] p-6 rounded-lg mx-20 my-10">
        <h2 className="font-bold text-2xl text-[#112211] mb-6">
          Ryanair Airlines Policies
        </h2>
        <ul className="flex justify-start space-x-8 text-[#112211] text-1xl">
          <li className="flex items-center pr-10">
            <span className="mr-2 text-[#112211] font-semibold">⏳</span>
            Limpieza previa al vuelo, instalación de filtros HEPA en cabina.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-[#112211] font-semibold">⏳</span>
            Preguntas sobre exámenes de salud previos al vuelo.
          </li>
        </ul>
      </div>

      {/* Flights Details */}
      <div className="mx-20 pb-10">
        {/* Flight 1 */}
        <div className="bg-white p-6 py-5 rounded-lg shadow-md mb-4 h-56">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-[#112211]">Ida Wed, Dec 8</h3>
            <div className="text-[#112211] text-sm">2h 28m</div>
          </div>

          <div className="flex items-center mb-4">
            <div className="border border-green-200 rounded-md py-3 px-3 flex">
              <img
                src="https://via.placeholder.com/40"
                alt="Ryanair Logo"
                className="w-12 h-12 mr-4 "
              />
              <div>
                <p className="font-bold text-lg">Ryanair</p>
                <p className="text-sm text-[#112211]">Airbus A320</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="font-bold text-[#112211] text-lg mr-2">12:00 pm</p>
            <p className="text-sm text-[#112211] mr-4">Nueva York (EWR)</p>
            <div className="text-gray-400 text-xl">&rarr;</div>
            <p className="font-bold text-[#112211] text-lg ml-4 mr-2">
              12:00 pm
            </p>
            <p className="text-sm text-[#112211]">Nueva York (EWR)</p>
          </div>
        </div>

        {/* Flight 2 */}
        <div className="bg-white p-6 py-5 rounded-lg shadow-md h-56">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-[#112211]">Vuelta Wed, Dec 12</h3>
            <div className="text-[#112211] text-sm">2h 28m</div>
          </div>

          <div className="flex items-center mb-4">
            <div className="border border-green-200 rounded-md py-3 px-3 flex">
              <img
                src="https://via.placeholder.com/40"
                alt="Ryanair Logo"
                className="w-12 h-12 mr-4"
              />
              <div>
                <p className="font-bold text-lg">Ryanair</p>
                <p className="text-sm text-gray-500">Airbus A320</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="font-bold text-[#112211] text-lg mr-2">12:00 pm</p>
            <p className="text-sm text-[#112211] mr-4">Nueva York (EWR)</p>
            <div className="text-gray-400 text-xl">&rarr;</div>
            <p className="font-bold text-[#112211] text-lg ml-4 mr-2">
              12:00 pm
            </p>
            <p className="text-sm text-[#112211]">Nueva York (EWR)</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductFinalDetailPage;
