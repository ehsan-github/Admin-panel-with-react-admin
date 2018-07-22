import React from 'react';
import { List, Edit, Create, Datagrid, EmailField, ReferenceField, TextField, EditButton,
         DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm,
         TextInput, NumberField, TabbedForm, FormTab, DateField, BooleanInput,
         Filter,
         AutocompleteInput,
         DateInput,
         NullableBooleanInput
} from 'react-admin';


import CustomerReferenceField from '../users/CustomerReferenceField';
import OrderSituationField, { OrderSituationFilter } from './OrderSituationField'
import OrderTypeField from './OrderTypeField'
import CustomBooleanInput from './CustomBooleanInput'
import CustomDateField from './CustomDateField'
import TransactionFormTab from './TransactionFormTab'

import Icon from '@material-ui/icons/AttachMoney';

export const OrderIcon = Icon

export const OrderFilter = props => (
    <Filter {...props}>
        <NullableBooleanInput source="is_payed" alwaysOn />
        <NullableBooleanInput source="is_completed" alwaysOn />
        <NullableBooleanInput source="is_done" alwaysOn />
        <SelectInput
            alwaysOn
            source="order_type"
            choices={[
                { id: 'selling', name: 'فروش' },
                { id: 'buying', name: 'خرید' },
            ]}
        />
        <SelectInput
            source="cryptocurrency"
            choices={[
                { id: 'BTC', name: 'بیتکوین' },
                { id: 'ETH', name: 'اتریوم' },
                { id: 'XRP', name: 'ریپل' },
            ]}
        />
        <ReferenceInput source="user_id" reference="users">
            <AutocompleteInput
                optionText={choice => 
                    (choice.first_name || choice.last_name) ? `${choice.first_name} ${choice.last_name}`: choice.phone_number
                }
            />
        </ReferenceInput>
        <NullableBooleanInput source="is_approved" />
        <NullableBooleanInput source="tx_started" />
        <NullableBooleanInput source="tx_ended" />
    </Filter>
);

export const OrderList = (props) => {
    return (
      
        <List
            {...props}
            filters={<OrderFilter />}
        >
            <Datagrid>
                <CustomDateField source="createdAt" />
                <CustomerReferenceField />
                <OrderTypeField source="order_type" />
                <OrderSituationField source="order_situation" />
                <TextField source="cryptocurrency" />
                <NumberField source="final_amount" />
                <EditButton />
            </Datagrid>
        </List>
    )
}

export const OrderEdit = (props) => {
    return (
    <Edit {...props}>
        <TabbedForm redirect="edit">
            <FormTab label="resources.orders.tabs.specs">
                <CustomerReferenceField />
                <TextField source="cryptocurrency" />
                <TextInput source="amount_in_cc" />
                <TextInput source="amount_in_toman" />
                <TextInput source="final_amount" />
                <SelectInput
                    source="order_type"
                    choices={[
                        { id: 'selling', name: 'فروش' },
                        { id: 'buying', name: 'خرید' },
                    ]}
                />
            </FormTab>
            <TransactionFormTab label="resources.orders.tabs.tx_specs"/>
            <FormTab label="resources.orders.tabs.situation">
                <OrderSituationField source="order_situation" />
                <CustomBooleanInput source="is_payed" />
                <CustomBooleanInput source="is_approved" />
                <CustomBooleanInput source="tx_started"/>
                <CustomBooleanInput source="tx_ended" />
                <CustomBooleanInput source="is_completed" />
                <CustomBooleanInput source="is_done" />
            </FormTab>
        </TabbedForm>
    </Edit>
    );
}