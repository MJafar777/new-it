import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import './page1Card12.css'

import step1 from "../../images/card-12-1.svg";
import step2 from "../../images/card-12-2.svg";
import step3 from "../../images/card-12-3.svg";
import step4 from "../../images/card-12-4.svg";
import step5 from "../../images/card-12-5.svg";
import step6 from "../../images/card-12-6.svg";

export default function Page1Card12() {
  return (<Box>
          <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: "500", marginBottom: 4, textAlign: "center" }}
      >Этапы ремонта и ценообразование

      </Typography>
    <Box className="catalog1-page1-card12-container"> 
      {etabData.map((item, i) => {
        return (
          <Card key={i}
          sx={{padding: "10%", boxShadow: 4, maxWidth: 350}}
          >
            <CardMedia
              component="img"
              // height="204"
              // width="50%"
              image={item.icon}
              alt="Paella dish"
              />
            <Typography
            component="div"
            variant = "h6"
            sx={{my: 2}}
            >{item.name}</Typography>
            <Typography component="div"
            variant = "p"
            >{item.nameText}</Typography>
          </Card>
        );
      })}
      </Box>
    </Box>
  );
}

const etabData = [
  {
    icon: step1,
    name: "Консультация",
    nameText:
    "Вы можете оставить заявку или позвонить самостоятельно для подробной консультации",
  },
  {
    icon: step2,
    name: "Встреча со специалистом",
    nameText:
    "Мастер приезжает на место или вы самостоятельно приезжаете к нам в сервисный центр.",
  },
  {
    icon: step3,
    name: "Диагностика устройства",
    nameText:
    "Техник тщательно изучит ваш гаджет и протестирует на современном оборудовании.",
  },
  {
    icon: step4,
    name: "Согласование стоимости",
    nameText:
    "Мы предложим несколько вариантов решения вашей проблемы, для того чтобы вы уложились в бюджет.",
  },
  {
    icon: step5,
    name: "Гарантия от 1 года",
    nameText:
    "После проверки устройства клиентом мы выпишем гарантийный талон, под печать компании.",
  },
  {
    icon: step6,
    name: "Возвращение гаджета",
    nameText:
    "После ремонта мы можем бесплатно доставить устройство до нужного места или самовывоз.",
  },
];
