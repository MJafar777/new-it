import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { iconsGrid } from "./Page1Card2";
import styled, { css } from "styled-components";
import { Clear } from "@mui/icons-material";

export default function Page1Card1Corusel() {
  const matches = useMediaQuery("(max-width:600px)");

  const [value, setValue] = React.useState(5);
  const buttonCss = css`
    background: none;
    border: none;
    color: blue;

    &:disabled {
      cursor: default;

      svg circle {
        fill: blue;
      }
    }
  `;
  const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  `;

  const ButtonBackStyled = styled(ButtonBack)`
    ${buttonCss};
  `;

  const ButtonNextStyled = styled(ButtonNext)`
    ${buttonCss};
  `;

  const DotGroupStyled = styled(DotGroup)`
    &.carousel__dot-group {
      display: flex;
    }

    .carousel__dot {
      background: #ffffff;
      border: 1px solid #bfbfbf;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      margin-left: 4px;
      margin-right: 4px;
      transform: translateZ(0);

      &:first-child {
        margin-left: 30px;
      }

      &:last-child {
        margin-right: 30px;
      }
    }

    .carousel__dot--selected {
      border: none;
      background: blue;
    }
  `;
  return (
    <Box
      sx={{
        textAlign: "center",
        display: { xs: "block", sm: "block", md: "none" },
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={8}
        naturalSlideHeight={90}
        visibleSlides={matches ? 1.1 : 2.1}
        infinite={true}
      >
        <Slider
          style={{
            height: "22rem",
            margin: "auto",
          }}
        >
          {iconsGrid.map((item, i) => {
            return (
              <Slide index={i + 1}>
                <Card
                  sx={{
                    maxWidth: 255,
                    borderRadius: "35px 0",
                    backgroundColor: "rgba(25, 25, 25, 0.1)",
                    padding: "25px",
                    textAlign: "center",
                    position: "relative",
                    marginX: 2,
                    height: 290,
                  }}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: 20,
                      top: 20,
                      color: "#fff",
                      background: "red",
                      padding: 0,
                    }}
                  >
                    <Clear />
                  </IconButton>
                  <Box>
                    <CardMedia
                      component="img"
                      // height="290"
                      // width="100"
                      image={item.icon}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="p" component="div">
                        {item.iconName}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Slide>
            );
          })}
        </Slider>
        <Controls>
          <ButtonBackStyled>
            <ArrowBackIosIcon />
          </ButtonBackStyled>
          <DotGroupStyled />
          <ButtonNextStyled>
            <ArrowForwardIosIcon right />
          </ButtonNextStyled>
        </Controls>
      </CarouselProvider>
    </Box>
  );
}
