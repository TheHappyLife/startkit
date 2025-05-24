import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: true,
    light: true,
  },
  palette: {
    primary: {
      main: "#ffff00",
    },
    secondary: {
      main: "#01FF00",
      light: "#01FF00",
      dark: "#01FF00",
      contrastText: "#01FF00",
    },
  },
});

export default theme;
