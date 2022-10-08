import React from "react";

// mui
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { borderRadius, Stack, ThemeProvider } from "@mui/system";
import { styled } from "@mui/system";
import Vacancyid from "./VacancyId/Vacancyid";
import { Link } from "react-router-dom";
import {Container} from "@mui/system";

import './Vacancy.css'

// Icons
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GroupIcon from "@mui/icons-material/Group";
import breakpoints from "../../themes/breakpoints";
function Vacancy(props) {
  const Myimg = styled("img")({
    maxWidth: " 100%",
    maxHeight: "100%",
  });
  const MainTitle = styled("h1")({
    fontSize: "30px",
    lineHeight: "116%",
    letterSpacing: "0",
    textAlign: "left",
    padding: "0 0 17px 0",
    
  });
  const LittleTitle = styled("h3")({
    letterSpacing: "0.6px",
    fontSize: "23px",
    lineHeight: "33px",
    color: "#4c4c4c",
    marginBottom: "30px",
  });
  const Box = styled("div")({
    padding: "30px",
    textAlign: "center",
    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    borderRight: "1px solid #A9A9A9",
    zindex: "-1",
    "&:hover": {
      border: "0px",
      borderRadius: "15px",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      transform: "scale(1.1)",
      transition: "all .5s ease-out",
      zindex: "99",
      background: "#fff",
    },
  });
  const Box__p = styled("p")({
    lineHeight: "20px",
    color: "#059ad2",
    textAlign: "center",
  });
  const Box__title = styled("h3")({
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "500",
    margin: "15px 0px 10px",
  });
  const Title = styled("h3")({
    fontSize: "30px",
    lineHeight: "1.3",
    padding: "0 0 40px 0",
    textAlign: "center",
    marginTop: "100px",
  });
  const Btnborder = styled("div")({
    padding: "20px",
    border: "1px solid rgba(100, 100, 111, 0.2)",
    display: "inline-block",
    borderRadius: "50%",
    textAlign: "center",
    margin: "auto",
    "&:hover": {
      borderColor: "#64b5f6",
    },
  });
  const Roudnbtn = styled("button")({
    padding: "13px",
    borderRadius: "50%",
    background: "#fff",
    border: "none",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    color: "#64b5f6",
    textAlign: "center",
    "&:hover": {
      color: "#fff",
      background: "#64b5f6",
    },
  });

  return (
    <ThemeProvider theme={breakpoints}>
    <Container>

    <div>
      <div
        className="hero_section"
        style={{
          background:
            " linear-gradient(to right, rgba(169,208,113,0),rgba(136,173,215,1))",
          position: "relative",
        }}
      >
        <Grid container>
          <Grid item lg="5" md={5} sm={5}>
            <Myimg src="https://office-business.ru/images/image/abs.png"></Myimg>
          </Grid>
          <Grid item lg="7" md={7} sm={7} className="texts" mt={13}>
            <MainTitle className="main__title">
              <span
                style={{
                  color: "#00aeef",
                }}
              >
                OUR-SERVICE
              </span>{" "}
              Ташкент <br /> Там, где всегда есть работа!
            </MainTitle>
            <LittleTitle className='lt__title'>
              {" "}
              Ищешь работу? Cтань сотрудником <br /> Our-service уже завтра.
            </LittleTitle>

            <Stack class direction="row" sx={{ marginBottom: "20px", }}>
              <Button
                variant="contained"
                sx={{
                  background: "#64b5f6",
                  marginRight: "20px",
                }}
              >
                Find your carrer
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#64b5f6",
                  borderColor: "#64b5f6",
                }}
              >
                Call us
              </Button>
            </Stack>
            <Stack
              spacing={3}
              // direction="row"
              mt={5}
              sx={{
                paddingBottom: "70px",
              }}
              direction = 'row'
              
            >
              <Stack className="have"
                spacing={1}
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                <CheckIcon sx={{ color: "#64b5f6" }}></CheckIcon>
                Стабильная <br /> зарплата
              </Stack>
              <Stack  className="have"
                spacing={1}
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                <CheckIcon sx={{ color: "#64b5f6" }}></CheckIcon>
                Стабильная <br /> зарплата
              </Stack>
              <Stack  className="have"
                spacing={1}
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                <CheckIcon sx={{ color: "#64b5f6" }}></CheckIcon>
                Стабильная <br /> зарплата
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            lg="12"
            textAlign="center"
            sx={{
              position: "absolute",
              left: "0",
              right: "0",
              margin: "0 auto",
              bottom: "-50px",
            }}
          >
            <Btnborder>
              <Roudnbtn>
                <ArrowDownwardIcon />
              </Roudnbtn>
            </Btnborder>
          </Grid>
        </Grid>
      </div>
      <section>
        <div className="jobs">
          <Title>МАСТЕРА ИНЖЕНЕРЫ</Title>
          <Grid
            container
            sx={{
              marginTop: "70px",
              justifyContent: "center",
            }}
          >
            <Grid item lg={3} md={6} sm={12}>
              <Box>
                <GroupIcon
                  style={{
                    fontSize: "45px",
                  }}
                />
                <Box__title>Construction</Box__title>
                <Box__p>
                  <Link to="<Vacancyid/>">Have a 4 vacancies</Link>
                </Box__p>
              </Box>
            </Grid>
            <Grid item lg={3}  md={6} sm={12}>
              <Box>
                <GroupIcon
                  style={{
                    fontSize: "45px",
                  }}
                />
                <Box__title>Construction</Box__title>
                <Box__p>Have a 4 vacancies</Box__p>
              </Box>
            </Grid>
            <Grid item lg={3}  md={6} sm={12}>
              <Box>
                <GroupIcon
                  style={{
                    fontSize: "45px",
                  }}
                />
                <Box__title>Construction</Box__title>
                <Box__p>Have a 4 vacancies</Box__p>
              </Box>
            </Grid>
            <Grid item lg={3}  md={6} sm={12}>
              <Box>
                <GroupIcon
                  style={{
                    fontSize: "45px",
                  }}
                />
                <Box__title>Construction</Box__title>
                <Box__p>Have a 4 vacancies</Box__p>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className="location">
          <Title className="main__title">Наши контакты</Title>
          <Grid container alignItems="center" >
            <Grid item lg={5} md={5} sm='12' className="location__text">
              <Box__title className="main__title">
                Ташкент, Олмазор <br /> микрорайон, 8/1
              </Box__title>
              <Box__p>
                График работы:
                <br />
                Пн - Пт с 10:00 - 19:00
                <br />
                Сб - Вс и праздники:
                <br />c 11:00 - 18:00
              </Box__p>
            </Grid>
            <Grid item lg={7} md={7} sm={12}>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    style={{
                      borderBottomLeftRadius: "15%",
                    }}
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default Vacancy;
