import React, {useState, useEffect} from 'react'

// Comps
import NavbarOption from "./NavbarOption/NavbarOption"

const NavBar = () => {

  const [activeOption, setActiveOption] = useState(0)

  return (
      <div className="navbar">
        {/* <div className="navbar_logo">
            Hazal & Gilles
        </div> */}
        <div className="navbar_options">
            <NavbarOption 
              activeOption={activeOption}
              setActiveOption={setActiveOption}
              optionText={"You are Invited!"}
              optionNo={0}
            />
            <NavbarOption 
              activeOption={activeOption}
              setActiveOption={setActiveOption}
              optionText={"Things to Know"}
              optionNo={1}
            />
            <NavbarOption 
              activeOption={activeOption}
              setActiveOption={setActiveOption}
              optionText={"RSVP"}
              optionNo={2}
            />
        </div>
    </div>
  )
}

export default NavBar