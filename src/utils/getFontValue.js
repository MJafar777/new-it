//@mui
import { useTheme } from "@mui/material";
import useResponsive from "../hooks/useResponsive";

export const remToPx = (value) => {
  return Math.round(parseFloat(value) * 16);
};

export const pxToRem = (value) => {
  return `${value / 16}rem`;
};

// const useWidth = () => {
//   const theme = useTheme();
//   const keys = [...theme.breakpoints.keys].reverse();
//   return (
//     keys.reduce((output, key) => {
//       const matches = useResponsive("up", key);
//       return !output && matches ? key : output;
//     }, null) && "xs"
//   );
// };

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}
