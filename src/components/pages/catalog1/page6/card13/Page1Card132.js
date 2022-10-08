import { Box, Divider, Rating, Typography } from "@mui/material";
import React from "react";

export default function Page1Card132({ sortNumber, data, open }) {
  return (
    sortNumber === data.sortNameId && 
    data.sortCategory.map((item, index) => {
      return (
      (open ? index>-1 :index<3) &&
        <Box key={index} sx={{ paddingTop: "15px" }}>
          <Box sx={{ display: "flex", alignItems: "center", my: "2px" }}>
            <Typography component="div" variant="h6">
              {item.name}
            </Typography>

            <Typography sx={{ ml: 3 }} component="div" variant="p">
              Номер заказа: {item.order}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating value={item.rating} />

            <Typography sx={{ ml: 3 }} component="div" variant="p">
              {item.data}
            </Typography>
          </Box>
          <Typography sx={{ my: 2 }} component="div" variant="p">
            {item.nameText}
          </Typography>
          <Divider />
        </Box>
      );
    })
  );
}
