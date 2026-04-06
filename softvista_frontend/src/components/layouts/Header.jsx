import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);

  return (
    <header className="shadow">
      <div className="mx--w-360 lg:py-6 py-3 lg:px-8 px-15 flex justify-between">
        <Link to={"/"}>
          <span className="text-3xl text-green-500 font-bold">Soft</span>
          <span className="text-3xl text-slate-800 font-bold">Vista</span>
        </Link>

        <nav className="text-lg hidden text-gray-800 space-x-10 sm:flex items-center">
          <Link className=" hover:text-green-300" to={"/"}>
            Home
          </Link>

          {/* ABOUT US */}
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <Link className="hover:text-green-300" to="/about-us">
              About Us
            </Link>

            {/* Dropdown wrapper with safer hover area */}
            <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50 transition-all duration-200 ${aboutOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <Link to="/about-us/our-team" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Our Team
              </Link>

              <Link to="/about-us/our-company" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Our Company
              </Link>

              <Link to="/about-us/softvista-group" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Softvista Group
              </Link>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
            <Link className="hover:text-green-300" to="/products">
              Products
            </Link>

            {/* Dropdown wrapper with safer hover area */}
            <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50 transition-all duration-200 ${productOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <Link to="/products/academic-erp" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Softvista Academic Erp
              </Link>

              <Link to="/products/hospital-erp" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Hospital Erp
              </Link>

              <Link to="/products/accounting-solution" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Accounting Solution
              </Link>
              <Link to="/products/hr-and-payroll" className="block px-4 py-2 text-sm hover:bg-gray-100">
                HR & Payroll
              </Link>
              <Link to="/products/web-sms" className="block px-4 py-2 text-sm hover:bg-gray-100">
                SMS System
              </Link>
              <Link to="/products/softvista-ams" className="block px-4 py-2 text-sm hover:bg-gray-100">
                SoftVista AMS
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="relative" onMouseEnter={() => setServiceOpen(true)} onMouseLeave={() => setServiceOpen(false)}>
            <Link className="hover:text-green-300" to="/services">
              Services
            </Link>

            {/* Dropdown wrapper with safer hover area */}
            <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50 transition-all duration-200 ${serviceOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <Link to="/services/software-development" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Software Development
              </Link>

              <Link to="/services/mobile-app-development" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Mobile App Development
              </Link>

              <Link to="/services/web-application-development" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Web Application Development
              </Link>
              <Link to="/services/bulk-sms-service" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Bulk SMS Service
              </Link>
              <Link to="/services/domain-registration-web-hosting" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Domain Registration & Web Hosting
              </Link>
            </div>
          </div>

          {/* RESOURCES */}
          <div className="relative" onMouseEnter={() => setResourceOpen(true)} onMouseLeave={() => setResourceOpen(false)}>
            <Link className="hover:text-green-300" to="/resources">
              Resources
            </Link>

            {/* Dropdown wrapper with safer hover area */}
            <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50 transition-all duration-200 ${resourceOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <Link to="/resources/tutorials" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Tutorials
              </Link>

              <Link to="/resources/blogs" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Blogs
              </Link>

              <Link to="/resources/testimonials" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Testimonials
              </Link>
              <Link to="/resources/media-coverage" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Media Coverage
              </Link>
              <Link to="/resources/dealership" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Dealership
              </Link>
            </div>
          </div>

          <Link className=" hover:text-green-300" to={"/our-client"}>
            Our Client
          </Link>
          <Link className=" hover:text-green-300" to={"/contact-us"}>
            Contact-Us
          </Link>
          <Link to={"/login"} className="bg-green-300 px-2 py-1 ms-3 text-md rounded-md text-gray-800 hover:bg-gray-600 hover:text-white">
            Account
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
