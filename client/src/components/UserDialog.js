import React from 'react';
import md5 from "md5";

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

function UserDialog(props) {
    const {selectedUser, handleClose, isDialogOpen } = props;
    return (
    <Dialog onClose={handleClose} open={isDialogOpen}>
        <DialogTitle id="simple-dialog-title">User - {selectedUser.email} </DialogTitle>
        <div >
            <img className="util-center" src={`https://www.gravatar.com/avatar/${md5(selectedUser.email)}?s=200`} />
            <p>Last Active At:</p>
            <p>{new Date(selectedUser.lastActiveAt).toString()}</p>
        </div>
    </Dialog>
    );
};

export default UserDialog;