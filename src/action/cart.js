import cartService from "../service/cartService";
import { GET_CART_PRODUCTS_DATA } from "./action";

export async function сartGetProduct(userId, dispatch) {
    var products = await cartService.сartGetProduct(userId);
    console.log("Action: Products from api", products.data);
    dispatch({type: GET_CART_PRODUCTS_DATA, cartItems: products.data});
}

export async function сartRemoveProduct(userId, productId) {
    await cartService.removeFromCart(userId, productId);
}

export async function confirmOrder(userId) {
    await cartService.confirmPurchase(userId);
}
