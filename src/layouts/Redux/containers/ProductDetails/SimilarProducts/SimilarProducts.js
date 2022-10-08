import {
  AddCardRounded,
  AddShoppingCartRounded,
  StarBorderRounded,
} from "@mui/icons-material";
import { Box, Button, Skeleton, styled, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {
  CartItem,
  CardItemWrapper,
  CardStatus,
  CardItemText,
  ButtonsContainer,
} from "../../ProductComponent/styleProductComponent";
import { settings } from "./settingsSilder";

const SimilarProducts = () => {
  const product = useSelector((state) => state.allProducts.product);

  const BoxSlider = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      width: "320px",
      marginLeft: "-10px",
    },
  }));

  const navigate = useNavigate();

  const renderList = product.map((product) => {
    const { id, title, images, price } = product;

    return (
      <>
        {product ? (
          <CartItem>
            <CardItemWrapper>
              <Link to={`../product/${id}`}>
                <img src={images} alt={title} />
              </Link>
              <CardStatus>
                <Box className="status">
                  3.4
                  <Box className="StarIcon">
                    <StarBorderRounded style={{ fontSize: "18px" }} />
                  </Box>
                </Box>
                <Typography component={"P"} fontWeight={500}>
                  ${price}
                </Typography>
              </CardStatus>
              <CardItemText>
                <Typography color="primary" className="title">
                  {title}
                </Typography>
                <Typography color="secondary" className="description">
                  Lorem Ipsum is simply dummy text
                </Typography>
              </CardItemText>
            </CardItemWrapper>
            <ButtonsContainer>
              <Button className="button1" variant="contained" color="primary">
                <AddShoppingCartRounded
                  className="icon"
                  sx={{ fontSize: "20px" }}
                />
                <Typography className="Text">Shop</Typography>
              </Button>
              <Button className="button2" variant="contained" color="secondary">
                <AddCardRounded className="icon" sx={{ fontSize: "20px" }} />
                <Typography className="Text">ADD TO CART</Typography>
              </Button>
            </ButtonsContainer>
          </CartItem>
        ) : (
          <Skeleton
            style={{ borderRadius: "10px", background: "#7F7F7F" }}
            animation="wave"
            variant="rectangular"
            width={410}
            height={350}
          />
        )}
      </>
    );
  });

  return (
    <BoxSlider mt={10} mb={8}>
      <Slider {...settings}>{renderList}</Slider>
    </BoxSlider>
  );
};

export default SimilarProducts;
