import React from 'react';
import useStyles from './LogStyles';
import Modal from '@material-ui/core/Modal';

const Smodal = (props) => {
    let { message, open, handleClose } = props
    const classes = useStyles();

    return (
        <div >
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                dir="rtl"
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">{message}</h2>
                </div>
            </Modal>
        </div>
    );
};

export default Smodal;