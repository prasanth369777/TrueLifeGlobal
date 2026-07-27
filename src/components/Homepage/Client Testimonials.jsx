import React from "react";
import { Star } from "@carbon/icons-react";

export default function ClientTestimonials() {
  const testimonials = [
    {
      quote:
        "True Life Global has been an invaluable partner for our startup. Their accounting and tax advisory services have helped us navigate Singapore's regulatory landscape with confidence. Highly recommended!",
      author: "Startup Founder",
      company: "Singapore Enterprise",
    },
    {
      quote:
        "The team at True Life Global provides exceptional service. Their attention to detail and proactive approach to compliance has given us total peace of mind to focus on scaling our business.",
      author: "Managing Director",
      company: "SME Operations",
    },
    {
      quote:
        "We appreciate the transparency and professionalism of True Life Global. Their courier services are completely reliable, and their financial advisory has been instrumental in our planning.",
      author: "Operations Head",
      company: "Logistics Partner",
    },
  ];

  // Duplicate items to create a seamless infinite loop
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="w-full overflow-hidden bg-white text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      {/* ================= CONTAINER (Matches consistent max-w-[104rem] width) ================= */}
      <div className="max-w-[104rem] mx-auto px-6 md:px-16 mb-24 flex flex-col items-center">
        
        {/* ================= HEADER SECTION (CENTERED) ================= */}
        <div className="w-full flex flex-col items-center text-center">
          <span 
            style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
          >
            Client Testimonials
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 font-['Poppins',sans-serif]">
            Trusted by <br />
            <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
              Our Clients Worldwide.
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-medium max-w-4xl">
            Hear what our valued clients have to say about our professional accounting, advisory, and courier solutions.
          </p>
        </div>
      </div>

      {/* ================= AUTO-SCROLLING INFINITY MARQUEE ================= */}
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee flex gap-12 shrink-0 py-4">
          {marqueeItems.map((t, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[450px] bg-transparent border-t-8 pt-8 flex flex-col justify-between shrink-0"
              style={{ borderTopColor: "#207dd6" }}
            >
              <div>
                <div className="flex items-center gap-1.5 text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg md:text-xl leading-relaxed text-slate-700 italic font-medium mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-900 font-['Poppins',sans-serif]">{t.author}</p>
                <p style={{ color: "#207dd6" }} className="text-sm font-semibold uppercase tracking-widest mt-1 font-['Poppins',sans-serif]">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= INFINITE ANIMATION STYLES ================= */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-33.333% - 1.5rem)); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}