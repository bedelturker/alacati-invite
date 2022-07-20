import React, { useState, useEffect } from "react";

// Comps
import NavbarOption from "./NavbarOption/NavbarOption";

const NavBar = () => {
  const [activeOption, setActiveOption] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Invite", onClickEvent: () => scrollToRef("invite-section") },
    {
      title: "Info",
      onClickEvent: () => scrollToRef("more-details-about-invitation"),
    },
    {
      title: "RSVP",
      onClickEvent: () => scrollToRef("invitation-form"),
    },
  ];

  //Genel scroll fonksiyonu
  const scrollToRef = (referance) => {
    setTimeout(() => {
      let integrationDiv = document.getElementById(referance);
      if (integrationDiv) {
        window.scrollTo(0, integrationDiv.offsetTop);
      }
    }, 500);
  };

  return (
    <div className="navbar d-block d-lg-none">
      <div
        id="mobile-menu-button"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <div
          id="mobile-menu-button-burger"
          className={isMenuOpen ? "open" : ""}
        ></div>
      </div>
      <div className={isMenuOpen ? "open_menu" : "hiddenMenu"}>
        {menuItems.map((item) => (
          <span
            className="nav_item"
            onClick={() => {
              item.onClickEvent();
              setIsMenuOpen(false);
            }}
          >
            {item.title}
          </span>
        ))}
      </div>
      {/* <div className="navbar_options">
        <NavbarOption
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          optionText={"You are Invited!"}
          optionNo={0}
        />
        <NavbarOption
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          optionText={"Things to Know"}
          optionNo={1}
        />
        <NavbarOption
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          optionText={"RSVP"}
          optionNo={2}
        />
      </div> */}
    </div>
  );
};

export default NavBar;
