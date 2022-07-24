import React from "react";

import RsvpHeader from "./RsvpHeader/RsvpHeader";
import RsvpForm from "./RsvpForm/RsvpForm";

const RsvpCard = ({
  openRSVPModal,
  setAttending
}) => {
  return (
    <div className="rsvp_card">
      <RsvpHeader />
      <RsvpForm 
        openRSVPModal={openRSVPModal}
        setAttending={setAttending}
      />
    </div>
  );
};

export default RsvpCard;
