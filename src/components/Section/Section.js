import React from "react";

const Section = ({ children, bgOption, bgOpacity = 1, sectionId }) => {
  return (
    <div
      className={`section ${
        bgOption ? `section_bg${bgOption}` : ""
      } bg_opacity_${bgOpacity}`}
      id={sectionId}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export default Section;
