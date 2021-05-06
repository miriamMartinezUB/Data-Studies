import React from 'react';
import {Button, Dialog, IconButton} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {withStyles} from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import CloseIcon from '@material-ui/icons/Close';

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const DataStudiesDialog = ({title, description, children, textButton,onClose, onCancel, disableModal}) => {

    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)((props) => {
        const {children, classes, onClose, ...other} = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onCancel ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onCancel}>
                        <CloseIcon/>
                    </IconButton>//TODO change to own icon button
                ) : null}
            </MuiDialogTitle>
        );
    });

    return (
        <Dialog onClose={onCancel}
                fullWidth={true}
                aria-labelledby="customized-dialog-title"
                open={true}>
            <DialogTitle id="customized-dialog-title" onClose={onCancel}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>{description}</Typography>
                </DialogContentText>
                {children}
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose} color="primary" disabled={disableModal}>
                    {textButton}
                </Button>
            </DialogActions>
        </Dialog>
    )
    //TODO change to own button
}

DataStudiesDialog.propTypes = {
    title: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

export default DataStudiesDialog

