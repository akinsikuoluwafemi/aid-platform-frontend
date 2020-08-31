import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const CreateRequest = () => {
    
    const [open, setOpen] = useState(false);


      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    
    return (
      <div>
        {/* variant="disabled" */}
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Open Request
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a request</DialogTitle>
          <DialogContent>
            <DialogContentText>
                
                    {/* If up to 5 responders have clicked
                    on this request it will automatically be set to fulfilled.
                    If a responder fails to fulfill it after 24hrs, the requester can republish it. */}
                    Create a request.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=""
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );



}


export default CreateRequest;