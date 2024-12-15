import React from "react";

const ProductCard = ({ title, price, subTitle, image }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src={image} alt={title} className="h-64 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{subTitle}</p>
          <p className="text-gray-600 font-bold">{price}</p>
        </div>
        <button className="mt-2 bg-[#8DD3BE] font-semibold w-full py-2 rounded-md ">
          Reservar Vuelo
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
