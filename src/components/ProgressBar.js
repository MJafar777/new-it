import NProgress from "nprogress";
import { useEffect, useMemo } from "react";
// @muiimport { useTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";

// ----------------------------------------------------------------------

export function ProgressBarStyle() {
  return (
    <GlobalStyles
      styles={{
        "#nprogress": {
          pointerEvents: "none",
          "& .bar": {
            top: 0,
            left: 0,
            height: 2,
            width: "100%",
            position: "fixed",
          },
          "& .peg": {
            right: 0,
            opacity: 1,
            width: 100,
            height: "100%",
            display: "block",
            position: "absolute",
            transform: "rotate(3deg) translate(0px, -4px)",
          },
        },
      }}
    />
  );
}

export default function ProgressBar() {
  NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}
