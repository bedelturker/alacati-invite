import React, { useState, useEffect } from "react";

// Comps
import NavbarOption from "./NavbarOption/NavbarOption";

const NavBar = () => {
  const [activeOption, setActiveOption] = useState("invite");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Invite",
      key: "invite",
      onClickEvent: () => {
        scrollToRef("invite-section");
        setActiveOption("invite");
      },
    },
    {
      title: "Info",
      key: "info",
      onClickEvent: () => {
        scrollToRef("more-details-about-invitation");
        setActiveOption("info");
      },
    },
    {
      title: "RSVP",
      key: "rsvp",
      onClickEvent: () => {
        scrollToRef("invitation-form");
        setActiveOption("rsvp");
      },
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
    <div className="navBar d-block d-lg-none">
      <span className="navBar_hero">Hazal & Gilles</span>
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
            className={`nav_item ${
              activeOption === item.key ? "nav_item_active" : ""
            }`}
            onClick={() => {
              item.onClickEvent();
              setIsMenuOpen(false);
            }}
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
