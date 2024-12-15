import React from "react";
import Header from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import ParisImage from "../assets/img/paris.jpeg";
import BangkokImage from "../assets/img/bangkok.jpeg";
import NewYorkImage from "../assets/img/newYork.jpeg";
import CadizImage from "../assets/img/cadiz.jpeg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const cardsData = [
    { title: "París", price: "$700", image: ParisImage },
    { title: "Bangkok", price: "$600", image: BangkokImage },
    { title: "Nueva York", price: "$800", image: NewYorkImage },
    { title: "Cádiz", price: "$500", image: CadizImage },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <section className="relative">
        <div>
          <img src="https://via.placeholder.com/1920x600" alt="" />
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white shadow-lg p-6 rounded-md w-11/12 max-w-5xl mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
          <Link
            className="bg-[#8DD3BB] font-medium py-3 rounded-md col-span-4 text-center"
            to="/product"
          >
            <button>Reservar Vuelo</button>
          </Link>
        </div>
      </section>

      {/* Travel Offers */}
      <section className="py-12 bg-gray-100">
        <div className="mb-8 px-40">
          <h2 className="text-3xl font-bold text-gray-800 pb-4">
            Sumérgete en los viajes
          </h2>
          <p className="text-gray-600 w-2/4">
            ¿Vas a algún lugar para celebrar esta temporada? . Ya sea que
            regrese a casa o a algún lugar para recorrer, tenemos las
            herramientas de viaje para llevarlo a su destino.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-40">
          {cardsData.map((card, index) => (
            <ProductCard
              key={index}
              title={card.title}
              price={card.price}
              image={card.image}
            />
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="mb-8 px-40">
          <h2 className="text-3xl font-bold text-gray-800 pb-4">
            Sumérgete en los viajes
          </h2>
          <p className="text-gray-600 w-2/4">
            ¿Vas a algún lugar para celebrar esta temporada? . Ya sea que
            regrese a casa o a algún lugar para recorrer, tenemos las
            herramientas de viaje para llevarlo a su destino.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-40">
          {/* Mitad izquierda */}
          <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-md">
            {/* Título y precio */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Las Maldivas</h2>
              <p className="text-lg font-medium text-gray-600">Precio: $700</p>
            </div>
            {/* Descripción */}
            <p className="text-gray-600 mb-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              euismod, urna eu tincidunt consectetur, nisi nunc volutpat arcu,
              quis tristique ligula lacus at justo. Nullam suscipit magna ut dui
              placerat, a aliquam lorem cursus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              euismod, urna eu tincidunt consectetur, nisi nunc volutpat arcu,
              quis tristique ligula lacus at justo. Nullam suscipit magna ut dui
              placerat, a aliquam lorem cursus.
            </p>
            {/* Botón */}
            <button className="bg-[#8DD3BB] text-black font-bold py-3 rounded-md w-full">
              Reservar Vuelo
            </button>
          </div>

          {/* Mitad derecha */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Maldivas 1"
              className="w-full h-56 object-cover rounded-md"
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Maldivas 2"
              className="w-full h-56 object-cover rounded-md"
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Maldivas 3"
              className="w-full h-56 object-cover rounded-md"
            />
            <img
              src="https://via.placeholder.com/300"
              alt="Maldivas 4"
              className="w-full h-56 object-cover rounded-md"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
