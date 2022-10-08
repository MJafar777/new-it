import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routess from "./route/routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

const Index = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routess />
      </ThemeProvider>
    </Provider>
  );
};

export default Index;
