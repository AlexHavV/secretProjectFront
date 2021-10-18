import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:18672/",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});