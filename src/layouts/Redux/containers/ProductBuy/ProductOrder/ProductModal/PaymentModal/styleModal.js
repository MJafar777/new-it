import { Box, styled } from "@mui/material";

export const PaymentType = styled(Box)(({ theme }) => ({
  bgcolor: "#F5F7FA",
  display: "flex",
  alignItems: "center",
  height: "100px",
  width: "550px",
  borderRadius: "10px",
  border: `1px solid ${theme.palette.button.main}`,
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "270px",
    height: "150px",
    display: " flex",
  },
  ".ContainerWrapper": {
    display: "flex",
    justifyContent: "space-between",
  },
  ".Text": {
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
}));

export const ImgContainer = styled(Box)(({ theme }) => ({
  border: "1px solid #DDDDDD",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  justifyContent: "center",
  marginRight: "10px",
  width: "80px",
  height: "70px",
  borderRadius: "5px",
}));
