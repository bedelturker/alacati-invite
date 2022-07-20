import React, { useState } from "react";

import InfoCard from "../InfoBody/InfoCard/InfoCard";

import palmDoodle from "../../../assets/Icons/palm.svg";
import drinkDoodle from "../../../assets/Icons/drink.svg";
import ringsDoodle from "../../../assets/Icons/rings.svg";

const InfoBodyMobile = ({ infos }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const iconCards = [
    {
      src: drinkDoodle,
      alt: "drink doodle",
    },
    {
      src: ringsDoodle,
      alt: "rings doodle",
    },
    {
      src: palmDoodle,
      alt: "drink doodle",
    },
  ];

  return (
    <div className="info_body d-block d-lg-none ">
      <div className="info_body_mobile_top mb-4">
        {iconCards.map((card, index) => (
          <div className="info_body_mobile_top_card">
            <img
              src={card.src}
              alt={card.alt}
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </div>
      <InfoCard data={infos[selectedIndex]} />
    </div>
  );
};

export default InfoBodyMobile;
