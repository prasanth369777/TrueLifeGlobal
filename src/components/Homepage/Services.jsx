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
    desc: "Accurate, timely bookkeeping and financial record management designed to keep your accounts seamlessly organized and fully prepared for IRAS reporting.",
    img: CorporateImg1,
    tag: "Core Accounting",
  },
  {
    id: "02",
    title: "Auditing Services",
    subtitle: "Rigor & Total Transparency",
    desc: "Independent, objective audits conducted with meticulous attention to detail, ensuring your financial statements strictly meet Singapore regulatory standards.",
    img: CorporateImg2,
    tag: "Regulatory Audit",
  },
  {
    id: "03",
    title: "Financial Advisory",
    subtitle: "Strategic Growth Planning",
    desc: "Practical financial planning and executive business advisory support engineered to help you make informed corporate decisions and scale with absolute confidence.",
    img: CorporateImg1,
    tag: "Executive Advisory",
  },
  {
    id: "04",
    title: "Courier Services",
    subtitle: "Secure & Time-Sensitive Logistics",
    desc: "Dependable document and parcel delivery across Singapore, custom-built for modern enterprises needing secure, high-priority, time-sensitive transport.",
    img: CorporateImg2,
    tag: "Corporate Logistics",
  },
];

const workSteps = [
  {
    step: "01",
    title: "Understanding Your Requirements",
    desc: "Deep-dive discovery sessions designed to fully grasp your unique business objectives, accounting workflows, and specific compliance prerequisites.",
  },
  {
    step: "02",
    title: "Structured Financial Review",
    desc: "A comprehensive, multi-point assessment of your existing financial architecture, internal processes, and overall regulatory positioning.",
  },
  {
    step: "03",
    title: "Compliance & Execution",
    desc: "Flawless implementation of ACRA-compliant accounting frameworks, rigorous auditing protocols, targeted tax strategies, or secure courier pipelines.",
  },
  {
    step: "04",
    title: "Continuous Advisory & Support",
    desc: "An enduring, proactive partnership providing continuous strategic foresight and responsive, dedicated support for your Singapore enterprise.",
  },
];

export default function ServicesAndProcess() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 text-slate-900 py-24 lg:py-32 xl:py-40 font-['Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= SECTION 1: OUR SERVICES ================= */}
        <div className="mb-36">
          
          {/* Header with High Visual Contrast */}
          <div className="mb-20 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end border-b border-slate-200 pb-16">
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Core Capabilities
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] mt-4">
                Our Professional <br />
                <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
                  Services & Solutions.
                </span>
              </h2>
            </div>
            
            <div className="max-w-lg border-l-4 border-blue-600 pl-6">
              <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic">
                &ldquo;Delivering absolute precision in financial records, rigorous transparency in audits, and uncompromised reliability in business logistics.&rdquo;
              </p>
            </div>
          </div>

          {/* Cards Grid with Premium Typography */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(30,58,138,0.3)] h-[540px] border border-slate-800"
              >
                {/* Background Image with Deep Gradient Overlay */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30" />

                {/* Top Header Badge */}
                <div className="relative z-10 p-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center  bg-white/10 text-sm font-black text-white backdrop-blur-md border border-white/20 shadow-lg">
                    {service.id}
                  </span>
                  <span className="rounded-full bg-blue-600/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 backdrop-blur-sm border border-blue-500/30">
                    {service.tag}
                  </span>
                </div>

                {/* Content Section with Enhanced Visual Hierarchies */}
                <div className="relative z-10 p-8 pt-0 text-white flex flex-col justify-end">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-2 block">
                    {service.subtitle}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-white group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-300 mb-8 font-light">
                    {service.desc}
                  </p>

                  <a
                    href="mailto:contact@truelifeglobal.com"
                    className="group/btn inline-flex items-center justify-between  border border-white/20 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 shadow-xl"
                  >
                    <span>Enquire Securely</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: HOW WE WORK ================= */}
        <div className="rounded-[2.5rem] bg-white p-8 md:p-16 lg:p-20 shadow-2xl shadow-slate-200/60 border border-slate-100">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-slate-700">
              Engagement Lifecycle
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              How We <span className="text-blue-600">Work Together</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              Our structured 4-step framework guarantees complete operational clarity, zero guesswork, and uncompromising results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((item, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col justify-between rounded-3xl bg-slate-50 p-8 md:p-10 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:bg-white hover:-translate-y-2"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-5xl font-black text-blue-600/20 group-hover:text-blue-600/40 transition-colors">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center  bg-blue-50 text-blue-600 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Checkmark className="h-6 w-6" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-relaxed text-slate-600 font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                  <span>Phase {item.step} Complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}