import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR } from 'react-admin';
import { login, adminCheckJWT } from './api';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        return login(username, password)
            .then(res => {
                if (res.data.responseCode == 200) {
                    localStorage.setItem('admin_jwt', res.data.data.admin_jwt);
                    return Promise.resolve();
                } else {
                    return Promise.reject('اطلاعات اشتباه');
                }
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('admin_jwt');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return adminCheckJWT(localStorage.getItem('admin_jwt')) 
            .then(res => {
                if (res.data.responseCode == 200) {
                    return Promise.resolve();
                } else {
                    return Promise.reject('اطلاعات اشتباه');
                }
            });
    }
    return Promise.reject('Unkown method');
};
