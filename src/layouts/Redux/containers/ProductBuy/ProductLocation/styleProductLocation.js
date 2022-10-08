import { Box, Button, styled } from "@mui/material";

export const LocationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    postion: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const SelectOrder = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    marginBottom: "7rem",
  },
}));

export const AllSelect = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.border.primary.main}`,
  borderRadius: "10px",
  alignItems: "center",
  display: "flex",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

export const Select1 = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "500px",
  },
}));

export const DeleteSelect = styled(Button)(({ theme }) => ({
  marginRight: "20px",
  marginLeft: "auto",
  border: "1px solid #B5A6A1",
  height: "45px",
  background: theme.palette.buttonproduct.main,
  "&:hover": {
    background: theme.palette.buttonproduct.light,
  },
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    marginRight: "20px",
    width: "50px",
  },
}));

export const Border = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.border.primary.main}`,
}));

export const ProductSelectContainer = styled(Box)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  ".Content": {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  ".SelectIcon": {
    [theme.breakpoints.down("sm")]: {
      paddingRight: "-20px",
    },
  },

  ".Description": {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      marginRight: "50px",
    },
  },
  ".ImgProduct": {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "150px",
    },
  },
}));

export const ButtonProduct = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    display: "flex",
    justifyContent: "space-around",
  },
  ".ButtonContent": {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "25px",
    },
  },
}));

export const OrderProduct = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.border.primary.main}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "10px",
  height: "150px",
  gap: "10px",
  marginLeft: "30px",
  paddingLeft: "10px",
  marginTop: "32px",
  flex: "1.5",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100px",
    position: "fixed",
    zIndex: "100",
    display: "flex",
    bottom: "0",
    left: "-30px",
    background: "#fff",
    // marginRight: "30px",
  },
  ".OrderContainer": {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  ".OrderText1": {
    display: "flex",
    color: "#3d3692",
    fontWeight: "500",
    fontSize: " 13px",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
    },
    ".text1": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  ".OrderText2": {
    display: "flex",
    color: "#3d3692",
    fontWeight: "600",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "120px",
      display: "flex",
      flexDirection: "column",
    },
    ".text2": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
  },
}));

export const OrderButton = styled(Button)(({ theme }) => ({
  background: theme.palette.basketColor.main,
  color: theme.palette.buttonproduct.main,
  width: "200px",
  height: "40px",
  "&:hover": {
    background: theme.palette.basketColor.light,
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    marginTop: "2.2rem",
    fontSize: "11px",
  },
}));
