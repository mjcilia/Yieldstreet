import { createTheme } from "@mui/material/styles";

/**
 * Material UI Theme
 * @constant { Theme } theme
 */
const theme = createTheme({
  typography: {
    h4: {
      fontSize: 35,
      fontWeight: 500,
    },
  },
  components: {
    MuiModal: {
      defaultProps: {
        BackdropProps: {
          timeout: 500,
          style: {
            backgroundColor: "rgb(255, 255, 255, 0.7)",
          },
        },
      },
    },
  },
});

export default theme;
