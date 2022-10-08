import { Actiontype } from "../contants/action-type";

export const setProduct = (products) => {
  return {
    type: Actiontype.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: Actiontype.SELECTED_PRODUCT,
    payload: product,
  };
};

export const countIncProduct = (value) => {
  return {
    type: Actiontype.INCREMENT_PRODUCTS,
    payload: value,
  };
};

export const countDecProduct = (value) => {
  return {
    type: Actiontype.DECREMENT_PRODUCTS,
    payload: value,
  };
};

export const favoriteOpenProduct = (value) => {
  return {
    type: Actiontype.FAVORITE_OPEN_PRODUCT,
  };
};

export const favoriteCloseProduct = (value) => {
  return {
    type: Actiontype.FAVORITE_CLOSE_PRODUCT,
  };
};
