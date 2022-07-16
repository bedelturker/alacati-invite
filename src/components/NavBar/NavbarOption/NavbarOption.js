import React from 'react'

const NavbarOption = ({
    activeOption,
    setActiveOption,
    optionText,
    optionNo
}) => {
  return (
    <button 
        type="button" 
        className={`navbar_option ${activeOption === optionNo ? "navbar_option_active" : ""}`}
        onClick={() => setActiveOption(optionNo)}
    >
      {optionText}
    </button>
  )
}

export default NavbarOption