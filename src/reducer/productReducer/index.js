import { GET_PRODUCTS, ADD_CART } from "../../action/action";

const initialState = {
    pageNumber: 0,
    searchParam: "",
    productList: [],
    cartItems: []
};

function productReducer(state = initialState, action) {
    const {type, pageNumber = 0, searchParam = "", productList = state.productList, cartItems = []} = action;
    switch(type){
        case GET_PRODUCTS: {
            //console.log("Reducer: product list", productList);
            return {
                pageNumber: pageNumber,
                searchParam: searchParam,
                productList: productList,
                cartItems: cartItems
            }
        }
        case ADD_CART: {
            return {
                pageNumber: state.pageNumber,
                searchParam: state.searchParam,
                productList: productList,
                cartItems: cartItems
            }
        }
        default: {
            return state
        }
    }
}

export default productReducer;