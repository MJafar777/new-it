import { pxToRem, responsiveFontSizes } from "../utils/getFontValue";

const FONT_PRIMARY = "Lato, sans-serif";

const typography = {
  font_family: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeiht: 84 / 60,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h1: {
    fontWeight: 700,
    lineHeiht: 84 / 60,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h1: {
    fontWeight: 700,
    lineHeiht: 84 / 60,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeiht: 64 / 48,
    fontSize: pxToRem(32),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeiht: 1.5,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h4: {
    fontWeight: 700,
    lineHeiht: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h5: {
    fontWeight: 700,
    lineHeiht: 84 / 60,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h6: {
    fontWeight: 700,
    lineHeiht: 84 / 60,
    fontSize: pxToRem(40),
    letterSpacing: 2,
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
};
