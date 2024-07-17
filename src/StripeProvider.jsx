
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PdeEuHO2CPr5uTOxYri5LFLv1AHXSQluDVLFmeKFKWhUpIQYdnh74n6xbB2y5kfD6Qp8XqCH8QbZI6DNNIG2SMz00QukiLDX9');

const StripeProvider = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
