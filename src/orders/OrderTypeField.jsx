import React from 'react';
import * as R from 'ramda';
import { translate } from 'react-admin'

const OrderTypeField = ({ record: { order_type = ''}, translate }) => {
    return (
        <div>{translate(`resources.orders.trans.${order_type}`)}</div>
    )
}
export default translate(OrderTypeField)