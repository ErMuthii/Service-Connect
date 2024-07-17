
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Card, Button, Spacer } from '@nextui-org/react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Handle payment processing here
    }
  };

  return (
    <div className="flex justify-center items-center mt-4">{/* Add pt-20 for top padding */}
      <Card className="w-full max-w-md p-6 bg-white rounded-md shadow-md mx-auto"> {/* Add mx-auto to center the card */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <Spacer y={1.5} />
          <Button type="submit" disabled={!stripe}  variant='ghost' color='primary' className="w-full" >
             Pay
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CheckoutForm;