import PropsTypes from "prop-types";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

//
import breakpoints from "./breakpoints";

ThemeProvider.propTypes = {
  children: PropsTypes.node,
};

export default function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: {
        main: "#feeafa",
      },
      secondary: {
        main: "#8e9aaf",
      },
    },
    breakpoints,
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
