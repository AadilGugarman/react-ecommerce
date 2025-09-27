import React, { useState } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import './TabsComponent.css'

const Fashion = () => {
  const allItems = [...Array(50)].map((_, index) => ({
    title: `Fashion Item ${index + 1}`,
    price: `$${(index + 1) * 10}`,
    image: `https://picsum.photos/200/200?random=${index + 1}`,
  }));

  const [visibleCount, setVisibleCount] = useState(12);
  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="p-2 overflow-auto border h-96 custom-scrollbar">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {allItems.slice(0, visibleCount).map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col overflow-hidden bg-white rounded shadow group"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-auto"
            />

            {/* Hover Icons */}
            <div className="absolute flex flex-col items-center justify-center gap-1 transition-opacity duration-300 opacity-0 right-1 group-hover:opacity-100 top-3 md:gap-2">
              <button className="p-2 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-300 md:text-xl">
                <TbShoppingCartPlus  />
              </button>
              <button className="p-2 text-xs text-white bg-red-500 rounded-full hover:bg-red-300 md:text-xl">
                <IoMdHeartEmpty  />
              </button>
            </div>

            {/* Product Info */}
            <div className="flex flex-col p-2">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-gray-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allItems.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Fashion;
