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

const Modal = ({title, description, children, textButton}) => {
    const [open, setOpen] = React.useState(true); //TODO change to false when put in button
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClose = () => {
        setOpen(false);
    };

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
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>//TODO change to own icon button
                ) : null}
            </MuiDialogTitle>
        );
    });

    return (
        <Dialog onClose={handleClose}
                fullWidth={true}
                aria-labelledby="customized-dialog-title"
                open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>{description}</Typography>
                </DialogContentText>
                {children}
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    {textButton}
                </Button>
            </DialogActions>
        </Dialog>
    )
    //TODO change to own button
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node,
}

export default Modal

