import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from './Payment';


const stripePromise = loadStripe(
  "pk_test_51JfO0wBPNeYEdLkZ47TGmT63HYDnz0hV2BH8OnBqCtXm1Zwh4wsn3AehwTQvKxwlSxCOWQK98crk8nuXoYpRc59P00A7gSkZW7"
);


const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <Payment handlePayment={handlePayment}></Payment>
    </Elements>
  );
};

export default ProcessPayment;