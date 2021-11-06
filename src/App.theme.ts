import { createTheme } from "@mui/material/styles";

/*
 * Material UI Theme
 * @constant { Theme } theme
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "ffffff",
    },
    secondary: {
      main: "#ffddc9",
    },
    info: {
      main: "#00e6e6",
    },
  },
  spacing: 10,
  typography: {
    body1: {
      fontSize: 16,
      fontWeight: 300,
    },
    body2: {
      fontSize: 17,
      fontWeight: 300,
    },
    h4: {
      fontSize: 35,
      fontWeight: 600,
      lineHeight: 1,
    },
  },
  components: {
    MuiModal: {
      defaultProps: {
        BackdropProps: {
          timeout: 500,
          style: {
            backgroundColor: "#ffddc9",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "#fff",
          },
          "& .MuiFilledInput-root:hover": {
            backgroundColor: "#fff",
          },
          "& .MuiFilledInput-root.Mui-focused": {
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
