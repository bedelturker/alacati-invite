import React from "react";

/* 
    API For Params
        buttonType:string, options=["rsvp", "info"]

*/

const RedirectButton = ({ buttonType = "rsvp" }) => {
  //Genel scroll fonksiyonu
  const scrollToRef = (referance) => {
    setTimeout(() => {
      let integrationDiv = document.getElementById(referance);
      if (integrationDiv) {
        window.scrollTo(0, integrationDiv.offsetTop);
      }
    }, 500);
  };

  const buttonTypes = {
    rsvp: {
      text: "I'll be there!",
      onClickEvent: () => scrollToRef("invitation-form"),
    },
    info: {
      text: "I need details...",
      onClickEvent: () => scrollToRef("more-details-about-invitation"),
    },
  };

  return (
    <button
      type="button"
      name="redirect"
      className={`redirect_button redirect_button_${buttonType}`}
      onClick={() => buttonTypes[buttonType]?.onClickEvent()}
    >
      {buttonType === "rsvp" ? <span>&#129321;</span> : <span>&#129488;</span>}
      {buttonTypes[buttonType]?.text}
    </button>
  );
};

export default RedirectButton;
