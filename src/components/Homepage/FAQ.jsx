import React, { useState } from "react";
import { Add, Subtract, ArrowRight, Email } from "@carbon/icons-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We provide professional accounting, auditing, tax consultancy, and secure courier services tailored for startups, SMEs, and growing enterprises in Singapore.",
    },
    {
      question: "Do you support international clients?",
      answer: "Yes, we support international clients looking to establish and manage their business operations, compliance, and financial frameworks in Singapore.",
    },
    {
      question: "How do you ensure compliance?",
      answer: "We operate strictly in accordance with ACRA and IRAS regulations, implementing robust internal controls, rigorous financial reviews, and continuous statutory monitoring.",
    },
    {
      question: "How do we get started?",
      answer: "Getting started is simple. Schedule an initial consultation with our team to discuss your business goals, compliance needs, and service requirements.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in supporting a wide range of industries including technology, retail, logistics, professional services, and general trading enterprises across Singapore.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="faq" className="w-full bg-white text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 flex flex-col items-center text-center">
        
        {/* ================= HEADER SECTION (CENTERED) ================= */}
        <div className="mb-28 max-w-4xl">
          <span 
            style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
          >
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 font-['Poppins',sans-serif]">
            Quick answers to <br />
            <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
              common questions.
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-light">
            Everything you need to know about our professional services and engagement models.
          </p>
        </div>

        {/* ================= OPEN CANVAS FAQ ACCORDION (CENTERED, NO BG RECTANGLES) ================= */}
        <div className="w-full max-w-4xl mb-32 space-y-6 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border-b border-slate-300 pb-6 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-4 group cursor-pointer"
                >
                  <span className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-[#207dd6] transition-colors font-['Poppins',sans-serif]">
                    {faq.question}
                  </span>
                  <div 
                    style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center transition-transform duration-300 ml-4"
                  >
                    {isOpen ? <Subtract className="h-6 w-6" /> : <Add className="h-6 w-6" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pb-6 pr-12 animate-fadeIn">
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA BAR (CENTERED) ================= */}
        <div className="w-full max-w-5xl border-t border-b border-slate-300 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white px-10 shadow-sm text-center lg:text-left">
          <div>
            <span style={{ color: "#207dd6" }} className="text-sm font-bold uppercase tracking-[0.3em] block mb-3 font-['Poppins',sans-serif]">
              Have More Questions?
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-['Poppins',sans-serif]">
              Speak directly with our experts.
            </h3>
            <p className="text-slate-600 text-lg md:text-xl mt-4 font-light max-w-3xl">
              We are ready to provide custom answers tailored to your enterprise requirements in Singapore.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto justify-center">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              style={{ backgroundColor: "#207dd6" }}
              className="inline-flex items-center justify-center gap-4 px-10 py-6 text-base font-bold uppercase tracking-widest text-white transition hover:opacity-90 font-['Poppins',sans-serif] shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="mailto:contact@truelifeglobal.com"
              style={{ borderColor: "#207dd6", color: "#207dd6" }}
              className="inline-flex items-center justify-center gap-4 border-2 bg-white px-10 py-6 text-base font-bold uppercase tracking-widest transition hover:bg-[#207dd6]/5 font-['Poppins',sans-serif]"
            >
              <span>Email Us</span>
              <Email className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}