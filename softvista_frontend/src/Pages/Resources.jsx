import React from "react";
import { Outlet } from "react-router-dom";

const Resources = () => {
  return (
    <div>
      <h1>Resources</h1>

      {/* Dynamic content will render here */}
      <Outlet />
    </div>
  );
};

export default Resources;
