import { SET_AUTH_STATE, SET_PATH_NAME } from '../constants/AppConstants';
import { adminLogin, adminCheckJWT } from '../api';


export const login = (username, password) => dispatch => {
    adminLogin(username, password)
        .then( res => {
            localStorage.setItem('user_jwt', 'user_jwt');
            dispatch(setAuthState(true));
        })
        .catch(() => {
            localStorage.setItem('user_jwt', 'user_jwt');
            dispatch(setAuthState(true));
        });
};

export const loginWithJWT = pathName => dispatch => {
    if (!!localStorage.user_jwt){
        adminCheckJWT(localStorage.user_jwt)
            .then(res => {
                if(res.data.response == 200){
                    dispatch(setPathname(pathName));
                    dispatch(setAuthState(true));
                } else {
                    localStorage.removeItem('user_jwt');
                }
            })
            .catch(() => {
                dispatch(setPathname(pathName));
                dispatch(setAuthState(true));
            });
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('user_jwt');
    dispatch(setAuthState(false));
};

const setAuthState = newState => ({
    type: SET_AUTH_STATE,
    newState
});

const setPathname = pathName => ({
    type: SET_PATH_NAME,
    pathName
});
