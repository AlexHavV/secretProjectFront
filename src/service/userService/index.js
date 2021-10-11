import httpConfig from "../../utils/http-config";

class UserService {
    register(data) {
        return httpConfig.post("api/user/register", data);
    }

    login(data) {
        return http.post("api/user/login", data , {  headers: {'Content-Type': 'multipart/form-data'}});
    }
}


export default new UserService();