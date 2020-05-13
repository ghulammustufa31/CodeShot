import * as ActionTypes from '../ActionTypes';
import { InitialAddSnippet } from '../forms';

export const addInitialAddSnippetForm = () => (dispatch) => {

    console.log("From AddSnippetFormActionCreator", InitialAddSnippet);

    dispatch(addSnippetFormLoading());
    dispatch(addSnippetForm(InitialAddSnippet));
}

export const addSnippetFormLoading = () => ({
    type: ActionTypes.GET_INITIAL_ADD_SNIPPET_FORM_LOAING
})

export const addSnippetFormFailed = (errMess) => ({
    type: ActionTypes.GET_INITIAL_ADD_SNIPPET_FORM_FAILED,
    payload: errMess
})

export const addSnippet = (snippet) => ({
    type: ActionTypes.ADD_SNIPPET,
    payload: snippet
})

export const addSnippetForm = (snippetForm) => ({
    type: ActionTypes.SAVE_ADD_SNIPPET_FORM,
    payload: snippetForm
})

// Posting Snippet to state
export const saveAddSnippetForm = (caption, snippetText, tags) => (dispatch) => {

    let newSnippet = {
        caption: caption,
        code: `${snippetText}`,
        tags: [tags]
    }

    dispatch(addSnippet(newSnippet));
} 