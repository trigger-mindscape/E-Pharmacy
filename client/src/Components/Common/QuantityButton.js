import React, { useState } from 'react';

const QuantityButton = () => {
  const [pdCount, setPdCount] = useState(1);

  const handleIncrement = () =>{
      setPdCount(pdCount + 1)
  }

  const handleDecrement = () =>{
    if(pdCount > 1){
      setPdCount(pdCount - 1)
    }
  }
  return (
    <div className="flex justify-between align-center items-center rounded w-32 h-12 r text-base sm:text-lg font-medium tracking-wide leading-6 transition duration-150 ease-in-out border border-teal-400 focus:outline-none md:w-40">
      <i onClick={()=> handleIncrement()} className="fas fa-plus m-1 py-2 px-4 cursor-pointer font-normal text-teal-600"></i>

      <span className="mx-2 text-center w-2 text-gray-900 md:w-8 font-medium">
        {pdCount}
      </span>

      <i onClick={()=> handleDecrement()} className="fas fa-minus m-1 py-2 px-4 cursor-pointer font-normal text-teal-600"></i>
    </div>
  );
};

export default QuantityButton;
