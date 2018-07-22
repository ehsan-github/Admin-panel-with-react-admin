import { UPDATE } from 'react-admin';

export const SELLABLE_APPROVE = 'SELLABLE_APPROVE';
export const SELLABLE_APPROVE_LOADING = 'SELLABLE_APPROVE_LOADING';
export const SELLABLE_APPROVE_FAILURE = 'SELLABLE_APPROVE_FAILURE';
export const SELLABLE_APPROVE_SUCCESS = 'SELLABLE_APPROVE_SUCCESS';

export const sellableApprove = (id, data) => ({
    type: SELLABLE_APPROVE,
    payload: { id, data: { ...data, sellable: true } },
    meta: {
        resource: 'sell-configs',
        fetch: UPDATE,
        onSuccess: {
            notification: {
                body: 'resources.sell-configs.notification.approved_success',
                level: 'info',
            }
        },
        onFailure: {
            notification: {
                body: 'resources.sell-configs.notification.approved_error',
                level: 'warning',
            },
        },
    },
});

export const SELLABLE_REJECT = 'SELLABLE_REJECT';
export const SELLABLE_REJECT_LOADING = 'SELLABLE_REJECT_LOADING';
export const SELLABLE_REJECT_FAILURE = 'SELLABLE_REJECT_FAILURE';
export const SELLABLE_REJECT_SUCCESS = 'SELLABLE_REJECT_SUCCESS';

export const sellableReject = (id, data) => ({
    type: SELLABLE_REJECT,
    payload: { id, data: { ...data, sellable: false } },
    meta: {
        resource: 'sell-configs',
        fetch: UPDATE,
        onSuccess: {
            notification: {
                body: 'resources.sell-configs.notification.rejected_success',
                level: 'info',
            }
        },
        onFailure: {
            notification: {
                body: 'resources.sell-configs.notification.rejected_error',
                level: 'warning',
            },
        },
    },
});
