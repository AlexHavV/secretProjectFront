import httpConfig from "../../utils/http-config";

class CartService {
    confirmPurchase(data){
        return httpConfig.post("api/cart/confirmPurchase", data);
    }

    searchCartProductsData(cartItems) {
        return httpConfig.post("api/cart/searchCartProductsData", cartItems);
    }
}

export default new CartService();