import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { TbShoppingCartPlus } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const CategoryPage = ({ title, products }) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [openSidebar, setOpenSidebar] = useState(false);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div className="flex items-start justify-center w-full p-3">
      {/* 🔹 Sidebar (Desktop only) */}
      <div className="hidden w-1/4 md:flex col1">
        <Sidebar />
      </div>

      {/* 🔹 Mobile Filter Button */}
      <div className="fixed bottom-0 z-10 block mb-3 md:hidden">
        <button
          onClick={() => setOpenSidebar(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Filters
        </button>
      </div>

      {/* 🔹 Sidebar Drawer (Mobile) */}
      {openSidebar && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="w-full h-full bg-black bg-opacity-50"
            onClick={() => setOpenSidebar(false)}
          ></div>

          {/* Sidebar Drawer */}
          <div className="absolute right-0 w-3/4 h-full p-4 bg-white shadow-lg">
            <button
              onClick={() => setOpenSidebar(false)}
              className="mb-4 text-sm text-gray-600 hover:text-black"
            >
              <IoClose className="text-xl" />
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* 🔹 Products Grid */}
      <div className="w-full md:w-3/4 col2">
<h1 className="ml-3 text-xl font-semibold bg-inherit">{title}</h1>
      <div className="  custom-scrollbar h-[550px] overflow-auto  bg-gray-100 p-2 border ">
        
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {products.slice(0, visibleCount).map((item, idx) => (
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
                  <TbShoppingCartPlus />
                </button>
                <button className="p-2 text-xs text-white bg-red-500 rounded-full hover:bg-red-300 md:text-xl">
                  <IoMdHeartEmpty />
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

        {visibleCount < products.length && (
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
    </div>
    </div>
  );
};

export default CategoryPage;
