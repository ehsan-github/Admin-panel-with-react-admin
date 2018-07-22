import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserIcon } from './users';
import { OrderList, OrderEdit, OrderIcon } from './orders';
import { CurrencyList as BuyConfList, CurrencyEdit as BuyConfEdit, BuyIcon } from './buyconfigs';
import { CurrencyList as SellConfList, CurrencyEdit as SellConfEdit, SellIcon } from './sellconfigs';
import dataProvider from './dataProvider'
import authProvider from './authProvider';
import { Dashboard } from './dashboard'
import sagas from './sagas';
import customRoutes from './routes';
import themeReducer from './themeReducer';
import Layout from './Layout';
import Menu from './Menu';

import farsiMessages from './i18n/fa';
import englishMessages from './i18n/en';

import './App.css'

const messages = {
    fa: farsiMessages,
    en: englishMessages,
}
const i18nProvider = locale => messages[locale];


const App = () => (
    <Admin
        title="ادمین بیتومان"
        dataProvider={dataProvider}
        dashboard={Dashboard}
        authProvider={authProvider}
        i18nProvider={i18nProvider}
        locale="fa"
        customSagas={sagas}
        customRoutes={customRoutes}
        customReducers={{ theme: themeReducer }}
        appLayout={Layout}
        menu={Menu}
    >
        <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            icon={UserIcon}
        />
        <Resource
            name="orders"
            list={OrderList}
            edit={OrderEdit}
            icon={OrderIcon}
        />
        <Resource
            name="buy-configs"
            list={BuyConfList}
            edit={BuyConfEdit}
            icon={BuyIcon}
        />
        <Resource
            name="sell-configs"
            list={SellConfList}
            edit={SellConfEdit}
            icon={SellIcon}
        />
    </Admin>
)

export default App;