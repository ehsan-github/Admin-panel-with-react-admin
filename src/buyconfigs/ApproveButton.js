import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

import {
    buyableApprove as buyableApproveAction,
    buyableReject as buyableRejectAction,
} from './currencyActions';

const styles = {
    accepted: {
        color: 'green',
    },
    rejected: {
        color: 'red',
    },
};

class ApproveButton extends Component {
    handleApprove = () => {
        const { buyableApprove, record } = this.props;
        buyableApprove(record._id, record);
    };

    handleReject = () => {
        const { buyableReject, record } = this.props;
        buyableReject(record._id, record);
    };

    render() {
        const { record, classes } = this.props;
        return (
            <span>
                <IconButton
                    onClick={this.handleApprove}
                    disabled={!!record.buyable}
                >
                    <ThumbUp
                        className={
                            !!record.buyable ? classes.accepted : ''
                        }
                    />
                </IconButton>
                <IconButton
                    onClick={this.handleReject}
                    disabled={!record.buyable}
                >
                    <ThumbDown
                        className={
                            !record.buyable ? classes.rejected : ''
                        }
                    />
                </IconButton>
            </span>
        );
    }
}

function select(state) {
    return {
        data: state
    };
}

export default connect(null, {
    buyableApprove: buyableApproveAction,
    buyableReject: buyableRejectAction,
})(withStyles(styles)(ApproveButton));
