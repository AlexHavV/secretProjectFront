import { GET_PRODUCTS, ADD_CART } from "../../action/action";

const initialState = {
    pageNumber: 0,
    searchParam: "",
    list: [],
    cartItems: []
};

function productReducer(state = initialState, action) {
    const {type, pageNumber, searchParam, list, cartItems} = action;
    switch(type){
        case GET_PRODUCTS: {
            return {
                pageNumber: pageNumber,
                searchParam: searchParam,
                list: list,
                cartItems: cartItems
            }
        }
        default: {
            return state
        }
    }
}

export default productReducer;