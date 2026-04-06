import React from "react";
import { useParams } from "react-router-dom";

const ProductSection = () => {
  const { section } = useParams();

  return (
    <div>
      {/* <h1 className="text-2xl font-bold">{section}</h1> */}

      {section === "academic-erp" && <div>Softvista Academic ERP</div>}
      {section === "hospital-erp" && <div>Hospital ERP</div>}
      {section === "accounting-solution" && <div>Accounting Solution</div>}
      {section === "hr-and-payroll" && <div>HR & Payroll</div>}
      {section === "web-sms" && <div>SMSsss System</div>}
      {section === "softvista-ams" && <div>Softvista AMS</div>}

      {/* fallback */}
      {!["academic-erp", "hospital-erp", "accounting-solution", "hr-and-payroll", "web-sms", "oftvista-ams"].includes(section) && <div>Dynamic Content for {section}</div>}
    </div>
  );
};

export default ProductSection;
