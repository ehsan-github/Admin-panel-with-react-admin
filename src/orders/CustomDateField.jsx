import React from 'react';
import * as R from 'ramda';
import { translate, DateField } from 'react-admin'
import { dateFromObjectId } from '../constants/AppFunctions'

const CustomDateField = ({ record: { _id }, translate }) => {
    return (
        <div>{dateFromObjectId(_id)}</div>
    )
}
export default translate(CustomDateField)