import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import './page1Card5.css'

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
        Сервис по ремонту ноутбуков
      </Typography>
      <Typography variant="p" component="div">
        Компьютерная техника стала незаменимым помощником человека, при решении
        рабочих, учебных, творческих задач. Часто поломка лэптопа делает
        невозможным выполнение срочных проектов. В подобных ситуациях следует
        сразу обращаться в специализированный сервисный центр. Не рекомендуется
        пытаться самостоятельно восстановить работоспособность устройства,
        неквалифицированные действия приводят к полному выходу из строя девайса.
        Наша компания занимается комплексным восстановлением ноутбуков различных
        брендов, моделей. На сайте представлены отзывы клиентов, которые смогли
        оперативно решить проблему.
      </Typography>

      <Typography
        component="div"
        variant="h6"
        sx={{ color: "blue", fontWeight: "500", marginTop: 3 }}
      >
        Распространенные неисправности лэптопов
      </Typography>

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
        variant="h6"
        sx={{ fontWeight: "500", marginY: 3 }}
      >
        Итоговая стоимость ремонта ноутбука формируется с учетом сложности,
        объема неполадок. Стандартно процесс предусматривает следующие шаги:
      </Typography>

      <ListItem disablePadding>
        <ListItemIcon>
          <BuildIcon sx={{ fontSize: 13, color: "blue" }} />
        </ListItemIcon>
        <ListItemText primary="Визуальный осмотр, диагностика. На этом этапе определяется причина проблемы." />
      </ListItem>

      <ListItem disablePadding>
        <ListItemIcon>
          <BuildIcon sx={{ fontSize: 13, color: "blue" }} />
          <BuildIcon sx={{ fontSize: 13, color: "blue" }} />
        </ListItemIcon>
        <ListItemText primary="Подбор оригинальных комплектующих." />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon>
          <BuildIcon sx={{ fontSize: 13, color: "blue" }} />
          <BuildIcon sx={{ fontSize: 13, color: "blue" }} />
          <BuildIcon sx={{ fontSize: 13, color: "blue" }} />
        </ListItemIcon>
        <ListItemText primary="Замена поврежденных элементов и тестирование работоспособности." />
      </ListItem>

      <Typography component="div" variant="p"sx={{marginY: 2}}>
        Сотрудники нашей компании учитывают мельчайшие детали, что помогает
        решать задачи любого уровня сложности. Обладаем опытом починки приборов
        разных брендов.
      </Typography>
      <Typography component="div" variant="p"
      sx={{marginY: 2}}
      >
        «Eco-service» предлагает заказать профессиональный ремонт ноутбуков
        Ташкент. Проводим работу на дому, что помогает сэкономить время на
        поездку в сервисный центр. Оформить заявку на выезд мастера можно на
        сайте, по телефону. Менеджеры уточнят адрес, оптимальное время
        выполнения работ.
      </Typography>
    </Box>
  );
}

const listCategory = [
  {
    name: "Часто мастер по ремонту ноутбуков производит замену следующих составляющих:",
    category: [
      "клавиатура;",
      "система охлаждения;",
      "материнская плата;",
      "жесткий диск;",
      "матрица;",
      "экран;",
      "аккумулятор;",
      "блок питания;",
      "видеокарта;",
      "шлейфы;",
      "петли;",
      "корпус.",
    ],
  },
  {
    name: "Отдельным направлением работы считаются следующие действия:",
    category: [
      "чистка от пыли, загрязнений,",
      "модернизация ОС;",
      "установка необходимых программ;",
      "нормализация работы BIOS;",
      "восстановление утерянных данных. ",
    ],
  },
];
