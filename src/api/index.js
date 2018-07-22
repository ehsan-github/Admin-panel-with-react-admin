import axios from 'axios';

export const adminLogin = (email, password) => axios.post(
    '/v1/login-admin',
    { email, password });

export const adminCheckJWT = admin_jwt => axios.post(
    '/v1/read-admin',
    { query: { admin_jwt } }
);

export const readAllOrders = query => axios.post(
    '/v1/read-all-orders',
    query);

export const readOrder = query => axios.post(
    '/v1/read-order',
    query);

export const updateOrder = query => axios.post(
    '/v1/update-order',
    query);

export const readAllLastPrices = () => axios.post(
    '/v1/read-all-last-prices',
    {});

export const readAllSellConfigs = query => axios.post(
    '/v1/read-all-sell-configs',
    query);

export const readAllBuyConfigs = query => axios.post(
    '/v1/read-all-buy-configs',
    query);

export const readAllUsers = () => axios.post(
    '/v1/read-all-users',
    {});

export const readUser = user => axios.post(
    '/v1/read-user',
    user);

export const updateUser = user => axios.post(
    '/v1/update-user',
    user);

export const login = (username, password) => axios.post(
    '/v1/login-admin',
    { username, password });


export const readGeneralSettings = () => axios.post(
  '/v1/read-all-general-settings',
  {}
);

export const updateGeneralSetting = body => axios.post(
  '/v1/update-general-settings',
  body
);
