import React from "react";
import { ArrowRight, Checkmark } from "@carbon/icons-react";

// Using 2 distinct high-quality corporate images
import CorporateImg1 from "../../assests/Herobanner/hero1.gif";
import CorporateImg2 from "../../assests/Herobanner/hero1.gif";

const services = [
  {
    id: "01",
    title: "Accounting & Bookkeeping",
    subtitle: "Precision Financial Records",
    desc: "Accurate, timely bookkeeping and financial record management to keep your accounts in order and ready for IRAS reporting.",
    img: CorporateImg1,
    tag: "Core Accounting",
  },
  {
    id: "02",
    title: "Auditing Services",
    subtitle: "Rigor & Total Transparency",
    desc: "Independent audits conducted with rigor and transparency, ensuring your financial statements meet Singapore regulatory standards.",
    img: CorporateImg2,
    tag: "Regulatory Audit",
  },
  {
    id: "03",
    title: "Financial Advisory",
    subtitle: "Strategic Growth Planning",
    desc: "Practical financial planning and business advisory support to help you make informed decisions and grow with confidence.",
    img: CorporateImg1,
    tag: "Executive Advisory",
  },
  {
    id: "04",
    title: "Courier Services",
    subtitle: "Secure & Time-Sensitive Logistics",
    desc: "Reliable document and parcel delivery within Singapore ideal for businesses needing secure, time-sensitive courier solutions.",
    img: CorporateImg2,
    tag: "Corporate Logistics",
  },
];

const workSteps = [
  {
    step: "01",
    title: "Understanding Your Requirements",
    desc: "Deep discovery sessions to understand your business goals, accounting needs, and compliance requirements.",
  },
  {
    step: "02",
    title: "Structured Financial Review",
    desc: "Comprehensive assessment of your current financial systems, processes, and regulatory status.",
  },
  {
    step: "03",
    title: "Compliance & Execution",
    desc: "Implementation of ACRA-compliant accounting, audit, tax, or courier solutions with precision and care.",
  },
  {
    step: "04",
    title: "Continuous Advisory & Support",
    desc: "Ongoing partnership with proactive guidance and responsive support for your Singapore business.",
  },
];

export default function ServicesAndProcess() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= SECTION 1: OUR SERVICES (OPEN CANVAS NO-BOX EDITORIAL LAYOUT) ================= */}
        <div className="mb-48">
          
          {/* Section Header */}
          <div className="mb-24 max-w-5xl border-l-8 pl-8" style={{ borderColor: "#207dd6" }}>
            <span 
              style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
              className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
            >
              Our Services
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 font-['Poppins',sans-serif]">
              Professional Solutions <br />
              <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
                Tailored for Singapore Enterprises.
              </span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-medium">
              Compliant, dependable financial architecture and logistical support aligned directly with ACRA and IRAS frameworks.
            </p>
          </div>

          {/* Open Modern Grid (No Outer Background Boxes/Rectangles) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-transparent flex flex-col justify-between border-b border-slate-300 pb-16"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span 
                      style={{ color: "#207dd6" }}
                      className="text-5xl md:text-6xl font-black font-['Poppins',sans-serif]"
                    >
                      {service.id}
                    </span>
                    <span 
                      style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.1)" }}
                      className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest font-['Poppins',sans-serif]"
                    >
                      {service.tag}
                    </span>
                  </div>

                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500 block mb-3 font-['Poppins',sans-serif]">
                    {service.subtitle}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight font-['Poppins',sans-serif] group-hover:text-[#207dd6] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium mb-10">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <a
                    href="mailto:contact@truelifeglobal.com"
                    style={{ color: "#207dd6" }}
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest transition-all hover:opacity-80 group-hover:translate-x-2 font-['Poppins',sans-serif]"
                  >
                    <span>Enquire Securely</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Verified SG Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: HOW WE WORK (CLEAN OPEN WORKFLOW STREAM) ================= */}
        <div>
          
          <div className="mb-20 max-w-4xl">
            <span 
              style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.1)" }}
              className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
            >
              How We Work
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-['Poppins',sans-serif]">
              Structured <span style={{ color: "#207dd6" }}>Engagement Model</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
              Our structured engagement model ensures seamless collaboration and exceptional results.
            </p>
          </div>

          {/* Open Layout Stepper Stream (No Containers/Rectangles) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {workSteps.map((item, index) => (
              <div 
                key={index} 
                className="relative bg-white p-10 border-t-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl"
                style={{ borderTopColor: "#207dd6" }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span 
                      style={{ color: "#207dd6" }}
                      className="text-4xl md:text-5xl font-black font-['Poppins',sans-serif]"
                    >
                      {item.step}
                    </span>
                    <div 
                      style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                      className="flex h-12 w-12 items-center justify-center"
                    >
                      <Checkmark className="h-6 w-6" />
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-snug font-['Poppins',sans-serif]">
                    {item.title}
                  </h4>

                  <p className="text-base md:text-lg leading-relaxed text-slate-700 font-medium mb-8">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 text-xs font-bold uppercase tracking-widest text-slate-500 font-['Poppins',sans-serif]">
                  Phase {item.step} Execution
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}