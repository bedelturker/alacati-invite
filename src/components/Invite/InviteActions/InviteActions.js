import React from 'react'

import RedirectButton from "./RedirectButton/RedirectButton";

const InviteActions = () => {
  return (
    <div className="invite_actions">
        <RedirectButton />
        <RedirectButton buttonType="info"/>
    </div>
  )
}

export default InviteActions