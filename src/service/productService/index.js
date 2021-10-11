import httpConfig from "../../utils/http-config";

class ProductService {
    getProducts(data){
        return httpConfig.post("api/product/getProduct", data);
    }
    
    addToCart(data){
        return http.post("api/product/addToCart", data , {  headers: {'Content-Type': 'multipart/form-data'}});
    }
}

export default new ProductService();