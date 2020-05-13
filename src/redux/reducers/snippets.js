import * as ActionTypes from '../ActionTypes';

export const Snippets = (state = {
    isLoading: true,
    errMess: null,
    snippets: [],
    snippetFormErr: null
}, action) => {
    switch(action.type) {

        case ActionTypes.ADD_SNIPPETS:
            return {...state, isLoading: false, errMess: null, snippets: action.payload}

        case ActionTypes.ADD_SNIPPET:
            var snippet = action.payload;
            snippet.id = state.snippets.length;
            return {...state, snippets: state.snippets.concat(snippet), snippetFormErr: false}

        case ActionTypes.SNIPPETS_LOADING:
            return {...state, isLoading: true, errMess: null, snippets: []}
        
        case ActionTypes.SNIPPETS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, snippets: []}

        default:
            return state;
    }
}