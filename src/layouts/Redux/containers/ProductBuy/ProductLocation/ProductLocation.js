import {
  ChevronRight,
  DeleteForever,
  Flag,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  countDecProduct,
  countIncProduct,
} from "../../../redux/action/productAction";
import { AmonuntBUtton } from "../../ProductDetails/ProductAbout/styleProductAbout";
import {
  AllSelect,
  Border,
  ButtonProduct,
  DeleteSelect,
  LocationWrapper,
  OrderButton,
  OrderProduct,
  ProductSelectContainer,
  Select1,
  SelectOrder,
} from "./styleProductLocation";

const ProductLocation = ({ theme }) => {
  const product = useSelector((state) => state.product);
  const count = useSelector((state) => state.count.count);

  const { images, title, price } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increment = () => {
    dispatch(countIncProduct());
  };
  const decrement = () => {
    dispatch(countDecProduct());
  };

  return (
    <Container sx={{ marginTop: "20px" }}>
      <LocationWrapper>
        <SelectOrder flex={5}>
          <Typography color="primary" variant="h5" fontWeight={600}>
            Savat
          </Typography>
          <AllSelect>
            <Select1>
              <FormControlLabel
                sx={{ color: "#3D3692" }}
                control={
                  <Checkbox style={{ color: "#3D3692" }} defaultChecked />
                }
                label="Barcha mavjud mahsulotlarni tanlash"
              />
            </Select1>
            <DeleteSelect variant="text">
              <DeleteForever />
            </DeleteSelect>
          </AllSelect>
          <Box display="flex">
            <Checkbox style={{ color: "#3D3692" }} defaultChecked />
            <Box
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <Storefront style={{ color: "#3498DB" }} />
              <Typography color="#3498DB" fontWeight="500">
                Easymarket
              </Typography>
              <ChevronRight
                style={{ color: "#3498DB" }}
                sx={{ fontWeight: "100" }}
              />
            </Box>
          </Box>
          <Border borderRadius={2} width="100%">
            <Box m={3}>
              <ProductSelectContainer>
                <Box className="Content">
                  <Box className="SelectIcon">
                    <FormControlLabel
                      control={<Checkbox style={{ color: "#3D3692" }} />}
                    />
                  </Box>
                  <Box className="Description">
                    <img src={images} className="ImgProduct" alt="title" />
                    <Box ml={2}>
                      <Typography
                        mb={1}
                        color="#4A4B4F"
                        fontSize={16}
                        fontWeight={500}
                      >
                        {title}
                      </Typography>
                      <Typography fontWeight="500" color="#3d3692" variant="h5">
                        UZS {price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <ButtonProduct>
                  <Box
                    className="ButtonContent"
                    mr={3}
                    display="flex"
                    borderRadius={2}
                  >
                    <AmonuntBUtton
                      variant="contained"
                      onClick={() => decrement()}
                    >
                      -
                    </AmonuntBUtton>
                    <Typography
                      bgcolor="#dddddd"
                      pt={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="#00AD27"
                      width={70}
                      height={35}
                    >
                      {count}
                    </Typography>
                    <AmonuntBUtton
                      variant="contained"
                      onClick={() => increment()}
                    >
                      +
                    </AmonuntBUtton>
                  </Box>
                  <DeleteSelect variant="text">
                    <DeleteForever />
                  </DeleteSelect>
                </ButtonProduct>
              </ProductSelectContainer>
              <Box
                mt={2}
                mb={2}
                width="100%"
                border="0.1px solid #DDDDDD"
              ></Box>
              <Box display="flex" alignItems="center">
                <Flag />
                <Typography ml={1} fontWeight={300} color="primary">
                  Mahalliy sotuvchi
                </Typography>
              </Box>
              <Box
                mt={2}
                mb={2}
                width="100%"
                border="0.1px dotted #DDDDDD"
              ></Box>
              <Box display="flex" justifyContent="space-between">
                <Typography color="primary">
                  Taxminiy yetkazib berish:{" "}
                </Typography>
                <Typography color="secondary">Sen 26 - Sen 27</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography color="primary">Yetkazib berish narxi:</Typography>
                <Typography color="secondary">UZS 14,375</Typography>
              </Box>
            </Box>
          </Border>
        </SelectOrder>
        <OrderProduct>
          <Box className="OrderContainer" ml={2}>
            <Box>
              <Box className="OrderText1">
                <Typography className="text1" >Jo'natish haqi:</Typography>
                <Typography className="text1" fontWeight={600} ml={1}>
                  Bepul{" "}
                </Typography>
              </Box>
              <Box className="OrderText2">
                <Typography className="text2"  fontWeight={600}>Jami: UZS</Typography>
                <Typography className="text2"  fontWeight={600} ml={0.5}>
                  {price}
                </Typography>
              </Box>
            </Box>
            <OrderButton
              onClick={() => navigate("productOrder")}
              variant="text"
            >
              Buyurtma berish (1)
            </OrderButton>
          </Box>
        </OrderProduct>
      </LocationWrapper>
    </Container>
  );
};

export default ProductLocation;
