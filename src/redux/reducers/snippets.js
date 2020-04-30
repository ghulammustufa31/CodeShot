import * as ActionTypes from '../ActionTypes';

export const Snippets = (state = {
    isLoading: true,
    errMess: null,
    snippets: []
}, action) => {
    switch(action.type) {

        case ActionTypes.ADD_SNIPPETS:
            return {...state, isLoading: false, errMess: null, snippets: action.payload}

        case ActionTypes.SNIPPETS_LOADING:
            return {...state, isLoading: true, errMess: null, snippets: []}
        
        case ActionTypes.SNIPPETS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, snippets: []}

        default:
            return state;
    }
}