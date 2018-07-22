import React from 'react';
import * as R from 'ramda';

const situations = ['ثبت شده', 'پرداخت شده', 'پرداخت تایید شده', 'شروع انتقال رمزارز', 'اتمام انتقال رمزارز', 'تکمیل شده', 'تمام شده']

const OrderSituationField = ({ record = {} }) => {
    const count = R.pipe(
        R.props(['is_payed', 'is_approved', 'tx_started', 'tx_ended', 'is_completed', 'is_done' ]),
        R.filter(R.identity),
        R.length
    )(record)
    return (
        <div>{situations[count]}</div>
    )
}

export default OrderSituationField