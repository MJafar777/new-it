import { styled } from "@mui/material";
import { Box } from "@mui/system";

export const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  background: "#FBFBFB",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export const AccordionContaniner = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));
