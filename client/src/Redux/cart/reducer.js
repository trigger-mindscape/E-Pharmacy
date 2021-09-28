import { getItemFromLocalStorage, setItemInLocalStorage } from "../../Helpers/LocalStorage";
import { ADD_TO_CART } from "./actions";

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      setItemInLocalStorage('cart',[action.payload, ...state])
      return [action.payload, ...state];

    default:
      return getItemFromLocalStorage('cart');
  }
}
