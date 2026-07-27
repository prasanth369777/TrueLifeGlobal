import React from "react";
import { Email, Phone, Location, Time, ArrowRight, User, Chat, Building } from "@carbon/icons-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: Email,
      title: "Email",
      details: ["To be confirmed"],
      link: "mailto:tbc",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["To be confirmed"],
      link: "tel:tbc",
    },
    {
      icon: Location,
      title: "Registered Office",
      details: ["1003 Toa Payoh Industrial Park,", "#07-1501, Singapore 319075"],
      link: "https://maps.google.com/?q=1003+Toa+Payoh+Industrial+Park+07-1501+Singapore+319075",
    },
    {
      icon: Time,
      title: "Operating Hours",
      details: [
        "Mon–Fri: 9:00 AM – 6:00 PM",
        "Sat: 9:00 AM – 1:00 PM",
      ],
    },
  ];

  const formFields = [
    {
      icon: User,
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      icon: Email,
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
    },
    {
      icon: Building,
      name: "companyName",
      label: "Company Name",
      type: "text",
    },
    {
      icon: Chat,
      name: "service",
      label: "Service Needed",
      type: "text",
      placeholder: "e.g., Accounting, Courier",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-white text-slate-900 py-32 lg:py-44 font-['Inter','Poppins',sans-serif]"
    >
      {/* ================= CONTAINER (Matches consistent max-w-[104rem] width) ================= */}
      <div className="max-w-[104rem] mx-auto px-6 md:px-16 flex flex-col items-center">
        
        {/* ================= HEADER SECTION (CENTERED) ================= */}
        <div className="mb-28 w-full flex flex-col items-center text-center">
          <span 
            style={{ color: "#207dd6", backgroundColor: "rgba(32, 125, 214, 0.08)" }}
            className="mb-6 inline-flex items-center gap-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.3em] font-['Poppins',sans-serif]"
          >
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-8 font-['Poppins',sans-serif]">
            Get in <br />
            <span style={{ color: "#207dd6" }} className="underline decoration-blue-200 decoration-wavy underline-offset-8">
              Touch.
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-medium max-w-4xl">
            Reach out for a free consultation. We respond within 1 business day.
          </p>
        </div>

        {/* ================= CONTACT GRID (DETAILS + FORM) ================= */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* ================= CONTACT DETAILS (LEFT) ================= */}
          <div className="xl:col-span-4 space-y-12">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div 
                    style={{ backgroundColor: "rgba(32, 125, 214, 0.1)", color: "#207dd6" }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-none"
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2 font-['Poppins',sans-serif]">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.title === "Registered Office" ? "_blank" : undefined}
                        rel={item.title === "Registered Office" ? "noopener noreferrer" : undefined}
                        style={{ color: "#207dd6" }}
                        className="text-lg md:text-xl font-medium leading-relaxed hover:underline font-['Poppins',sans-serif]"
                      >
                        {item.details.map((line, i) => <span key={i} className="block">{line}</span>)}
                      </a>
                    ) : (
                      <div className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed">
                        {item.details.map((line, i) => <span key={i} className="block">{line}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= CONTACT FORM (RIGHT, NO BG RECTANGLE) ================= */}
          <div className="xl:col-span-8 bg-transparent p-0">
            <form 
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
              onSubmit={(e) => e.preventDefault()}
            >
              
              {formFields.map((field, index) => {
                const Icon = field.icon;
                return (
                  <div key={index} className="relative group">
                    <label 
                      htmlFor={field.name}
                      className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 font-['Poppins',sans-serif]"
                    >
                      {field.label} {field.required && "*"}
                    </label>
                    <div className="relative">
                      <Icon 
                        className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-[#207dd6] transition-colors" 
                      />
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder || ""}
                        className="w-full bg-white border border-slate-300 pl-16 pr-5 py-5 text-lg text-slate-900 placeholder:text-slate-400 focus:border-[#207dd6] focus:ring-2 focus:ring-[#207dd6]/20 outline-none transition-all font-medium rounded-none"
                      />
                    </div>
                  </div>
                );
              })}

              {/* Message Textarea (Spans Full Width) */}
              <div className="md:col-span-2 group">
                <label 
                  htmlFor="message"
                  className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 font-['Poppins',sans-serif]"
                >
                  Message *
                </label>
                <div className="relative">
                  <Chat 
                    className="absolute left-5 top-7 h-5 w-5 text-slate-400 group-focus-within:text-[#207dd6] transition-colors" 
                  />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full bg-white border border-slate-300 pl-16 pr-5 py-5 text-lg text-slate-900 placeholder:text-slate-400 focus:border-[#207dd6] focus:ring-2 focus:ring-[#207dd6]/20 outline-none transition-all resize-y font-medium rounded-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-start md:justify-end mt-6">
                <button
                  type="submit"
                  style={{ backgroundColor: "#207dd6" }}
                  className="inline-flex w-full md:w-auto items-center justify-center gap-4 px-12 py-7 text-lg font-bold uppercase tracking-widest text-white shadow-lg transition hover:opacity-90 font-['Poppins',sans-serif] rounded-none cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}