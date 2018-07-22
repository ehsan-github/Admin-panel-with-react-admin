import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

import {
    sellableApprove as sellableApproveAction,
    sellableReject as sellableRejectAction,
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
        const { sellableApprove, record } = this.props;
        sellableApprove(record._id, record);
    };

    handleReject = () => {
        const { sellableReject, record } = this.props;
        sellableReject(record._id, record);
    };

    render() {
        const { record, classes } = this.props;
        return (
            <span>
                <IconButton
                    onClick={this.handleApprove}
                    disabled={!!record.sellable}
                >
                    <ThumbUp
                        className={
                            !!record.sellable ? classes.accepted : ''
                        }
                    />
                </IconButton>
                <IconButton
                    onClick={this.handleReject}
                    disabled={!record.sellable}
                >
                    <ThumbDown
                        className={
                            !record.sellable ? classes.rejected : ''
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
    sellableApprove: sellableApproveAction,
    sellableReject: sellableRejectAction,
})(withStyles(styles)(ApproveButton));
