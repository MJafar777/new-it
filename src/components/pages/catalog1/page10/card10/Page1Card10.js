import { Box, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import './page1Card10.css'
import SignLanguageSharpIcon from "@mui/icons-material/SignLanguageSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";


export default function Page1Card10() {
  return (
    <Box>
      <Typography
      component="div"
      variant = "h5"
      sx={{fontWeight : "500", textAlign:"center", margin: 3, zIndex: 2,}}
      >Мы отличаемся тремя преимуществами</Typography>
    <Box className="category1-page-card10-component">
          {advantageData.map((item, i) => {
              return <Card
              sx={{
                boxShadow: 3,
                padding: '10%',
                borderRadius: "2px",
                marginTop: 5,
                display: "grid",
                gridTemplateRows: "auto auto auto",
                justifyContent: "center",
            position: "relative",
            maxWidth: 400
            }}
              >
            {item.advantageIcon}
            <Typography
            component="div"
            variant="h5"
            sx={{margin: "20px 10px 10px 10px"}}
            >
                {item.advantageName}
            </Typography>
            <Typography
            component="div"
            variant = "p"
            >
                {item.advantageText}
            </Typography>
            </Card>;
      })}
      </Box>
    </Box>
  );
}

const advantageData = [
  {
    advantageIcon: <SignLanguageSharpIcon sx={{color: "blue"}}/>,
    advantageName: "Гарантия низкой цены",
    advantageText:
      "Наш прайс составлен на основе средних рыночных цен, потому что мы закупаем запчасти напрямую у производителей.",
  },
  {
    advantageIcon: <SearchSharpIcon  sx={{color: "blue"}}/>,
    advantageName: "Ремонт за 1 день или за наш счёт",
    advantageText:
      "Даже если после диагностики вы решите отложить ремонт или вовсе от него отказаться, в любом случае, услуга будет оказана бесплатно!",
  },
  {
    advantageIcon: <ThumbUpSharpIcon  sx={{color: "blue"}}/>,
    advantageName: "Бесплатный выезд мастера",
    advantageText:
      "Специалист приедет на вызов в течение 40 минут, после оформления заявки. Выезд будет бесплатным, даже если вы откажетесь от ремонта!",
  },
];
