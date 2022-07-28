import React from 'react'

// Scroll Mouse
import ScrollMouse from './ScrollMouse/ScrollMouse';

const Scroll = () => {
  return (
    <div className="scroll">
        <ScrollMouse />
        <span className="scroll_text">Scroll for more</span>
    </div>
  )
}

export default Scroll