import { createVendorApi, loginVendorApi } from "../../Api";
import { showNotification } from "../notification/actions";

export const Add_LOGIN_VENDOR = "Add_LOGIN_VENDOR";
export const LOGOUT = "LOGOUT";

export const createVendorAccount = (formData, history) => async (dispatch) => {
  try {
    const { data } = await createVendorApi(formData);
    console.log("🚀 ~ file: actions.js ~ line 10 ~ createVendorAccount ~ data", data)
    dispatch({ type: Add_LOGIN_VENDOR, payload: data });
    dispatch(
      showNotification({
        massageType: "success",
        message: "Account created successfully",
      })
    );
  } catch (error) {
    console.log(error?.message);
    dispatch(
      showNotification({
        message: error?.response?.data?.message,
        massageType: "error",
      })
    );
    console.log(error);
  }
};

export const loginVendorAccount = (formData, history) => async (dispatch) => {
  try {
    const { data } = await loginVendorApi(formData);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: Add_LOGIN_VENDOR, payload: data });
    dispatch(
      showNotification({
        massageType: "success",
        message: `welcome ${data.userInfo.name}`,
      })
    );
  } catch (error) {
    dispatch(
      showNotification({
        message: error?.response?.data?.message,
        massageType: "error",
      })
    );
    console.log(error);
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.setItem("profile", "null");
  dispatch(
    showNotification({
      message: "Log Out Successful",
      massageType: "success",
    })
  );
  dispatch({
    type: LOGOUT,
    payload: {
      token: null,
      userInfo: {
        id: "",
        name: "",
        email: "",
        isAdmin: false,
      },
    },
  });
};
