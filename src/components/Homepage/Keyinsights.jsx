import React from "react";
import { Task, ChartLine, Calendar, UserAdmin } from "@carbon/icons-react";

export default function KeyInsights() {
  const insights = [
    {
      icon: Task,
      title: "Compliance-First",
      desc: "Every process designed with regulatory requirements at the core, ensuring your business meets all statutory obligations with confidence and precision.",
    },
    {
      icon: ChartLine,
      title: "Transparent Pricing",
      desc: "Clear cost structures with no hidden fees or unexpected charges, providing complete financial clarity and predictable engagement costs.",
    },
    {
      icon: Calendar,
      title: "Monthly Discipline",
      desc: "Consistent monthly close processes for reliable financial insights, timely reporting cycles, and proactive financial management.",
    },
    {
      icon: UserAdmin,
      title: "Personalized Service",
      desc: "Tailored solutions that adapt to your unique business requirements, growth trajectory, and evolving compliance needs.",
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      {/* ================= CONTAINER (Matches consistent max-w-[104rem] width) ================= */}
      <div className="max-w-[104rem] mx-auto px-6 md:px-16 flex flex-col items-center">
        
        {/* ================= HEADER SECTION (CENTERED) ================= */}
        <div className="mb-28 w-full flex flex-col items-center text-center">
          <span 
            style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
          >
            Key Insights
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 font-['Poppins',sans-serif]">
            What sets us apart in the <br />
            <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
              Accounting & Advisory Landscape.
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-medium max-w-4xl">
            Our commitment to excellence drives everything we do for Singapore enterprises.
          </p>
        </div>

        {/* ================= OPEN CANVAS SQUARE PILLARS (NO BG RECTANGLES) ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {insights.map((item, index) => {
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
                    className="mb-8 flex h-16 w-16 items-center justify-center rounded-none"
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-['Poppins',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-700 font-medium">
                    {item.desc}
                  </p>
                </div>
                <div style={{ color: "#207dd6" }} className="mt-12 pt-6 border-t border-slate-200 text-sm font-bold uppercase tracking-widest font-['Poppins',sans-serif]">
                  Key Insight 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}