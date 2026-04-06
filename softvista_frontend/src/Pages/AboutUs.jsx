import React from "react";
import { Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>

      {/* Dynamic content will render here */}
      <Outlet />
    </div>
  );
};

export default AboutUs;
