import { REMOVE_CART, CONFIRM_ORDER, GET_CART_PRODUCTS_DATA } from "../../action/action";

const initialState = {
    cartItems: []
};

function productReducer(state = initialState, action) {
    const {type, cartItems} = action;
    switch(type){
        case GET_CART_PRODUCTS_DATA:
        case REMOVE_CART: {
            return {
                cartItems: cartItems
            }
        }
        case CONFIRM_ORDER: {
            return initialState
        }
        default: {
            return state
        }
    }
}

export default productReducer;