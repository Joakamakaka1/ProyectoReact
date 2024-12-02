import React from "react";
import AvionHeader from "../assets/img/avionHeader.webp";

const Header = () => {
    return (
        <header
            className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
            style={{ backgroundImage: `url(${AvionHeader})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">
                    Haz tu lista de deseos de viaje, nosotros haremos el resto
                </h1>
                <p className="text-lg">
                    Ofertas especiales que se adaptan a tu plan
                </p>
            </div>
        </header>
    );
};

export default Header;
