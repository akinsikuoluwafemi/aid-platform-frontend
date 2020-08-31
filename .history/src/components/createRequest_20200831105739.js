import React, { useState, useContext } from "react";
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
import { LocationContext } from '../LocationContext';


const CreateRequest = () => {
  const [open, setOpen] = useState(false);
  const [requestType, setRequestType] = useState({});
  const [status, setStatus] = useState("unfufilled");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [description, setDescription] = useState("");

  let {userLat, setLatitude } = useContext(LocationContext);

    console.log(lat)

    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleType = (e) => {
    setRequestType(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleLat = (e) => {
    setLat(e.target.value);
  };

  const handleLng = (e) => {
    setLng(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submitted");
    let newRequest = {
      id: 2,
      description,
      type: requestType,
      location: {
        lat,
        lng,
      },
      color: "blue",
      status: "unfufilled",
      responders: [],
      requester: "user.first_name",
    };
    console.log(newRequest);

    setOpen(false);
  };

  return (
    <form>
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
            fulfilled you can republish it, thanks alot.{" "}
            <strong>PS: You have to fill in your location</strong>.
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

          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            onChange={handleStatus}
          >
            {/* <MenuItem value="fulfilled">fulfilled</MenuItem> */}
            <MenuItem value="unfulfilled">unfulfilled</MenuItem>
          </Select>

          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="description"
            fullWidth
            onChange={handleDescription}
            value={description}
          />

          <TextField
            autoFocus
            margin="dense"
            id="lat"
            label="Latitude"
            type="Latitude"
            value={lat}
            onChange={handleLat}
            //   fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="Longitude"
            label="Longitude"
            value={lng}
            type="Longitude"
            onChange={handleLng}
            //   fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default CreateRequest;
