import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div>Products</div>

      {/* Dynamic content will render here */}
      <Outlet />
    </div>
  );
};

export default Products;
