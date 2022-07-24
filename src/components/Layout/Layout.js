import React from "react";

// Our own components
import NavBar from "../NavBar/NavBar";

// Other Libraries
import { Helmet } from "react-helmet"

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
      <Helmet>
        <title>Hazal & Gilles</title>
        {/* <meta name="icon" href={favIcon} /> */}
        <meta
          name="description"
          content="We are getting married and we would love for you to join us as we celebrate our love."
        />
        <meta
          name="keywords"
          content="wedding, invite, love, happiness, Turkey, Alacati,"
        />
        <meta property="og:title" content="Hazal & Gilles" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="We are getting married and we would love for you to join us as we celebrate our love." />
        {/* <meta property="og:image" content="" /> */}
        {/* <meta property="og:url" content="https://usemuni.com" />
        <link rel="canonical" href="https://usemuni.com" /> */}
        {/* <link rel="icon" href={favIcon} /> */}
        <meta name="theme-color" content="#f2f3fb" />
      </Helmet>
      <NavBar />
      <div className="layout">
        {children}
        {/* Footer */}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
