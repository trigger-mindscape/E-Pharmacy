import {
  getItemFromLocalStorage,
  setItemInLocalStorage
} from "../../Helpers/LocalStorage";
import { ADD_TO_CART } from "./actions";

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      //checking is this product is precisely added in cart
      // if added then update the quantity of that product (privies quantity + new quantity)

      const isPreviouslyPresent = state.find(
        (cartProduct) => cartProduct._id === action.payload._id
      );
      if (isPreviouslyPresent) {
        const updatedState = state.map((cartProduct) =>
          action.payload._id === cartProduct._id
            ? {
                ...cartProduct,
                quantity: cartProduct.quantity + action.payload.quantity,
              }
            : cartProduct
        );
        setItemInLocalStorage("cart", updatedState);
        return updatedState;
      }
      setItemInLocalStorage("cart", [action.payload, ...state]);
      return [action.payload, ...state];

    default:
      return getItemFromLocalStorage("cart");
  }
}
