import {
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    DELETE,
    fetchUtils,
} from 'react-admin';
import { stringify } from 'query-string';

import * as R from 'ramda';

const API_URL = '/v1';

const addJwtStringify = (obj, resourceItem = '') => JSON.stringify(R.mergeWith(
  R.merge,
  (resourceItem == 'buy-config' || resourceItem == 'sell-config' ) ? {} : { query: { 'admin_jwt': localStorage.getItem('admin_jwt') } },
  obj));

/**
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} { url, options } The HTTP request parameters
 */
const convertDataProviderRequestToHTTP = (type, resource, params) => {
    // console.log('hi',type, resource, params);
    const resourceItem = resource ? resource.slice(0, -1) : 'user'
    switch (type) {
    case GET_LIST: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const { filter } = params;
        const itemsString = R.pipe(
            R.keys,
            R.head,
        )(filter.search)
        const items = itemsString ? R.split(',', itemsString) : []
        const value = R.path(['search', itemsString], filter)
        const searchObj = itemsString ? { search: { items, value }} : {}
        const query = {
            item_count: perPage,
            skip_items: perPage * (page - 1),
            filter: R.dissoc('search', filter),
            ...searchObj
        };
        return {
            url: `${API_URL}/read-all-${resource}`, //`?${stringify(query)}`,
            options: { method: 'POST', body: addJwtStringify({ query }) }
        };
    }
    case GET_ONE:
        return {
            url: `${API_URL}/read-${resourceItem}`,
            options: { method: 'POST', body: addJwtStringify({ query: { "_id": params.id }}, resourceItem) }
        };
    case GET_MANY: {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        return {
            url: `${API_URL}/read-all-${resource}`,
            options: { method: 'POST', body: addJwtStringify({}) }
        };
    }
    case GET_MANY_REFERENCE: {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, (page * perPage) - 1]),
            filter: JSON.stringify({ ...params.filter, [params.target]: params.id }),
        };
        return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case UPDATE:
        return {
            url: `${API_URL}/update-${resourceItem}`,
            options: { method: 'POST', body: addJwtStringify(R.merge(
                { query: { "_id": params.id }},
                { ...R.pipe(
                    R.dissoc('_id'),
                  R.dissoc('phone_number_is_approved'),
                    R.dissoc('id')
                )(params.data) }), resourceItem) }
        };
    case CREATE:
        return {
            url: `${API_URL}/${resource}`,
            options: { method: 'POST', body: JSON.stringify(params.data) },
        };
    case DELETE:
        return {
            url: `${API_URL}/remove-${resourceItem}`,
            options: { method: 'POST', body: addJwtStringify({ query: { "_id": params.id }}, resourceItem) }
        };
    default:
        throw new Error(`Unsupported fetch action type ${type}`);
    }
};

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The Data Provider request params, depending on the type
 * @returns {Object} Data Provider response
 */
const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
    // console.log('some', response, type, resource, params)
    const { headers, json, status } = response;
    if (status == 200 && json.responseCode == 200){
        switch (type) {
        case GET_LIST:
            return {
                data: json.data.map(x => R.assoc('id', x._id, x)),
                total: json.count || json.data.length
            };
        case GET_MANY:
            return {
                data: json.data.map(x => R.assoc('id', x._id, x))
            };
        case CREATE:
            return { data: { ...params.data } };
        case UPDATE:
            return { data: { ...params.data } };
        default:
            return { data: R.assoc('id', params.id, json.data) };
        }
    }
    return { data: [], total: 0 };
};

/**
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for response
 */
export default (type, resource, params) => {
    const { fetchJson } = fetchUtils;
    const { url, options } = convertDataProviderRequestToHTTP(type, resource, params);
    return fetchJson(url, options)
        .then(response => convertHTTPResponseToDataProvider(response, type, resource, params));
};

