import React from 'react';

import Hero from '../Homepage/Hero';
import Services from '../Homepage/Services';
import About from '../Homepage/About';
import Infinityscroll from '../Homepage/infinityscrolling';



export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
     
      <Hero />
      <Infinityscroll />
        <About />
      <Services />
    
    </div>
  );
}
