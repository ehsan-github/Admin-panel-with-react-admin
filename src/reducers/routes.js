import * as R from 'ramda';
import { SET_PATH_NAME } from '../constants/AppConstants';

const initialState = {
    pathName: '/'
};

const route = (state = initialState, action) => R.cond([[
    R.propEq('type', SET_PATH_NAME),
    action => R.assoc('pathName', action.pathName, state)
], [
    R.T,
    R.always(state)
]])(action);

export default route;
