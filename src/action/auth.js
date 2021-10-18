import jwt from "jsonwebtoken";
import setAuthToken from "../utils/auth-token";
import { LOGIN_AUTH } from "./action";

export const authUser = (token, dispatch) => {
    setAuthToken(token);
    var user = jwt.decode(token);
    //console.log("authUser",user);
    //console.log("authUser type", typeof(user));
    dispatch({type: LOGIN_AUTH, userData: user});
}