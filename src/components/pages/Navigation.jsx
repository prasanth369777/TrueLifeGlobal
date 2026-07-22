import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assests/logo.png"; 

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "About Us", target: "about" },
    { name: "How We Work", target: "process" },
    { name: "Director", target: "director" },
    { name: "Why Us", target: "why-us" },
    { name: "Careers", target: "careers" },
    { name: "Insights", target: "insights" },
  ];

  const strategyServices = [
    { name: "Business Consulting", path: "#" },
    { name: "Corporate Strategy", path: "#" },
    { name: "Market Research", path: "#" },
    { name: "Risk Management", path: "#" },
  ];

  const operationServices = [
    { name: "Process Optimization", path: "#" },
    { name: "Financial Advisory", path: "#" },
    { name: "Digital Transformation", path: "#" },
  ];

  const growthServices = [
    { name: "Global Expansion", path: "#" },
    { name: "Mergers & Acquisitions", path: "#" },
  ];

  const mobileServiceItems = [
    ...strategyServices,
    ...operationServices,
    ...growthServices,
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const mainLinksBefore = navLinks.slice(0, 3);
  const mainLinksAfter = navLinks.slice(3);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "border-b border-gray-100 shadow-sm py-3" : "py-5"
      }`}
    >
      {/* FULL WIDTH CONTAINER */}
      <div className="flex w-full items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* ================= LOGO ================= */}
        <button
          type="button"
          onClick={() => {
            closeMobileMenu();
            scrollToSection("home");
          }}
          className="relative z-10 flex shrink-0 items-center gap-3 bg-transparent border-0 cursor-pointer p-0"
        >
          <img
            src={logo}
            alt="True Life Global Logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </button>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-8 xl:flex">
          {mainLinksBefore.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.target)}
              className="text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 focus:outline-none bg-transparent border-0 cursor-pointer"
            >
              {link.name}
            </button>
          ))}

          {/* Services Dropdown (Full Width Mega Menu) */}
          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <button
              type="button"
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`text-[15px] font-medium transition-colors duration-200 focus:outline-none bg-transparent border-0 cursor-pointer ${
                servicesOpen ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              Services
            </button>
          </div>

          {mainLinksAfter.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => scrollToSection(link.target)}
              className="text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600 focus:outline-none bg-transparent border-0 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden shrink-0 xl:block">
          <button
            type="button"
            onClick={() => scrollToSection("quote")}
            className="rounded bg-blue-600 px-7 py-3 text-[14px] font-semibold tracking-wide text-white transition-all duration-200 hover:bg-blue-700 active:scale-95"
          >
            Get a Free Quote
          </button>
        </div>

        {/* ================= MOBILE / TABLET MENU TOGGLE ================= */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-800 transition xl:hidden bg-transparent border-0 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* ================= DESKTOP MEGA MENU PANEL ================= */}
      <div
        className={`absolute left-0 top-full w-full border-b border-gray-100 bg-white shadow-lg transition-all duration-300 origin-top xl:block hidden ${
          servicesOpen
            ? "visible scale-y-100 opacity-100"
            : "invisible scale-y-95 opacity-0"
        }`}
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="mx-auto flex w-full max-w-[1400px] gap-16 px-6 py-12 md:px-12 lg:px-16 xl:px-24">
          
          <div className="w-1/3 border-r border-gray-100 pr-12">
            <h3 className="text-3xl font-light tracking-tight text-slate-900">
              Clarity Today. <br />
              <span className="font-semibold text-blue-600">Growth Tomorrow.</span>
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              Strategic guidance, financial advisory, and operations scaling
              for businesses looking to optimize growth globally.
            </p>
            <button
              type="button"
              onClick={() => {
                setServicesOpen(false);
                scrollToSection("services");
              }}
              className="mt-8 inline-block text-[14px] font-semibold tracking-wide text-blue-600 transition-colors hover:text-blue-800 focus:outline-none bg-transparent border-0 cursor-pointer"
            >
              View All Services
            </button>
          </div>

          <div className="flex w-2/3 justify-between gap-8">
            <div className="w-1/3">
              <h4 className="mb-6 text-[12px] font-bold uppercase tracking-widest text-slate-400">
                Strategy
              </h4>
              <ul className="space-y-4">
                {strategyServices.map((service) => (
                  <li key={service.name}>
                    <NavLink
                      to={service.path}
                      className="text-[15px] font-medium text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/3">
              <h4 className="mb-6 text-[12px] font-bold uppercase tracking-widest text-slate-400">
                Operations
              </h4>
              <ul className="space-y-4">
                {operationServices.map((service) => (
                  <li key={service.name}>
                    <NavLink
                      to={service.path}
                      className="text-[15px] font-medium text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/3">
              <h4 className="mb-6 text-[12px] font-bold uppercase tracking-widest text-slate-400">
                Growth
              </h4>
              <ul className="space-y-4">
                {growthServices.map((service) => (
                  <li key={service.name}>
                    <NavLink
                      to={service.path}
                      className="text-[15px] font-medium text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET MENU ================= */}
      <div
        className={`absolute left-0 top-full w-full border-b border-gray-100 bg-white shadow-xl transition-all duration-300 xl:hidden ${
          isOpen
            ? "max-h-[calc(100vh-80px)] overflow-y-auto opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-8">
          <div className="space-y-2">
            {mainLinksBefore.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  scrollToSection(link.target);
                }}
                className="block w-full text-left py-3 text-[16px] font-medium text-slate-800 transition-colors hover:text-blue-600 focus:outline-none bg-transparent border-0 cursor-pointer"
              >
                {link.name}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex w-full items-center justify-between py-3 text-[16px] font-medium text-slate-800 transition hover:text-blue-600 bg-transparent border-0 cursor-pointer"
            >
              Services
              <span className="text-2xl font-light leading-none text-slate-400">
                {mobileServicesOpen ? "-" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mb-4 mt-2 space-y-3 pl-4">
                {mobileServiceItems.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    onClick={closeMobileMenu}
                    className="block py-2 text-[15px] font-medium text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {mainLinksAfter.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  scrollToSection(link.target);
                }}
                className="block w-full text-left py-3 text-[16px] font-medium text-slate-800 transition-colors hover:text-blue-600 focus:outline-none bg-transparent border-0 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="my-8 h-px w-full bg-gray-100" />

          <div>
            <a
              href="mailto:contact@truelifeglobal.com"
              className="block text-[15px] font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              contact@truelifeglobal.com
            </a>
            <p className="mt-2 text-[14px] text-slate-500">
              Singapore | Serving Globally
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              scrollToSection("quote");
              closeMobileMenu();
            }}
            className="mt-8 flex w-full justify-center bg-blue-600 px-6 py-4 text-[15px] font-semibold text-white transition hover:bg-blue-700"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}