// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { services } from '../data';
// import { Card, Image, CardBody, Button, Select, SelectItem } from '@nextui-org/react';

// const Services = () => {
//   const navigate = useNavigate();
//   const categories = ['All', ...new Set(services.map(service => service.category))];
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const handleProviderClick = (id) => {
//     navigate(`/services/${id}`);
//   };

//   const filteredServices = selectedCategory === 'All'
//     ? services
//     : services.filter(service => service.category === selectedCategory);

//   return (
//     <div className='p-4'>
//       <h1 className='text-2xl font-bold'>Our Services</h1>
//       <div className='mt-4'>
//         <Select
//           aria-label='Select Category'  
//           placeholder='Select Category'
//           value={selectedCategory}
//           onChange={(value) => setSelectedCategory(value)}
//         >
//           {categories.map((category, index) => (
//             <SelectItem key={index} value={category}>
//               {category}
//             </SelectItem>
//           ))}
//         </Select>
//       </div>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
//         {filteredServices.map(service => (
//           <Card
//             key={service.id}
//             shadow='dark-2xl'
//             className='max-w-[400px] cursor-pointer'
//             onClick={() => handleProviderClick(service.id)}
//           >
//             <Image
//               shadow='md'
//               radius='lg'
//               width='100%'
//               alt={service.name}
//               src={service.img}
//               className='h-[200px] w-full object-cover'
//             />
//             <CardBody className='text-center p-4'>
//               <h3 className='mt-2 text-lg font-bold'>{service.name}</h3>
//               <p>{service.description}</p>
//               <Button className='mt-4' color='primary' onClick={() => handleProviderClick(service.id)}>View Details</Button>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../data';
import { Card, Image, CardBody, Button } from '@nextui-org/react';

const Services = () => {
  const navigate = useNavigate();
  const categories = ['All', ...new Set(services.map(service => service.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleProviderClick = (id) => {
    navigate(`/services/${id}`);
  };

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  // Determine the hire message based on selected category
  const hireMessage = selectedCategory === 'All'
    ? 'Hire the best'
    : `Hire the best ${selectedCategory.toLowerCase()}`;

  // Additional message for reliability
  const reliabilityMessage = selectedCategory === 'All'
    ? ''
    : `Hire a reliable and vetted ${selectedCategory.toLowerCase()} today!!`;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Our Services</h1>
      <div className='text-3xl text-red-500 font-bold mt-4'>{hireMessage}</div>
      {reliabilityMessage && <div className='text-lg mt-2'>{reliabilityMessage}</div>}
      <div className='mt-4'>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='p-2 border rounded'
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        {filteredServices.map(service => (
          <Card
            key={service.id}
            shadow='dark-2xl'
            className='max-w-[400px] cursor-pointer'
            onClick={() => handleProviderClick(service.id)}
          >
            <Image
              shadow='md'
              radius='lg'
              width='100%'
              alt={service.name}
              src={service.img}
              className='h-[200px] w-full object-cover'
            />
            <CardBody className='text-center p-4'>
              <h3 className='mt-2 text-lg font-bold'>{service.name}</h3>
              <p>{service.description}</p>
              <Button className='mt-4' color='primary' onClick={() => handleProviderClick(service.id)}>
                View Details
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
