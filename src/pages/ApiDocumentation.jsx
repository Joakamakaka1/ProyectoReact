import React from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";

const ApiDocumentation = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <h1 className="text-3xl text-[#112211] font-semibold text-center mb-8 mt-8">
        Documentación de la API de Rest Countries
      </h1>

      <div className="mx-4 md:mx-20 lg:mx-32 mb-8">
        {/* Usamos grid para organizar los elementos en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Endpoint 1: Obtener todos los países */}
          <div className="rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-2xl text-[#112211] font-semibold mb-4">
              1. Obtener todos los países
            </h2>
            <p className="text-lg text-[#112211] mb-2">
              <strong>Método:</strong> GET
            </p>
            <p className="text-lg mb-4">
              <strong>Endpoint:</strong> https://restcountries.com/v3.1/all
            </p>
            <p className="text-md mb-8">
              Este endpoint devuelve una lista de todos los países disponibles
              en la base de datos, con información detallada sobre cada país,
              como su nombre, capital, región, población, idiomas y más.
            </p>
            <img
              src="public/api1.png"
              alt="Respuesta del endpoint"
              className="w-full h-96 object-cover rounded-lg shadow-md border border-gray-200"
            />
          </div>

          {/* Endpoint 2: Obtener país por nombre */}
          <div className="rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              2. Obtener país por nombre
            </h2>
            <p className="text-lg text-[#112211] mb-2">
              <strong>Método:</strong> GET
            </p>
            <p className="text-lg text-[#112211] mb-4">
              <strong>Endpoint:</strong> https://restcountries.com/v3.1/name/
              {`{name}`}
            </p>
            <p className="text-md mb-8">
              Este endpoint devuelve información detallada sobre un país
              específico basado en su nombre. Reemplaza{" "}
              <strong>{`{name}`}</strong> con el nombre del país que deseas
              consultar.
            </p>
            <img
              src="public/api2.png"
              alt="Respuesta del endpoint"
              className="w-full h-96 object-cover rounded-lg shadow-md border border-gray-200"
            />
          </div>

          {/* Endpoint 3: Obtener países por región (Europa) */}
          <div className="rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-2xl text-[#112211] font-semibold mb-4">
              3. Obtener países por región (Europa)
            </h2>
            <p className="text-lg text-[#112211] mb-2">
              <strong>Método:</strong> GET
            </p>
            <p className="text-lg mb-8">
              <strong>Endpoint:</strong>{" "}
              https://restcountries.com/v3.1/region/europe
            </p>
            <p className="text-md mb-4">
              Este endpoint devuelve una lista de todos los países que
              pertenecen a la región de Europa. La respuesta incluye detalles
              sobre cada país como el nombre, la capital, el idioma, entre
              otros.
            </p>
            <img
              src="public/api3.png"
              alt="Respuesta del endpoint"
              className="w-full h-96 object-cover rounded-lg shadow-md border border-gray-200"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
    
  );
};
export default ApiDocumentation;
