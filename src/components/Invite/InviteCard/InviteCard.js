import React from 'react'

import InviteDate from "./InviteDate/InviteDate";
import InviteHero from "../../../assets/HGImages/invite-hero.png"
import InvitePlace from "./InvitePlace/InvitePlace";

const InviteCard = () => {
  return (
    <div className="invite_card">
      <InviteDate />
      <img 
        src={InviteHero}
        alt="invite hero"
        className="invite_card_hero"
      />
      <InvitePlace />
    </div>
  )
}

export default InviteCard