import React from "react";
import { useParams } from "react-router-dom";

const AboutSection = () => {
  const { section } = useParams();

  return (
    <div>
      {section === "our-team" && <div>Our Team Content</div>}
      {section === "our-company" && <div>Our Company Content</div>}
      {section === "softvista-group" && <div>Softvista Group Content</div>}

      {/* fallback */}
      {!["our-team", "our-company", "softvista-group"].includes(section) && <div>Dynamic Content for {section}</div>}
    </div>
  );
};

export default AboutSection;
