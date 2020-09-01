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
import { requestData } from '../data';
import { RequestContext } from '../LocationContext';

const CreateRequest = (props) => {
  // let { userLat, setUserLat } = useContext(LatitudeContext);
  // console.log(LatitudeContext);

  const [open, setOpen] = useState(false);
  const [requestType, setRequestType] = useState({});
  const [status, setStatus] = useState("unfufilled");
  const [request, setRequest] = useState(getInitialMode());

  function getInitialMode(){
    const savedMode = JSON.parse(localStorage.getItem('request'))
    return savedMode || requestData
  }

    console.log(request.length);

  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  const [description, setDescription] = useState("");
  console.log(props)
  let requestArr = getInitialMode();
  console.log(requestArr);

  const [savedArr, setSavedArr] = useState(requestArr)
  
  // console.log(LatitudeContext);

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

  // const handleLat = (e) => {
  //   setLat(e.target.value);
  // };

  // const handleLng = (e) => {
  //   setLng(e.target.value);
  // };

  const handleSubmit = () => {
    console.log("submitted");
    let newRequest = {
      id: 5,
      description,
      type: requestType,
      location: {
        lat: props.lat + 10.000,
        lng: props.lng + 12.0022
      },
      color: "blue",
      status: "unfufilled",
      responders: [],
      requester: "user.first_name",
    };
    let tempRequest = [...request, newRequest]
    setRequest(tempRequest);
    localStorage.setItem('request', JSON.stringify(tempRequest))
    console.log(request);

    setOpen(false);
  };



  return (
    <RequestContext.provider>

    </RequestContext.provider>
    
  );
};

export default CreateRequest;
