import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import "./page1Card4.css";

export default function Page1Card4() {
  return (
    <Box className="catalog1-page1-card4-container">
      <Typography variant="h5" component="div" sx={{
         fontWeight: "500",
         textAlign: 'center'
         }}>
        Почему 99% клиентов выбирают нас?
      </Typography>

      <Typography
        sx={{ color: "blue", fontWeight: '500',  paddingBottom: 5,
        textAlign: 'center' }}
        variant="h5"
        component="div"
      >
        Можно узнать в видео за 2 минуты!
      </Typography>

      <CardContent>
        <iframe
          className="video-card"
          id="video"
          width="100%"
          src="https://www.youtube.com/embed/ZXmAf-7Ev38"
          frameBorder="0"
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="Loading..."
        />
      </CardContent>
    </Box>
  );
}
