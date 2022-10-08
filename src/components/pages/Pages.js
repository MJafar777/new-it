import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog1Page1 from "./catalog1/page1/Catalog1Page1";
import Catalog1Page2 from "./catalog1/page2/Catalog1Page1";
import Catalog1Page3 from "./catalog1/page3/Catalog1Page1";
import Catalog1Page4 from "./catalog1/page4/Catalog1Page1";
import Catalog1Page5 from "./catalog1/page5/Catalog1Page1";
import Catalog1Page6 from "./catalog1/page6/Catalog1Page1";
import Catalog1Page7 from "./catalog1/page7/Catalog1Page1";
import Catalog1Page8 from "./catalog1/page8/Catalog1Page1";
import Catalog1Page9 from "./catalog1/page9/Catalog1Page1";
import Catalog1Page10 from "./catalog1/page10/Catalog1Page1";
import Catalog1Page11 from "./catalog1/page11/Catalog1Page1";
import Catalog1Page12 from "./catalog1/page12/Catalog1Page1";
import Catalog1Page13 from "./catalog1/page13/Catalog1Page1";
import Catalog1Page14 from "./catalog1/page14/Catalog1Page1";
import Catalog1Page15 from "./catalog1/page15/Catalog1Page1";
import './pages.css'

export default function Pages() {
  return (
    <Box>
      <Routes>
        <Route path="/remont-noutbuk" element={<Catalog1Page1 />} />
        <Route path="/Replace-power-connector-of-laptops" element={<Catalog1Page2 />} />
        <Route path="/Cleaning-laptops" element={<Catalog1Page3 />} />
        <Route path="/Replacing-the-laptop-matrix" element={<Catalog1Page4 />} />
        <Route path="/Laptop-keyboard-replacement" element={<Catalog1Page5 />} />
        <Route path="/Replacing-the-laptop-battery" element={<Catalog1Page6 />} />
        <Route path="/Replacing-the-USB-connector-of a-laptop" element={<Catalog1Page7 />} />
        <Route path="/Installing-programs-on-a-laptop" element={<Catalog1Page8 />} />
        <Route path="/Laptop-Case-Repair" element={<Catalog1Page9 />} />
        <Route path="/Monoblock-repair" element={<Catalog1Page10 />} />
        <Route path="/Computer-assembly" element={<Catalog1Page11 />} />
        <Route path="/Computer-cleaning" element={<Catalog1Page12 />} />
        <Route path="/Computer-setup" element={<Catalog1Page13 />} />
        <Route path="/Monoblock-repair" element={<Catalog1Page14 />} />
        <Route path="/Monoblock-Matrix-Replacement" element={<Catalog1Page15 />} />

      </Routes>
    </Box>
  );
}
