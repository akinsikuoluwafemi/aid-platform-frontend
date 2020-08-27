import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../pages/Home.scss';
import NavigationDrawer from './NavigationDrawer';
import Grid from '@material-ui/core/Grid';
import HelpLogo from '../images/helpp.jpeg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
    
  },
  form: {
    textAlign: 'center'
  },
  textField: {
    // margin: '5px auto'
  },
  button: {
    marginTop: 15
  }

}));

function SignUp() {
  const classes = useStyles();

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [file, setFile] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit =(e) => {
   
  //  do stuff
    e.preventDefault()
    setLoading(true)
    console.log({
      firstName,
      lastName,
      email,
      file
    })


  }

 

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    console.log(firstName)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleFile = (e) => {
    // setFile(e.target.files)
    
    console.log(e.target.files[0])
  }


  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavigationDrawer />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <section>
          <img src={HelpLogo} alt="" style={{ height: "5rem" }} />

          <p className="h1 py-2">Sign Up</p>

          <div class="row py-2">
            <div class="col-lg-4  col-10"></div>
            <div class="col-lg-4 col-10   px-4 py-4  m-auto">
              <form onSubmit={handleSubmit}>
                {/* <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" aria-placeholder="name@example.com" required/>

                    </div> */}
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  className={classes.textField}
                  value={email}
                  onChange={handleEmail}
                  fullWidth
                />

                <TextField
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  label="firstname"
                  className={classes.textField}
                  value={firstName}
                  onChange={handleFirstName}
                  fullWidth
                />

                <TextField
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  label="lastname"
                  className={classes.textField}
                  value={lastName}
                  onChange={handleLastName}
                  fullWidth
                />

                {/* <TextField
                  id="file"
                  name="file"
                  type="file"
                  label="file"
                  className={classes.textField}
                  value={file}
                  onChange={handleFile}
                  fullWidth
                /> */}

                <Button variant="contained" component="label">
                  Upload File
                  <input type="file" style={{ display: "none" }} />
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
            <div class="col-lg-4  col-10"></div>
          </div>
        </section>
      </main>
    </div>
  );
}


export default SignUp;
