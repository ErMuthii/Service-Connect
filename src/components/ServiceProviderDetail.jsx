// src/components/ServiceProviderDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data';
import { Card, Image, Button } from '@nextui-org/react';
import CheckoutForm from './CheckoutForm'; // Ensure this path is correct

const ServiceProviderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const provider = services.find(service => service.id === parseInt(id));

  if (!provider) {
    return <div>Service Provider not found.</div>;
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <Card shadow="dark-2xl" className="p-4 max-w-4xl w-full">
        <Button
          onClick={() => navigate('/services')}
          variant="ghost"
          className="mb-4 self-start"
          color="danger"
        >
          Back to Services
        </Button>
        <Image
          shadow="md"
          radius="lg"
          width="100%"
          alt={provider.name}
          src={provider.img}
          className="h-[300px] w-full object-cover mb-4"
        />
        <h1 className="text-3xl font-bold text-center">{provider.name}</h1>
        <p className="mt-2 text-center text-lg">{provider.description}</p>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Rates</h2>
          <p>{provider.rates}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Qualifications</h2>
          <p>{provider.qualifications}</p>
        </div>
        <h2 className="mt-6 text-xl font-bold">Gallery</h2>
        <div className="grid grid-cols-2 gap-4">
          {provider.gallery.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Gallery ${index}`}
              className="h-40 w-full object-cover"
              shadow="md"
              radius="sm"
            />
          ))}
        </div>
        <CheckoutForm /> {/* Integrate Stripe CheckoutForm here */}
      </Card>
    </div>
  );
};

export default ServiceProviderDetail;
