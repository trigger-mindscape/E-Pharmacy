import { placeOrderApi } from "../../Api";
import { showNotification } from "../notification/actions";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const PLACE_ORDER = "PLACE_ORDER";

export const addInCartAction = (Product) => ({
  type: ADD_TO_CART,
  payload: Product,
});

export const removeFromCartAction = (Product) => ({
  type: REMOVE_FROM_CART,
  payload: Product,
});

export const placeOrder = (vendorId) => async (dispatch) => {
  try {
    const { data } = await placeOrderApi(vendorId);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch(showNotification("success", "New Category Created Successfully"));
    dispatch({ type: PLACE_ORDER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
