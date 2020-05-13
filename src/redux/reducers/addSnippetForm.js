import * as ActionTypes from '../ActionTypes';

export const AddSnippetForm = (state = {
    isLoading: true,
    errMess: null,
    addSnippetForm: {}
}, action) => {
    switch(action.type) {

        case ActionTypes.GET_INITIAL_ADD_SNIPPET_FORM_LOAING:
            return {...state, isLoading:true, errMess:null, addSnippetForm:{}}

        case ActionTypes.GET_INITIAL_ADD_SNIPPET_FORM_FAILED:
            return {...state, isLoading:false, errMess:action.payload, addSnippetForm:{}}

        case ActionTypes.SAVE_ADD_SNIPPET_FORM:
            return {...state, isLoading: false, errMess: null, addSnippetForm: action.payload}

        default:
            return state;
    }
}