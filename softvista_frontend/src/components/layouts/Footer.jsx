import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const navigate = useNavigate();

  const handleBlogsClick = () => {
    navigate("/blogs");

    setTimeout(() => {
      navigate("/");
    }, 500); // 0.5 second delay
  };
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-4  bg-[#0082c6] px-30 py-10 ">
        <div className="lg:pr-15">
          <Link>
            <span className="text-3xl text-white font-small ">About Us</span>
          </Link>
          <p className="text-gray-100 mt-2">
            Softvista Creation is a recognized leader in the field of IT service providers, providing comprehensive software development and web products for more than a decade. Our years of
            experience help us develop digital innovations to deliver business outcomes, new levels of performance and competitiveness for our customers and their stakeholders.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl text-gray-800 font-bold mb-3">Our Links</h2>
          <Link to={"/"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Home
          </Link>
          <Link to={"/about-us/our-company"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            About Us
          </Link>
          <Link to={"/our-client"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Our Client
          </Link>
          <Link to={"/about-us/our-team"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Team
          </Link>
          <Link onClick={handleBlogsClick} className="hover:translate-x-3 transition-transform duration-400 text-gray-100 my-2 cursor-pointer">
            Blogs
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl text-gray-800 font-bold mb-3">Our Services</h2>
          <Link to={"/login"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Software Development
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Mobile App Development
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Web Application Development
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100">
            Bulk SMS Service
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Domain Registration & web hosting
          </Link>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl text-gray-800 font-bold mb-3">Other Links</h2>
          <Link to={"/login"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Contact Us
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Career
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Portfolio
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100">
            Policy Privacy
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Terms & Conditions
          </Link>
          <Link to={"/register"} className="hover:translate-x-3 transition-transform duration-400  text-gray-100 my-2">
            Account Delete
          </Link>
        </div>

        <div className="flex flex-row">
          <Link to={`mailto:developer.codex@gmail.com`} className="p-2 bg-white rounded-full me-3">
            <FaInstagram className="text-lg" />
          </Link>
          <Link to={`mailto:developer.codex@gmail.com`} className="p-2 bg-white rounded-full me-3">
            <FaTwitter className="text-lg" />
          </Link>
          <Link to={`mailto:developer.codex@gmail.com`} className="p-2 bg-white rounded-full">
            <FaFacebookF className="text-lg" />
          </Link>
        </div>
      </div>
      <div className="bg-[#004c74] text-sm text-center py-4">Copyright © Softvista Creation. All rights reserved.</div>
    </div>
  );
};

export default Footer;
