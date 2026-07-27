import React from "react";
import {
  Enterprise,
  Task,
  ArrowRight,
  Email,
  Idea,
  Earth,
  Portfolio,
  CheckmarkFilled,
} from "@carbon/icons-react";

export default function About() {
  const coreValues = [
    {
      icon: Task,
      title: "Regulatory Compliance",
      desc: "Expert navigation of Singapore's financial regulations, ensuring your business stays fully compliant.",
    },
    {
      icon: Idea,
      title: "Tailored Solutions",
      desc: "Customized financial and logistical strategies designed specifically for startups, SMEs, and growing enterprises.",
    },
    {
      icon: Earth,
      title: "Seamless Operations",
      desc: "Comprehensive support from meticulous tax advisory to dependable corporate courier logistics.",
    },
    {
      icon: Portfolio,
      title: "Trusted Extension",
      desc: "We don't just work for you; we work with you, acting as a dedicated, seamless extension of your own team.",
    },
  ];

  const companyFacts = [
    {
      title: "Registration",
      desc: "ACRA-Registered Singapore Firm",
    },
    {
      title: "Company Status",
      desc: "Active / Live Company",
    },
    {
      title: "Entity Type",
      desc: "Private Company Limited by Shares",
    },
    {
      title: "Financials",
      desc: "SGD 100,000 Paid-Up Capital",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative w-full overflow-hidden bg-slate-50 text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      
      {/* Centered Container with increased max-w (max-w-[104rem]) */}
      <div className="max-w-[104rem] mx-auto px-6 md:px-16 flex flex-col items-center">
        
        {/* ================= EDITORIAL HERO INTRO (CENTERED) ================= */}
        <div className="w-full flex flex-col items-center text-center mb-32 pb-20 border-b border-slate-300">
          <span 
            style={{ backgroundColor: "rgba(32, 125, 214, 0.08)", color: "#207dd6" }}
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif] mb-6"
          >
            Corporate Profile & Overview
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08] font-['Poppins',sans-serif] mb-8">
            True Life Global <br />
            <span style={{ color: "#207dd6" }}>Pte. Ltd.</span>
          </h2>
          <p className="text-lg md:text-xl font-normal text-slate-700 leading-relaxed mb-10 font-light max-w-3xl">
            An ACRA-registered Singapore firm delivering professional accounting, auditing, tax consultancy, and corporate courier services.
          </p>
          <div className="flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              style={{ backgroundColor: "#207dd6" }}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:opacity-90 cursor-pointer font-['Poppins',sans-serif] shadow-md"
            >
              <span>Engage With Us</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="mailto:contact@truelifeglobal.com"
              style={{ color: "#207dd6" }}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition hover:opacity-80 font-['Poppins',sans-serif]"
            >
              <span>Email Direct</span>
              <Email className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* ================= EDITORIAL PARAGRAPH SPLIT (CENTERED FLOW) ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-40 items-start">
          <div className="lg:col-span-5 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-['Poppins',sans-serif]">
              A Strategic Extension of Your Enterprise in Singapore.
            </h3>
            <p className="mt-6 text-base font-semibold uppercase tracking-widest text-slate-500 font-['Poppins',sans-serif]">
              ACRA UEN: 202626385E
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl font-medium text-slate-700 leading-relaxed">
            <p>
              True Life Global Pte. Ltd. is a Singapore-based professional services company committed to delivering reliable, efficient, and client-focused business solutions. Incorporated in Singapore and operating as an active Private Company Limited by Shares, we specialize in accounting, auditing, tax consultancy, and courier services.
            </p>
            <p>
              Our mission is to help businesses streamline their financial operations, maintain regulatory compliance, and achieve sustainable growth through practical and professional support. We combine industry knowledge, attention to detail, and a customer-centric approach to provide tailored solutions that meet the unique needs of startups, SMEs, and growing enterprises.
            </p>
            <p>
              At True Life Global, we believe in building long-term relationships with our clients by acting as a trusted extension of their teams. Whether it is managing financial records, providing tax advisory services, supporting audit requirements, or delivering dependable courier solutions, we are dedicated to excellence, integrity, and service quality. With a strong commitment to professionalism and continuous improvement, True Life Global Pte. Ltd. strives to create value for every client while contributing to their success in an increasingly competitive business environment.
            </p>
          </div>
        </div>

        {/* ================= VISION & MISSION (MODERN SEPARATED CARDS) ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
          
          {/* Vision */}
          <div className="bg-white p-10 lg:p-14 flex flex-col justify-between border border-slate-200 shadow-sm">
            <div>
              <div 
                style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                className="mb-8 flex h-16 w-16 items-center justify-center"
              >
                <Idea className="h-8 w-8" />
              </div>
              <span style={{ color: "#207dd6" }} className="text-sm font-bold uppercase tracking-widest block mb-3 font-['Poppins',sans-serif]">
                Core Vision
              </span>
              <p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed italic">
                &quot;To be a trusted global partner empowering businesses and individuals through seamless financial solutions and reliable delivery services connecting lives, one transaction at a time.&quot;
              </p>
            </div>
            <div className="mt-12 pt-6 border-t border-slate-100 text-sm font-bold uppercase tracking-widest text-slate-500 font-['Poppins',sans-serif]">
              True Life Global Direction
            </div>
          </div>

          {/* Mission */}
          <div className="bg-slate-900 text-white p-10 lg:p-14 flex flex-col justify-between shadow-xl">
            <div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center bg-white/10 text-white">
                <Task className="h-8 w-8" />
              </div>
              <span style={{ color: "#207dd6" }} className="text-sm font-bold uppercase tracking-widest block mb-3 font-['Poppins',sans-serif]">
                Core Purpose
              </span>
              <p className="text-xl md:text-2xl font-medium text-slate-100 leading-relaxed italic">
                &quot;At True Life Global, we deliver expert accounting, auditing, tax, and courier services — simplifying compliance and empowering businesses to grow with confidence.&quot;
              </p>
            </div>
            <div className="mt-12 pt-6 border-t border-white/10 text-sm font-bold uppercase tracking-widest text-blue-400 font-['Poppins',sans-serif]">
              Statutory Commitment
            </div>
          </div>

        </div>

        {/* ================= CORE VALUES & COMPANY FACTS ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Why Choose Us Grid */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight font-['Poppins',sans-serif]">
              Why Choose True Life Global
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {coreValues.map((val, index) => (
                <div key={index} className="bg-white p-8 border border-slate-200 shadow-sm space-y-4">
                  <div 
                    style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                    className="flex h-14 w-14 items-center justify-center"
                  >
                    <val.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 font-['Poppins',sans-serif]">
                    {val.title}
                  </h4>
                  <p className="text-base leading-relaxed text-slate-600 font-medium">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Profile Sidebar */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
            <div className="mb-8 flex items-center gap-5 border-b border-slate-200 pb-6">
              <div 
                style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                className="flex h-14 w-14 items-center justify-center"
              >
                <Enterprise className="h-7 w-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 font-['Poppins',sans-serif]">Company Profile</h4>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 font-['Poppins',sans-serif]">Verified Corporate Details</p>
              </div>
            </div>

            <div className="space-y-6">
              {companyFacts.map((fact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckmarkFilled 
                    style={{ color: "#207dd6" }}
                    className="h-5 w-5 shrink-0 mt-1" 
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 font-['Poppins',sans-serif]">
                      {fact.title}
                    </p>
                    <p className="text-base font-semibold text-slate-800">
                      {fact.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}