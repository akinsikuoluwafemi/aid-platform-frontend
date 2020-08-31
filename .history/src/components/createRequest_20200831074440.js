import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


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
              If up to 5 responders have clicked on this request it will
              automatically be set to fulfilled. If a responder fails to fulfill
              it after 24hrs, the requester can republish it.
              {/* Create a request. */}
            </DialogContentText>
            <Typography>Description of request</Typography>
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              label="first_name"
              type="name"
              fullWidth
            /> */}
            <TextareaAutosize
              rowsMax={10}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
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