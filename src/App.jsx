import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import Rice from './pages/Products/Rice';
import Spice from './pages/Products/Spice';
import SparePart from './pages/Products/SparePart';
import Garments from './pages/Products/Garments';
import IndustrialChemicals from './pages/Products/IndustrialChemicals';
import Pulses from './pages/Products/Pulses';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CallButton from './components/CallButton/CallButton';

import './App.css';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Navigate to="/products/rice" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/rice" element={<Rice />} />
          <Route path="/products/spice" element={<Spice />} />
          <Route path="/products/pulses" element={<Pulses />} />
          <Route path="/products/garments" element={<Garments />} />
          <Route path="/products/spare part" element={<SparePart />} />
          <Route path="/products/industrial chemicals" element={<IndustrialChemicals />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton/>
      <CallButton/>
    </div>
  );
}

export default App;