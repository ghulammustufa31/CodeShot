import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import { Snippets } from './reducers/snippets';
import { AvailableTags } from './reducers/availableTags';
import { AddSnippetForm } from './reducers/addSnippetForm';
import { InitialLogin } from './forms';
import { LoggedUser } from './reducers/loggedUser';
import { reducer as formReducer } from 'redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            snippets: Snippets,
            availableTags: AvailableTags,
            initialAddSnippetForm: AddSnippetForm,
            form: formReducer,
            snippetFormErr: null,
            loggedUser: LoggedUser,
            ...createForms({
                login: InitialLogin
            })

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}