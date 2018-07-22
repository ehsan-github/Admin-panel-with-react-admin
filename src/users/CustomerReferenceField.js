import React from 'react';
import { ReferenceField } from 'react-admin';

import FullNameField from './FullNameField';

const CustomerReferenceField = props => (
    <ReferenceField source="user_id" reference="users" {...props}>
        <FullNameField/>
    </ReferenceField>
);
CustomerReferenceField.defaultProps = {
    source: 'user_id',
    addLabel: true,
};

export default CustomerReferenceField;
