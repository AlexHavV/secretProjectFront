import cartService from "../service/cartService";

export default async function searchCartProductsData(cartItems) {
    var products = await cartService.searchCartProductsData(cartItems);
    console.log("Action: Products from api", products);
    return products.data;
}
