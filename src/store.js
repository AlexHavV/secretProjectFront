import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";

const initialState = {};

const middleware = [thunk];

const combinedReducer = combineReducers({
    userReducer: userReducer,
    productReducer: productReducer,
    cartReducer: cartReducer
});

const store = createStore(
    combinedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;