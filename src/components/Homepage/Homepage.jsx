import React from 'react';

import Hero from '../Homepage/Hero';
import Services from '../Homepage/Services';
import About from '../Homepage/About';
import Howweworks from '../Homepage/How We Work'
import Infinityscroll from '../Homepage/infinityscrolling';
import Whyus from '../Homepage/Whyus';
import Careers from './Career';
import TrustedByBusinesses from './Trusted by Businesses Worldwide';
import ClientTestimonials from './Client Testimonials';
import KeyInsights from './Keyinsights';
import FAQ from './FAQ';
import Contact from './Contact';


export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
     
      <Hero />
      <Infinityscroll />
        <About />
      <Services />
      <Howweworks />
      <Whyus />
      <Careers />
      <TrustedByBusinesses />
      <ClientTestimonials />
      <KeyInsights />
      <FAQ />
      <Contact />
    
    </div>
  );
}
