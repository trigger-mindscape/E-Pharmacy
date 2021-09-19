import React from 'react';

const NavLinks = () => {
  return (
    <>
      <li>
        <a
          href="/allshop"
          aria-label="Registered Shop"
          title="Registered Shop"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Shop
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="/medicine"
          aria-label="Our Medicine"
          title="Our Medicine"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Medicine
        </a>
      </li>
      <li>
        <a
          href="/blogs"
          aria-label="Latest Blog"
          title="Latest Blog"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Blog
        </a>
      </li>
    </>
  );
};

export default NavLinks;
