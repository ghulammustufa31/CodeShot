import * as ActionTypes from '../ActionTypes';

export const AvailableTags = (state = {
    isLoading: true,
    errMess: null,
    availableTags: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TAGS:
            return {...state, isLoading: false, errMess: null, availableTags: action.payload};
        
        case ActionTypes.TAGS_LOADING:
            return {...state, isLoading: true, errMess: null, availableTags: []};

        case ActionTypes.TAGS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, availableTags: []};

        default:
            return state;
    }
}