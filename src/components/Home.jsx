import React from 'react'
import Hero from './Hero'
import { Card, CardBody, CardFooter, Image, Divider } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import HomeFAQ from './HomeFAQ';
import Reviews from './Reviews';

const Home = () => {
  const navigate = useNavigate();  
  const data = [
    {
      title: 'Photographers',
      description: 'Find professional photographers for all your needs.',
      img: 'src/assets/photographer.jpg',
      path: '/services'
    }, 
    {
        title: 'Mechanics',
        description: 'Reliable mechanics for your vehicle maintenance and repair.',
        img: 'src/assets/mechanic.jpg',
        path: '/services'
    },
    {
        title: 'Chefs',
        description: 'Hire top chefs for your events and personal needs.',
        img: 'src/assets/chef.jpg',
        path: '/services'
    },
  ];

  const handleCardClick = (path) => {
    navigate(path)
  };

  return (
    <>
      <Hero />
      <Divider className='my-2' /> 
      <h1 className='text-[#1177A9] text-center font-bold p-4 text-3xl'>What we offer</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {data.map((item, index) => (
          <Card
            shadow='dark-2xl'
            key={index}
            className='max-w-[400px]'
            isPressable
            onPress={() => handleCardClick(item.path)}
            isHoverable
          >
            <CardBody className='overflow-visible p-0'>
              <Image
                shadow='md'
                radius='lg'
                width='100%'
                alt={item.title}
                className='h-[200px] w-full object-cover'
                src={item.img} />
            </CardBody>
            <CardFooter className='text-center text-medium justify-between' style={{ flexDirection: 'column' }}>
              <b className='text-center'>{item.title}</b>
              <p className='text-sm'>{item.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Divider className='my-4' />         
      <HomeFAQ /> 
      <Divider className='mt-6' /> 
      <Reviews />
    </>  
  )
}

export default Home;
