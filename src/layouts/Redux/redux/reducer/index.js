import { combineReducers } from "redux";
import {
  countProductReducer,
  favoriteProductReducer,
  productReducer,
  selectedProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  count: countProductReducer,
  favorite: favoriteProductReducer,
});

export default reducers;
