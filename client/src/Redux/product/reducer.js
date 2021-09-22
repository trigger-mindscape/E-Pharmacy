import { CREATE_PRODUCT, GET_SINGLE_SHOP_PRODUCT } from "./actions";

const initialState = [];

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return  [action.payload, ...state];

    case GET_SINGLE_SHOP_PRODUCT:
      return action.payload;

    default:
      return state;
  }
}
