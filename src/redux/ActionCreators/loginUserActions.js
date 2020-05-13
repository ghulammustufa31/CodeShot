import * as ActionTypes from '../ActionTypes';
import { USERS } from '../../shared/users';

export const loginUser = (email, password) => (dispatch) => {

    // Login the user
    const res = USERS.filter((user) => {
        return user.email === email && user.password === password;
    });

    if (res.length > 0) {
        dispatch(addUser(res[0]));
    }
    else {
        dispatch(userFailed("Invalid Username or Password"))
    }
} 

export const addUser = (user) => ({
    type: ActionTypes.LOGIN_USER,
    payload: user
})

export const userFailed = (errMess) => ({
    type: ActionTypes.LOGIN_USER_FAILED,
    payload: errMess
})

export const logoutUser = () => ({
    type: ActionTypes.LOGOUT_USER
})