import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";


const CreateRequest = () => {
    
    const [open, setOpen] = useState(false);
    const [requestType, setRequestType] = useState(null)

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

    const handleType = (e) => {
        setRequestType(e.target.value);
    }
    
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
              {/* If up to 5 responders have clicked on this request it will
              automatically be set to fulfilled. If a responder fails to fulfill
              it after 24hrs, the requester can republish it. */}
              Create a request. If after 24 hrs, your request has not been
              fulfilled you can republish it, thanks alot.
            </DialogContentText>

            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={requestType}
              onChange={handleType}
            >
              <MenuItem value="One Time Task">One Time Task</MenuItem>
              <MenuItem value="Material Needed">Material Needed</MenuItem>
            </Select>

            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="description"
              fullWidth
            />

            <Typography>Location</Typography>

            <TextField
              autoFocus
              margin="dense"
              id="lat"
              label="Latitude"
              type="Latitude"
              //   fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="Longitude"
              label="Longitude"
              type="Longitude"
              //   fullWidth
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