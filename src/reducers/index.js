import { combineReducers } from 'redux';

import admin from './admin';
import routes from './routes';

const appReducer = combineReducers({
    admin,
    routes
});

export default appReducer;

