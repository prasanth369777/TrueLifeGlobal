import React from "react";
import { CheckmarkFilled, Security, Globe, ChartLine } from "@carbon/icons-react";

export default function TrustedByBusinesses() {
  const trustItems = [
    {
      icon: CheckmarkFilled,
      title: "Compliance Driven",
      desc: "Regulatory excellence across all statutory frameworks.",
    },
    {
      icon: Security,
      title: "Confidentiality Assured",
      desc: "Data protection guaranteed with strict institutional protocols.",
    },
    {
      icon: Globe,
      title: "Global Experience",
      desc: "International expertise brought to local business operations.",
    },
    {
      icon: ChartLine,
      title: "Process Excellence",
      desc: "Best-in-class standards ensuring efficiency and precision.",
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-28 max-w-5xl border-l-8 pl-8" style={{ borderColor: "#207dd6" }}>
          <span 
            style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
          >
            Global Standards
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 font-['Poppins',sans-serif]">
            Trusted by Businesses <br />
            <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
              Worldwide.
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-light">
            Our commitment to excellence drives everything we do.
          </p>
        </div>

        {/* ================= OPEN CANVAS TRUST PILLARS (NO BG RECTANGLES) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                style={{ borderTopColor: "#207dd6" }}
                className="bg-transparent border-t-8 pt-8 flex flex-col justify-between"
              >
                <div>
                  <div 
                    style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                    className="mb-8 flex h-16 w-16 items-center justify-center"
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-['Poppins',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-700 font-light">
                    {item.desc}
                  </p>
                </div>
                <div style={{ color: "#207dd6" }} className="mt-12 pt-6 border-t border-slate-200 text-sm font-bold uppercase tracking-widest">
                  Global Standard 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}