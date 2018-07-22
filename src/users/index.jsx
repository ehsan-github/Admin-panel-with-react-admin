import React from 'react';
import { List, Edit, Create, Datagrid, EmailField, ReferenceField, TextField, EditButton,
         DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm,
         TextInput, NumberField, TabbedForm, FormTab, ImageField, BooleanInput,
         SimpleFormIterator, ArrayInput, NumberInput,
         Filter,
         AutocompleteInput,
         DateInput,
         CardActions,
         ListButton,
         RefreshButton,
         BooleanField
} from 'react-admin';
import Icon from '@material-ui/icons/Person';

export const UserIcon = Icon

export const UserFilter = props => (
    <Filter {...props}>
        <TextInput label="pos.search" source="search.first_name,last_name,phone_number,email" alwaysOn />
        <BooleanInput source="id_card_is_approved"/>
    </Filter>
);

export const UserList = (props) => {
    return (
        <List
            {...props}
            filters={<UserFilter />}
        >
            <Datagrid>
                <TextField source="first_name" />
                <TextField source="last_name" />
                <TextField source="phone_number" />
                <EmailField source="email" />
                <BooleanField source="id_card_is_approved" />
                <BooleanField source="user_is_approved" />
                <EditButton />
            </Datagrid>
        </List>
    )
}

const UserTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const UserEditActions = ({ basePath, data, resource }) => (
    <CardActions>
        <ListButton basePath={basePath} />
        <RefreshButton />
    </CardActions>
);

export const UserEdit = (props) => (
    <Edit
        {...props}
        actions={<UserEditActions />}
    >
        <TabbedForm redirect="edit">
            <FormTab label="resources.users.tabs.identity">
                <DisabledInput source="id" />
                <TextInput label="resources.users.fields.national_code" source="national_code" />
                <TextInput label="resources.users.fields.first_name" source="first_name" />
                <TextInput label="resources.users.fields.last_name" source="last_name" />
            </FormTab>
            <FormTab label="resources.users.tabs.contact">
                <TextInput label="resources.users.fields.phone_number" source="phone_number" />
                <TextInput label="resources.users.fields.telephone" source="telephone" />
                <TextInput label="resources.users.fields.email" source="email" />
            </FormTab>
            <FormTab label="resources.users.tabs.bank_accounts">
                <ArrayInput label="resources.users.tabs.bank_accounts" source="bank_accounts">
                    <SimpleFormIterator>
                        <TextInput label="resources.users.fields.bank_accounts.fields.namefa" source="namefa" />
                        <TextInput label="resources.users.fields.bank_accounts.fields.credit_card_number" source="credit_card_number" />
                        <TextInput label="resources.users.fields.bank_accounts.fields.account_number" source="account_number" />
                        <TextInput label="resources.users.fields.bank_accounts.fields.shaba" source="shaba" />
                        {/* <BooleanInput  label="resources.users.fields.bank_accounts.fields.is_approved" source="is_approved" /> */}
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
            <FormTab label="resources.users.tabs.wallets">
                <ArrayInput label="resources.users.tabs.wallets" source="wallets">
                    <SimpleFormIterator>
                        <TextInput label="resources.users.fields.wallets.fields.wallet_crypto" source="wallet_crypto" />
                        <TextInput label="resources.users.fields.wallets.fields.wallet_address" source="wallet_address" />
                    </SimpleFormIterator>
                </ArrayInput>
            </FormTab>
            <FormTab label="resources.users.tabs.identity_confirmation">
                <ImageField label="resources.users.fields.id_card_pic" source="id_card_pic" />
                <BooleanInput label="resources.users.fields.id_card_is_approved" source="id_card_is_approved" />
                <BooleanInput label="resources.users.fields.bank_account_is_approved" source="bank_account_is_approved" />
                <BooleanInput label="resources.users.fields.user_is_approved" source="user_is_approved" />
                
            </FormTab>
        </TabbedForm>
    </Edit>
);