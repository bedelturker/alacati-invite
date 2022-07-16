import React from 'react'

import InviteHero from "../../../assets/HGImages/invite-hero.png"

const InviteCard = () => {
  return (
    <div className="invite_card">
      <img 
        src={InviteHero}
        alt="invite hero"
        className="invite_card_hero"
      />
    </div>
  )
}

export default InviteCard