import React from "react";
import Header from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAirlines } from "../services/apiServices";

const Home = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await fetchAirlines();
      const updatedCards = countries.map((country) => ({
        title: country.name.common,
        price: "$700",
        subTitle: "Una aventura en Europa",
        image: country.flags?.svg || "https://via.placeholder.com/300",
      }));
      setCardsData(updatedCards);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <section className="relative">
        <div>
          <img
            src="/avion.jpg"
            alt="Portada"
            className="w-full h-[550px] object-cover"
          />
        </div>
      </section>

      <section className="bg-white shadow-lg p-6 rounded-md w-11/12 max-w-5xl mx-auto -mt-20 relative z-20">
        <h1 className="text-2xl font-bold mb-4 text-center md:text-left">
          ¿A dónde vuelas?
        </h1>
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
        </div>

        <div className="mt-4">
          <Link
            className="bg-[#8DD3BB] font-medium py-3 rounded-md text-center block w-full"
            to="/product"
          >
            Reservar Vuelo
          </Link>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="mb-8 px-40">
          <h2 className="text-3xl font-bold text-[#112211] pb-4">
            Sumérgete en los viajes
          </h2>
          <p className="text-gray-600 w-2/4">
            ¿Vas a algún lugar para celebrar esta temporada? Ya sea que regrese
            a casa o a algún lugar para recorrer, tenemos las herramientas de
            viaje para llevarlo a su destino.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-40">
          {cardsData.map((card, index) => (
            <ProductCard
              key={index}
              title={card.title}
              price={card.price}
              subTitle={card.subTitle}
              image={card.image}
            />
          ))}
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="mb-8 px-40">
          <h2 className="text-3xl font-bold text-[#112211] pb-4">
            Sumérgete en los viajes
          </h2>
          <p className="text-[#112211]  w-2/4">
            ¿Vas a algún lugar para celebrar esta temporada? . Ya sea que
            regrese a casa o a algún lugar para recorrer, tenemos las
            herramientas de viaje para llevarlo a su destino.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-40">
          <div className="flex flex-col justify-between bg-white shadow-md p-6 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#112211] ">
                Las Maldivas
              </h2>
              <p className="text-lg font-medium text-[#112211] ">
                Precio: $700
              </p>
            </div>
            <p className="text-gray-600 mb-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              euismod, urna eu tincidunt consectetur, nisi nunc volutpat arcu,
              quis tristique ligula lacus at justo. Nullam suscipit magna ut dui
              placerat, a aliquam lorem cursus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus euismod, urna eu tincidunt
              consectetur, nisi nunc volutpat arcu, quis tristique ligula lacus
              at justo. Nullam suscipit magna ut dui placerat, a aliquam lorem
              cursus.
            </p>
            <button className="bg-[#8DD3BB] text-black font-semibold py-3 rounded-md w-full">
              Reservar Vuelo
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Tropical1.jpg"
              alt="Maldivas 1"
              className="w-full h-56 object-cover rounded-md border border-green-200"
            />
            <img
              src="/Tropical2.jpg"
              alt="Maldivas 2"
              className="w-full h-56 object-cover rounded-md border border-green-200"
            />
            <img
              src="/Tropical3.jpg"
              alt="Maldivas 3"
              className="w-full h-56 object-cover rounded-md border border-green-200"
            />
            <img
              src="/Tropical4.jpg"
              alt="Maldivas 4"
              className="w-full h-56 object-cover rounded-md border border-green-200"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
