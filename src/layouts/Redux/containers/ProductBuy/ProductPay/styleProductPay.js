import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  marginTop: "10%",
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ContainerItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  height: "400px",
  border: `1px solid ${theme.border.primary.main}`,
  boxShadow: "2px 4px 15px 4px rgba(0,0,0,0.4)",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));
