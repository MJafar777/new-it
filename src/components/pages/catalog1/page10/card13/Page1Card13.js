import { Build, BuildCircle, Check, Done, VolumeDown } from "@mui/icons-material";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  ListItemButton,
  MenuItem,
  Rating,
  Select,
  OutlinedInput,
  IconButton,
  Slider,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import "./page1Card13.css";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter1Icon from "@mui/icons-material/Filter1";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import Page1Card132 from "./Page1Card132";
import phone from "../../images/call-img11.svg";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import { Call, Clear } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200,
});

export default function Page1Card13() {
  const [sortNumber, setSortNumber] = useState(1);

  const [ratingValue, setRatingValue] = useState(5);
  const [slideValue1, setSlideValue1] = React.useState(0);
  const [slideValue2, setSlideValue2] = React.useState(0);
  const [slideValue3, setSlideValue3] = React.useState(0);
  const [slideValue4, setSlideValue4] = React.useState(30);
  const [slideValue5, setSlideValue5] = React.useState(99);
  const [openText, setOpenText] = useState(false);
  const [age, setAge] = React.useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueNumber, setValueNumber] = useState("");
  const [valueComent, setValueComent] = useState("");
  const [valueErrorPhone, setValueErrorPhone] = useState(false);
  const [valueErrorName, setValueErrorName] = useState(false);
  const [valueErrorNumber, setValueErrorNumber] = useState(false);
  const [callNameDelete, setCallNameDelete] = useState(false);

  const callNameDispatch = (e) => {
    setValueErrorName(true);
    setValueErrorPhone(true);
    setValueErrorNumber(true)
    if (
      valuePhone.length === 12 &&
      valuePhone.toString().slice(0, 3) === "998" &&
      valueName.length > 0
    ) {
      setCallNameDelete(true);
    }
  };

  const ratingBall = (
    ((slideValue1 * 1 +
      slideValue2 * 2 +
      slideValue3 * 3 +
      slideValue4 * 4 +
      slideValue5 * 5) *
      100) /
    ((slideValue1 + slideValue2 + slideValue3 + slideValue4 + slideValue5) * 5)
  ).toFixed(1);

  return (
    <Box sx={{ paddingY: 5 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: "500", marginBottom: 4, textAlign: "center" }}
      >
        Важно для нас и вас
      </Typography>
      <Box className="catalog1-page-card13-grid-rating">
        <Card
          sx={{
            textAlign: "center",
            padding: "50px 15%",
            boxShadow: 5,
            maxWidth: 350,
          }}
        >

          <ThumbsUpDownIcon
            sx={{ marginBottom: 3, fontSize: 30, color: "blue" }}
          />
            <Typography
              component="div"
              variant="h4"
              sx={{ color: "blue", textAlign: "center", mb: 1 }}
            >
              {ratingBall} %
            </Typography>
          <Typography component="div" variant="h5">
            Рейтинг
            <span style={{ color: "blue", marginLeft: "10px" }}>
              {((ratingBall * 5) / 100).toFixed(1)} 
            </span>
          </Typography>
          <Rating
            value={ratingValue}
            sx={{ margin: "17px 0", fontSize: 30 }}
          />

          <Typography component="div" variant="h6">
            На основании 7 отзыва и 8 оценок
          </Typography>
        </Card>
        <Card
          sx={{
            textAlign: "center",
            padding: "10px 10%",
            boxShadow: 0,
            // maxWidth: 350,
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, color: "blue" }}
            alignItems="center"
          >
            <Filter5Icon />
            <Slider
              max={100}
              sx={{ color: "blue", width: "80%", height: 5 }}
              min={0}
              value={slideValue5}
              onChange={(e) => setSlideValue5(e.target.value)}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, color: "blue" }}
            alignItems="center"
          >
            <Filter4Icon />
            <Slider
              defaultValue={10}
              aria-label="none"
              sx={{ color: "blue", width: "80%", height: 5 }}
              value={slideValue4}
              onChange={(e) => setSlideValue4(e.target.value)}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, color: "blue" }}
            alignItems="center"
          >
            <Filter3Icon />
            <Slider
              defaultValue={0}
              aria-label="none"
              sx={{ color: "blue", width: "80%", height: 5 }}
              value={slideValue3}
              onChange={(e) => setSlideValue3(e.target.value)}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, color: "blue" }}
            alignItems="center"
          >
            <Filter2Icon />
            <Slider
              min={0}
              max={100}
              step={1}
              // marks="none"
              defaultValue={0}
              aria-label="none"
              sx={{ color: "blue", width: "80%", height: 5 }}
              value={slideValue2}
              onChange={(e) => setSlideValue2(e.target.value)}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ mb: 1, color: "blue" }}
            alignItems="center"
          >
            <Filter1Icon />
            <Slider
              min={0}
              max={100}
              step={1}
              // marks="none"
              defaultValue={0}
              aria-label="none"
              sx={{ color: "blue", width: "80%", height: 5 }}
              value={slideValue1}
              onChange={(e) => setSlideValue1(e.target.value)}
            />
          </Stack>
          {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
        </Card>
      </Box>
        <Card
          sx={{
            padding: "20px 10%",
            boxShadow: 5,
            marginBottom: 28
          }}
        >
          <Box sx={{ display: "flex", mb: 3 }}>
            <Rating /> <Typography>— оцените компанию от 1 до 5</Typography>
          </Box>
          <Card
            sx={{
              padding: "15px 5%",
              position: "absolute",
              boxShadow: 5,
              marginRight: 2,
            }}
          >
            <Box sx={{  display: { xs: "block", sm: "block", md: "flex" } }}>
              <Box sx={{ margin: 2 }}>
                <Typography component="div" variant="p">
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
              </Box>

              <Box sx={{ margin: 2 }}>
                <Typography component="div" variant="p">
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
                </Box>
              </Box>
              <Box sx={{ margin: 2 }}>
                <Typography component="div" variant="p">
                  Номер заказа
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <BuildCircle
                    sx={{
                      color: "blue",
                      fontSize: 30,
                      position: "absolute",
                      marginX: 1,
                    }}
                  />
                  <OutlinedInput
                    placeholder="Номер заказа"
                    value={valueNumber}
                    onChange={(e) => {
                      setValueName(e.target.value);
                      setValueErrorNumber(false);
                    }}
                    sx={{ paddingLeft: 4 }}
                    error={valueErrorName && valueName.length < 1}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{display: "flex", alignItems: "center", px: 2}}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Kомментарий"
              style={{ width: "100%", backgroundColor: "#fff" }}
              value={valueComent}
              onChange={(e) => setValueComent(e.target.value)}
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
              <Done />
            </IconButton>
            </Box>
          </Card>

          {callNameDelete && (
            <Card
              data-aos="fade-right"
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
                  setValueName("");
                  setValuePhone("");
                  setValueErrorName(false);
                  setValueErrorPhone(false);
                  setValueNumber("")
                  setValueErrorNumber(false)
                  setValueComent("")
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
      <Box sx={{ mt: 5, mb:1 }}>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <Typography component="div" variant="h5">
            Сортировать:
          </Typography>
          {dataSort.map((item, i) => {
            return (
              <ListItemButton
                key={i}
                onClick={(e) => {
                  setSortNumber(item.sortNameId);
                  setOpenText(false);
                }}
                sx={{
                  color: "blue",
                  borderRadius: 5,
                  ":hover": {
                    textDecorationStyle: "solid",
                  },
                }}
              >
                {item.sortName}
              </ListItemButton>
            );
          })}
        </Box>

        <Box
          sx={{
            minWidth: 120,
            maxWidth: 350,
            display: { xs: "block", sm: "block", md: "none" },
            marginTop: 50
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"> Сортировать:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Сортировать:"
              onChange={(e) => {
                setAge(e.target.value);
                setSortNumber(e.target.value + 1);
                setOpenText(false);
              }}
              sx={{ color: "blue", textAlign: "center" }}
            >
              {dataSort.map((item, i) => {
                return (
                  <MenuItem key={i} value={i}>
                    {item.sortName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>

        {dataSort.map((item2, i2) => {
          return (
            <Page1Card132
              key={i2}
              index={i2}
              sortNumber={sortNumber}
              data={item2}
              open={openText}
            />
          );
        })}
        {openText === false && (
          <Typography
            component="div"
            variant="p"
            sx={{ textAlign: "center", mt: 3, color: "blue" }}
            onClick={(e) => setOpenText(true)}
          >
            ПОКАЗАТЬ ЕЩЕ
          </Typography>
        )}
      </Box>
    </Box>
  );
}

const dataSort = [
  {
    sortNameId: 1,
    sortName: "Сначала новые",
    sortCategory: [
      {
        name: "Murod",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 5,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Hasan",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 2,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Foti",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Nizom",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 3,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Akbar",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 8,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Adiba",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 1,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Munisa",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Bahrom",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
    ],
  },
  {
    sortNameId: 2,
    sortName: "Сначала старые",
    sortCategory: [
      {
        name: "Sobit",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Shoruh",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Диана",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Murod",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Sanjar",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Kumush",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Amina",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Charos",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
    ],
  },
  {
    sortNameId: 3,
    sortName: "Сначала с высоким рейтингом",
    sortCategory: [
      {
        name: "Bobur",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "zor gap yo",
      },
      {
        name: "Malika",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 5,
        nameText: "Qoyil gap yo",
      },
      {
        name: "Bahrom",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 3,
        nameText: "Yomonmas",
      },
      {
        name: "Doniyor",
        order: "LMS25",
        data: "2 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Диана",
        order: "LMS25",
        data: "20 янв. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Диана",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Charos",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Hasan",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
    ],
  },
  {
    sortNameId: 4,
    sortName: "Сначала с низким рейтингом",
    sortCategory: [
      {
        name: "Bobur",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Hasan",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Amina",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 5,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Adiba",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 3,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Fozil",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Hikmat",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Sardor",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
      {
        name: "Mehriniso",
        order: "LMS25",
        data: "20 февр. 2021 г.",
        rating: 4,
        nameText: "Хорошее качество обслуживания, но ремонт делали долго",
      },
    ],
  },
];
