import React from "react";
import NavBar from "../NavBar/NavBar";

//Mui Customization
import { createTheme, ThemeProvider } from "@mui/material";
import muiCustomTheme from "../../utils/muiCustomTheme";

const theme = createTheme(muiCustomTheme);

const Layout = ({
  children,
  // navBar=true,
  bgOption,
  bgOpacity = 1,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="layout">
        <NavBar />
        {children}
        {/* Footer */}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
