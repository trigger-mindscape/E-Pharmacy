import React, { useEffect, useState } from "react";

const QuantityButton = ({ product, updateQuantity }) => {
  const [pdCount, setPdCount] = useState(1);

  const handleIncrement = () => {
    setPdCount(pdCount + 1);
  };

  const handleDecrement = () => {
    if (pdCount > 1) {
      setPdCount(pdCount - 1);
    }
  };

  useEffect(() => {
    product && updateQuantity(pdCount);
  }, [pdCount]);

  return (
    <div className="flex items-center justify-between w-32 h-12 text-base font-medium leading-6 tracking-wide transition duration-150 ease-in-out border border-teal-400 rounded align-center r sm:text-lg focus:outline-none md:w-40">
      <i
        onClick={() => handleDecrement()}
        className="px-4 py-2 m-1 font-normal text-teal-600 cursor-pointer fas fa-minus"
      ></i>

      <span className="w-2 mx-2 font-medium text-center text-gray-900 md:w-8">
        {pdCount}
      </span>

      <i
        onClick={() => handleIncrement()}
        className="px-4 py-2 m-1 font-normal text-teal-600 cursor-pointer fas fa-plus"
      ></i>
    </div>
  );
};

export default QuantityButton;
