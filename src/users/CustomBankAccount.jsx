import React from 'react';

import { TextInput, BooleanInput, FormTab, Field } from 'react-admin';

const CustomBankAccount = ({ record }) => {
    console.log(record)
    return (
        <FormTab label="resources.users.tabs.bank_accounts">
            <Field name="bank_accounts" component="input" type="number" placeholder="latitude" />

            <CustomTextInput label="resources.users.fields.bank_accounts.fields.namefa" name="bank_accounts.namefa" source="namefa" />
            <TextInput label="resources.users.fields.bank_accounts.fields.credit_card_number" source="bank_accounts.credit_card_number" />
            <TextInput label="resources.users.fields.bank_accounts.fields.account_number" source="bank_accounts.account_number" />
            <TextInput label="resources.users.fields.bank_accounts.fields.shaba" name="bank_accounts.shaba" source="bank_accounts.shaba" />
            <BooleanInput  label="resources.users.fields.bank_accounts.fields.is_approved" source="bank_accounts.is_approved" />
        </FormTab>
    )
}

const CustomTextInput = ({ label, record , source }) => {
    return <TextInput label={label} value={!!record ? record['bank_accounts'][source] : ''} name={`bank_accounts.${source}`}/>
}
const CustomBoolean = ({ label }) => {
    <BooleanInput  label={label} source="bank_accounts.is_approved" />
}
export default  CustomBankAccount
