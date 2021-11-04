import httpConfig from "../../utils/http-config";

class CartService {
    confirmPurchase(userId){
        return httpConfig.post("api/cart/ConfirmPurchase", {'userId': userId});
    }

    сartGetProduct(userId) {
        return httpConfig.post("api/cart/CartGetProduct", {'userId': userId});
    }

    addToCart(userId, productId) {
        return httpConfig.post("api/cart/CartAddProduct", {'userId': userId, "productId": productId});
    }
    
    removeFromCart(userId, productId, amount) {
        return httpConfig.post("api/cart/CartRemoveProduct", {'userId': userId, "productId": productId });
    }
}

export default new CartService();