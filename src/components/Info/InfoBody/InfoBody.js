import React from "react";

// Components
import InfoCard from "./InfoCard/InfoCard";
import InfoBodyMobile from "../InfoBodyMobile/InfoBodyMobile";

// Icons for Info Cards
import drinkDoodle from "../../../assets/Icons/drink.svg";
import ringsDoodle from "../../../assets/Icons/rings.svg";
import palmDoodle from "../../../assets/Icons/palm.svg";

const infoCards = [
  {
    icon: {
      src: drinkDoodle,
      alt: "drink doodle",
    },
    title: "Welcome Drinks & Bites",
    date: "Thursday, September 15",
    time: "8pm",
    text1:
      "We are super excited to welcome you and get a first drink and bite together!",
    text2: null,
    dressCode: "Casual",
  },
  {
    icon: {
      src: ringsDoodle,
      alt: "rings doodle",
    },
    title: "The BIG DAY",
    date: "Friday, September 16",
    time: "3:30pm (sharp)",
    text1:
      "Meeting at the bus (XXX), which will take you to the secret wedding location!",
    text2:
      "Return busses will be arranged on diffferent moments (you don’t have to arrange anything).",
    dressCode: "Beach Chic",
  },
  {
    icon: {
      src: palmDoodle,
      alt: "drink doodle",
    },
    title: "Hangover Day",
    date: "Saturday, September 17",
    time: "2pm (not sharp)",
    text1: "You are as free as a bird to process your hangover.",
    text2:
      "But if you want, we arranged your enterance at 'Before Sunset' beach club!",
    dressCode: "N/A",
  },
];

const InfoBody = () => {
  return (
    <>
      <div className="info_body d-none d-lg-flex">
        {infoCards.map((info) => (
          <InfoCard data={info} key={info.title} />
        ))}
      </div>
      <InfoBodyMobile infos={infoCards} />
    </>
  );
};

export default InfoBody;
