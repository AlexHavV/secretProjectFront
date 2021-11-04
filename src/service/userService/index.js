import httpConfig from "../../utils/http-config";

class UserService {
    register(data) {
        return httpConfig.post("api/user/register", data , {  headers: {'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*"}});
    }

    login(data) {
        return httpConfig.post("api/user/login", data , {  headers: {'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*"}});
    }

    edit(data) {
        return httpConfig.post("api/user/edit", data , {  headers: {'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*"}});
    }
}

export default new UserService();