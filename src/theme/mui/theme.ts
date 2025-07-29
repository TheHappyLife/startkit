import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { components } from "./components";

const theme = createTheme({
  palette: {},
  typography,
  cssVariables: true,
  components,
  zIndex: {
    drawer: 20,
    modal: 10,
  },
});

export default theme;
