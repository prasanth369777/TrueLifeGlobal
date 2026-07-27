import React from "react";
import { ArrowRight, Email, Task, Enterprise, UserAdmin} from "@carbon/icons-react";

export default function Careers() {
  const careerHighmediums = [
    {
      icon: Task,
      title: "Growth & Learning",
      desc: "Structured support, guidance, and skill development in Singapore accounting.",
    },
    {
      icon: Enterprise,
      title: "Real Exposure",
      desc: "Hands-on work across ACRA-compliant accounting and courier operations.",
    },
    {
      icon: UserAdmin,
      title: "Mentorship",
      desc: "Learn alongside experienced Singapore business professionals.",
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
    <section id="careers" className="w-full bg-slate-50 text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-28 max-w-5xl border-l-8 pl-8" style={{ borderColor: "#207dd6" }}>
          <span 
            style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
          >
            Careers
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 font-['Poppins',sans-serif]">
            Join True Life Global <br />
            <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
              Pte. Ltd.
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-medium">
            A place to grow, learn, and build a meaningful career backed by real-world Singapore business exposure.
          </p>
        </div>

        {/* ================= EDITORIAL CONTENT SPLIT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-40 items-start">
          <div className="lg:col-span-5">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-['Poppins',sans-serif]">
              More than a job, it's an opportunity.
            </h3>
            <p className="mt-6 text-base font-semibold uppercase tracking-widest text-slate-500 font-['Poppins',sans-serif]">
              Professional Services Career
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8 text-lg md:text-xl font-medium text-slate-700 leading-relaxed">
            <p>
              Becoming a part of True Life Global Pte. Ltd. is not merely about securing employment; it is about building your career in a Singapore-registered, ACRA-compliant professional services environment.
            </p>
            <p>
              Whether you are an experienced professional or a recent graduate eager to launch your career, True Life Global presents outstanding prospects for growth in accounting, tax, and business services.
            </p>
            <p className="font-medium text-slate-900">
              Take the first step towards a fulfilling career with us.
            </p>
          </div>
        </div>

        {/* ================= CAREER HIGHmediumS (OPEN CANVAS CARDS) ================= */}
        <div className="mb-40">
          <div className="mb-16 border-b border-slate-300 pb-6 flex items-baseline justify-between">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 font-['Poppins',sans-serif]">
              Why Build Your Career With Us
            </h3>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Growth & Development</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {careerHighmediums.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  style={{ borderTopColor: "#207dd6" }}
                  className="bg-white p-12 border-t-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-xl"
                >
                  <div>
                    <div 
                      style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                      className="mb-8 flex h-16 w-16 items-center justify-center"
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-['Poppins',sans-serif]">
                      {item.title}
                    </h4>
                    <p className="text-lg leading-relaxed text-slate-700 font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ color: "#207dd6" }} className="mt-12 pt-6 border-t border-slate-100 text-sm font-bold uppercase tracking-widest">
                    True Life Pathway
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= APPLY / GET IN TOUCH CTA BAR ================= */}
        <div className="border-t border-b border-slate-300 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white px-10 shadow-sm">
          <div>
            <span style={{ color: "#207dd6" }} className="text-sm font-bold uppercase tracking-[0.3em] block mb-3 font-['Poppins',sans-serif]">
              Join Our Team
            </span>
            <h3 className="text-3xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-['Poppins',sans-serif]">
              Ready to take the first step?
            </h3>
            <p className="text-slate-600 text-lg md:text-xl mt-4 font-medium max-w-3xl">
              Send your CV and cover letter directly to our recruitment team to explore open opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              style={{ backgroundColor: "#207dd6" }}
              className="inline-flex items-center justify-center gap-4 px-10 py-6 text-base font-bold uppercase tracking-widest text-white transition hover:opacity-90 font-['Poppins',sans-serif] shadow-lg"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="mailto:contact@truelifeglobal.com"
              style={{ borderColor: "#207dd6", color: "#207dd6" }}
              className="inline-flex items-center justify-center gap-4 border-2 bg-white px-10 py-6 text-base font-bold uppercase tracking-widest transition hover:bg-[#207dd6]/5 font-['Poppins',sans-serif]"
            >
              <span>Email HR</span>
              <Email className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}