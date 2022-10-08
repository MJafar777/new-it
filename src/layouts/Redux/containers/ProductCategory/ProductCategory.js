import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Brand, Category, Multi_Range, RatingGroup } from "./mock";

const ProductCategory = () => {
  const [valueMultiRange, setValueMultiRange] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [valueBrand, setValueBrand] = useState("");

  return (
    <Box>
      <Typography
        mb={2}
        mt={2}
        textAlign={"center"}
        fontWeight={500}
        color="#7F7F7F"
      >
        Filters
      </Typography>
      <Container sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Box>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-brand-group-label"
              name="radio-brand-group"
              value={valueMultiRange}
              onClick={(e) => setValueMultiRange(e.target.value)}
            >
              {Multi_Range.map((value, item) => {
                return (
                  <Box key={item}>
                    <FormControlLabel
                      control={<Radio size="small" />}
                      value={value}
                      label={value}
                      defaultValue={value[0]}
                    >
                      {value}
                    </FormControlLabel>
                  </Box>
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box border="0.5px solid #B5A6A1"></Box>
        <Box>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-brand-group-label"
              name="radio-brand-group"
              value={valueCategory}
              onClick={(e) => setValueCategory(e.target.value)}
            >
              {Category.map((value, item) => {
                return (
                  <Box key={item}>
                    <FormControlLabel
                      control={<Radio size="small" />}
                      value={value}
                      label={value}
                    >
                      {value}
                    </FormControlLabel>
                  </Box>
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box border="0.5px solid #B5A6A1"></Box>
        <Box>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-brand-group-label"
              name="radio-brand-group"
              value={valueBrand}
              onClick={(e) => setValueBrand(e.target.value)}
            >
              {Brand.map((value, item) => {
                return (
                  <Box key={item}>
                    <FormControlLabel
                      control={<Radio size="small" />}
                      value={value}
                      label={value}
                    >
                      {value}
                    </FormControlLabel>
                  </Box>
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <Typography component="legend">Controlled</Typography>
          {RatingGroup.map(({ rating, value }) => {
            return (
              <Box
                key={value}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Rating
                  sx={{ display: "flex" }}
                  name="simple-controlled"
                  value={rating}
                />
                <Typography color="#403938">{value}</Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCategory;
