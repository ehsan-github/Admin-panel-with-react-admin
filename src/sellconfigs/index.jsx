import React from 'react';
import { List,
         Edit,
         Create,
         Datagrid,
         EmailField,
         ReferenceField,
         TextField,
         EditButton,
         DisabledInput,
         LongTextInput, ReferenceInput,
         SelectInput,
         SimpleForm,
         TextInput,
         NumberField,
         TabbedForm,
         FormTab,
         ImageField,
         BooleanInput,
         SimpleFormIterator,
         ArrayInput,
         NumberInput,
         BooleanField,
         BulkActions,
         DateField
} from 'react-admin';
import SIcon from '@material-ui/icons/ShoppingCart';
import ApproveButton from './ApproveButton'
import BulkApproveAction from './BulkApproveAction';
import BulkRejectAction from './BulkRejectAction';

import rowStyle from './rowStyle';
export const SellIcon = SIcon

const CurrenciesBulkActions = props => (
    <BulkActions {...props}>
        <BulkApproveAction label="resources.sell-configs.action.accept" />
        <BulkRejectAction label="resources.sell-configs.action.reject" />
    </BulkActions>
)

export const CurrencyList = (props) => {
    return (
        <List
            {...props}
            bulkActions={<CurrenciesBulkActions />}
        >
                <Datagrid rowStyle={rowStyle}>
                <TextField source="sym" />
                <TextField source="dollar_rate_mode" />
                <BooleanField source="sellable" />
                <ApproveButton />
                <EditButton />
            </Datagrid>
        </List>
    )
}

export const CurrencyEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="sym" />
            <BooleanInput source="sellable" />
            <TextInput source="dollar_rate" />
            <SelectInput source="dollar_rate_mode" choices={[
                { id: 'auto', name: 'اتومات' },
                { id: 'manual', name: 'دستی' },
                { id: 'unique', name: 'یکتا' },
            ]} />
            <TextInput source="sell_profit_percentage" />
            <TextInput source="transaction_fee_rate" />
            <TextInput source="wallet_address" />
            <DateField source="updatedAt" />
        </SimpleForm>
    </Edit>
);
