import React from "react";
import Person1 from "../../assests/team/herosection/person1.png";

export default function HowWeWork() {
  return (
    <section id="director" className="w-full bg-white text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= EDITORIAL LEADERSHIP SECTION (NO CIRCLE, SHARP MODERN ARCHITECTURAL STYLE) ================= */}
        <div>
          
          {/* Section Header */}
          <div className="mb-24 text-center">
            <span 
              style={{ backgroundColor: "rgba(32, 125, 214, 0.08)", color: "#207dd6" }}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif] mb-4"
            >
              Executive Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-['Poppins',sans-serif]">
              Governance & <span style={{ color: "#207dd6" }}>Vision</span>
            </h2>
          </div>

          {/* Editorial Split Layout (Sharp Rectangle Portrait, Clean Canvas) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Sharp Rectangular Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-[#207dd6]/10 blur-2xl" />
                <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-900">
                  <img
                    src={Person1}
                    alt="Soundarrajan Vaithiyanathan - Founder & CEO"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                    <span style={{ color: "#207dd6" }} className="text-xs font-bold uppercase tracking-widest font-['Poppins',sans-serif] block mb-1">
                      True Life Global
                    </span>
                    <p className="text-sm font-semibold text-white">Executive Leadership Profile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Large Typography & Editorial Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="border-b border-slate-200 pb-8 mb-8">
                <span style={{ color: "#207dd6" }} className="text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-['Poppins',sans-serif]">
                  Director
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-['Poppins',sans-serif]">
                  Katijah Beebi Binte Mohamed Hanifa
                </h3>

                <span style={{ color: "#207dd6" }} className="text-sm font-bold uppercase tracking-[0.25em] block mb-2 font-['Poppins',sans-serif]">
                  Founder & CEO
                </span>
                <h4 className="text-xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-['Poppins',sans-serif]">
                  Soundarrajan Vaithiyanathan
                </h4>
              </div>

              <div className="space-y-6 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                <p>
                  Soundarrajan Vaithiyanathan is the visionary Founder and Chief Executive Officer of True Life Global Pte. Ltd., a Singapore-incorporated company delivering integrated accounting and logistics services. With over 14 years of progressive financial and operations experience across multinational corporations in Singapore and India, he brings deep expertise in financial management, compliance, and business operations to every client engagement.
                </p>
                <p>
                  His professional journey spans industry leaders including Genpact, Capgemini, Teleperformance, and Rohlig Blue Service, where he managed high-volume financial transactions, led cross-functional teams, and implemented SAP ERP systems across global business environments. He is a certified US GAAP professional from Ernst & Young (2026) and holds a Master of Business Administration (MBA), reinforcing his commitment to professional excellence.
                </p>
                <p>
                  Driven by a passion for empowering SMEs and individuals with reliable financial guidance and seamless logistics solutions, Soundarrajan founded True Life Global to bridge the gap between professional financial services and everyday business needs in Singapore.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}