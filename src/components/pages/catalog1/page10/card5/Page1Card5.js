import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import "./page1Card5.css";

export default function Page1Card5() {
  return (
    <Box className="catalog1-page1-card5-component">
      <Typography
        component="div"
        variant="h5"
        sx={{
          color: "blue",
          fontWeight: "500",
          textAlign: "center",
          marginY: 3,
        }}
      >
        Ремонт компьютеров в Ташкенте
      </Typography>
      <Typography variant="p" component="div">
        Жизнь сложно представить без использования ПК. Работа, учёба, творческие
        проекты, освоение новой профессии – эти задачи замедляются, если
        произошла поломка компьютерной техники. Устройство характеризуется
        сложностью конструкции, поэтому самостоятельное устранение неисправности
        невозможно. При первых признаках неправильной работы необходимо
        обратиться за помощью в квалифицированный сервисный центр. Подобный
        подход помогает сэкономить время, деньги, подобрать соответствующие
        комплектующие.
      </Typography>
      <Typography variant="p" component="div" sx={{ mt: 3 }}>
        Опытный мастер по ремонту компьютеров предварительно выполняет
        диагностику для определения первопричины поломки. Распространенными
        причинами неисправности считаются следующие моменты:
      </Typography>

      <Typography
        component="div"
        variant="h6"
        sx={{ color: "blue", fontWeight: "500", marginTop: 3 }}
      >
        Как понять, что ПК требует профессионального восстановления
      </Typography>
      <Typography
        component="div"
        variant="h6"
        sx={{ fontWeight: "500", marginTop: 3 }}
      ></Typography>

      {listCategory.map((item, i) => {
        return (
          <Box key={i}>
            <Typography
              component="div"
              variant="h6"
              sx={{ fontWeight: "500", marginY: 3 }}
            >
              {item.name}
            </Typography>
            {item.category.map((item2, i2) => {
              return (
                <ListItem disablePadding key={i2}>
                  <ListItemIcon sx={{ padding: 0, marginRight: -2 }}>
                    <BuildIcon sx={{ fontSize: 13, color: "blue" }} />
                  </ListItemIcon>
                  <ListItemText primary={item2} />
                </ListItem>
              );
            })}
          </Box>
        );
      })}

      <Typography
        component="div"
        variant="p"
        sx={{ marginTop: 3 }}
      >
        Наш сервис по ремонту компьютеров предлагает изучить характерные
        признаки некорректной работы устройства:
      </Typography>
      <Typography 
        component="div"
        variant="p"
        sx={{ marginTop: 3 }}>
        Требуется профессиональный ремонт компьютеров Ташкент? Опытные мастера
        «Eco-service» готовы провести мероприятия на дому. Оформить заявку на
        выезд специалиста можно на сайте, по телефону. Менеджеры предоставят
        дополнительные сведения.
      </Typography>
    </Box>
  );
}

const listCategory = [
  {
    name: " Наш сервис по ремонту компьютеров предлагает изучить характерные признаки некорректной работы устройства:",
    category: [
      "техника самопроизвольно перезагружается;",
      "отсутствует загрузка жесткого диска;",
      "изображение предусматривает разноцветные полосы, помехи;",
      "появляется синий экран;",
      "невозможно подключить внешнее устройство;",
      "перегревается блок питания корпуса;",
      "не загружается операционная система;",
      "часто происходит аварийное завершение программ.",
    ],
  },
];
