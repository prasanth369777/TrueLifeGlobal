import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "@carbon/icons-react";

// Placeholder imports for your 3 corporate images. 
// Replace these paths with your actual professional/corporate images.
import CorporateImg1 from "../../assests/Herobanner/hero1.gif";
import CorporateImg2 from "../../assests/Herobanner/hero1.gif";
import CorporateImg3 from "../../assests/Herobanner/hero1.gif";

const slides = [
  {
    id: 1,
    tag: "True Life Global Pte. Ltd.",
    title: "Clear Financials,\nConfident Decisions",
    shortTitle: "Accounting & Audit",
    desc: "We are an ACRA-registered Singapore firm offering professional accounting, auditing, tax consultancy, and courier services tailored for your business growth.",
    img: CorporateImg1,
  },
  {
    id: 2,
    tag: "Expert Consultancy",
    title: "Navigating Tax\nWith Precision",
    shortTitle: "Tax Consultancy",
    desc: "Strategic tax planning and strict compliance services designed to optimize your financial standing in Singapore's dynamic market.",
    img: CorporateImg2,
  },
  {
    id: 3,
    tag: "Seamless Operations",
    title: "Reliable Corporate\nCourier Services",
    shortTitle: "Courier & Support",
    desc: "Beyond numbers, we ensure your daily operations run smoothly with our dedicated corporate courier and logistical support services.",
    img: CorporateImg3,
  },
];

// Reusable Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col border-l border-white/20 pl-4 sm:pl-6">
      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Poppins',sans-serif]">
        {count}
        <span className="text-blue-400">{suffix}</span>
      </div>
      <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-100/70 font-['Poppins',sans-serif]">
        {label}
      </p>
    </div>
  );
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  // Auto-play slider with pause on hover
  useEffect(() => {
    if (isHovering) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovering]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const scrollToServices = useCallback(() => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-900 text-white selection:bg-blue-600 selection:text-white font-['Inter','Poppins',sans-serif]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Balanced height padding */}
      <div className="relative w-full flex flex-col justify-center py-28 lg:py-36">
        
        {/* ================= CORPORATE BACKGROUND OVERLAYS ================= */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.shortTitle}
                className={`h-full w-full object-cover transition-transform duration-[8000ms] ease-out ${
                  current === index ? "scale-105" : "scale-100"
                }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Professional Blue-Tinted Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/95 via-[#0a192f]/85 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-black/20" />
            </div>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16 flex flex-col justify-center py-16">
          <div className="w-full max-w-2xl lg:max-w-3xl">
            
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-5 overflow-hidden">
              <div className="h-px w-10 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 font-['Poppins',sans-serif]">
                {slides[current].tag}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="whitespace-pre-line text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6 font-['Poppins',sans-serif]">
              {slides[current].title}
            </h1>

            {/* Description / Intro */}
            <p className="text-base sm:text-lg font-light leading-relaxed text-blue-50/80 max-w-xl mb-10">
              {slides[current].desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
              <button
                type="button"
                onClick={() => window.location.href = "mailto:contact@truelifeglobal.com"}
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden bg-blue-600 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 cursor-pointer font-['Poppins',sans-serif]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="group flex w-full sm:w-auto items-center justify-center border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 cursor-pointer font-['Poppins',sans-serif]"
              >
                Explore Services
              </button>
            </div>

            {/* ================= ANIMATED STATS ROW ================= */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <AnimatedCounter target={4} label="Core Services" />
              <AnimatedCounter target={100} suffix="K+" label="Paid-Up Capital (SGD)" />
              <AnimatedCounter target={100} suffix="%" label="ACRA Registered" />
              <AnimatedCounter target={100} suffix="%" label="Compliance Focus" />
            </div>

          </div>
        </div>

        {/* ================= BOTTOM NAVIGATION TABS ================= */}
        <div className="relative z-30 pt-10 pb-6 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#0a192f]/60 backdrop-blur-md">
          <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Slide Progress Indicators */}
            <div className="flex items-center gap-4 w-full md:w-auto md:min-w-[500px]">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className="group relative flex-1 flex flex-col justify-end pb-2 bg-transparent border-0 cursor-pointer text-left"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-['Poppins',sans-serif] ${
                        current === index ? "text-white" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {slide.shortTitle}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative w-full h-1 bg-white/10 overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full bg-blue-500 transition-transform duration-[6000ms] ease-linear origin-left ${
                        current === index ? "scale-x-100" : "scale-x-0 duration-300"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-blue-900 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-blue-900 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}