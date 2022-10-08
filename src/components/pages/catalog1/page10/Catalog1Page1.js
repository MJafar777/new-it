import { Box } from "@mui/material";
import React from "react";
import Page1Card1 from "./card1/PageCard1";
import Page1Card10 from "./card10/Page1Card10";
import Page1Card11 from "./card11/Page1Card11";
import Page1Card12 from "./card12/Page1Card12";
import Page1Card13 from "./card13/Page1Card13";
import Page1Card132 from "./card13/Page1Card132";
import Page1Card1Corusel from "./card2/PageCard2Corusel";
import Page1Card3 from "./card3/PageCard3";
import Page1Card4 from "./card4/Page1Card4";
import Page1Card5 from "./card5/Page1Card5";
import Page1Card6 from "./card6/Page1Card6";
import Page1Card7 from "./card7/Page1Card7";
import Page1Card8 from "./card8/PageCard8";
import Page1Card9 from "./card9/Page1Card9";
import Location from "./location/Location";

export default function Page1() {
  return (
    <>
      <Box className="pagesApp">
        <Page1Card1 />
        <Page1Card1Corusel />
        <Page1Card3 />
      {/* </Box>
      <Box className="pagesApp"> */}
        {/* <Page1Card4 /> */}
        <Page1Card5 />
        <Page1Card6 />
        <Page1Card7 />
      <Page1Card8 />
      {/* </Box>
      
      <Box className="pagesApp"> */}
        <Page1Card9 />
        <Page1Card10 />
      <Page1Card11 />
      {/* </Box>
      
      <Box className="pagesApp"> */}
        <Page1Card12 />
        <Page1Card13 />
      </Box>
      <Location />
    </>
  );
}
