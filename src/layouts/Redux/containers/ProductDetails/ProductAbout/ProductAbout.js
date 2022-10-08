import { Box, TextareaAutosize, Typography } from "@mui/material";
import {
  AirportShuttleSharp,
  ScheduleSharp,
  Inventory2,
} from "@mui/icons-material";
import ModalContainer from "../../Modal/Modal";
import { useNavigate } from "react-router-dom";
import {
  Amount,
  Basket,
  Comment,
  ProductDescription,
  SendComment,
  ShopNow,
  AmonuntBUtton,
} from "./styleProductAbout";

const ProductBuy = ({ price, title, decrement, increment, count, theme }) => {
  const navigate = useNavigate();

  return (
    <Box>
      <ProductDescription>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            mb={2}
            mt={2}
            fontSize={20}
            sx={{ fontWeight: 700, color: "#4a4b4f" }}
          >
            UZS {price}
          </Typography>
          <Box display="flex">
            <Typography ml={2} color="#FFD20D">
              <del>UZS {price + 12}</del>
            </Typography>
            <Box
              bgcolor="#FFD200"
              width={30}
              height={24}
              ml={1}
              borderRadius={0.5}
              fontWeight={500}
              color="#4A4B4F"
              display="flex"
              justifyContent="center"
            >
              -9%
            </Box>
          </Box>
        </Box>
        <Typography sx={{ fontWeight: 400, fontSize: 14 }}>
          Baholar va fikrlar:
        </Typography>
        <Typography fontSize={15} color="#2469d2" mb={1} fontWeight={700}>
          Tezkor va yetkazib berish O'zbekiston
        </Typography>
        <Box display="flex" flexDirection="column" gap={0.8}>
          <Box display="flex" sx={{ fontWeight: 200, fontSize: 12 }}>
            <AirportShuttleSharp sx={{ fontSize: 20, marginRight: "5px" }} />
            <Typography fontSize={14} color="secondary">
              Yetkazib berish narxi
            </Typography>
          </Box>
          <Box display="flex" sx={{ fontWeight: 200, fontSize: 12 }}>
            <ScheduleSharp sx={{ fontSize: 20, marginRight: "5px" }} />
            <Typography fontSize={14} color="secondary">
              Taxminiy yetkzib berish{" "}
            </Typography>
          </Box>
          <Box display="flex" sx={{ fontWeight: 200, fontSize: 12 }}>
            <Inventory2 sx={{ fontSize: 20, marginRight: "5px" }} />
            <Typography fontSize={14} color="secondary">
              Eshikkacha{" "}
            </Typography>
          </Box>
        </Box>
        <Amount mb={3} mt={3}>
          <Typography>Miqdor :</Typography>
          <Box
            ml={2}
            display="flex"
            height={35}
            bgcolor="#dddddd"
            borderRadius={2}
          >
            <AmonuntBUtton variant="outlined" onClick={() => decrement()}>
              -
            </AmonuntBUtton>
            <Typography
              pt={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="#4A4B4F"
              width={70}
              height={30}
            >
              {count}
            </Typography>
            <AmonuntBUtton variant="outlined" onClick={() => increment()}>
              +
            </AmonuntBUtton>
          </Box>
        </Amount>
        <Box>
          <Basket
            variant="outlined"
            sx={{
              background: "#ffd200",
              height: "45px",
              fontWeight: "500",
            }}
            onClick={() => navigate("productLoaction")}
          >
            Savatga qo'shish
          </Basket>
          <ShopNow variant="outlined">
            Hoziroq harid qilish / UZC {price}
          </ShopNow>
        </Box>
        <Box
          mt={2}
          mb={2}
          width={210}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius={1}
        >
          <ModalContainer />
        </Box>
        <Box>
          <Comment display="flex">
            <Typography className="Text">Izoh:</Typography>
            <TextareaAutosize
              maxRows={4}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Assalomu aleykum!"
              style={{
                width: 250,
                height: 120,
                marginLeft: 10,
                overflow: "hidden",
                textDecoration: "none",
              }}
            />
          </Comment>
          <SendComment variant="outlined">Yuborish</SendComment>
        </Box>
      </ProductDescription>
    </Box>
  );
};

export default ProductBuy;
