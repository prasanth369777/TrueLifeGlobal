import React from "react";
import {
  Enterprise,
  Task,
  CheckmarkFilled,
  Star,
  Locked,
  Globe,
  ChartLine,
  UserAdmin,
  ArrowRight,
} from "@carbon/icons-react";

export default function WhyUs() {
  const coreStrengths = [
    {
      icon: Enterprise,
      title: "Officially Registered & Compliant",
      desc: "Legitimate ACRA-registered private limited company (UEN: 202626385E), incorporated with SGD 100,000 paid-up capital. Live company status, fully compliant with Singapore Companies Act and IRAS regulations.",
      points: [
        "Live Company Status – Active & fully compliant",
        "Paid-Up Capital – SGD 100,000 financial stability",
        "ACRA & IRAS Registered – Statutory adherence",
      ],
    },
    {
      icon: Task,
      title: "Two Essential Services Under One Roof",
      desc: "Providing Accounting, Auditing & Tax Consultancy together with Courier & Delivery Services, giving your business one dependable partner for financial and logistics support.",
      points: [
        "Convenience – Single point of contact",
        "Cost Savings – Bundled pricing structures",
        "Integrated Solutions – Seamless workflow",
      ],
    },
    {
      icon: CheckmarkFilled,
      title: "Fully Compliant & Accountable",
      desc: "We operate strictly in line with ACRA and IRAS requirements, ensuring your finances and deliveries are managed with absolute compliance, care, and professionalism.",
      points: [
        "Regular regulatory updates",
        "Robust internal controls",
        "Transparent documentation",
      ],
    },
    {
      icon: ChartLine,
      title: "Transparent & Affordable Pricing",
      desc: "No hidden charges and no unexpected costs. We offer clear, competitive pricing tailored specifically for SMEs, startups, and growing enterprises in Singapore.",
      points: [
        "Clear cost breakdowns",
        "Fixed-fee predictable budgeting",
        "Zero hidden fees",
      ],
    },
  ];

  const advantages = [
    {
      icon: Task,
      title: "Compliance-First Approach",
      desc: "Every process is designed with regulatory requirements at the core, ensuring your business meets all statutory obligations with confidence and precision.",
    },
    {
      icon: Locked,
      title: "Confidentiality Assured",
      desc: "Data protection and confidentiality are paramount. We treat your corporate information with the utmost institutional care and advanced security protocols.",
    },
    {
      icon: Globe,
      title: "Global Experience",
      desc: "Our team brings extensive expertise from multinational corporations across Singapore and India, delivering international standards of professional service locally.",
    },
    {
      icon: ChartLine,
      title: "Process Excellence",
      desc: "We maintain rigorous, best-in-class operational standards across all service verticals, ensuring consistent quality, speed, and reliability.",
    },
  ];

  const differentiators = [
    {
      icon: UserAdmin,
      title: "Personalized Service",
      desc: "Tailored solutions that adapt directly to your unique business requirements, growth trajectory, and evolving statutory compliance needs.",
    },
    {
      icon: Task,
      title: "Monthly Discipline",
      desc: "Consistent monthly close protocols for reliable financial insights, timely reporting cycles, and proactive fiscal management.",
    },
    {
      icon: Enterprise,
      title: "Expert Leadership",
      desc: "Led by Founder & CEO Soundarrajan Vaithiyanathan, featuring 14+ years of financial leadership across Genpact, Capgemini, Teleperformance, and Rohlig Blue Service, alongside US GAAP certification from Ernst & Young (2026).",
    },
  ];

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
    <section id="why-us" className="w-full bg-white text-slate-900 py-24 lg:py-32 font-['Poppins',sans-serif]">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-24 border-b border-slate-200 pb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            Why Choose True Life Global
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] mt-4">
            Your Trusted Partner For <br />
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
              Business Success in Singapore.
            </span>
          </h2>
          <p className="max-w-3xl text-lg md:text-xl text-slate-600 leading-relaxed font-light mt-6">
            True Life Global Pte. Ltd. is more than just a service provider – we are your strategic partner in navigating the complex world of financial compliance and business operations.
          </p>
        </div>

        {/* ================= CORE STRENGTHS (NO BORDER RADIUS) ================= */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Core Strengths
            </h3>
            <div className="mt-4 h-1 w-20 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coreStrengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col justify-between bg-slate-50 border border-slate-200 p-8 md:p-12 transition-all duration-300 hover:border-blue-600 hover:bg-white hover:shadow-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-6">
                      <span className="text-4xl md:text-5xl font-black text-blue-600">
                        0{index + 1}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center bg-blue-100 text-blue-700">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {item.title}
                    </h4>

                    <p className="text-base text-slate-600 leading-relaxed mb-8 font-light">
                      {item.desc}
                    </p>

                    <div className="space-y-3 border-t border-slate-200 pt-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                        Key Highlights:
                      </p>
                      {item.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckmarkFilled className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 font-medium">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                    <span>ACRA Verified</span>
                    <span className="text-blue-600">Singapore Jurisdiction</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= COMPETITIVE ADVANTAGES (NO BORDER RADIUS) ================= */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Our Competitive Advantages
            </h3>
            <div className="mt-4 h-1 w-20 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between transition-all hover:border-blue-600 hover:bg-white hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center bg-blue-100 text-blue-700 font-bold mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {adv.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600 font-light">
                      {adv.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    True Life Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= WHAT SETS US APART (NO BORDER RADIUS) ================= */}
        <div className="mb-32">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              What Sets Us Apart
            </h3>
            <div className="mt-4 h-1 w-20 bg-blue-600" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-200 p-8 md:p-10 flex flex-col justify-between transition-all hover:border-blue-600 hover:bg-white hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center bg-blue-600 text-white font-bold mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-4">
                      {diff.title}
                    </h4>
                    <p className="text-base leading-relaxed text-slate-600 font-light">
                      {diff.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Executive Excellence
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= CLIENT TESTIMONIALS (NO BORDER RADIUS) ================= */}
        <div className="bg-slate-900 text-white p-8 md:p-16 lg:p-20 shadow-2xl mb-32">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-blue-300 border border-blue-500/30">
              Client Feedback
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              Trusted By <span className="text-blue-400">Industry Leaders</span>
            </h3>
            <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed">
              Hear what our valued clients have to say about our professional accounting, advisory, and courier solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between transition-all hover:border-blue-400 hover:bg-white/10"
              >
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-slate-300 italic font-light mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-bold text-white">{t.author}</p>
                  <p className="text-xs text-blue-400 font-medium uppercase tracking-wider mt-1">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FINAL CTA BOX ================= */}
        <div className="bg-blue-600 text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-200 block mb-2">
              Start Your Journey
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Ready to partner with True Life Global?
            </h3>
            <p className="text-blue-100 text-sm md:text-base mt-2 font-light">
              Experience transparent pricing, elite compliance standards, and dedicated Singapore expertise.
            </p>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center justify-between gap-4 bg-white px-8 py-5 text-xs font-bold uppercase tracking-widest text-blue-900 transition hover:bg-slate-100 shrink-0"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}