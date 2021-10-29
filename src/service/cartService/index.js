import httpConfig from "../../utils/http-config";

class CartService {
    confirmPurchase(data){
        return httpConfig.post("api/cart/confirmPurchase", data);
    }

    сartGetProduct(userId) {
        return httpConfig.post("api/cart/CartGetProduct", userId);
    }

    addToCart(userId, productId) {
        return httpConfig.post("api/cart/CartAddProduct", {'userId': userId, "productId": productId});
    }
    
    removeFromCart(userId, productId, amount) {
        return httpConfig.post("api/cart/CartRemoveProduct", {'userId': userId, "productId": productId });
    }
}

export default new CartService();