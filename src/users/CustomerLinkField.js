import React from 'react';
import { Link } from 'react-admin';

import FullNameField from './FullNameField';

const CustomerLinkField = props => (
    <Link to={`/users/${props.record._id}`}>
        <FullNameField {...props} />
    </Link>
);

CustomerLinkField.defaultProps = {
    source: 'user_id',
    addLabel: true,
};

export default CustomerLinkField;
