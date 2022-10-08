import { Box, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import "./page1Card9.css";

export default function Page1Card9() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{paddingY: 4}}>
        <Typography 
        
        component="div"
        variant="h5"
        sx={{ marginBottom: 5, fontWeight: "500", textAlign:'center' }}
        >
        Все мастера прошли квалификацию от брендов
        </Typography>
      <Box className="category1-page1-card9-container">
        {noutbukName.map((item, i) => {
          return (
            i < (open ? 24 : 12) && (
              <Card
                key={i}
                sx={{
                  boxShadow: "-1px 1px 2px blue",
                  height: 90,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <Typography component="div" variant="h6">
                  {item}
                </Typography>
              </Card>
            )
          );
        })}
      </Box>
    { open===false &&<Typography
        onClick={(e) => setOpen(true)}
        variant="h6"
        component="div"
        sx={{ textAlign: "Center", marginTop: 5, color: "blue" }}
      >
        ПОКАЗАТЬ ЕЩЕ
      </Typography>}
    </Box>
  );
}

const noutbukName = [
  "Asus",
  "Apple",
  "HP",
  "Lenovo",
  "Dell",
  "Acer",
  "Sony",
  "Samsung",
  "MSI",
  "Toshiba",
  "Packard Bell",
  "Alienware",
  "Compac",
  "Xiaomi",
  "DEXP",
  "DNS",
  "eMachines",
  "Fujitsu",
  "Gigabyte",
  "Microsoft",
  "Razer",
  "ROVER",
  "LG",
  "Panasonic",
];
