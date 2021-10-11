import { REMOVE_CART, CONFIRM_ORDER } from "../../action/action";

const initialState = {
    cartItems: []
};

function productReducer(state = initialState, action) {
    const {type, cartItems} = action;
    switch(type){
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