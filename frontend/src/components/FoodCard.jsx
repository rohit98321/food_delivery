// src/components/FoodCard.jsx
import React from "react";

const FoodCard = ({food}) => {



  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      {/* Poster */}
      <img
        src={food.poster}
        alt={food.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{food.title}</h2>

        <p className="text-gray-600 text-sm line-clamp-2">
          {food.description}
        </p>

        <div className="flex justify-between items-center pt-3">
          <span className="text-lg font-bold text-green-600">₹{food.price}</span>

          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-all duration-200">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
