import React, { useState } from "react";
import Sidebar from "../Category/Sidebar";
import { TbShoppingCartPlus } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  FaSortAmountDown,
  FaFilter,
  FaThLarge,
  FaEllipsisH,
} from "react-icons/fa";

const CategoryPage = ({ title, products }) => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  return (
    <div className="flex items-start justify-center w-full p-3">
      {/* Sidebar (Desktop only) */}
      <div className="hidden w-1/4 md:flex col1">
        <Sidebar />
      </div>

      {/* 🔹 Products Grid */}

      <div className="w-full md:w-3/4 col2">
        <h1 className="ml-3 text-xl font-semibold bg-inherit">{title}</h1>
        <div
          id="product-grid"
          className="custom-scrollbar h-[550px] overflow-auto bg-gray-100 p-2 border pb-12"
        >
          <InfiniteScroll
            dataLength={visibleCount} // kitne items load ho chuke hain
            next={() =>
              setVisibleCount((prev) => Math.min(prev + 12, products.length))
            }
            hasMore={visibleCount < products.length}
            loader={<h4 className="py-2 text-center">Loading...</h4>}
            scrollableTarget="product-grid"
            endMessage={
              <p className="py-2 text-center">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
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
          </InfiniteScroll>
        </div>
      </div>

      {/* {visibleCount < products.length && (
            <div className="flex justify-center mt-4 mb-12">
              <button
                onClick={loadMore}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Load More
              </button>
            </div>
          )} */}

      {/* Mobile Filter/Sort Icon */}
      <div className="fixed bottom-0 left-0 z-50 flex items-center justify-around w-full py-3 text-sm font-medium bg-white border-t border-gray-300 shadow-md md:hidden">
        <button
          onClick={() => setOpenSort(true)}
          className="flex flex-col items-center text-gray-800"
        >
          <FaSortAmountDown className="mb-1 text-lg" />
          <span>Sort</span>
        </button>
        <button
          onClick={() => setOpenSidebar(true)}
          className="flex flex-col items-center text-gray-800"
        >
          <FaFilter className="mb-1 text-lg" />
          <span>Filter</span>
        </button>
      </div>

      {/* Filter  */}
      {openSidebar && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar  */}
          <div className="w-full h-full p-3 bg-white shadow-lg animate-slide-up">
            <Sidebar />
            <button
              onClick={() => setOpenSidebar(false)}
              className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-2 text-lg font-semibold text-white transition duration-200 bg-blue-400 border border-gray-300 rounded shadow "
            >
              <span>Close</span>
              <IoClose className="text-2xl" />
            </button>
          </div>
        </div>
      )}

      {/* SortBar */}
      {openSort && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black bg-opacity-50">
          <div className="p-5 bg-white rounded-t-2xl ">
            <div className="flex items-center justify-between mb-3 animate-slide-up">
              <h2 className="text-lg font-semibold">Sort by</h2>
              <IoClose
                className="text-2xl text-gray-600 cursor-pointer hover:text-black"
                onClick={() => setOpenSort(false)}
              />
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="pb-2 border-b cursor-pointer hover:text-blue-500">
                Recommended
              </li>
              <li className="pb-2 border-b cursor-pointer hover:text-blue-500">
                Price: Low to High
              </li>
              <li className="pb-2 border-b cursor-pointer hover:text-blue-500">
                Price: High to Low
              </li>
              <li className="pb-2 border-b cursor-pointer hover:text-blue-500">
                Newest First
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
