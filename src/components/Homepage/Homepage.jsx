import React from 'react';

import Hero from '../Homepage/Hero';
import Services from '../Homepage/Services';
import About from '../Homepage/About';
import Howweworks from '../Homepage/How We Work'
import Infinityscroll from '../Homepage/infinityscrolling';
import Whyus from '../Homepage/Whyus';


export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
     
      <Hero />
      <Infinityscroll />
        <About />
      <Services />
      <Howweworks />
      <Whyus />
    
    </div>
  );
}
