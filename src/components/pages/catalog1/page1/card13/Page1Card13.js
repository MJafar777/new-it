import { VolumeDown } from "@mui/icons-material";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  ListItemButton,
  MenuItem,
  Rating,
  Select,
  Slider,
  Typography,
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
      <Box className="catalog1-page1-card13-grid-rating">
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
          <Typography component="div" variant="h5">
            Рейтинг
            <span style={{ color: "blue" }}>
              {((ratingBall * 5) / 100).toFixed(1)}
            </span>
          </Typography>
          <Rating
            value={ratingValue}
            sx={{ margin: "30px 0 20px 0", fontSize: 30 }}
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
            maxWidth: 350,
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
        <Card
          sx={{
            textAlign: "center",
            paddingY: "10px",
            boxShadow: 0,
            maxWidth: 350,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              component="div"
              variant="h3"
              sx={{ marginRight: 1, color: "blue" }}
            >
              {ratingBall}
            </Typography>

            <Typography component="div" variant="h6">
              пользователей рекомендуют
            </Typography>
          </Box>
          <ListItemButton
            sx={{
              background: "blue",
              color: "#fff",
              fontSize: 20,
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 3,
              paddingY: 2,
              marginY: 5,
              ":hover": {
                background: "blue",
              },
            }}
          >
            Оставить отзыв
          </ListItemButton>
        </Card>
      </Box>
      <Box sx={{ my: 5 }}>
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
                onClick={(e) =>{ setSortNumber(item.sortNameId)
                setOpenText(false)
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
                setOpenText(false)
              }}
              sx={{color: "blue", textAlign: 'center'}}
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
