import { Button, Card, Container } from "@mui/material";
import { Box, styled } from "@mui/system";

export const Wrapper = styled(Box)(({ theme }) => ({
  background: "#fff",
  display: "inline-block",
  justifyContent: "center",
  margin: "50px 0 0 50px",
  transition: "0.3s",
  borderRadius: "none",
  animation: "ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "158px",
    display: "inline-block",
    marginLeft: "0",
    paddingLeft: "5px",
    marginTop: "20px",
  },
}));

export const CartItem = styled(Card)(({ theme }) => ({
  width: "280px",
  height: "380px",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  img: {
    width: "240px",
    height: "240px",
    cursor: "pointer",
  },
  borderBottomLeftRadius: "none",
  borderBottomRightRadius: "none",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    height: "260px",
    img: {
      width: "140px",
      height: "150px",
      cursor: "pointer",
    },
  },
}));

export const CardItemWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  flex: "10",
});

export const CardStatus = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  ".status": {
    width: "50px",
    color: "#fff",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    background: theme.palette.buttonproduct.main,
  },
  [theme.breakpoints.down("sm")]: {
    ".status": {
      fontSize: "10px",
      width: "40px",
    },
    fontSize: "12px",
  },
}));

export const CardItemText = styled(Box)(({ theme }) => ({
  width: "200px",
  ".description": {
    fontSize: "12px",
    fontWeight: "200",
  },
  [theme.breakpoints.down("sm")]: {
    width: "140px",
    ".title": {
      display: "flex",
      width: "140px",
      justifyContent: "center",
      fontSize: "10px",
    },
    ".description": {
      fontSize: "9px",
    },
  },
}));

export const ButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1",
  borderRadius: "none",
  width: "100%",
  ".button1": {
    flex: "1",
    height: "35px",
    borderRadius: "none",
    background: theme.palette.basketColor.main,
    "&:hover": {
      background: theme.palette.basketColor.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: "22px",
      marginTop: "auto",
    },
  },
  ".button2": {
    flex: "1",
    height: "35px",
    fontSize: "12px",
    color: "#fff",
    background: theme.palette.buttonproduct.light,
    "&:hover": {
      background: theme.palette.buttonproduct.main,
    },
    [theme.breakpoints.down("sm")]: {
      height: "22px",
      marginTop: "auto",
    },
  },
  ".Text": {
    fontSize: "12px",
    marginLeft: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
      width: "100%",
    },
  },
  ".icon": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginLeft: "auto",
      paddingLeft: "auto",
    },
  },
}));
