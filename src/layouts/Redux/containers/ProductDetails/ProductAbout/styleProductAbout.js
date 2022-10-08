import { Box, Button, styled } from "@mui/material";

export const ProductDescription = styled(Box)(({ theme }) => ({
  flex: "4",
  [theme.breakpoints.down("sm")]: {
  },
}));

export const Amount = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const AmonuntBUtton = styled(Button)(({ theme }) => ({
  width: "35px",
  height: "35px",
  color: "#fff",
  background: theme.palette.button.main,
  "&:hover": {
    background: theme.palette.button.light,
  },
}));

export const Basket = styled(Button)(({ theme }) => ({
  background: theme.palette.basketColor.main,
  "&:hover": {
    background: "#F7CA18",
  },
  color: "#fff",
}));

export const ShopNow = styled(Button)(({ theme }) => ({
  background: theme.palette.buyColor.main,
  "&:hover": {
    background: "#2ECC71",
  },
  color: "#ffd200",
  marginLeft: "8px",
  height: "45px",
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    bottom: "0",
    left: "-10px",
    zIndex: "100",
    width: "100%",
    fontSize: "13px",
  },
}));

export const Comment = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    ".Text": {
      marginLeft: "10px",
    },
  },
}));

export const SendComment = styled(Button)(({ theme }) => ({
  background: theme.palette.button.main,
  "&:hover": {
    background: theme.palette.button.light,
  },
  color: "#fff",
  marginTop: 20,
  marginLeft: 40,
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0 50px 10px",
  },
}));
