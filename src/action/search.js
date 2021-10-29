import cartService from "../service/cartService";
import productService from "../service/productService";
import { GET_PRODUCTS } from "./action";

export const searchProducts = async (pageNumber, searchParam ,dispatch) => {
    var products = await productService.searchProducts(pageNumber, searchParam);
    console.log("Action: Products from api", products);
    dispatch({type: GET_PRODUCTS, pageNumber: pageNumber, productList: products});
}

export const addToCart = async (userId, productId) => {
    await cartService.addToCart(userId, productId);

    // let searchForId = currentCart.filter(x => x.id == id);
    // console.log(searchForId);
    // if(searchForId.length > 0) {
    //     searchForId[0].amount++;
    //     console.log(searchForId);
    // } else {
    //     currentCart.push({id: id, amount: 1 });
    // }
    // dispatch({type: ADD_CART, cartItems: currentCart});
}