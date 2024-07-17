import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceProviderDetail from './components/ServiceProviderDetail';
import Footer from './components/Footer';
import ServiceApplicationForm from './components/ServiceApplicationForm';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <NextUIProvider>
      <div className='flex flex-col justify-between min-h-screen'>
        <Navigation />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path="/services/:id" element={<ServiceProviderDetail />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/provide-a-service' element={<ServiceApplicationForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default App;
