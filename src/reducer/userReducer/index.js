import {REGISTER_AUTH, LOGIN_AUTH} from "../../action/action"

const initialState = {
    isAuth: false, 
    userData: ""
};

function userReducer(state = initialState, action) {
    const {type, data} = action;
    switch(type){
        case REGISTER_AUTH:
        case LOGIN_AUTH: {
            return {
                isAuth: true,
                userData: data
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;