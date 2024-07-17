import React from 'react';
import { ReactTyped } from 'react-typed';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();  
  return (
    <>
    
      <div className='black'>
        <div className='max-w-[800px] mt-[-120px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#087EB8] font-bold p-2'> CONNECTING YOU TO QUALITY SERVICES </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> We Believe Everyone Deserves the Best</h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-4xl text-xl font-bold mr-2'> Get Access to Reliable </p>
            <span className='text-[#087EB8] font-semibold md:text-4xl sm:text-4xl text-xl'>
              <ReactTyped
                strings={['Photographers', 'Mechanics', 'Chefs', 'Tutors']}
                typeSpeed={120}
                backSpeed={120}
                loop
              />
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-[-180px] mb-12 space-x-8">
          <Button variant='ghost' size="lg" color="primary" onClick={() => navigate('/services')}>Explore Services</Button>
          <Button variant='ghost' size='lg' onClick={() => navigate('/contact')}>Contact Us</Button>
        </div>
          
      </div>
    </>
  );
}

export default Hero;

// import React from 'react';
// import { ReactTyped } from 'react-typed';
// import { Button } from '@nextui-org/react';
// import { useNavigate } from 'react-router-dom';
// import { FaCamera, FaCar, FaUtensils, FaBook } from 'react-icons/fa';

// const Hero = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className='relative bg-white h-screen'>
//         <div className='max-w-[800px] mt-[-120px] w-full h-full mx-auto text-center flex flex-col justify-center'>
//           <p className='text-[#087EB8] font-bold p-2'> CONNECTING YOU TO QUALITY SERVICES </p>
//           <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> We Believe Everyone Deserves the Best</h1>
//           <div className='flex justify-center items-center'>
//             <p className='md:text-4xl sm:text-4xl text-xl font-bold mr-2'> Get Access to Reliable </p>
//             <span className='text-[#087EB8] font-semibold md:text-4xl sm:text-4xl text-xl'>
//               <ReactTyped
//                 strings={['Photographers', 'Mechanics', 'Chefs', 'Tutors']}
//                 typeSpeed={120}
//                 backSpeed={120}
//                 loop
//               />
//             </span>
//           </div>
//         </div>
//         <div className="flex justify-center mt-[-180px] mb-12 space-x-8">
//           <Button variant='ghost' size="lg" color="primary" onClick={() => navigate('/services')}>Explore Services</Button>
//           <Button variant='ghost' size='lg' onClick={() => navigate('/contact')}>Contact Us</Button>
//         </div>
//         {/* Randomly placed colorful icons */}
//         <FaCamera className='absolute top-10 right-10 text-red-500 text-6xl opacity-30' />
//         <FaCar className='absolute top-1/3 left-1/4 text-green-500 text-6xl opacity-30' />
//         <FaUtensils className='absolute bottom-20 right-10 text-blue-500 text-6xl opacity-30' />
//         <FaBook className='absolute bottom-10 left-1/3 text-yellow-500 text-6xl opacity-30' />
//       </div>
//     </>
//   );
// }

// export default Hero;
