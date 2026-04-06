import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import AboutSection from "./Pages/AboutSection";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Resources from "./Pages/Resources";
import OurClient from "./Pages/OurClient";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/account/Profile";
import ChangePassword from "./Pages/account/ChangePassword";
import ProductSection from "./Pages/ProductSection";
import ServiceSection from "./Pages/ServiceSection";
import ResourcesSection from "./Pages/ResourcesSection";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ABOUT US */}
        <Route path="/about-us" element={<AboutUs />}>
          <Route path=":section" element={<AboutSection />} />
        </Route>

        {/* PRODUCTS */}
        <Route path="/products" element={<Products />}>
          <Route path=":section" element={<ProductSection />} />
        </Route>

        {/* SERVICES */}
        <Route path="/services" element={<Services />}>
          <Route path=":section" element={<ServiceSection />} />
        </Route>

        {/* RESOURCES */}
        <Route path="/resources" element={<Resources />}>
          <Route path=":section" element={<ResourcesSection />} />
        </Route>

        <Route path="/our-client" element={<OurClient />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/change-password" element={<ChangePassword />} />
      </Routes>
    </>
  );
};

export default App;
