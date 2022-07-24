import React, { useState } from "react";

import RsvpCard from "./RsvpCard/RsvpCard";
import RsvpModal from "./RsvpModal/RsvpModal";

const Rsvp = () => {

  const [rsvpModalOpen, setRSVPModalOpen] = useState(false);
  const [attending, setAttending] = useState(true);
  
  const openRSVPModal = () => {
    setRSVPModalOpen(true);
  }

  const closeRSVPModal = () => {
    setRSVPModalOpen(false);
  }

  return (
    <div className="rsvp">
      <RsvpCard 
        openRSVPModal={openRSVPModal}
        setAttending={setAttending}
      />
      <RsvpModal
        rsvpModalOpen={rsvpModalOpen}
        closeRSVPModal={closeRSVPModal}
        attending={attending}
      />
    </div>
  );
};

export default Rsvp;
