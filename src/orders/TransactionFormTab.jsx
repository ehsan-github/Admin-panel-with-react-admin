import React from 'react';
import * as R from 'ramda';
import { translate, FormTab, ImageField, TextInput } from 'react-admin'

const TransactionFormTab = ({ record: { order_type = ''}, translate, label }) => {
    return order_type == 'buying' ? (
        <FormTab label={label}>
            <TextInput label={translate("resources.orders.fields.ipg_card_pan_mask")} source="ipg_card_pan_mask" />
            <TextInput label={translate("resources.orders.fields.ipg_trance_no")} source="ipg_trance_no" />
            <TextInput label={translate("resources.orders.fields.ipg_tx_amount")} source="ipg_tx_amount" />
            <TextInput label={translate("resources.orders.fields.payment_ref_num")} source="payment_ref_num" />

            <TextInput label={translate("resources.orders.fields.tx_id")} source="tx_id" />
            <TextInput label={translate("resources.orders.fields.tx_sender_wallet")} source="tx_sender_wallet" />
            <TextInput label={translate("resources.orders.fields.tx_url")} source="tx_url" />
            <ImageField label={translate("resources.orders.fields.tx_pic")} source="tx_pic" />
        </FormTab>
    ) : (
        <FormTab label={label}>
            <TextInput label={translate("resources.orders.fields.seller_bank_acc_number")} source="seller_bank_acc_number" />
            <TextInput label={translate("resources.orders.fields.seller_bank_acc_shaba")} source="seller_bank_acc_shaba" />
            <TextInput label={translate("resources.orders.fields.seller_bank_credit_card_no")} source="seller_bank_credit_card_no" />

            <TextInput label={translate("resources.orders.fields.tx_id")} source="tx_id" />
            <TextInput label={translate("resources.orders.fields.tx_sender_wallet")} source="tx_sender_wallet" />
            <TextInput label={translate("resources.orders.fields.tx_url")} source="tx_url" />
            <ImageField label={translate("resources.orders.fields.tx_pic")} source="tx_pic" />
        </FormTab>
    )
}
export default translate(TransactionFormTab)