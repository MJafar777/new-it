import { Button, Card, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import "./page1Card1.css";
import imgHom from "../../images/hoover-main-page-2.jpeg";
import { BorderBottom } from "@mui/icons-material";

export default function Page1Card1() {
  return (
    <Box className="catalog1-page1-card1-container">
      <Box className="catalog1-page1-card1-container-grid1">
        <Typography variant="p" component="div" sx={{ marginY: 4 }}>
          Сервисный центр → Ремонт ноутбуков → Замена разъема питания ноутбуков
        </Typography>
        <Typography variant="h3" sx={{ color: "black", fontWeight: "500" }}>
        ЗАМЕНА РАЗЪЕМА ПИТАНИЯ
НОУТБУКОВ
        </Typography>

        <Typography
          sx={{
            color: "blue",
            fontWeight: "500",
          }}
          variant="h3"
        >
          ТАШКЕНТ
        </Typography>
        <Typography variant="h5" component="div" sx={{ marginY: 4 }}>
        Позвоните и мастер бесплатно приедет через 34 минуты!
        </Typography>
      </Box>
      <img alt="img1" src={imgHom} width="100%" />
      <Box className="catalog1-page1-card1-container-grid1">
        <Box className="catalog1-page1-card1-container-grid">
          {categoty.map((item, i) => {
            return (
              <Card
                key={i}
                sx={{
                  width: 170,
                  boxShadow: 0,
                  background: "none",
                  display: "flex",
                }}
              >
                <BuildIcon sx={{ color: "blue", fontSize: 20 }} />
                <Typography
                  sx={{ marginLeft: 5, fontWeight: "500", textAlign: "left" }}
                >
                  {item}
                </Typography>
              </Card>
            );
          })}
        </Box>
        <Button
          sx={{
            backgroundColor: "blue",
            borderRadius: "25px 0 ",
            padding: "20px 30px",
            fontSize: 20,
            color: "#fff",
            marginY: 4,
            ":hover": {
              background: "blue",
            },
          }}
        >
          Вызвать мастера
        </Button>
        <br />
        <Typography variant="p">
          Менеджер перезвонит Вам в течение 30 секунд
        </Typography>
      </Box>
    </Box>
  );
}

const categoty = [
  " Диагностика свободно",
  "Отъезд мастера свободно",
  "Гарантия От 365 дней",
  "Любой ремонт на 1 день",
  "Опыт мастеров Более 10 лет",
  "Личный управляющий делами",
];
