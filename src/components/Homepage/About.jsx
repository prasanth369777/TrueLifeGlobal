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
  ChartLine,
} from "@carbon/icons-react";

// Placeholder image import (Replace with your actual working image path or use an Unsplash URL)
import CenterImage from "../../assests/Herobanner/hero1.gif"; 

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
    <section id="about" className="relative w-full overflow-hidden bg-white text-slate-900 py-24 lg:py-32 xl:py-40">
      
      {/* ================= MOTION GRAPHIC BACKGROUNDS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Glows */}
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-blue-50/80 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-100/80 blur-[120px]" />
        
        {/* Massive Background Scrolling Text (Motion Graphic Vibe) */}
        <div className="absolute top-[5%] left-0 flex whitespace-nowrap opacity-[0.02] select-none">
          <div className="animate-marquee-fast text-[15rem] font-black uppercase tracking-tighter">
            TRUE LIFE GLOBAL &bull; PROFESSIONAL SERVICES &bull; 
          </div>
          <div className="animate-marquee-fast text-[15rem] font-black uppercase tracking-tighter">
            TRUE LIFE GLOBAL &bull; PROFESSIONAL SERVICES &bull; 
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= INTRO SECTION ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24 items-end mb-24">
          <div className="xl:col-span-7">
            <span className="mb-6 inline-block text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
              About Our Company
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-6xl xl:text-[5.5rem] font-bold tracking-tight text-slate-900 leading-[1.05]">
              A Trusted <br />
              <span className="text-blue-600">Global Partner.</span>
            </h2>
          </div>

          <div className="xl:col-span-5 flex flex-col justify-end">
            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug mb-6">
              True Life Global Pte. Ltd. is a Singapore-based firm committed to delivering reliable, efficient, and client-focused business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl active:scale-95"
              >
                Work With Us <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="mailto:contact@truelifeglobal.com"
                className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:border-blue-600 hover:text-blue-600 active:scale-95"
              >
                Email Us <Email className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ================= CENTRAL IMAGE WITH MOTION GRAPHICS ================= */}
        <div className="relative w-full h-[50vh] md:h-[70vh] xl:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-32 shadow-2xl group">
          {/* Base Image with Cinematic Zoom */}
          <img 
            src={CenterImage} 
            alt="True Life Global Corporate Services" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
          />
          {/* Blue Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-slate-900/20 to-transparent mix-blend-multiply" />
          
          {/* Floating UI Elements (Motion Graphic Badges) */}
          <div className="absolute top-10 left-10 md:top-16 md:left-16 animate-float">
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
                <CheckmarkFilled className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Verified</p>
                <p className="text-lg font-bold text-white">ACRA Registered</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 md:bottom-16 md:right-16 animate-float-delayed">
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-black/20 p-5 backdrop-blur-md shadow-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600">
                <ChartLine className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Paid-Up Capital</p>
                <p className="text-xl font-bold text-white">SGD 100,000</p>
              </div>
            </div>
          </div>

          {/* Spinning Circular Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="relative flex h-32 w-32 md:h-48 md:w-48 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm">
              <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[10.5px] font-bold uppercase tracking-[0.25em]" fill="white">
                  <textPath href="#circlePath" startOffset="0%">
                    True Life Global &bull; Singapore &bull; Professional Firm &bull;
                  </textPath>
                </text>
              </svg>
              <Enterprise className="h-8 w-8 md:h-12 md:w-12 text-white" />
            </div>
          </div>
        </div>

        {/* ================= TEXT DETAILS ================= */}
        <div className="mx-auto max-w-8xl text-center mb-32">
          <p className="text-lg md:text-2xl leading-relaxed text-slate-600 mb-8">
            Our mission is to help businesses streamline their financial operations, maintain regulatory compliance, and achieve sustainable growth through practical and professional support. We combine industry knowledge, attention to detail, and a customer-centric approach to provide tailored solutions that meet the unique needs of startups, SMEs, and growing enterprises.
          </p>
          <p className="text-lg md:text-2xl leading-relaxed text-slate-600">
            At True Life Global, we believe in building long-term relationships with our clients by acting as a trusted extension of their teams. Whether it is managing financial records, providing tax advisory services, supporting audit requirements, or delivering dependable courier solutions, we are dedicated to excellence, integrity, and service quality.
          </p>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-32">
          {/* Vision Card */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-slate-900 p-12 md:p-16 xl:p-20 shadow-2xl transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute top-0 right-0 p-12 opacity-[0.07] pointer-events-none">
              <Idea className="h-48 w-48 text-white" />
            </div>
            <div className="relative z-10">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <Idea className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Vision</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-slate-300 italic">
                &quot;To be a trusted global partner empowering businesses and individuals through seamless financial solutions and reliable delivery services connecting lives, one transaction at a time.&quot;
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-blue-600 p-12 md:p-16 xl:p-20 shadow-2xl shadow-blue-600/20 transition-transform hover:-translate-y-2 duration-500">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <Task className="h-48 w-48 text-white" />
            </div>
            <div className="relative z-10">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                <Task className="h-8 w-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h3>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug text-blue-50 italic">
                &quot;At True Life Global, we deliver expert accounting, auditing, tax, and courier services — simplifying compliance and empowering businesses to grow with confidence.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* ================= VALUES & FACTS SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-28 items-start">
          
          {/* Why Choose Us */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight">
              Why Choose True Life Global
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {coreValues.map((val, index) => (
                <div key={index} className="rounded-2xl border border-slate-100 bg-slate-50 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <val.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                    {val.title}
                  </h4>
                  <p className="text-base md:text-lg leading-relaxed text-slate-600">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Facts */}
          <div className="lg:sticky lg:top-32">
            <div className="rounded-3xl border border-slate-100 bg-white p-10 md:p-14 xl:p-16 shadow-2xl shadow-slate-200/50">
              <div className="mb-12 flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Enterprise className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">Company Profile</h3>
                  <p className="text-base font-medium uppercase tracking-widest text-slate-500">Verified Corporate Details</p>
                </div>
              </div>

              <div className="space-y-8">
                {companyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-6 border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                    <CheckmarkFilled className="h-7 w-7 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                        {fact.title}
                      </p>
                      <p className="text-lg md:text-xl font-semibold text-slate-800">
                        {fact.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= INLINE ANIMATION STYLES ================= */}
      <style>
        {`
          @keyframes marquee-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-fast {
            animation: marquee-fast 30s linear infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float-delayed {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float-delayed {
            animation: float-delayed 6s ease-in-out infinite;
            animation-delay: 3s;
          }

          @keyframes spin-slow {
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}