import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import { Snippets } from './reducers/snippets';
import { AvailableTags } from './reducers/availableTags';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            snippets: Snippets,
            availableTags: AvailableTags
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}