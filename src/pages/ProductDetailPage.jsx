import React from "react";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Header from "../components/NavBar";

const ProductDetailPage = () => {
  return (
    <div className="max-w mx-auto bg-gray-100">
      <Header />

      <section className="bg-white shadow-lg p-6 rounded-md mb-8 mt-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Origen - Hasta"
            className="border p-3 rounded-md"
          />
          <input type="date" className="border p-3 rounded-md" />
          <input
            type="text"
            placeholder="Salida - regreso"
            className="border p-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Pasajero - clase"
            className="border p-3 rounded-md"
          />

          <div className="col-span-1 md:col-span-1 flex items-center justify-start">
            <button className="bg-[#8DD3BB] font-medium py-3 px-20 rounded-md text-center w-full md:w-auto">
              Buscar
            </button>
          </div>
        </div>
      </section>

      <div className="p-6 max-w-6xl mx-auto border-l border-r">
        <div className="flex justify-between items-start mb-4 text-[#112211]">
          <p className="font-semibold">Mostrando 6 de 123 lugares</p>
          <p>
            Ordenar por <span className="font-semibold">Recomendado</span>
          </p>
        </div>

        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />

        <button className="bg-[#8DD3BB] font-medium py-3 px-20 rounded-md text-center w-full mt-6">
          Mostrar mas opciones
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
