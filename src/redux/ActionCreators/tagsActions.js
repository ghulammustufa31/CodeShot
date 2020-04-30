import * as ActionTypes from '../ActionTypes';
import { TAGS_LIST } from '../../shared/tags_list';

export const tagsLoading = () => ({
    type: ActionTypes.TAGS_LOADING
})

export const tagsFailed = (errMess) => ({
    type: ActionTypes.TAGS_FAILED,
    payload: errMess
})

export const addTags = (tags) => ({
    type: ActionTypes.ADD_TAGS,
    payload: tags
})

export const fetchTags = () => (dispatch) => {
    dispatch(tagsLoading);

    setTimeout(() => {
        dispatch(addTags(TAGS_LIST))
    }, 2000);
} 
