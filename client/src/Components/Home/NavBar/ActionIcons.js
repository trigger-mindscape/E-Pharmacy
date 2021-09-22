import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderCart from "../OrderCart/OrderCart";
import WishList from "../WishList/WishList";

const ActionIcons = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);

  return (
    <>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 font-medium text-gray-700 transition-colors duration-200 cursor-pointer hover:text-teal-accent-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </li>

      <li>
        <button
          onClick={() => setOpen(true)}
          className="relative py-4 text-gray-700 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-teal-accent-700 focus:outline-none focus:text-gray-900"
          aria-label="Favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 font-medium text-gray-700 transition-colors duration-200 cursor-pointer hover:text-teal-accent-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="absolute inset-0 object-right-top -mr-6">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-teal-400 text-white">
              3
            </div>
          </span>
        </button>
      </li>
      <li>
        <button
          onClick={() => setOpen(true)}
          className="relative py-4 text-gray-800 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-teal-accent-700 focus:outline-none focus:text-gray-500"
          aria-label="Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 font-medium text-gray-700 transition-colors duration-200 cursor-pointer hover:text-teal-accent-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="absolute inset-0 object-right-top -mr-6">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-teal-400 text-white">
              7
            </div>
          </span>
        </button>
      </li>
      {user.token ? (
        <Link to="/vendor/dashboard">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 font-medium text-gray-700 transition-colors duration-200 cursor-pointer hover:text-teal-accent-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </li>
        </Link>
      ) : (
        <Link to="/login">
          <p className="px-3 py-1 text-lg font-medium tracking-wide text-white transition-colors duration-200 bg-teal-400 rounded-md hover:bg-teal-700">
            Login
          </p>
        </Link>
      )}
      {/* Open cart modal */}
      <OrderCart open={open} setOpen={setOpen} />
      <WishList open={open} setOpen={setOpen}></WishList>
    </>
  );
};

export default ActionIcons;