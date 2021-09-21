import { getAllShopApi } from "../../Api";

export const GET_ALL_SHOP = "GET_ALL_SHOP";

export const getAllShop = () => async (dispatch) => {
  try {
    const { data } = await getAllShopApi();
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: GET_ALL_SHOP, payload: data });

  } catch (error) {
    console.log(error);
  }
};
