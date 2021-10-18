import {REGISTER_AUTH, LOGIN_AUTH} from "../../action/action"

const initialState = {
    isAuth: false, 
    userData: {}
};

function userReducer(state = initialState, action) {
    const {type, userData} = action;
    //console.log("userReducer action",action);
    //console.log("userReducer userData", userData);
    switch(type){
        case REGISTER_AUTH:
        case LOGIN_AUTH: {
            return {
                isAuth: true,
                userData: {
                    "id": userData.id,
                    "userName": userData.userName,
                    "email": userData.email,
                    "image": userData.image,
                    "phoneNumber": userData.phoneNumber
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;