import React from 'react';
import Categories from '../../Categories/Categories';
import ContactVendor from '../../ContactVendor/ContactVendor';
import OfferCard from '../../Home/OfferCard/OfferCard';
import Products from '../../Products/Products';
import ShopBanner from './ShopBanner';
import ShopPromotion from './ShopPromotion';

const ShopDetails = () => {
  return (
    <section>
      {/* Shop Banner*/}
      <ShopBanner />

      <div className="container flex flex-col-reverse px-4 mx-auto md:flex-row sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* Shop sidebar */}
        <div className="order-first bg-white md:w-3/12">
          <Categories />
          <ContactVendor />
        </div>

        <div className="order-last md:w-9/12">
          <ShopPromotion/>
          {/* Products */}
          <Products />
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
