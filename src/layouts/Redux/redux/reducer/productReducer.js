import { Actiontype } from "../contants/action-type";

const initialState = {
  product: [],
};
const countInitialState = { count: 0 };
const favoriteInitialState = { favorite: false };

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontype.SET_PRODUCTS:
      return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case Actiontype.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const countProductReducer = (
  state = countInitialState,
  { type, payload }
) => {
  switch (type) {
    case Actiontype.INCREMENT_PRODUCTS:
      return { ...state, count: state.count + 1 };
    case Actiontype.DECREMENT_PRODUCTS:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const favoriteProductReducer = (
  state = favoriteInitialState,
  { type, payload }
) => {
  switch (type) {
    case Actiontype.FAVORITE_OPEN_PRODUCT:
      return { ...state, favorite: true };
    case Actiontype.FAVORITE_CLOSE_PRODUCT:
      return { ...state, favorite: false };
    default:
      return state;
  }
};
