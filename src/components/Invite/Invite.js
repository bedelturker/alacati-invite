import React from 'react'

import InviteCard from "./InviteCard/InviteCard";
import InviteDate from "./InviteDate/InviteDate";
import InvitePlace from "./InvitePlace/InvitePlace";
import ScrollMouse from '../Utils/ScrollMouse/ScrollMouse';

const Invite = () => {
  return (
    <div className="invite">
        <InviteCard />
        <InviteDate />
        <InvitePlace />
        <ScrollMouse />
    </div>
  )
}

export default Invite