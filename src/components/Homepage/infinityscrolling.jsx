import React from "react";

const scrollItems = [
  "Professional Accounting",
  "Financial Auditing",
  "Tax Consultancy",
  "Corporate Courier",
  "Business Consulting",
  "Corporate Strategy",
  "Risk Management",
  "Process Optimization",
  "Financial Advisory",
  "Global Expansion",
];

export default function ServicesMarquee() {
  const duplicatedItems = [...scrollItems, ...scrollItems, ...scrollItems];

  return (
    <section className="w-full overflow-hidden bg-white py-1 md:py-2 font-['Inter','Poppins',sans-serif]">
      
      {/* ================= COMPACT HORIZONTAL MARQUEE ================= */}
      <div className="relative flex w-full flex-col overflow-hidden border-y border-gray-100 bg-slate-50/50 py-2.5 md:py-3.5">
        
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />

        {/* Scrolling Container */}
        <div className="animate-horizontal-scroll flex w-fit items-center whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="px-3 text-xl font-bold uppercase tracking-tight text-blue-600 md:text-2xl lg:text-3xl transition-colors hover:text-blue-800 font-['Poppins',sans-serif]">
                {item}
              </div>
              
              {/* Visual Separator */}
              <div className="mx-3 text-blue-400 md:mx-6">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                </svg>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>
        {`
          @keyframes horizontalScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }

          .animate-horizontal-scroll {
            animation: horizontalScroll 40s linear infinite;
          }

          .animate-horizontal-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}