import React from "react";
import { Box, Rating, useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./page1Card7.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {} from "@mui/material";
import styled, { css } from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import employee1 from "../../images/employee1.jpg";
import employee2 from "../../images/employee2.jpg";
import employee3 from "../../images/employee3.jpg";
import employee4 from "../../images/employee4.jpg";
import employee5 from "../../images/employee5.jpg";
import employee6 from "../../images/employee6.jpg";
import employee7 from "../../images/employee7.jpg";
import employee8 from "../../images/employee8.jpg";
import employee9 from "../../images/employee9.jpg";

export default function Page1Card2() {
  const matches = useMediaQuery("(max-width:768px)");
  

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
    //
  `;

  return (
    <Box sx={{paddingY: 7}}>
        <Typography variant="h5"
        component="div"
        sx={{textAlign: 'center',
        fontWeight: '500',
        marginBottom: 3 
    }}
        >
        Специалисты отдела 
                </Typography>


        <Box className="category1-page1-card7-container"   sx={{display: {sx: "none", sm: "block"}}}>
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={9}
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
          {employeeImgName.map((item, i) => {
            return (
              <Slide index={i + 1}>
                <Card
                  sx={{
                    maxWidth: 585,
                    display: "flex",
                    boxShadow: 0,
                    padding: 4,
                  }}
                >
                  <Box className="category1-page1-card7-grid">
                    <CardMedia
                      component="img"
                      height="290"
                      image={item.employeeImg}
                      alt="green iguana"
                      sx={{
                        borderRadius: "40px 0",
                        border: "4px solid #fff",
                        boxShadow: 2,
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.employeeName}
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        component="div"
                      >
                        {item.employeePosition}
                      </Typography>
                      <Typography variant="p" color="blue" component="div">
                        {item.experienceName}
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        component="div"
                      >
                        {item.experience}
                      </Typography>
                      <Typography variant="p" color="blue" component="div">
                        {item.costName}
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        component="div"
                      >
                        {item.cost}
                      </Typography>
                      <Box sx={{ display: "flex" }}>
                        <Rating name="simple-controlled" value={value} />
                        <Typography component="div" sx={{ marginLeft: 4 }}>
                          {item.rate}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Slide>
            );
          })}
        </Slider>
        <Controls
        >
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
      <Box sx={{display: {sx: "block", sm: "none"}}}>
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={9}
        naturalSlideHeight={140}
        visibleSlides={1.1}
        infinite={true}
      >
        <Slider
          style={{
            height: "36rem",
            margin: "auto",
          }}
        >
          {employeeImgName.map((item, i) => {
            return (
              <Slide index={i + 1}>
                <Card
                  sx={{
                    maxWidth: 585,
                    display: "flex",
                    boxShadow: 0,
                    padding: 4,
                  }}
                >
                  <Box className="category1-page1-card7-2-grid">
                    <CardMedia
                      component="img"
                      height="280"
                      image={item.employeeImg}
                      alt="green iguana"
                      sx={{
                        borderRadius: "40px 0",
                        border: "4px solid #fff",
                        boxShadow: 2,
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.employeeName}
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        component="div"
                      >
                        {item.employeePosition}
                      </Typography>
                      <Typography variant="p" color="blue" component="div">
                        {item.experienceName}
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        component="div"
                      >
                        {item.experience}
                      </Typography>
                      <Typography variant="p" color="blue" component="div">
                        {item.costName}
                      </Typography>
                      <Typography
                        variant="p"
                        color="text.secondary"
                        component="div"
                      >
                        {item.cost}
                      </Typography>
                      <Box sx={{ display: "flex" }}>
                        <Rating name="simple-controlled" value={value} />
                        <Typography component="div" sx={{ marginLeft: 4 }}>
                          {item.rate}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Slide>
            );
          })}
        </Slider>
        <Controls
        >
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
    </Box>
  );
}

const employeeImgName = [
  {
    employeeImg: employee1,
    employeeName: "ВИТАЛИЙ ПОТАШНИКОВ",
    employeePosition: " Менеджер отдела ремонта ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "6 лет",
    costName: "ОЦЕНОК:",
    cost: 71,
    rate: 4.8,
  },
  {
    employeeImg: employee2,
    employeeName: "КУЛЕШОВ ВИКТОР",
    employeePosition: " Мастер по ремонту ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "17 лет",
    costName: "ОЦЕНОК:",
    cost: 99,
    rate: 4.9,
  },
  {
    employeeImg: employee3,
    employeeName: "ВАЛЕРИЙ ФЁДОРОВ",
    employeePosition: "Мастер по ремонту ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "15 лет",
    costName: "ОЦЕНОК:",
    cost: 115,
    rate: 4.9,
  },
  {
    employeeImg: employee4,
    employeeName: "АЛИХАН АМИРГАЛИН",
    employeePosition: " Мастер по ремонту ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "5 лет",
    costName: "ОЦЕНОК:",
    cost: 76,
    rate: 4.9,
  },
  {
    employeeImg: employee5,
    employeeName: "АЛЕКСЕЙ ГУЗИКОВ",
    employeePosition: " Мастер по ремонту ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "8 лет",
    costName: "ОЦЕНОК:",
    cost: 93,
    rate: 4.9,
  },
  {
    employeeImg: employee6,
    employeeName: "ДАНА CУЛТАНГАЗИНА",
    employeePosition: " Руководитель отдела ремонта ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "6 лет",
    costName: "ОЦЕНОК:",
    cost: 52,
    rate: 4.9,
  },
  {
    employeeImg: employee7,
    employeeName: "ЗАРИНА ФЕНЬКО",
    employeePosition: " Менеджер отдела ремонта ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "3 года",
    costName: "ОЦЕНОК:",
    cost: 48,
    rate: 4.8,
  },
  {
    employeeImg: employee8,
    employeeName: "ИЛИЛИТДИНОВ РУСЛАН",
    employeePosition: " Мастер по ремонту ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "9 лет",
    costName: "ОЦЕНОК:",
    cost: 81,
    rate: 4.9,
  },
  {
    employeeImg: employee9,
    employeeName: "ДАНИЛЕНКО АЛЕКСАНДР",
    employeePosition: " Мастер по ремонту ноутбуков",
    experienceName: "ОПЫТ РАБОТЫ:",
    experience: "13 лет",
    costName: "ОЦЕНОК:",
    cost: 92,
    rate: 4.9,
  },
];
