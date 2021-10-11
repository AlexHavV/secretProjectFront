import httpConfig from "../../utils/http-config";

class CartService {
    removeFromCart(data){
        return httpConfig.post("api/cart/removeFromCart", data);
    }
    
    confirmPurchase(data){
        return httpConfig.post("api/cart/confirmPurchase", data);
    }
}

export default new CartService();