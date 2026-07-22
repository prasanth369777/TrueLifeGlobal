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
  // We duplicate the items a few times to ensure seamless infinite scrolling 
  // on ultra-wide screens without gaps.
  const duplicatedItems = [...scrollItems, ...scrollItems, ...scrollItems];

  return (
    <section className="w-full overflow-hidden bg-white py-4 md:py-8">
      
      {/* ================= HORIZONTAL MARQUEE ================= */}
      <div className="relative flex w-full flex-col overflow-hidden border-y border-gray-100 bg-slate-50/50 py-5 md:py-8">
        
        {/* Gradient Masks for smooth fade at left and right edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        {/* Scrolling Container */}
        <div className="animate-horizontal-scroll flex w-fit items-center whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="px-4 text-3xl font-black uppercase tracking-tight text-blue-600 md:text-5xl lg:text-6xl transition-colors hover:text-blue-800">
                {item}
              </div>
              
              {/* Visual Separator */}
              <div className="mx-4 text-blue-400 md:mx-8">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
          /* Horizontal Scroll Animation */
          @keyframes horizontalScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              /* Move exactly by one third of the width because we duplicated the array 3 times */
              transform: translateX(calc(-100% / 3));
            }
          }

          .animate-horizontal-scroll {
            animation: horizontalScroll 45s linear infinite;
          }

          .animate-horizontal-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}