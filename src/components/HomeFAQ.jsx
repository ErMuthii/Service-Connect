import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

const HomeFAQ = () => {
  return (
    <>
      <h1 className='text-[#1177A9] text-center font-bold p-2 text-3xl'>Not sure if Service Connect is for you?</h1>
      <h2 className='text-[#191919] text-center font-bold p-2 text-2xl'>Frequently Asked Questions</h2>
      <div className='flex justify-center items-center'>
        <Accordion variant='shadow' className='max-w-[800px] w-full'>
          <AccordionItem
            key='1'
            aria-label='Accordion 1'
            title='1. How do I join Service Connect as a service provider?'
          >
            <p>
              Joining Service Connect as a service provider is easy. Simply navigate to our registration page, fill out the required details, and submit your application. Our team will review your application promptly.
            </p>
          </AccordionItem>
          <AccordionItem
            key='2'
            aria-label='Accordion 2'
            title='2. How can I find reliable service providers on Service Connect?'
          >
            <p>
              Service Connect offers a comprehensive search and filter system. You can browse through different service categories, read reviews from other users, and contact providers directly through our platform.
            </p>
          </AccordionItem>
          <AccordionItem
            key='3'
            aria-label='Accordion 3'
            title='3. What are the benefits of using Service Connect as a user?'
          >
            <p>
              By using Service Connect, you gain access to a network of verified service providers, ensuring quality and reliability. You can also easily compare services, check availability, and book appointments online.
            </p>
          </AccordionItem>
          <AccordionItem
            key='4'
            aria-label='Accordion 4'
            title='4. Is there a fee for using Service Connect?'
          >
            <p>
              Service Connect is free for users to browse and connect with service providers. Service providers may have subscription fees or commission-based charges for their listings, which they will disclose on their profiles.
            </p>
          </AccordionItem>
          <AccordionItem
            key='5'
            aria-label='Accordion 5'
            title='5. How can I contact Service Connect for support?'
          >
            <p>
              If you have any questions, concerns, or need assistance, you can reach out to our support team via email at support@serviceconnect.com or through our contact page. We are available to help you with any inquiries you may have.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default HomeFAQ;
