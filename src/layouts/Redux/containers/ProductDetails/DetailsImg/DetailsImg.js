import React, { useState } from "react";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
import { Alert, Collapse } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  favoriteCloseProduct,
  favoriteOpenProduct,
} from "../../../redux/action/productAction";
import SkeletonImg from "./SkeletonDetailsImg";
import {
  AlertFavorite,
  FavoriteContainer,
  ProductImg,
  styleFavorite,
  styleImg,
  Wrapper,
} from "./styleDetailsImg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailsImg = ({ images, title }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const [newImages, setNewImages] = useState({ productImg: images });

  const favorite = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();

  const handleOpenFavorite = () => {
    dispatch(favoriteOpenProduct());
  };

  const handleCloseFavorite = () => {
    dispatch(favoriteCloseProduct());
  };

  const handleClickImg = (e) => {
    for (const itemImg of images) {
      if (itemImg === e.target.currentSrc) {
        setNewImages((prev) => ({ ...prev, productImg: itemImg }));
      }
    }
  };

  return (
    <Wrapper>
      <AlertFavorite>
        <Collapse in={favorite}>
          <Alert severity="success">Sara mahsulotlarga qo'shildi!</Alert>
        </Collapse>
      </AlertFavorite>
      <ProductImg>
        {favorite ? (
          <FavoriteContainer>
            <FavoriteRounded
              style={styleFavorite}
              cursor="pointer"
              onClick={handleCloseFavorite}
            />
          </FavoriteContainer>
        ) : (
          <FavoriteContainer>
            <FavoriteBorderRounded
              style={styleFavorite}
              cursor="pointer"
              onClick={handleOpenFavorite}
            />
          </FavoriteContainer>
        )}
        {images ? (
          <img src={newImages.productImg} alt="title" className="img" />
        ) : (
          <Box>
            <SkeletonImg />
          </Box>
        )}
        <Box width={200} mt={1}>
          {images && (
            <Slider {...settings}>
              {images.map((image) => {
                return (
                  <Box key={image}>
                    <img
                      onClick={handleClickImg}
                      style={styleImg}
                      src={image}
                      alt={title}
                    />
                  </Box>
                );
              })}
            </Slider>
          )}
        </Box>
      </ProductImg>
    </Wrapper>
  );
};

export default DetailsImg;
