import axios from "axios";
import { getServerUrl } from "./server-addr";

export default axios.create({
    baseURL: getServerUrl(),
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});