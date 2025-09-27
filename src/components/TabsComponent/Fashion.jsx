import React from "react";

const Fashion = () => {
  const items = [...Array(12)].map((_, index) => ({
    title: `Fashion Item ${index + 1}`,
    price: `$${(index + 1) * 10}`,
    image: `https://picsum.photos/200/200?random=${index + 1}`,
  }));

  return (
    <div className="p-2 overflow-auto h-96">
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {items.map((item, idx) => (
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
    </div>
  );
};

export default Fashion;
