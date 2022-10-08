import {
  Call,
  Email,
  Instagram,
  LocationCity,
  LocationDisabled,
  LocationOn,
  Smartphone,
  Telegram,
  YouTube,
} from "@mui/icons-material";
import { IconButton, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Logo from "./images/logo.svg";
import "./footer.css";
export default function Footer() {
  return (
    <Box className="footer-container">
      <Box className="footer-grid-card">
        <Box>
          <img alt="logo" width='90%' src={Logo} />
          <Typography
          variant="p"
          className='footer-text'
          >
            NOVOTEST – приборы и системы контроля качества от производителя
          </Typography>
          <Box 
          >
          <IconButton 
          sx={{marginTop: 2}}
          >
            <Instagram />
          </IconButton>

          <IconButton
          
          sx={{marginTop: 2}}>
            <Telegram />
          </IconButton>

          <IconButton
          sx={{marginTop: 2}}>
            <YouTube />
          </IconButton>
          </Box>
        </Box>
        {footerCategory.map((item, i) => {return (
            <Box key={i}>
            <Typography 
            variant="h6"
            sx={{marginBottom: 2, marginX: '15px'}}
            >
                {item.name}
            </Typography>
            {item.category.map((item2, i2) => {return (
               <ListItemButton
               sx={{borderRadius: 20}}
               >
               {item2.icon&& item2.icon }
               <Typography key={i2}
                variant="p"
                sx={{marginX: item2.icon ?1:0 }}
                >
                    {item2.linkText}
                </Typography>
                    </ListItemButton>
            )})}
            </Box>

        )} )}
      </Box>
    </Box>
  );
}

const footerCategory = [
  {
    name: "Компания",
    category: [
      { to: "#", linkText: "Новости" },
      { to: "#", linkText: "О компании" },
      { to: "#", linkText: "Дипломы" },
      { to: "#", linkText: "Контакты" },
    ],
  },

  {
    name: "Услуги",
    category: [
      { to: "#", linkText: "Проверка приборов" },
      { to: "#", linkText: "Ремонт" },
      { to: "#", linkText: "Аренда" },
    ],
  },
  {
    name: "Клиентам",
    category: [
      { to: "#", linkText: "Программы для ПК" },
      { to: "#", linkText: "Прошивки для ПК" },
      { to: "#", linkText: "Документация" },
      { to: "#", linkText: "Рекомендации" },
      { to: "#", linkText: "Расширения" },
    ],
  },
  {
    name: "Контакты",

    category: [
      { to: "#", linkText: "+38 (056) 767-23-25,", icon: <Smartphone /> },
      { to: "#", linkText: "sales@novotest.com.ua", icon: <Email /> },
      {
        to: "#",
        linkText: "г. Новомосковск, ул. Спасская, 5",
        icon: <LocationOn />,
      },
    ],
  },
];
