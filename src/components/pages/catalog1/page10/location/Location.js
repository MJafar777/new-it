import React from "react";
// import "./location.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Box, Divider, Drawer, Typography } from "@mui/material";
// import "./location.css";
import { Link } from "react-router-dom";

const defaultMapConfig = {
  gestureHandling: "greedy",
  options: {
    fullscreenControl: true,
  },
  mapContainerStyle: {
    height: "400px",
    width: "100%",
    borderRadius: "7px",
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
      mb: 5,
      fontWeight: "500"
      }}>
        Наши контакты
      </Typography>
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
    </Box>
  );
}
