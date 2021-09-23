import React, {Fragment} from 'react';
import NavBar from "../../Components/Home/NavBar/NavBar";

const Company = () => {
    return (
      <Fragment>
        <NavBar />
        <div className="p-6 overflow-hidden md:container md:mx-auto">
          <h1 className="text-xl font-bold uppercase">
            About Our Company: E-Pharmacy
          </h1>
          <div className="container p-10 border-2">
            <h1 className='mt-5 text-xl font-bold'>E-Pharmacy</h1>
            <p>
              E-Pharmacy is a business model that deals with the preparation and
              sale of prescription and non-prescription medicine as in
              traditional pharmacies. However, online pharmacies take orders
              online and send the medicine to their destination. A system that
              stores data and enables functionality that organizes and maintains
              the customer, transactions, and medication use the process within
              pharmacies.
            </p>
            <h1 className='mt-5 text-xl font-bold'>Our Working Model</h1>
            <p>
              This is a Web and mobile-based application for consumers to upload
              the scanned copy of their prescriptions and place requests for
              medicines. The registered pharmacy checkout the medicine and sends
              customers the invoice for those medicines. If the customer wants
              to buy then he can place his order. The pharmacy owner confirms
              his order and sends his ordered medicine via home delivery.
            </p>
            <h1 className='mt-5 text-xl font-bold'>Our Company Goal</h1>
            <p>
              We want to build a system that saves customers money and time with
              great accessibility (24*7). This system will really be helpful to
              the old age, the job holders who have no time to go to the
              pharmacy, and the villagers. Our system also brings the great
              opportunity to increase the business to those pharmacists who want
              to do business with us. By using this system, they can get more
              customers and manage their daily orders, selling expenses, and
              cost by using a single software. So, this concept will help
              customers to get necessary medicines at their doorstep at a mere
              finger click and also help the local pharmacy to increase their
              business and easy maintenances.
            </p>
          </div>
        </div>
      </Fragment>
    );
};

export default Company;