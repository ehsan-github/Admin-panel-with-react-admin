import React from 'react';
import * as R from 'ramda';
import { translate, BooleanInput, BooleanField } from 'react-admin'

const SITUATIONS = ['is_payed', 'is_approved', 'tx_started', 'tx_ended', 'is_completed', 'is_done' ]

const CustomBooleanInput = ({ record, source, translate }) => { 
    let index = R.findIndex(R.equals(source), SITUATIONS)
    let enable = R.prop(SITUATIONS[index == 0 ? index : index-1], record) && !R.prop(SITUATIONS[index == 5 ? 5 : index+1], record)
    if (enable) {
        return (<BooleanInput label={translate(`resources.orders.fields.${source}`)} source={source} />)
    } else {
        return <BooleanInput disabled label={translate(`resources.orders.fields.${source}`)} source={source} />
    }
}

export default translate(CustomBooleanInput)