import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({icon, product }) => {
    const dispatch = useDispatch()
    const addProductInCard=()=>{

    }
  return (
    <button class={`flex flex-wrap items-center py-2 px-4 ${icon ? 'text-lg ':'text-sm'}  rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700`}
    onClick={addProductInCard}
    >
    { icon && <i class="fas fa-cart-plus"></i>} &nbsp; Add To Cart
    </button>
  );
};

export default AddToCart;
