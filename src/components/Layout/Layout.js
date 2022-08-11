import React from "react";

// Our own components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// Other Libraries
import { Helmet } from "react-helmet"

//Mui Customization
import { createTheme, ThemeProvider } from "@mui/material";
import muiCustomTheme from "../../utils/muiCustomTheme";

// Media
import favIcon from "../../assets/HGImages/favicon.ico";

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
        <meta name="icon" href={favIcon} />
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
        <meta property="og:url" content="https://hazalgilles.com" />
        <link rel="canonical" href="https://hazalgilles.com" />
        <link rel="icon" href={favIcon} />
        <meta name="theme-color" content="#f2f3fb" />
        <meta name="format-detection" content="telephone=no"/>
      </Helmet>
      <NavBar />
      <div className="layout">
        {children}
        <Footer />
      </div>

    </ThemeProvider>
  );
};

export default Layout;
