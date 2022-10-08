import { Box, Button, Container, Modal, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  marginTop: "20px",
  position: "relative",
  display: "flex",
  gap: "40px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const WrapperItem1 = styled(Box)(({ theme }) => ({
  flex: "5",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
}));

export const ModalStyle = styled(Box)(({ theme }) => ({
  width: "600px",
  height: "600px",
  background: "#fff",
  position: "absolute",
  top: "110px",
  left: "480px",
  borderRadius: "10px",
  overflowY: "scroll",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    position: "absolute",
    top: "0",
    left: "10px",
  },
}));

export const ProductComponent = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.border.secondary.main}`,
  borderRadius: "10px",
  ".Wrapper": {
    display: "flex",
    justifyContent: "space-between",
  },
  ".Item": {
    display: "flex",
    width: "100%",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  ".styleImg": {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: " 150px",
    },
  },
  ".Child": {
    flex: "10",
    [theme.breakpoints.down("sm")]: {},
  },
  ".Text1": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  ".Text2": {
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      width: "85px",
    },
  },
}));

export const WrapperItem2 = styled(Box)(({ theme }) => ({
  background: "#fff",
  border: "1px solid #B5A6A1",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  height: "100%",
  gap: "10px",
  marginTop: "115px",
  flex: "2",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "-10px",
    marginBottom: "50px",
  },
}));

export const ButtonPayment = styled(Button)(({ theme }) => ({
  background: theme.palette.basketColor.main,
  color: theme.palette.button.main,
  width: "250px",
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "40px",
  },
}));

export const BoxContainer = styled(Box)(({ theme }) => ({
  height: "80px",
  border: `1px solid ${theme.border.secondary.main}`,
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
}));

export const styleInput = {
  height: "35px",
  border: "1px solid #DDDDDD",
  borderRadius: "5px 0 0 5px",
  paddinLeft: "5px",
  outline: "none",
};

export const styleImg = {};

export const styleModal = {};
