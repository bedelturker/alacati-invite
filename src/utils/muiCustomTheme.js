import { experimental_sx as sx } from "@mui/material/styles";

const muiCustomTheme = {
  typography: {
    fontFamily: 'Raleway, Open Sans, Mulish, sans-serif',
    htmlFontSize: 11,
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          height: "4rem",
          fontSize: "calc(1.5rem + .3vw)",
          fontFamily: "Vollkorn",
          "&.Mui-focused": {
            backgroundColor: "#bbdbf733",
          }
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "calc(1.5rem + .3vw)",
          fontFamily: "Vollkorn",
          
          "&.Mui-focused": {
            backgroundColor: "#bbdbf722",
          }
        },
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "calc(1.4rem + .3vw)",
          marginLeft: "1rem",
          fontFamily: "Vollkorn",
        },
      } 
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#000",
          "&.Mui-checked": {
            color: "#000",
          }
        },
      } 
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: sx({
          fontSize: 20,
          "& label.Mui-focused": {
            borderBottom: "2px"
          }
        })
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: sx({
          fontSize: "15px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "black",
        }),
        arrow: sx({
          color: "black",
        })
      },
    }
  },
};

export default muiCustomTheme;
