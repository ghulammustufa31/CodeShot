import * as ActionTypes from '../ActionTypes';

export const LoggedUser = (state = {
    errMess: null,
    isLoggedIn: false,
    loggedUser: {}
}, action) => {
    switch(action.type) {
        case ActionTypes.LOGIN_USER:
            return {...state, errMess: null, loggedUser: action.payload, isLoggedIn: true}

        case ActionTypes.LOGIN_USER_FAILED:
            return {...state, errMess: action.payload, loggedUser: {}, isLoggedIn: false}
        
        case ActionTypes.LOGOUT_USER:
            return {...state, errMess: null, loggedUser: {}, isLoggedIn: false}

        default: 
            return state;
    }
}