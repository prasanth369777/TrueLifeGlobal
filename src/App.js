import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/pages/Navigation";
import Footer from "./components/pages/Footer";
import Whatsapp from "./components/pages/whatsapp";
import ScrollToTop from "./components/pages/scrolltotop";
import SEO from "./components/SEO"; // Fixed import path


function App() {
  return (
    <Router>
     {/* Global SEO - Applied to all pages */}
<SEO
  title="True Life Global | Accounting, Audit & Tax Services Singapore | ACRA Registered"
  description="True Life Global Pte. Ltd. is an ACRA-registered Singapore firm offering professional accounting, auditing, tax consultancy, and courier services. Trusted by SMEs and startups across Singapore. UEN: 202626385E."
  canonical="https://true-life-global.netlify.app/"
  image="https://true-life-global.netlify.app/og-image.png"
  location="Singapore"
  keywords="accounting Singapore, audit services Singapore, tax consultancy Singapore, ACRA registered, bookkeeping services, financial advisory, courier services Singapore, SME accounting, startup accounting, Singapore business services, IRAS compliance, corporate secretarial, true life global"
  author="True Life Global Pte. Ltd."
/>

      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
       
      </Routes>

       <Whatsapp />
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;