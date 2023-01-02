import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../constant";

export const registoruser = (payload) => async dispatch => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { payload }
    })
}
export const error = (payload) => async dispatch => {
    dispatch({
        type: LOGIN_USER_ERROR,
        payload: { payload }
    })
}