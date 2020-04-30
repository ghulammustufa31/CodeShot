import * as ActionTypes from '../ActionTypes';
import { SNIPPETS } from '../../shared/test_code_snippets'; 

export const fetchSnippets = () => (dispatch) => {
    dispatch(snippetsLoading);

    setTimeout(() => {
        dispatch(addSnippets(SNIPPETS))
    }, 200)
}

export const addSnippets = (snippets) => ({
    type: ActionTypes.ADD_SNIPPETS,
    payload: snippets
})

export const snippetsLoading = () => ({
    type: ActionTypes.SNIPPETS_LOADING
})

export const snippetsFailed = (errMess) => ({
    type: ActionTypes.SNIPPETS_FAILED,
    payload: errMess
})