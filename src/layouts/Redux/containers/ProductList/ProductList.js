import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "../ProductComponent/ProductComponent";
import { setProduct } from "../../redux/action/productAction";
import { Wrapper } from "./styleProductList";
import ProductCategory from "../ProductCategory/ProductCategory";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Pagination,
  styled,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import usePagination from "../ProductPagination/index";

const ProductList = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      console.log("res", res.data);
      setData(res.data);
      dispatch(setProduct(res.data));
    };

    fetchProduct();
  }, []);

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Wrapper>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
          >
            <Typography>Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ProductCategory />
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box flex={4}>
        <ProductComponent data={_DATA} />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={4}
          mb={2}
        >
          <Pagination
            size="small"
            count={count}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
        <ProductCategory />
      </Box>
    </Wrapper>
  );
};

export default ProductList;
