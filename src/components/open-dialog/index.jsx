import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

OpenDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};

OpenDialog.defaultProps = {
  open: false,
};

function OpenDialog(props) {
  const { open, handleClose } =  props;

  return (
    <div>
      <Dialog open={open} onClose={handleClose} disableEscapeKeyDown >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OpenDialog;
