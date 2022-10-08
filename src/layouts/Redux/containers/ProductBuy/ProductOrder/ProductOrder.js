import { CreditCard, PermContactCalendarSharp } from "@mui/icons-material";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddressModal from "./ProductModal/AddressModal/AddressModal";
import PaymentModal from "./ProductModal/PaymentModal/PaymentModal";
import {
  styleInput,
  styleImg,
  styleModal,
  BoxContainer,
  ProductComponent,
  Wrapper,
  WrapperItem1,
  WrapperItem2,
  ButtonPayment,
  ModalStyle,
} from "./styleProduct";

const ProductOrder = () => {
  const [openAddress, setOpenAddress] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const product = useSelector((state) => state.product);
  const { images, title, price } = product;

  const navigate = useNavigate();

  //Modal window
  const handleCloseAdress = () => {
    setOpenAddress(!openAddress);
  };

  const handleClosePayment = () => {
    setOpenPayment(!openPayment);
  };

  return (
    <Wrapper>
      <WrapperItem1>
        <Typography color="#4A4B4F" variant="h4" fontWeight={600}>
          Buyurtma berish
        </Typography>
        <Typography color="#4A4B4F" variant="h5" fontWeight={500}>
          Yetkazish Manzili
        </Typography>
        <BoxContainer>
          <Button onClick={() => setOpenAddress(true)} variant="outlined">
            <PermContactCalendarSharp
              style={{ marginRight: "5px", color: "#3d3692" }}
            />
            <Typography fontWeight={500} color="#3d3692">
              Yangi manzilni kiritish
            </Typography>
          </Button>
          <Modal open={openAddress}>
            <ModalStyle>
              <AddressModal handleCloseAdress={handleCloseAdress} />
            </ModalStyle>
          </Modal>
        </BoxContainer>
        <Typography color="#4A4B4F" variant="h5" fontWeight={500}>
          To'lov Usuli
        </Typography>
        <BoxContainer>
          <Button
            sx={{ color: "#3d3692" }}
            onClick={() => setOpenPayment(true)}
            variant="outlined"
          >
            <CreditCard style={{ marginRight: "5px", color: "#3d3692" }} />
            <Typography fontWeight={500} color="#3d3692">
              TO'LOV USLUBINU TANLASH
            </Typography>
          </Button>
          <Modal open={openPayment}>
            <ModalStyle>
              <PaymentModal handleClosePayment={handleClosePayment} />
            </ModalStyle>
          </Modal>
        </BoxContainer>
        <Typography color="#4A4B4F" variant="h6" fontWeight={500}>
          BUYURTMA #1 - INTELTOUCH
        </Typography>
        <ProductComponent>
          <Box m={2}>
            <Box className="Item">
              <img
                className="styleImg"
                style={styleImg}
                flex="1"
                src={images}
                alt="title"
              />
              <Box className="Child">
                <Typography mb={1} color="#4A4B4F" variant="h6">
                  {title}
                </Typography>
                <Typography>1 parcha</Typography>
                <Box display="flex">
                  <Typography fontWeight="500" color="#3d3692" variant="h5">
                    UZS
                  </Typography>
                  <Typography
                    ml={1}
                    fontWeight="500"
                    color="#3d3692"
                    variant="h5"
                  >
                    {price}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box mt={2} mb={2} border="1px solid #DDDDDD"></Box>
            <Box display="flex" justifyContent="space-between">
              <Typography className="Text1">
                Taxminiy yetkazib berish:{" "}
              </Typography>
              <Typography className="Text2">Sen 26 - Sen 27</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography className="Text1">Yetkazib berish narxi:</Typography>
              <Typography className="Text2">UZS 14,375</Typography>
            </Box>
          </Box>
        </ProductComponent>
      </WrapperItem1>
      <WrapperItem2>
        <Box>
          <Container sx={{ padding: "20px 0" }}>
            <Box display="flex" alignItems="center" width="270px">
              <input
                style={styleInput}
                type="text"
                placeholder="Kuponlar va Promo kod"
              />
              <button
                style={{
                  cursor: "pointer",
                  border: "1px solid  #DDDDDD",
                  width: "80px",
                  height: "35px",
                  borderRadius: "0 5px 5px 0",
                  background: "#EEEEEE",
                }}
              >
                <Typography fontWeight={500} fontSize={14} color="#808080">
                  Qo'llash
                </Typography>
              </button>
            </Box>
            <Box mt={2} mb={2} border="1px solid #DDDDDD"></Box>
            <Typography
              color="#4A4B4F"
              component="p"
              fontSize={16}
              fontWeight={500}
              mb={1}
            >
              Buyurtmaning jami
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography color="#808080" fontWeight={400} fontSize={13}>
                Hozircha jami:
              </Typography>
              <Typography color="#3d3692" fontWeight={500}>
                UZS {price}
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography color="#808080" fontSize={13} fontWeight={400}>
                Yetkazib berish:
              </Typography>
              <Typography color="#3d3692" fontWeight={500}>
                UZS 14,000
              </Typography>
            </Box>
            <Box mt={2} mb={2} border="0.5px solid #DDDDDD"></Box>
            <Typography variant="h5" color="#3d3692" fontWeight={700} mb={1}>
              Jami: UZS {price}
            </Typography>
            <ButtonPayment
              onClick={() => navigate("productPay")}
              variant="text"
            >
              <Typography fontWeight={600} fontSize={13}>
                To'lash UZS {price}
              </Typography>
            </ButtonPayment>
          </Container>
        </Box>
      </WrapperItem2>
    </Wrapper>
  );
};

export default ProductOrder;
