import React from "react";
import Header from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import ParisImage from "../assets/img/paris.jpeg";
import BangkokImage from "../assets/img/bangkok.jpeg";
import NewYorkImage from "../assets/img/newYork.jpeg";
import CadizImage from "../assets/img/cadiz.jpeg";

const Home = () => {
    const cardsData = [
        { title: "París", price: "$700", image: ParisImage },
        { title: "Bangkok", price: "$600", image: BangkokImage },
        { title: "Nueva York", price: "$800", image: NewYorkImage },
        { title: "Cádiz", price: "$500", image: CadizImage },
    ];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <Header />

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
                        placeholder="Destino - Qué"
                        className="border p-3 rounded-md"
                    />
                    <button className="bg-blue-600 text-white py-3 rounded-md">
                        Reservar Vuelo
                    </button>
                </div>
            </section>

            {/* Travel Offers */}
            <section className="py-12 bg-white">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Sumérgete en los viajes
                    </h2>
                    <p className="text-gray-600">
                        Explora ofertas para todos los destinos.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
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
        </div>
    );
};

export default Home;
