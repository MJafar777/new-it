import { Clear } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import icon1 from "../../images/nout-1.png";
import icon2 from "../../images/nout-2.png";
import icon3 from "../../images/nout-3.png";
import icon4 from "../../images/nout-4.png";
import icon5 from "../../images/nout-5.png";
import icon6 from "../../images/nout-6.png";
import icon7 from "../../images/nout-7.png";
import icon8 from "../../images/nout-8.png";
import "./page1Card2.css";

export default function Pages1Card2() {
  return (
    <Box>
      <Typography
        component="div"
        variant="h5"
        sx={{ marginY: 6, textAlign: "center", fontWeight:"500" }}
      >
        Популярные поломки ноутбуков
      </Typography>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Box className="catalog1-page1-card1-grid">
          {iconsGrid.map((item, i) => {
            return (
              <Card
                component="div"
                sx={{
                  borderRadius: "35px 0",
                  backgroundColor: "rgba(25, 25, 25, 0.1)",
                  padding: "25px",
                  textAlign: "center",
                  position: "relative",
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
                <img alt="icon" width="130px" src={item.icon} />
                <Typography variant="p" component="div">
                  {item.iconName}
                </Typography>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export const iconsGrid = [
  { iconName: "Не включается", icon: icon1 },
  { iconName: "Не зарежается", icon: icon2 },
  { iconName: "Не работает клавиатура", icon: icon3 },
  { iconName: "Залит жидкостью", icon: icon4 },
  { iconName: "Долго грузится / тормозит", icon: icon5 },
  { iconName: "Сильно шумит", icon: icon6 },
  { iconName: "Перегревается", icon: icon7 },
  { iconName: "Разбита матрица (экран)", icon: icon8 }
];













