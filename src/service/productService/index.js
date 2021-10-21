import httpConfig from "../../utils/http-config";

class ProductService {
    getProducts(){
        return httpConfig.get("api/product/GetProducts").then(x => x.data);
    }
    
    async searchProducts(page, searchParam) {
        var productFromApi = await httpConfig.get("api/product/SearchProducts?page="+page+"&searchParam="+searchParam)
        return productFromApi.data;
    }

    addProduct(data){
        return httpConfig.post("api/product/AddProduct", data , {  headers: {'Content-Type': 'multipart/form-body'}});
    }

    updProduct(data){
        return httpConfig.put("api/product/UpdateProductById", data , {  headers: {'Content-Type': 'multipart/form-data'}});
    }

    delProduct(data){
        return httpConfig.delete("api/product/DeleteProductById", data , {  headers: {'Content-Type': 'multipart/form-data'}});
    }
}

export default new ProductService();