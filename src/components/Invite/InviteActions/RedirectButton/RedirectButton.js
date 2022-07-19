import React from 'react'

/* 
    API For Params
        buttonType:string, options=["rsvp", "info"]

*/

const RedirectButton = ({
    buttonType="rsvp"
}) => {

const buttonTypes = {
    rsvp: {
      text: "I'll be there!",
      redirectSection: 3
    },
    info: {
      text: "I need details...",
      redirectSection: 2
    }
  }


  return (
    <button 
      type="button" 
      name="redirect"
      className={`redirect_button redirect_button_${buttonType}`}
      // onClick={} Some click to redirect with fullpage.js
    >
        {buttonType === "rsvp"  
          ? <span>&#129321;</span>
          : <span>&#129488;</span>
        }
        {buttonTypes[buttonType]?.text}   
    </button>
  )
}

export default RedirectButton
