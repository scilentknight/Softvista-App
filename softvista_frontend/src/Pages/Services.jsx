import React from "react";
import { Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <h1>Services</h1>

      {/* Dynamic content will render here */}
      <Outlet />
    </div>
  );
};

export default Services;
