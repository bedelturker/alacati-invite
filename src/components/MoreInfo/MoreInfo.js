import React from 'react'

// Our Components
import Trip from "./Trip/Trip";
import Gift from "./Gift/Gift";

const MoreInfo = () => {
  return (
    <div className="more_info">
        <div className="more_info_header">
            Trip Planning & Gifts
        </div>
        <div className="more_info_body">
            <Trip />
            <Gift />
        </div>
    </div>
  )
}

export default MoreInfo