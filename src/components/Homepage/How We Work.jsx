import React from "react";
import { Checkmark, ArrowRight, Document, Analytics, Play, Network_3 } from "@carbon/icons-react";

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Understanding Your Requirements",
      duration: "Typical Duration: 1-2 Weeks",
      desc: "We begin with deep discovery sessions to understand your business goals, accounting needs, and compliance requirements. Our team takes the time to learn about your industry, challenges, and growth aspirations.",
      items: [
        "Initial consultation and needs assessment",
        "Review of your current financial systems and processes",
        "Understanding your regulatory and compliance obligations (ACRA, IRAS)",
        "Identifying opportunities for improvement and growth",
        "Setting clear expectations and deliverables",
      ],
      icon: Document,
    },
    {
      num: "02",
      title: "Structured Financial Review",
      duration: "Typical Duration: 2-3 Weeks",
      desc: "We conduct a comprehensive assessment of your current financial systems, processes, and regulatory status. This thorough review helps us identify gaps, risks, and opportunities for optimization.",
      items: [
        "Financial records and bookkeeping practices",
        "Internal controls and procedures",
        "Regulatory compliance status (ACRA, IRAS)",
        "Tax planning and reporting processes",
        "Business operations and workflow efficiency",
        "Existing accounting software and systems",
      ],
      icon: Analytics,
    },
    {
      num: "03",
      title: "Compliance & Execution",
      duration: "Typical Duration: 4-6 Weeks (Ongoing thereafter)",
      desc: "Implementation of ACRA-compliant accounting, audit, tax, or courier solutions with precision and care. We execute our tailored solutions while maintaining the highest standards of professionalism.",
      items: [
        "Setup or improvement of accounting systems",
        "Implementation of bookkeeping and record-keeping processes",
        "Audit planning and execution",
        "Tax filing and compliance support",
        "Courier service setup and management",
        "Staff training and handover",
      ],
      icon: Play,
    },
    {
      num: "04",
      title: "Continuous Advisory & Support",
      duration: "Duration: Ongoing Partnership",
      desc: "Ongoing partnership with proactive guidance and responsive support for your Singapore business. We remain available for questions, provide regular updates, and help you navigate changing regulations.",
      items: [
        "Monthly financial reporting and reviews",
        "Quarterly compliance check-ins",
        "Annual audit and tax support",
        "Proactive regulatory updates and alerts",
        "Unlimited email and phone support during business hours",
        "Strategic business advisory services",
      ],
      icon: Network_3,
    },
  ];

  const benefits = [
    {
      title: "Clarity & Transparency",
      desc: "We keep you informed at every stage with clear communication and no hidden surprises.",
    },
    {
      title: "Compliance-First Approach",
      desc: "Every process is designed with regulatory requirements at the core, ensuring your business meets all statutory obligations.",
    },
    {
      title: "Personalized Service",
      desc: "Tailored solutions that adapt to your unique business requirements, growth trajectory, and evolving compliance needs.",
    },
    {
      title: "Monthly Discipline",
      desc: "Consistent monthly close processes for reliable financial insights, timely reporting cycles, and proactive financial management.",
    },
    {
      title: "Trusted Partnership",
      desc: "We act as an extension of your team, building long-term relationships based on trust, integrity, and service excellence.",
    },
  ];

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
    <section id="process" className="w-full bg-white text-slate-900 py-24 lg:py-32 font-['Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= HEADER SECTION WITH ENHANCED VISUAL TYPOGRAPHY ================= */}
        <div className="mb-24 flex flex-col items-start justify-between gap-10 border-b border-slate-200 pb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              Our Engagement Model
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] mt-4">
              How We <br />
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
                Work Together.
              </span>
            </h2>
          </div>
          
          <div className="max-w-lg border-l-4 border-blue-600 pl-6">
            <p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed italic">
              &ldquo;A structured 4-step framework designed to deliver professional accounting, auditing, tax, and courier services with absolute precision and care.&rdquo;
            </p>
          </div>
        </div>

        {/* ================= 4-STEP TIMELINE / GRID (NO BORDER RADIUS) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {steps.map((stepItem, index) => {
            const Icon = stepItem.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col justify-between bg-slate-50 border border-slate-200 p-8 md:p-12 transition-all duration-300 hover:border-blue-600 hover:bg-white hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl md:text-6xl font-black text-blue-600">
                        {stepItem.num}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded bg-blue-100 text-blue-700">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <span className="bg-blue-100 px-4 py-1.5 text-xs font-bold text-blue-800 uppercase tracking-widest">
                      {stepItem.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
                    {stepItem.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed mb-8 font-light">
                    {stepItem.desc}
                  </p>

                  <div className="space-y-3 border-t border-slate-200 pt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                      Key Scope & Deliverables:
                    </p>
                    {stepItem.items.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Checkmark className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>Phase {stepItem.num} Execution</span>
                  <span className="text-blue-600">True Life Global Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= WHY OUR PROCESS WORKS (NO BORDER RADIUS) ================= */}
        <div className="bg-slate-900 text-white p-8 md:p-16 lg:p-20 shadow-2xl">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-300 border border-blue-500/30">
              Proven Methodology
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              Why Our Process <span className="text-blue-400">Works</span>
            </h3>
            <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">
              Engineered specifically for Singapore enterprises to guarantee zero friction, strict statutory adherence, and total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-8 transition-all hover:border-blue-400 hover:bg-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white font-bold mb-6">
                    0{index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {b.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300 font-light">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-widest text-blue-400">
                  Guaranteed Execution
                </div>
              </div>
            ))}

            {/* CTA Box inside grid */}
            <div className="bg-blue-600 border border-blue-500 p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  Ready to optimize your operations?
                </h4>
                <p className="text-sm leading-relaxed text-blue-50 font-light">
                  Let’s walk through our engagement model tailored directly to your company goals.
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-8 inline-flex items-center justify-between bg-white px-6 py-4 text-xs font-bold uppercase tracking-widest text-blue-900 transition hover:bg-slate-100"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}