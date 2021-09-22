import React, { Fragment } from 'react';
import NavBar from '../../Components/Home/NavBar/NavBar';

const FAQ = () => {
    return (
      <Fragment>
        <NavBar/>
        <div className="p-6 overflow-hidden md:container md:mx-auto">
          <h1 className="text-xl font-bold">FREQUENTLY ASKED QUESTIONS</h1>
          <div className="container border-2">
            <ol className="p-10 text-xl list-decimal">
              <li className="mt-5">
                <h4 className="font-bold">
                  How E-Pharmacy is different from other online pharmacies?
                </h4>
                <p>
                  At E-Pharmacy, we deliver the medicines in the utmost
                  quality and package integrity in the market. Summing up with
                  the offers and discounts on all products makes E-Pharmacy a sensible option. Also, we handle only the products
                  which are licensed by the government.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  What locations in Bangladesh does E-Pharmacy deliver?
                </h4>
                <p>
                  We deliver all across India, Ranging to almost 26,000+ pin
                  codes.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  How can I contact E-Pharmacy
                </h4>
                <p>
                  Refer to the contact us section of the website for contact
                  detail or you can contact us at “contact@ E-Pharmacy”.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  How can I contact the pharmacists of E-Pharmacy?
                </h4>
                <p>
                  Refer to the contact us section of the website for contact
                  detail or you can contact us at “contact@E-Pharmacy”.
                  You can also call to our contact number (+91 75300 11585) and
                  request a callback from the pharmacist.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  DoesE-Pharmacy accept any insurance plans?
                </h4>
                <p>
                  No, we do not accept any insurance plans. However, we provide
                  you the receipt and invoice for all orders which you can use
                  to claim for any insurance.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  Should I worry about the quality of medicines while ordering?
                </h4>
                You don’t have to worry about the quality of the product. We
                sell only the products licensed by the government. We primarily
                deal with only the multinational brands with a good reputation.
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  Are there any discounts and offers in E-Pharmacy?
                </h4>
                <p>
                  All of our products have a discounted price. Moreover, there
                  will be always different offers and discounts over a period of
                  time. Kindly read the offer description for the eligibility to
                  utilize it.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  Are there any discounts and offers in E-Pharmacy?
                </h4>
                <p>
                  All of our products have a discounted price. Moreover, there
                  will be always different offers and discounts over a period of
                  time. Kindly read the offer description for the eligibility to
                  utilize it.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  DoesE-Pharmacy recommend any medications?
                </h4>
                <p>
                  No,E-Pharmacy does not recommend any medication. We,
                  deliver your medicines at your doorstep.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  Why is the image shown is different from the product I
                  received?
                </h4>
                <p>
                  We strive the most to give the most accurate representation of
                  the medicine as possible, but sometimes companies tend to
                  update their packing and content color, size, and shape. But
                  do not worry about the chemical composition and its effect on
                  you will be the same. Whenever there is a change in
                  composition we keep it updated.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">How to upload a prescription?</h4>
                <p>
                  During ordering, our website will prompt you to upload a
                  prescription.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  How long will it take for my order to reach me?
                </h4>
                <p>
                  The general time taken for the product you ordered to reach
                  you is less than 48 hours. However, because of some reasons
                  that are out of our hands, the delivery may be delayed in a
                  very rare case. In such a delay we suggest you wait patiently.
                  You can also contact us for any assistance.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  How can I check if the order has been shipped?
                </h4>
                <p>
                  You will receive an e-mail and SMS alert once your package is
                  shipped.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">
                  How can I check the delivery status of my order?
                </h4>
                <p>
                  You will receive a mail with tracking details after ordering.
                  You can use it to track your shipment.
                </p>
              </li>
              <li className="mt-5">
                <h4 className="font-bold">How can I cancel an order?</h4>
                <p>
                  You can cancel an order using the direct link or by reaching
                  us with a mail or call. The order can be canceled only before
                  dispatching.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Fragment>
    );
};

export default FAQ;