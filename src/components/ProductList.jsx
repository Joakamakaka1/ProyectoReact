import React from "react";

const ProductList = () => {
    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden p-4 mb-6 flex items-center">
            <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="h-32 w-32 object-cover mr-4"
            />
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div className="flex items-center mb-5">
                        <span className="border border-green-500 rounded-md py-1 px-3">4.2</span>
                        <span className="ml-2 font-medium text-[#112211]">My bueno</span>
                        <span className="ml-1">54 opiniones</span>
                    </div>
                    <div className="text-red-500 font-bold text-xl">104€</div>
                </div>
                <div className="mt-4 border-t">
                    <button className="bg-[#8DD3BB] text-black font-medium w-full py-2 mt-4 rounded-md ">
                        Ver ofertas
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
