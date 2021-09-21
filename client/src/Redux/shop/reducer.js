import { GET_ALL_SHOP } from "./actions";

const initialState = {
  allShop:[],
  singleShop:{}
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHOP:
      return { ...state, allShop: action.payload };

    default:
      return state;
  }
}
