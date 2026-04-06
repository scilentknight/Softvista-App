import React from "react";
import { useParams } from "react-router-dom";

const ServiceSection = () => {
  const { section } = useParams();

  return (
    <div>
      {/* <h1 className="text-2xl font-bold">{section}</h1> */}

      {section === "software-development" && <div>Software Development</div>}
      {section === "mobile-app-development" && <div>Mobile App Development</div>}
      {section === "web-application-development" && <div>Web Application Development</div>}
      {section === "bulk-sms-service" && <div>Bulk SMS Service</div>}
      {section === "domain-registration-web-hosting" && <div>Domain Registration and Web Hosting</div>}

      {/* fallback */}
      {!["software-development", "mobile-app-development", "web-application-development", "bulk-sms-service", "domain-registration-web-hosting"].includes(section) && (
        <div>Dynamic Content for {section}</div>
      )}
    </div>
  );
};

export default ServiceSection;
