import { useState } from "react";
import { Close, MoreVert, Share } from "@mui/icons-material";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ContainerItem, Wrapper } from "./styleProductPay";

const ProductPay = () => {
  const product = useSelector((state) => state.product);
  const { id, price } = product;

  const [inputValue, setInputValue] = useState("998");
  const [number, setNumber] = useState({ numberValue: "" });

  const handleNumber = () => {
    setNumber({ ...number, numberValue: inputValue });
  };

  console.log(number);

  return (
    <Wrapper>
      <ContainerItem>
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            textAlign="center"
            fontWeight={400}
            variant="h6"
            color="primary"
          >
            Service shop
          </Typography>
          <Typography fontWeight={500} color="#22313F">
            Payment for order #{id}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="secondary" fontWeight={500}>
              Buyurtma raqami:{" "}
            </Typography>
            <Typography color="primary" fontSize={16} fontWeight={500}>
              {id}
            </Typography>
          </Box>
          <Box border="0.5px solid #DDD" height={0.1}></Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={600}>To'lov tafsilotlari</Typography>
            <Box>
              <MoreVert sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography color="secondary" fontWeight={500}>
              To'lov summasi:
            </Typography>
            <Box display="flex" gap={1} alignItems="center">
              <Typography fontSize={22} fontWeight={700}>
                {price}
              </Typography>
              <Typography fontWeight={500}>so'm</Typography>
            </Box>
          </Box>
          <Box
            mt={2}
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <Close />
              <Typography mt={1} fontWeight={600}>
                Bekor qilish
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              <Share />
              <Typography mt={1} fontWeight={600}>
                Ulashish
              </Typography>
            </Box>
          </Box>
        </Container>
      </ContainerItem>
      <ContainerItem>
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography fontWeight={600}>Kirish</Typography>
          <Typography fontWeight={500}>Telefon raqami</Typography>
          <Box
            mb={2}
            component="form"
            sx={{
              "& > :not(style)": { width: "270px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required={inputValue.length > 10}
              className="numberInput"
            />
          </Box>
          <Typography fontWeight={600}>
            Ro'yxatdan o'tmasdan telefon raqamini kiritish
          </Typography>
          <Typography fontWeight={500}>Kartaning raqami</Typography>
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
              placeholder={"0000 0000 0000 0000"}
              variant="outlined"
              required
              type="number"
            />
          </Box>
          <Button
            sx={{ background: "#3D3692", color: "#fff", marginTop: "10px" }}
            variant="contained"
          >
            To'lash
          </Button>
        </Container>
      </ContainerItem>
    </Wrapper>
  );
};

export default ProductPay;
