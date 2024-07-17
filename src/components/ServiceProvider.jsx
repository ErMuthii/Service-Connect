import React from 'react';
import { Card, Image, Button, CardBody } from '@nextui-org/react';

const ServiceProvider = ({ provider, onClick }) => {
  return (
    <Card shadow='dark-2xl' className='max-w-[400px]'>
      <Image
        shadow='md'
        radius='lg'
        width='100%'
        alt={provider.name}
        src={provider.img}
        className='h-[200px] w-full object-cover'
        loading='lazy'
      />
      <CardBody className='text-center p-4'>
        <h3 className='mt-2 text-lg font-bold'>{provider.name}</h3>
        <p>{provider.description}</p>
        <Button className='mt-4' color='primary' onClick={() => onClick(provider.id)}>View Details</Button>
      </CardBody>
    </Card>
  );
};

export default ServiceProvider;
