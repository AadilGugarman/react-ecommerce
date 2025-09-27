import React, { useState } from "react";

const Beauty= () => {
  const allItems = [...Array(50)].map((_, index) => ({
    title: `Fashion Item ${index + 1}`,
    price: `$${(index + 1) * 10}`,
    image: `https://picsum.photos/200/200?random=${index + 1}`,
  }));

  const [visibleCount, setVisibleCount] = useState(12); // initially 12 items
  const loadMore = () => {
    setVisibleCount((prev) => prev + 12); // 12 aur items show kar do
  };

  return (
    <div className="p-2 overflow-auto border h-96">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {allItems.slice(0, visibleCount).map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden bg-white rounded shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-auto"
            />
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

export default Beauty;
