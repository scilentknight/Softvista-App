import React from "react";
import { useParams } from "react-router-dom";
import Tutorials from "./resources/Tutorials";

const ResourcesSection = () => {
  const { section } = useParams();

  return (
    <div>
      {/* <h1 className="text-2xl font-bold">{section}</h1> */}

      {section === "tutorials" && <Tutorials />}
      {section === "blogs" && <div>Blogs</div>}
      {section === "testimonials" && <div>Testimonials</div>}
      {section === "media-coverage" && <div>Media Coverage</div>}
      {section === "dealership" && <div>Dealership</div>}

      {/* fallback */}
      {!["tutorials", "blogs", "testimonials", "media-coverage", "dealership"].includes(section) && <div>Dynamic Content for {section}</div>}
    </div>
  );
};

export default ResourcesSection;
