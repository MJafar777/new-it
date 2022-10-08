import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./page1Card6.css";
export default function Page1Card6() {
  const [senaGaranty, setSenaGaranty] = useState(true);
  const [open, setOpen ] = useState(false)
  return (
    <List>
      <Typography
        component="div"
        variant="h5"
        sx={{ my: 4, textAlign: "center", fontWeight: "500" }}
      >
        Цены на ремонт ноутбуков
      </Typography>
      {repairPrices.map((item, i) => {
        return (
          i < (open ? repairPrices.length : 10)  &&
          <>
            <Box
              sx={{
                display: { xs: "none", sm: "block", md: "block" },
              }}
            >
              <ListItem
                disablePadding
                className="catalog1-page1-card6-grid"
                sx={{
                  backgroundColor:
                    i % 2 === 0 && i !== 0 && "rgba(150, 150, 150, 0.2)",
                  color: i === 0 && "rgba(150, 150, 150, 0.8)",
                  borderBottom: i === 0 && "2px solid blue",
                }}
              >
                <ListItemText primary={<h4>{item.services}</h4>} />
                <ListItemText primary={item.price} sx={{ marginRight: 0 }} />
                <ListItemText primary={item.rewards} />
              </ListItem>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <ListItem
                disablePadding
                className="catalog1-page-card6-grid"
                sx={{
                  backgroundColor:
                    i % 2 === 0 && i !== 0 && "rgba(150, 150, 150, 0.2)",
                  color: i === 0 && "rgba(150, 150, 150, 0.8)",
                  borderBottom: i === 0 && "2px solid blue",
                }}
              >
                <ListItemText primary={<h4>{item.services}</h4>} />
                {senaGaranty ? (
                  <ListItemText
                    primary={
                      <>
                        {i === 0 && (
                          <Button
                            onClick={(e) => setSenaGaranty(false)}
                            sx={{
                              background: "blue",
                              ":hover": {
                                background: "blue",
                              },
                            }}
                          >
                            ГАРАНТИЯ
                          </Button>
                        )}
                        {item.price}
                      </>
                    }
                    sx={{ marginRight: 0 }}
                  />
                ) : (
                  <ListItemText
                    primary={
                      <>
                        {i === 0 && (
                          <Button
                            onClick={(e) => setSenaGaranty(true)}
                            sx={{
                              background: "blue",
                              ":hover": {
                                background: "blue",
                              },
                            }}
                          >
                            ЦЕНА
                          </Button>
                        )}
                        {item.rewards}
                      </>
                    }
                  />
                )}
              </ListItem>
            </Box>
          </>
        );
      })}
{open===false &&
      <Typography 
      component="div"
      variant="h6"
      sx={{textAlign: "center", color: "blue", mt: 3}}
      onClick={(e) => setOpen(true)}
      >ПОКАЗАТЬ ЕЩЕ
      </Typography>
}
    </List>
  );
}

const repairPrices = [
  { services: "НАИМЕНО ВАНИЕ УСЛУГИ	,", price: "ЦЕНА", rewards: "ГАРАНТИЯ" },
  { services: "Выезд мастера и диагностика", price: "Бесплатно", rewards: "—" },
  {
    services: "Установка новой батареи питания BIOS",
    price: "от 65600 сум.",
    rewards: "1 год",
  },
  {
    services: "Установка новой батареи питания CMOS",
    price: "от 82600 сум.",
    rewards: "1 год",
  },
  {
    services: "Смена программного обеспечения микросхемы ПЗУ BIOS",
    price: "от 65600 сум.",
    rewards: "1 год",
  },
  {
    services: "Удаление пароля BIOS путем аппаратной перепрошивки",
    price: "от 68600 сум.",
    rewards: "1 год",
  },
  {
    services: "Обновление программного обеспечения микросхемы ПЗУ BIOS",
    price: "от 93200 сум.",
    rewards: "1 год",
  },
  {
    services:
      "Замена клавиатуры в ноутбуках, где клавиатура отсоединяется от корпуса",
    price: "от 82600 сум.",
    rewards: "	1 год",
  },
  {
    services:
      "Замена клавиатуры в ноутбуках, где клавиатура является неотъемлемой частью корпуса",
    price: "	от 82600 сум.",
    rewards: "	1 год",
  },
  {
    services: "Замена тачпада, стикпоинта, трекбола",
    price: "от 65600 сум.",
    rewards: "1 год",
  },
  {
    services: "Установка отсутствующих клавиш",
    price: "от 82600 сум.",
    rewards: "1 год",
  },
  {
    services:
      "Демонтаж рамки, крышки, topcase, lowcase и установка новых деталей",
    price: "от 82600 сум.",
    rewards: "1 год",
  },
  {
    services:
      "Сращивание деталей, наращивание части корпуса, ремонт «колодца» крепления, ремонт мелких трещин корпуса",
    price: "от 93200 сум.",
    rewards: "1 год",
  },
];
