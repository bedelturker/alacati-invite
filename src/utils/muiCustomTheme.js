import { experimental_sx as sx } from "@mui/material/styles";

const muiCustomTheme = {
  typography: {
    fontFamily: 'Raleway, Open Sans, Mulish, sans-serif',
    htmlFontSize: 11,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: sx({
          "& label.Mui-focused": {
            color: "black",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#e5e5e5",
            },
            "&:hover fieldset": {
              borderColor: "#e5e5e5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "limegreen",
              borderWidth: "1px",
            },
          },
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: sx({
          padding: 0,
          "& .MuiListItem-root .Mui-selected": {
            background: "#f4f4f4 !important",
            color: "black !important",
          },
        }),
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: sx({
    //       transition: "none !important",
    //     }),
    //   },
    // },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: sx({
    //       color: "black",
    //       "& .MuiSvgIcon-root": {
    //         fill: "black",
    //       },
    //     }),
    //   },
    // },
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
