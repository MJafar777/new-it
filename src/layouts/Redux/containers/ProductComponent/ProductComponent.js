import { Box, Button, Grid, Skeleton, styled, Typography } from "@mui/material";
import {
  ButtonsContainer,
  CardItemText,
  CardItemWrapper,
  CardStatus,
  CartItem,
  Wrapper,
} from "./styleProductComponent";
import {
  AddShoppingCartRounded,
  StarBorderRounded,
  AddCardRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProductComponent = ({ data }) => {
  const renderList = data.currentData().map((product) => {
    const { id, title, images, price } = product;

    return (
      <Wrapper key={id}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            {product ? (
              <CartItem>
                <CardItemWrapper>
                  <Link to={`product/${id}`}>
                    <img src={images} alt={title} />
                  </Link>
                  <CardStatus>
                    <Box className="status">
                      3.4
                      <Box className="StarIcon">
                        <StarBorderRounded style={{ fontSize: "18px" }} />
                      </Box>
                    </Box>
                    <Typography component={"P"} fontWeight={500}>
                      ${price}
                    </Typography>
                  </CardStatus>
                  <CardItemText>
                    <Typography color="primary" className="title">
                      {title}
                    </Typography>
                    <Typography color="secondary" className="description">
                      Lorem Ipsum is simply dummy text
                    </Typography>
                  </CardItemText>
                </CardItemWrapper>
                <ButtonsContainer>
                  <Button
                    className="button1"
                    variant="contained"
                    color="primary"
                  >
                    <AddShoppingCartRounded
                      className="icon"
                      sx={{ fontSize: "20px" }}
                    />
                    <Typography className="Text">Shop</Typography>
                  </Button>
                  <Button
                    className="button2"
                    variant="contained"
                    color="secondary"
                  >
                    <AddCardRounded
                      className="icon"
                      sx={{ fontSize: "20px" }}
                    />
                    <Typography className="Text">ADD TO CART</Typography>
                  </Button>
                </ButtonsContainer>
              </CartItem>
            ) : (
              <Skeleton
                style={{ borderRadius: "10px", background: "#7F7F7F" }}
                animation="wave"
                variant="rectangular"
                width={410}
                height={350}
              />
            )}
          </Grid>
        </Grid>
      </Wrapper>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
