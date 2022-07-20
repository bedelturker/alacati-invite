import React from "react";

// Components
import InfoBody from "./InfoBody/InfoBody";
import InfoBodyMobile from "./InfoBodyMobile/InfoBodyMobile";
import InfoHeader from "./InfoHeader/InfoHeader";

const Info = () => {
  return (
    <div className="info">
      <InfoHeader />
      <InfoBody />
    </div>
  );
};

export default Info;
