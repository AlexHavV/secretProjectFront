import cartService from "../service/cartService";

export async function сartGetProduct(userId) {
    var products = await cartService.сartGetProduct(userId);
    console.log("Action: Products from api", products);
    return products.data;
}

export async function сartRemoveProduct(userId, productId) {
    await cartService.removeFromCart(userId, productId);
}
