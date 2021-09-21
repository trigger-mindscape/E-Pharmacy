import categoryReducer from "./category/reducer";
import notificationReducer from "./notification/reducers";
import settingReducer from "./setting/reducer";
import shopReducer from "./shop/reducer";
import userReducer from "./user/reducers";

const { combineReducers } = require("redux");


export const rootReducer = combineReducers(
    {
        user:userReducer,
        shop:shopReducer,
        category:categoryReducer,
        setting:settingReducer,
        notification:notificationReducer,
    }
)
