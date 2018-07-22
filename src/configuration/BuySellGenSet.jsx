import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { translate, ViewTitle, showNotification as showNotificationAction } from 'react-admin';

import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Save from '@material-ui/icons/Save';
import compose from 'recompose/compose';
import { readGeneralSettings, updateGeneralSetting } from '../api'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    icon: {
        marginRight: theme.spacing.unit,
    },
});

const situations = [
    {
        value: 'auto',
        label: 'اتومات',
    },
    {
        value: 'manual',
        label: 'دستی',
    },
    {
        value: 'unique',
        label: 'یکتا',
    },
];

const settings = [{
    title: 'pos.config.general.crypto',
    items: [
        { name: 'all_ccs_price_source', label: 'نحوه گرفتن قیمت ', type: 'select'},
        { name: 'all_ccs_sell_profit_percentage_mode', label: 'درصد سود خرید', type: 'select'},
        { name: 'all_ccs_buy_profit_percentage_mode', label: 'درصد سود فروش', type: 'select' }]
}, {
    title: 'pos.config.general.buy',
    items: [
        { name: 'buy_dollar_mode', label: 'نحوه گرفتن قیمت دلار', type: 'select'},
        { name: 'buy_dollar_rate', label: 'قیمت دلار', type: 'text'},
        { name: 'transaction_fee_mode', label: 'نحوه گرفتن مقدار سود', type: 'select'},
        { name: 'transaction_fee_rate', label: 'مقدار سود', type: 'text'},
    ]
}, {
    title: 'pos.config.general.sell',
    items: [
        { name: 'sell_dollar_mode', label: 'نحوه گرفتن قیمت دلار', type: 'select'},
        { name: 'sell_dollar_rate', label: 'قیمت دلار', type: 'input'},
    ]
}]

const definableProps = R.chain(
    R.pipe(
        R.prop('items'),
        R.map(R.prop('name'))),
    settings)

const SituationSelect = ({ label, classes, value, valueChange }) => (
    <TextField
        select
        label={label}
        className={classes.textField}
        value={value || ''}
        onChange={valueChange}
        SelectProps={{
            MenuProps: {
                className: classes.menu,
            },
        }}
        margin="normal"
    >
        {situations.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ))}
    </TextField>
)

class BuySellConf extends Component {
    state = {}
    readAndSetGeneralSettings = () => {
        readGeneralSettings()
            .then( ({ data: { responseCode, data: [settings] } }) => {
                if (responseCode == 200){
                    const state = R.assocPath(['query', '_id'], settings._id, R.pick(definableProps, settings))
                    this.setState({ ...state, oldState: state })
                }
            })
    }
    componentDidMount(){
        this.readAndSetGeneralSettings()
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }
    handleSaveClick = () => {
        if (!R.equals(R.dissoc('oldState', this.state), R.prop('oldState', this.state))) {
            updateGeneralSetting(this.state)
                .then(resp => {
                    this.readAndSetGeneralSettings()
                    this.props.showNotification('ra.notification.updated', 'success')
                })
        }
    }
    render(){
        const { classes, translate } = this.props
        return (
            <Card>
                {settings.map(({ title, items }, i) => ([
                     <ViewTitle key={'0'+i} title={translate(title)} />,
                     <CardContent key={'1'+i}>
                         <form className={classes.container} noValidate autoComplete="off">
                             {items.map(({ name, type, label }) => (
                                  type == 'select'
                                  ? <SituationSelect
                                        key={name}
                                        classes={classes}
                                        label={label}
                                        value={this.state[name]}
                                        valueChange={this.handleChange(name)}
                                  /> :
                                  <TextField
                                      key={name}
                                      label={label}
                                      className={classes.textField}
                                      value={this.state[name] || ''}
                                      onChange={this.handleChange(name)}
                                      margin="normal"
                                  />
                             ))}
                         </form>
                     </CardContent>
                ]))}
                <Button
                    size="large"
                    variant="raised"
                    color="primary"
                    type="submit"
                    className={classes.button}
                    onClick={this.handleSaveClick}
                >
                    <Save size="large" />
                    {translate('ra.action.save')}
                </Button>
            </Card>
        );
    }
}

export default compose(
    translate,
    withStyles(styles),
    connect(null, {
        showNotification: showNotificationAction,
    })
)(BuySellConf);

