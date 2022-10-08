import React from "react";
import "./location.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import "./location.css";
import { Link } from "react-router-dom";

const defaultMapConfig = {
  gestureHandling: "greedy",
  options: {
    fullscreenControl: true,
  },
  mapContainerStyle: {
    height: "500px",
    width: "100%",
    borderRadius: "70px",
  },
};

export default function Location() {
  const position = {
    lat: 41.3106176,
    lng: 69.2518912,
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <Box>
      <Typography component="div" variant="h5" 
      sx={{ textAlign: "center",
      mt: 5,
      fontWeight: "500"
      }}>
        Наши контакты
      </Typography>
      <Box className="location-container">
        <Box
          sx={{
            borderRadius: 1,
          }}
        >
          <LoadScript
            googleMapsApiKey={"AIzaSyDYp1te-bQEhWE9P9yehRE3biB7LpSEh4U"}
            loadingElement={<div />}
            containerElement={<div />}
            mapElement={<div />}
          >
            <GoogleMap {...defaultMapConfig} zoom={15} center={position}>
              <Marker onLoad={onLoad} position={position} />
              <Marker onLoad={onLoad} position={position} />
            </GoogleMap>
          </LoadScript>
        </Box>
        <Box sx={{ marginX: "15%" }}>
          <Typography component="div" variant="p"
          sx={{my: 2}}
          >
            Адрес сервиса:
          </Typography>

          <Typography component="div" variant="h6">
            Ташкент, Олмазор микрорайон, 8/1
          </Typography>
          <Divider 
          sx={{my: 2}} />

          <Typography component="div" variant="p"
          
          sx={{my: 2}}>
            Номер телефона:
          </Typography>

          <Typography component="div" variant="h5" sx={{ color: "orange", marginBottom: 2}}>
            +(998) 71 205 05 30
          </Typography>
          <Link to="#">Позвонить нам</Link>
          <Divider 
          sx={{my: 2}}/>
          <Typography component="div" variant="p"
          sx={{my: 2}}>
            График работы:
          </Typography>

          <Typography component="div" variant="h6">
            Пн - Пт с 10:00 - 19:00 Сб - Вс и праздники: c 11:00 - 18:00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
