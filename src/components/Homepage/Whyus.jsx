import React from "react";
import {
  Enterprise,
  Task,
  CheckmarkFilled,
  Locked,
  Globe,
  ChartLine,
  UserAdmin,
} from "@carbon/icons-react";

export default function WhyUs() {
  const coreStrengths = [
    {
      icon: Enterprise,
      title: "Officially Registered in Singapore",
      desc: "True Life Global Pte. Ltd. is a legitimate ACRA-registered private limited company (UEN: 202626385E), incorporated on 11 June 2026. You are working with a real, accountable business you can trust.",
      points: [
        "Live Company Status – Active & fully compliant",
        "Paid-Up Capital – SGD 100,000 financial stability",
        "ACRA & IRAS Registered – Statutory adherence",
      ],
    },
    {
      icon: Task,
      title: "Two Essential Services Under One Roof",
      desc: "We provide Accounting, Auditing & Tax Consultancy together with Courier & Delivery Services, giving your business one dependable partner for both financial and logistics support.",
      points: [
        "Convenience – Single point of contact",
        "Cost Savings – Bundled pricing structures",
        "Integrated Solutions – Seamless workflow",
      ],
    },
    {
      icon: CheckmarkFilled,
      title: "Fully Compliant & Accountable",
      desc: "As a Singapore-registered company, we operate in line with ACRA and IRAS requirements, ensuring your finances and deliveries are managed with compliance, care, and professionalism.",
      points: [
        "Regular regulatory updates",
        "Robust internal controls",
        "Transparent documentation",
      ],
    },
    {
      icon: ChartLine,
      title: "Transparent & Affordable Pricing",
      desc: "No hidden charges and no unexpected costs. We offer clear, competitive pricing tailored for SMEs, startups, and growing businesses in Singapore.",
      points: [
        "Clear cost breakdowns",
        "Fixed-fee predictable budgeting",
        "Zero hidden fees",
      ],
    },
  ];

  const advantages = [
    {
      icon: Task,
      title: "Fast & Reliable Operations",
      desc: "Whether it's handling tax submissions or delivering important documents, we work around your deadlines with speed, reliability, and attention to detail.",
    },
    {
      icon: Locked,
      title: "Built for Singapore Businesses",
      desc: "We understand the local business environment, from GST and ACRA compliance to last-mile delivery across Singapore. We provide practical solutions that match real business needs.",
    },
    {
      icon: Globe,
      title: "Global Experience",
      desc: "Our team brings extensive expertise from multinational corporations across Singapore and India, delivering international standards of professional service locally.",
    },
    {
      icon: ChartLine,
      title: "Process Excellence",
      desc: "We maintain rigorous, best-in-class operational standards across all service verticals, ensuring consistent quality, speed, and reliability.",
    },
  ];

  const differentiators = [
    {
      icon: UserAdmin,
      title: "Personalized Service",
      desc: "Tailored solutions that adapt directly to your unique business requirements, growth trajectory, and evolving statutory compliance needs.",
    },
    {
      icon: Task,
      title: "Monthly Discipline",
      desc: "Consistent monthly close protocols for reliable financial insights, timely reporting cycles, and proactive fiscal management.",
    },
    {
      icon: Enterprise,
      title: "Expert Leadership",
      desc: "Led by Founder & CEO Soundarrajan Vaithiyanathan, featuring 14+ years of financial leadership across Genpact, Capgemini, Teleperformance, and Rohlig Blue Service, alongside US GAAP certification from Ernst & Young (2026).",
    },
  ];

  return (
    <section id="why-us" className="w-full bg-slate-50 text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-32 max-w-5xl">
          <span 
            style={{ backgroundColor: "rgba(32, 125, 214, 0.08)", color: "#207dd6" }}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
          >
            Why Choose True Life Global Pte. Ltd.?
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8 font-['Poppins',sans-serif]">
            Your Trusted Partner For <br />
            <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
              Business Success in Singapore.
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-medium">
            A Singapore-registered company delivering trusted financial expertise and reliable courier support for modern businesses.
          </p>
        </div>

        {/* ================= CORE STRENGTHS ================= */}
        <div className="mb-40">
          <div className="mb-16 border-b border-slate-300 pb-6 flex items-baseline justify-between">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 font-['Poppins',sans-serif]">
              Our Core Strengths
            </h3>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Pillars of Excellence</span>
          </div>

          <div className="space-y-24">
            {coreStrengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-slate-200 pb-20 last:border-0"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-6 mb-6">
                      <span style={{ color: "#207dd6" }} className="text-5xl md:text-6xl font-black font-['Poppins',sans-serif]">
                        0{index + 1}
                      </span>
                      <div style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }} className="flex h-16 w-16 items-center justify-center">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h4 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Poppins',sans-serif]">
                      {item.title}
                    </h4>
                  </div>

                  <div className="lg:col-span-8 flex flex-col justify-center">
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-10">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                      {item.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckmarkFilled style={{ color: "#207dd6" }} className="h-6 w-6 shrink-0 mt-1" />
                          <span className="text-base text-slate-800 font-semibold">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= COMPETITIVE ADVANTAGES ================= */}
        <div className="mb-40">
          <div className="mb-16 border-b border-slate-300 pb-6 flex items-baseline justify-between">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 font-['Poppins',sans-serif]">
              Our Competitive Advantages
            </h3>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Core Capabilities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="flex flex-col justify-between group bg-white p-10 border border-slate-200 shadow-sm transition-all hover:shadow-xl">
                  <div>
                    <div 
                      style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                      className="mb-8 flex h-16 w-16 items-center justify-center transition-colors group-hover:bg-[#207dd6] group-hover:text-white"
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 font-['Poppins',sans-serif]">
                      {adv.title}
                    </h4>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      {adv.desc}
                    </p>
                  </div>
                  <div style={{ color: "#207dd6" }} className="mt-10 pt-6 border-t border-slate-100 text-sm font-bold uppercase tracking-widest">
                    True Life Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= WHAT SETS US APART ================= */}
        <div className="mb-20">
          <div className="mb-16 border-b border-slate-300 pb-6 flex items-baseline justify-between">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 font-['Poppins',sans-serif]">
              What Sets Us Apart
            </h3>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Distinctive Approach</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div 
                  key={index}
                  style={{ borderLeftColor: "#207dd6" }}
                  className="relative bg-white p-12 flex flex-col justify-between transition-all shadow-md border-l-8"
                >
                  <div>
                    <div style={{ backgroundColor: "#207dd6" }} className="mb-8 flex h-16 w-16 items-center justify-center text-white">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-6 font-['Poppins',sans-serif]">
                      {diff.title}
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-700 font-medium">
                      {diff.desc}
                    </p>
                  </div>
                  <div style={{ color: "#207dd6" }} className="mt-12 pt-6 border-t border-slate-200 text-sm font-bold uppercase tracking-widest">
                    Executive Excellence
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}