import {
  Box,
  Button,
  Card,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import phone from "../../images/call-img.svg";
import "./pageCard3.css";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { Call, Clear } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200
});

export default function Page1Card3() {
  const [valuePhone, setValuePhone] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueErrorPhone, setValueErrorPhone] = useState(false);
  const [valueErrorName, setValueErrorName] = useState(false);
  const [callNameDelete, setCallNameDelete] = useState(false);

  const callNameDispatch = (e) => {
    setValueErrorName(true);
    setValueErrorPhone(true);
if (valuePhone.length === 12 &&
  valuePhone.toString().slice(0, 3) === "998"&&valueName.length>0) {
  
    setCallNameDelete(true);
}
  };

  return (
    <Box   className="catalog1-page-card3-container">
      <img alt="phone" src={phone} />
      <Card
        sx={{
          padding: "50px 10%",
          boxShadow: 5,
          marginBottom: 15,
        }}
      >
        <Typography component="div" variant="h5">
          Не нашли свою поломку?
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            my: 3,
          }}
        >
          Наши специалисты бесплатно вас проконсультируют и ответят на все
          вопросы оставьте заявку
        </Typography>
        <Card 
          sx={{
            padding: "15px 5%",
            position: "absolute",
            boxShadow: 5,
            marginRight: 2,
          }}
        >
          <Typography component="div" variant="p"
          >
            Имя
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PersonIcon
              sx={{
                color: "blue",
                fontSize: 30,
                position: "absolute",
                marginX: 1,
              }}
            />
            <OutlinedInput
              placeholder="Имя"
              value={valueName}
              onChange={(e) => {
                setValueName(e.target.value);
                setValueErrorName(false);
              }}
              sx={{ paddingLeft: 4 }}
              error={valueErrorName && valueName.length < 1}
            />
          </Box>
          <Typography component="div" variant="p"
          sx={{mt: 2}}
          >
            Номер телефона
          </Typography>
          <Typography />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Call
              sx={{
                color: "blue",
                fontSize: 30,
                position: "absolute",
                marginX: 1,
              }}
            />
            <OutlinedInput
              placeholder="+998XX-XXX-XX-XX"
              type="number"
              value={valuePhone}
              onChange={(e) => {
                setValuePhone(e.target.value);
                setValueErrorPhone(false);
              }}
              sx={{ paddingLeft: 4 }}
              error={
                valueErrorPhone &&
                (valuePhone.length !== 12 ||
                  valuePhone.toString().slice(0, 3) !== "998")
              }
            />
            <IconButton
              onClick={callNameDispatch}
              sx={{
                backgroundColor: "blue",
                color: "#fff",
                padding: 2,
                marginLeft: 2,
                animation: "pulsate 2s infinite ease",

                "@keyframes pulsate": {
                  from: {
                    opacity: 0.6,
                    boxShadow: "0",
                  },
                  to: {
                    opacity: 1,
                    boxShadow: "1px 1px 8px 1px blue",
                  },
                },
                ":hover": {
                  background: "blue",
                },
              }}
            >
              <PhoneCallbackIcon />
            </IconButton>
          </Box>
        </Card>
        {callNameDelete && (
          <Card
          data-aos="fade-left"
            sx={{
              position: "absolute",
              zIndex: 9,
              padding: 4,
              marginLeft: "-3%",
              boxShadow: 8,
              marginTop: 4,
              background: "green",
              color: "#fff",
              marginRight: 1,
            }}
          >
            <IconButton
              sx={{ color: "red", position: "absolute", right: 5, top: -1 }}
              onClick={(e) => {
                setCallNameDelete(false);
                setValueName("")
                setValuePhone("")
                setValueErrorName(false)
                setValueErrorPhone(false)
              }}
            >
              <Clear />
            </IconButton>
            <Typography component="div" variant="h4">
              {valueName}
            </Typography>

            <Typography component="div" variant="h6">
              Мы свяжемся с вами в течение 3 минут
            </Typography>
          </Card>
        )}
      </Card>
    </Box>
  );
}
