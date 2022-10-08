import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "450px",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));

export const ProductImg = styled(Box)(({ theme }) => ({
  flex: "2",
  borderRadius: "10px",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    width: "300px",
  },
  ".img": {
    width: "450px",
    height: "350px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "350px",
      width: "300px",
      display: "flex",
    },
  },
}));

export const AlertFavorite = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "20px",
  right: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    position: "absolute",
    top: "0",
    right: "40px",
    zIndex: "1",
  },
}));

export const FavoriteContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "10px",
  top: "20px",
}));

export const styleFavorite = {
  color: "#2d3092",
  fontSize: "30px",
};

export const styleImg = {
  width: "85px",
  height: "85px",
  border: "1px solid #2D3092",
  borderRadius: "5px",
  cursor: "pointer",
};
