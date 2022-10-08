import { Box, ListItemButton, Typography } from "@mui/material";
import React from "react";
import master from "../../images/master.png";
import "./page1Card11.css";

export default function Page1Card11() {
  return (
    <Box className="catalog1-page1-card11-component">
      <img alt="master" src={master} />
      <Box  >
        <Typography component="div" variant="h5" sx={{ fontWeight: "500" }}>
          Закажите бесплатный выезд мастера{" "}
          <span style={{ color: "blue" }}> за 34 мин.</span>
        </Typography>
        <Typography component="div" variant="p"
        sx={{marginY: 3}}
        >
          Услуга по выезду специалиста является бесплатной, даже в том случае,
          если после диагностики Вы решите отказаться от ремонта. Все расходы
          берёт на себя компания!
        </Typography>
        <ListItemButton className="card111-button"
          sx={{
            display: "flex",
            justifyContent: "center",
            background: "blue",
            borderRadius: 20,
            color: "#fff",
            padding: "20px",
            ":hover": {
              background: "blue",
            },
          }}
        >
          Вызвать мастера
        </ListItemButton>
      </Box>
    </Box>
  );
}
