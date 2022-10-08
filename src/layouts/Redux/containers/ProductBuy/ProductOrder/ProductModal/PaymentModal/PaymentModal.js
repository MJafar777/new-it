import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import Click from "../../../../../assets/click.jpg";
import Payme from "../../../../../assets/payme.png";
import { ImgContainer, PaymentType } from "./styleModal";

const PaymentModal = ({ handleClosePayment }) => {
  const [valueRadios, setValueRadio] = React.useState({ radioName: "" });

  const handleRadioChange = (event) => {
    setValueRadio((prev) => ({ ...prev, radioName: event.target.value }));
  };

  console.log(valueRadios);

  return (
    <Container
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="#4A4B4F" fontSize={20}>
          TO'LOV USLUBINI TANLASH
        </Typography>
        <Close
          sx={{ color: "#B5A6A1", fontWeight: "200" }}
          cursor="pointer"
          onClick={() => handleClosePayment(false)}
        />
      </Box>
      <Typography fontWeight={600} color={"#4A4B4F"}>
        TO'LIQ MIQDORNI TO'LASH VARIANTLAR
      </Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={valueRadios.radioName}
          onChange={handleRadioChange}
        >
          <PaymentType>
            <Container className="ContainerWrapper">
              <Box display="flex" alignItems="center">
                <FormControlLabel
                  value="click"
                  control={<Radio style={{ color: "#3D3692" }} />}
                />
                <Box>
                  <Typography color="#3D3692" fontWeight={600}>
                    Click orqali to'lov
                  </Typography>
                </Box>
              </Box>
              <ImgContainer>
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                  src={Click}
                  alt="Click"
                />
              </ImgContainer>
            </Container>
          </PaymentType>
          <PaymentType>
            <Container className="ContainerWrapper">
              <Box display="flex" alignItems="center">
                <FormControlLabel
                  value="payme"
                  control={<Radio style={{ color: "#3D3692" }} />}
                />
                <Box>
                  <Typography color="#3D3692" fontWeight={600}>
                    Payme orqali to'lov
                  </Typography>
                </Box>
              </Box>
              <ImgContainer>
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                  src={Payme}
                  alt="Payme"
                />
              </ImgContainer>
            </Container>
          </PaymentType>
        </RadioGroup>
      </FormControl>
      <Box>
        <Button
          variant="contained"
          style={{ background: "#3D3692", width: "100%" }}
        >
          yuborish
        </Button>
      </Box>
    </Container>
  );
};

export default PaymentModal;
