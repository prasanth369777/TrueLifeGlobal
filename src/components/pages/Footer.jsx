import React from "react";
import {
  Email,
  Location,
  Phone,
  LogoLinkedin,
  LogoFacebook,
} from "@carbon/icons-react";
import Logo from "../../assests/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", target: "home" },
    { name: "About Us", target: "about" },
    { name: "Services", target: "services" },
    { name: "How We Work", target: "process" },
    { name: "Director", target: "director" },
    { name: "Careers", target: "careers" },
    { name: "Contact", target: "contact" },
  ];

  const servicesList = [
    "Accounting & Bookkeeping",
    "Auditing Services",
    "Tax Consultancy",
    "Courier Services",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: LogoLinkedin,
      href: "https://www.linkedin.com",
    },
    {
      name: "Facebook",
      icon: LogoFacebook,
      href: "https://www.facebook.com",
    },
  ];

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
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
    <footer className="relative overflow-hidden bg-[#0a192f] pt-24 lg:pt-32 text-white font-['Poppins',sans-serif]">
      {/* Ambient Background & Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] bg-blue-500/10 blur-[150px] lg:h-[800px] lg:w-[800px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] bg-blue-600/15 blur-[150px] lg:h-[900px] lg:w-[900px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Giant Background Watermark */}
      <h2 className="pointer-events-none absolute left-1/2 top-10 lg:top-4 -translate-x-1/2 select-none whitespace-nowrap font-['Bebas_Neue',sans-serif] text-[15vw] lg:text-[12vw] leading-none tracking-[0.08em] text-white/[0.02]">
        TRUE LIFE GLOBAL
      </h2>

      <div className="relative z-10 mx-auto w-full max-w-[2000px] px-6 md:px-12 lg:px-20">
        
        {/* Top Section: Brand Intro & CTA */}
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-16 lg:pb-24 lg:flex-row lg:items-end">
          <div className="max-w-2xl lg:max-w-4xl">
            <div className="flex items-center gap-5 lg:gap-8">
              <img
                src={Logo}
                alt="True Life Global Logo"
                className="h-16 w-16 lg:h-24 lg:w-24 object-contain brightness-100  transition-transform duration-500 hover:scale-110"
              />
              <div>
                <h3 className="font-['Bebas_Neue',sans-serif] text-4xl tracking-widest text-white md:text-5xl lg:text-5xl xl:text-6xl">
                  True Life Global Pte. Ltd.
                </h3>
                <p className="font-['Montserrat',sans-serif] text-[10px] lg:text-sm font-semibold uppercase tracking-[0.3em] text-blue-400 mt-2 lg:mt-3">
                  Singapore Jurisdiction
                </p>
              </div>
            </div>
            
            <p className="mt-8 text-sm leading-relaxed text-slate-300 md:text-base lg:text-xl lg:leading-loose xl:text-2xl font-light">
              A specialized advisory and accounting firm committed to delivering enduring value through precision, compliance, and strategic clarity. Based in Singapore, serving clients worldwide.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <a
              href="mailto:contact@truelifeglobal.com"
              className="group flex w-full items-center justify-between gap-8 border border-white/15 bg-white/5 px-8 py-5 lg:px-12 lg:py-8 lg:gap-12 backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:bg-blue-600/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] sm:w-auto sm:justify-start rounded-2xl"
            >
              <div>
                <p className="font-['Montserrat',sans-serif] text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-white/50">
                  Ready to consult?
                </p>
                <p className="mt-1 lg:mt-2 text-lg lg:text-3xl font-medium text-white transition-colors group-hover:text-blue-400">
                  Get in Touch
                </p>
              </div>
              <Email className="h-6 w-6 lg:h-8 lg:w-8 text-white/60 transition-colors group-hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 gap-12 py-16 lg:py-24 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          
          {/* Column 1: Quick Links */}
          <div className="lg:col-span-2">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Quick Links
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-blue-500" />
            <ul className="mt-8 flex flex-col space-y-4 lg:space-y-6">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    className="text-sm lg:text-lg font-light text-slate-300 transition-colors hover:text-blue-400 bg-transparent border-0 cursor-pointer text-left p-0"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Services
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-blue-500" />
            <ul className="mt-8 flex flex-col space-y-4 lg:space-y-6">
              {servicesList.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("services")}
                    className="text-sm lg:text-lg font-light text-slate-300 transition-colors hover:text-blue-400 bg-transparent border-0 cursor-pointer text-left p-0"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters / Location */}
          <div className="lg:col-span-3">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Jurisdiction & Base
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-blue-500" />
            <div className="mt-8 space-y-6 lg:space-y-8">
              <div>
                <p className="flex items-center gap-3 text-sm lg:text-lg font-medium text-white">
                  <Location className="h-4 w-4 lg:h-5 lg:w-5 text-blue-400 shrink-0" />
                  Singapore Headquarters
                </p>
              </div>
              <div>
                <p className="text-sm lg:text-lg lg:leading-loose text-slate-300 font-light">
                  Providing professional accounting, auditing, tax consultancy, and secure corporate courier solutions.
                </p>
              </div>
              <p className="border-l-2 border-blue-500/50 pl-4 lg:pl-6 text-xs lg:text-sm font-light text-slate-400 italic">
                Active ACRA-Registered Private Company Limited by Shares.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-4 lg:pl-8 xl:pl-16">
            <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Connect With Us
            </p>
            <div className="mt-6 h-px w-10 lg:w-12 bg-blue-500" />
            
            <div className="mt-8 space-y-8 lg:space-y-10">
              <a
                href="mailto:contact@truelifeglobal.com"
                className="group flex items-center gap-5 text-sm lg:text-lg text-slate-300 transition-colors hover:text-white"
              >
                <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-blue-600">
                  <Email className="h-5 w-5 lg:h-6 lg:w-6 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p className="text-sm lg:text-base font-light">contact@truelifeglobal.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 text-sm lg:text-lg text-slate-300">
                <div className="flex h-12 w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-full bg-white/5">
                  <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-white">Inquiries</p>
                  <p className="text-sm lg:text-base font-light">Available via Email & Portal</p>
                </div>
              </div>

              <div className="pt-6 lg:pt-8">
                <p className="mb-6 font-['Montserrat',sans-serif] text-[10px] lg:text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Professional Network
                </p>
                <div className="flex items-center gap-4 lg:gap-5">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.name}
                        className="flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)]"
                      >
                        <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 lg:py-10 md:flex-row">
          <p className="font-['Montserrat',sans-serif] text-[11px] lg:text-sm text-slate-400">
            © {currentYear} True Life Global Pte. Ltd. All rights reserved. Singapore Jurisdiction.
          </p>

          <div className="flex items-center gap-4 lg:gap-6 font-['Montserrat',sans-serif] text-[11px] lg:text-sm text-slate-400">
            <a href="/" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span className="h-1 w-1 lg:h-1.5 lg:w-1.5 rounded-full bg-white/20" />
            <a href="/" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}