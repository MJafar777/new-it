import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Fade,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./styleAddress.css";

const AddressModal = ({ handleCloseAdress }) => {
  const [age, setAge] = React.useState("");
  const [checkedOpen, setCheckedOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleFadeChange = () => {
    setCheckedOpen((prev) => !prev);
  };

  const Text = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
  }));

  return (
    <Container
      className="scrollbar"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="#4A4B4F" fontSize={18}>
          YANGI MANZILNI KIRITISH
        </Typography>
        <Close
          sx={{ color: "#B5A6A1", fontWeight: "200" }}
          cursor="pointer"
          onClick={() => handleCloseAdress(false)}
        />
      </Box>
      <Typography fontWeight={600} color={"#4A4B4F"}>
        Kontakt ma'lumotlari
      </Typography>
      <Text display="flex">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "270px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Ism"
            variant="outlined"
            required
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { ml: 1, width: "270px" },
          }}
          noValidate
          autoComplete="off"
          mr={1}
        >
          <TextField
            id="outlined-basic"
            label="Familiya"
            variant="outlined"
            required
          />
        </Box>
      </Text>
      <Text display="flex">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: "270px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Telefon raqam"
            variant="outlined"
            type="number"
            required
            className="numberInput"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { ml: 1, width: "270px" },
          }}
          noValidate
          autoComplete="off"
          mr={1}
        >
          <TextField
            id="outlined-basic"
            label="Qo'shimcha raqam"
            variant="outlined"
            type="number"
            required
          />
        </Box>
      </Text>
      <Box
        sx={{
          "& > :not(style)": { width: "270px" },
        }}
        noValidate
        autoComplete="off"
        mr={1}
      >
        <TextField fullWidth label="El.manzil" required id="fullWidth" />
      </Box>
      <Box mt={3} border="1px solid #DDDDDD"></Box>
      <Typography mt={2} mb={2} fontWeight={600} color={"#4A4B4F"}>
        Yetkazib berish manzili
      </Typography>
      <Box display="flex" justifyContent="space-around" gap={2}>
        <Box sx={{ minWidth: 120, width: "100%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" required>
              Viloyat
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Qashqadaryo</MenuItem>
              <MenuItem value={20}>Samarqand</MenuItem>
              <MenuItem value={30}>Surxondaryo</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, width: "100%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" required>
              Shahar
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Shahar1</MenuItem>
              <MenuItem value={20}>Shahar2</MenuItem>
              <MenuItem value={30}>Shahar3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Mahalla"
          variant="outlined"
          required
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Ko'cha/uy raqami (masalan:Mira ul., 25-uy,13-xonadon)"
          variant="outlined"
          required
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Bino nomi (masalan: Biznes Markaz “ASTRA”)"
          variant="outlined"
          required
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Qavat"
          variant="outlined"
          required
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Pochta indeksi"
          variant="outlined"
          required
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControlLabel
          required
          control={<Switch checked={checkedOpen} onChange={handleFadeChange} />}
        />
        <Box sx={{ display: "flex" }}>
          <Fade in={checkedOpen}>
            <Typography color="#3D3692" fontWeight={500}>
              Asosiy manzil qilib saqlash{" "}
            </Typography>
          </Fade>
        </Box>
      </Box>
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

export default AddressModal;
