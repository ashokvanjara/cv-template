import { LOGIN_USER_SUCCESS } from '../constant/index'

const intialState = {
    registorData: []
}
export const registor_reducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                registorData: action.payload
            }
            break;

        default:
            return state
            break;
    }
} 