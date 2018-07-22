import * as R from 'ramda';
import { SET_AUTH_STATE } from '../constants/AppConstants';

const initialState = {
    loggedIn: false
};

const admin = (state = initialState, action) => R.cond([[
    R.propEq('type', SET_AUTH_STATE),
    action => R.assoc('loggedIn', action.newState, state)
], [
    R.T,
    R.always(state)
]])(action);

export default admin;
