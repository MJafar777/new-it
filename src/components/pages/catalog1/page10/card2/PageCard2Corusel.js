import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styled, { css } from "styled-components";
import { Call } from "@mui/icons-material";
import icon1 from "../../images/comp-1.png";
import icon2 from "../../images/comp-2.png";
import icon3 from "../../images/comp-3.png";
import icon4 from "../../images/comp-4.png";
import icon5 from "../../images/comp-5.png";
import icon6 from "../../images/comp-6.png";
import icon7 from "../../images/comp-7.png";
import icon8 from "../../images/comp-8.png";
import icon9 from "../../images/comp-9.png";
import icon10 from "../../images/comp-10.png";
import icon11 from "../../images/comp-11.png";
import icon12 from "../../images/comp-12.png";

export default function Page1Card1Corusel() {

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
    <>
    
    <Typography
        component="div"
        variant="h5"
        sx={{ marginY: 6, textAlign: "center", fontWeight:"500" }}
      >Популярные поломки компьютер
      </Typography>
    <Box
      sx={{
        textAlign: "center",
        display: { xs: "none", sm: "none", md: "block" },
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={iconsGrid.length}
        naturalSlideHeight={90}
        visibleSlides={3.2}
        infinite={true}
      >
        <Slider
          style={{
            height: "18rem",
            margin: "auto",
          }}
        >
          {iconsGrid.map((item, i) => {
            return (
              <Slide index={i + 1}>
                <Card
                  sx={{
                    maxWidth: 255,
                    borderRadius: "3px",
                    marginX: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.icon}
                    alt="green iguana"
                    sx={{ paddingX: "25%" }}
                  />
                  <IconButton
                    sx={{
                      background: "blue",
                      padding: 2,
                      textAlign: "center",
                      color: "#fff",
                      mt: 1,
                      ":hover": {
                        fontSize: 35,
                        color: "blue"
                      }
                    }}
                  >
                    <Call />
                  </IconButton>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.iconName}
                    </Typography>
                  </CardContent>
                  {/* </Box> */}
                </Card>
              </Slide>
            );
          })}
        </Slider>
        <Controls>
          <ButtonBackStyled>
            <ArrowBackIcon sx={{ marginTop: "3px" }} />
          </ButtonBackStyled>
          <DotGroupStyled />
          <ButtonNextStyled>
            <ArrowForwardIcon right sx={{ marginTop: "3px" }} />
          </ButtonNextStyled>
        </Controls>
      </CarouselProvider>
    </Box>
    <Box
      sx={{
        textAlign: "center",
        display: { xs: "none", sm: "block", md: "none" },
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={iconsGrid.length}
        naturalSlideHeight={90}
        visibleSlides={2.2}
        infinite={true}
      >
        <Slider
          style={{
            height: "18rem",
            margin: "auto",
          }}
        >
          {iconsGrid.map((item, i) => {
            return (
              <Slide index={i + 1}>
                <Card
                  sx={{
                    maxWidth: 255,
                    borderRadius: "3px",
                    marginX: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.icon}
                    alt="green iguana"
                    sx={{ paddingX: "25%" }}
                  />
                  <IconButton
                    sx={{
                      background: "blue",
                      padding: 2,
                      textAlign: "center",
                      color: "#fff",
                      mt: 1,
                      ":hover": {
                        fontSize: 35,
                        color: "blue"
                      }
                    }}
                  >
                    <Call />
                  </IconButton>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.iconName}
                    </Typography>
                  </CardContent>
                  {/* </Box> */}
                </Card>
              </Slide>
            );
          })}
        </Slider>
        <Controls>
          <ButtonBackStyled>
            <ArrowBackIcon sx={{ marginTop: "3px" }} />
          </ButtonBackStyled>
          <DotGroupStyled />
          <ButtonNextStyled>
            <ArrowForwardIcon right sx={{ marginTop: "3px" }} />
          </ButtonNextStyled>
        </Controls>
      </CarouselProvider>
    </Box>
    <Box
      sx={{
        textAlign: "center",
        display: { xs: "block", sm: "none", md: "none" },
      }}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={iconsGrid.length}
        naturalSlideHeight={90}
        visibleSlides={1.2}
        infinite={true}
      >
        <Slider
          style={{
            height: "18rem",
            margin: "auto",
          }}
        >
          {iconsGrid.map((item, i) => {
            return (
              <Slide index={i + 1}>
                <Card
                  sx={{
                    maxWidth: 255,
                    borderRadius: "3px",
                    marginX: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.icon}
                    alt="green iguana"
                    sx={{ paddingX: "25%" }}
                  />
                  <IconButton
                    sx={{
                      background: "blue",
                      padding: 2,
                      textAlign: "center",
                      color: "#fff",
                      mt: 1,
                      ":hover": {
                        fontSize: 35,
                        color: "blue"
                      }
                    }}
                  >
                    <Call />
                  </IconButton>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.iconName}
                    </Typography>
                  </CardContent>
                  {/* </Box> */}
                </Card>
              </Slide>
            );
          })}
        </Slider>
        <Controls>
          <ButtonBackStyled>
            <ArrowBackIcon sx={{ marginTop: "3px" }} />
          </ButtonBackStyled>
          <DotGroupStyled />
          <ButtonNextStyled>
            <ArrowForwardIcon right sx={{ marginTop: "3px" }} />
          </ButtonNextStyled>
        </Controls>
      </CarouselProvider>
    </Box>
    </>
  );
}

const iconsGrid = [
  { iconName: "Не включается", icon: icon1 },
  { iconName: "Произвольно перезагружается", icon: icon2 },
  { iconName: "Синий экран", icon: icon3 },
  { iconName: "Залит жидкостью", icon: icon4 },
  { iconName: "Долго грузится / тормозит", icon: icon5 },
  { iconName: "Сильно шумит", icon: icon6 },
  { iconName: "Перегревается", icon: icon7 },
  { iconName: "Разбита матрица (экран)", icon: icon8 },
  { iconName: "Не загружается (черный экран)", icon: icon9 },
  { iconName: "Не выключается", icon: icon10 },
  { iconName: "Выключается сам по себе", icon: icon11 },
  { iconName: "Не работает интернет", icon: icon12 }
];


