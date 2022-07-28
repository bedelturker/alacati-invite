import React from 'react'

import InviteCard from "./InviteCard/InviteCard";
import InviteText from "./InviteText/InviteText";
import InviteWelcome from "./InviteWelcome/InviteWelcome";
import Scroll from "../Utils/Scroll/Scroll";

const Invite = () => {
  return (
    <div className="invite">
        <InviteWelcome />
        <InviteCard />
        <InviteText />
    </div>
  )
}

export default Invite