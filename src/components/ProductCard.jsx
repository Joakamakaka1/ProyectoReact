import React from "react";

const ProductCard = ({ title, price, image }) => {
    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={image} alt={title} className="h-64 w-full object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-gray-600">{price}</p>
                <button className="mt-2 bg-blue-600 text-white w-full py-2 rounded-md">
                    Reservar Vuelo
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
