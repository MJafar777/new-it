import React from "react";

// mui
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { Stack } from "@mui/system";
import { styled } from "@mui/system";
import {Container} from "@mui/system";
import './VacancyId.css'

// Icons
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Vacancyid(props) {
  const Myimg = styled("img")({
    maxWidth: " 100%",
    maxHeight: "100%",
  });
  const Box__title = styled("h3")({
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "500",
    margin: "10px 0px",
  });
  const Title = styled("h3")({
    fontSize: "30px",
    lineHeight: "1.3",
    padding: "0 0 40px 0",
    textAlign: "center",
    marginTop: "100px",
  });
  const AboutCompany = styled("div")({
    padding: "20px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    margin: "30px 0px",
  });
  const Allthingcompany = styled("div")({
    padding: "40px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  });
  const Boxabout = styled("div")({
    margin: "10px 0px",
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "#b2babb",
  });
  return (
    <div>
      <div
        className="hero_section"
        style={{
          position: "relative",
        }}
      >
        <Container className='container' sx={{
          display : 'flex',
          alignItems : 'center',
          justifyContent: 'space-between'
        }}>
        <Grid item lg="7" md="5" sm='12' className="texts" mt={13}>
            <h1 className="title"
              style={{
                fontSize: "30px",
                lineHeight: "116%",
                letterSpacing: "0",
                textAlign: "left",
                padding: "0 0 17px 0",
              }}
            >
              <span
                style={{
                  color: "#00aeef",
                }}
              >
                Ташкент
              </span>{" "}
              Работа  мастер по <br /> ремонту  ноутбуков
            </h1>
            <h4
              style={{
                letterSpacing: "0.6px",
                fontSize: "23px",
                lineHeight: "33px",
                color: "#4c4c4c",
                marginBottom: "30px",
              }}
            >
              {" "}
              Cтань сотрудником <br /> OUR-service
              <br /> уже сегодня
            </h4>
            <Stack  direction="row" sx={{ marginBottom: "20px" , justifyContent : 'center'  }}>
              <Button
                variant="contained"
                sx={{
                  background: "#64b5f6",
                  marginRight: "20px",
                }}
              >
                Write us
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
            <Stack  spacing={3}  mt={5}
                direction='row'
                className='have'
            >
              <Stack className='wehave'
                spacing={1}
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                <CheckIcon sx={{ color: "#64b5f6" }}></CheckIcon>
                Стабильная <br /> зарплата
              </Stack>
              <Stack className='wehave'
                spacing={1}
                direction="row"
                sx={{
                  alignItems: "center",
                }}
              >
                <CheckIcon sx={{ color: "#64b5f6" }}></CheckIcon>
                Стабильная <br /> зарплата
              </Stack>
              <Stack className='wehave'
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
          <Grid className="myimg" item lg="5" md="5" sm='12'>
            <Myimg src="https://avatars.mds.yandex.net/i?id=71f23064964256c2069e5d456efb8c5f-5234007-images-thumbs&n=13"></Myimg>
          </Grid>
        </Container>
      </div>
      <section >
        <div className="jobs">
          <Container>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid className="about__company" item lg={5} md={5} sm='12'>
              <AboutCompany>
                <h3>Oracle Fusion Technical Reporting Consultant</h3>

                <Boxabout>
                  <Stack>
                    Oracle3.9
                    <StarIcon />
                    (3848 Reviews)
                  </Stack>
                </Boxabout>
                <Boxabout>
                  <WorkIcon />
                  <p
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    6 - 10 years
                  </p>
                </Boxabout>
                <Boxabout>
                  <LocationOnIcon />
                  <p>Noida, Hyderabad/Secunderabad, Pune, Chennai,</p>
                </Boxabout>
              </AboutCompany>
              <Title className="other__jobs">Other Jobs</Title>
              <AboutCompany>
                <h3>Oracle Fusion Technical Reporting Consultant</h3>

                <Boxabout>
                  <Stack>
                    Oracle3.9
                    <StarIcon />
                    (3848 Reviews)
                  </Stack>
                </Boxabout>
                <Boxabout>
                  <WorkIcon />
                  <p
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    6 - 10 years
                  </p>
                </Boxabout>
                <Boxabout>
                  <LocationOnIcon />
                  <p>Noida, Hyderabad/Secunderabad, Pune, Chennai,</p>
                </Boxabout>
              </AboutCompany>
              <AboutCompany>
                <h3>Oracle Fusion Technical Reporting Consultant</h3>

                <Boxabout>
                  <Stack>
                    Oracle3.9
                    <StarIcon />
                    (3848 Reviews)
                  </Stack>
                </Boxabout>
                <Boxabout>
                  <WorkIcon />
                  <p
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    6 - 10 years
                  </p>
                </Boxabout>
                <Boxabout>
                  <LocationOnIcon />
                  <p>Noida, Hyderabad/Secunderabad, Pune, Chennai,</p>
                </Boxabout>
              </AboutCompany>
            </Grid>
            <Grid item lg={6} md={6} sm='12'>
              <Allthingcompany>
                <Box__title className="title">Job Responsibilities:</Box__title>
                <p>
                  The main role of this Support engineer is to troubleshoot and
                  resolve highly complex technical problems. The key skills put
                  to use on a daily basis are - high level of technical skills,
                  some functional skills Oracle products knowledge, problem
                  solving skills, and customer interaction/service expertise.
                </p>
                <Box__title className="title">Job Responsibilities:</Box__title>
                <p>
                  The main role of this Support engineer is to troubleshoot and
                  resolve highly complex technical problems. The key skills put
                  to use on a daily basis are - high level of technical skills,
                  some functional skills Oracle products knowledge, problem
                  solving skills, and customer interaction/service expertise.
                </p>
                <Box__title className="title">Job Responsibilities:</Box__title>
                <p>
                  The main role of this Support engineer is to troubleshoot and
                  resolve highly complex technical problems. The key skills put
                  to use on a daily basis are - high level of technical skills,
                  some functional skills Oracle products knowledge, problem
                  solving skills, and customer interaction/service expertise.
                </p>
                <Box__title className="title">Job Responsibilities:</Box__title>
                <p>
                  The main role of this Support engineer is to troubleshoot and
                  resolve highly complex technical problems. The key skills put
                  to use on a daily basis are - high level of technical skills,
                  some functional skills Oracle products knowledge, problem
                  solving skills, and customer interaction/service expertise.
                </p>
              </Allthingcompany>
            </Grid>
          </Grid>
          </Container>
          
        </div>
      </section>
    </div>
  );
}

export default Vacancyid;
