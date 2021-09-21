import { createCategoryApi, getSingleShopCategoryApi } from "../../Api";

export const CREATE_CATEGORY = "CREATE_CATEGORY";
export const GET_SINGLE_SHOP_CATEGORY = "GET_SINGLE_SHOP_CATEGORY";

export const createCategory = (formData) => async (dispatch) => {
  try {
    const { data } = await createCategoryApi(formData);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: CREATE_CATEGORY, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const getSingleShopCategory = (vendorId) => async (dispatch) => {
  try {
    const { data } = await getSingleShopCategoryApi(vendorId);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: GET_SINGLE_SHOP_CATEGORY, payload: data });

  } catch (error) {
    console.log(error);
  }
};
