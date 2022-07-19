import React from 'react'

import RsvpHeader from "./RsvpHeader/RsvpHeader";
import RsvpForm from "./RsvpForm/RsvpForm";

const RsvpCard = () => {
  return (
    <div className="rsvp_card">
          <RsvpHeader />
          <RsvpForm />
    </div>
  )
}

export default RsvpCard