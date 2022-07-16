import React from 'react'
import NavBar from "../NavBar/NavBar"

//Mui Customization
import { createTheme, ThemeProvider } from "@mui/material"
import muiCustomTheme from "../../utils/muiCustomTheme"

const theme = createTheme(muiCustomTheme)

const Layout = ({
  children,
  navBar=true,
  bgOption
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={`layout ${bgOption ? `layout_bg${bgOption}` : ''}`}>
        <div className="layout_content container">
          {navBar ? <NavBar /> : null}
          {children}
          {/* Add Footer */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout


