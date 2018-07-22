import { UPDATE } from 'react-admin';

export const BUYABLE_APPROVE = 'BUYABLE_APPROVE';
export const BUYABLE_APPROVE_LOADING = 'BUYABLE_APPROVE_LOADING';
export const BUYABLE_APPROVE_FAILURE = 'BUYABLE_APPROVE_FAILURE';
export const BUYABLE_APPROVE_SUCCESS = 'BUYABLE_APPROVE_SUCCESS';

export const buyableApprove = (id, data) => ({
    type: BUYABLE_APPROVE,
    payload: { id, data: { ...data, buyable: true } },
    meta: {
        resource: 'buy-configs',
        fetch: UPDATE,
        onSuccess: {
            notification: {
                body: 'resources.buy-configs.notification.approved_success',
                level: 'info',
            }
        },
        onFailure: {
            notification: {
                body: 'resources.buy-configs.notification.approved_error',
                level: 'warning',
            },
        },
    },
});

export const BUYABLE_REJECT = 'BUYABLE_REJECT';
export const BUYABLE_REJECT_LOADING = 'BUYABLE_REJECT_LOADING';
export const BUYABLE_REJECT_FAILURE = 'BUYABLE_REJECT_FAILURE';
export const BUYABLE_REJECT_SUCCESS = 'BUYABLE_REJECT_SUCCESS';

export const buyableReject = (id, data) => ({
    type: BUYABLE_REJECT,
    payload: { id, data: { ...data, buyable: false } },
    meta: {
        resource: 'buy-configs',
        fetch: UPDATE,
        onSuccess: {
            notification: {
                body: 'resources.buy-configs.notification.rejected_success',
                level: 'info',
            }
        },
        onFailure: {
            notification: {
                body: 'resources.buy-configs.notification.rejected_error',
                level: 'warning',
            },
        },
    },
});
