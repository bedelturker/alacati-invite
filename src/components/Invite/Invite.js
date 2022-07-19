import React from 'react'

import InviteActions from "./InviteActions/InviteActions"
import InviteCard from "./InviteCard/InviteCard";
import InviteText from "./InviteText/InviteText";
import InviteWelcome from "./InviteWelcome/InviteWelcome"

const Invite = () => {
  return (
    <div className="invite">
        <InviteWelcome />
        <InviteCard />
        <InviteText />
        <InviteActions />
    </div>
  )
}

export default Invite