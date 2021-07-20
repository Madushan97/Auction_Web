import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
  withStyles,
} from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CreateNewFolderRoundedIcon from '@material-ui/icons/CreateNewFolderRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
    },
    
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 263,
  },
  MenuItem: {
    margin: theme.spacing(2),
    minWidth: 100,
  },
  OutlinedInput: {
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  },
})(TextField);

export default function UserDetails() {
  const classes = useStyles();
 
   
  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* user details */}
        <div className='User Details' align = 'center' >

          {/* exit button */}
        <div align='left'>
          <br/>
            <Button variant="contained" color="primary" disableElevation component = {Link} to = '/Dashboard'>
                <ExitToAppIcon/>
                    Back
            </Button>
        </div>
         
          <h3 align='center'>  <PersonAddIcon fontSize='large'/> Create a User Account</h3>

          {/* name section */}

            <ValidationTextField
                className={classes.margin}
                label="First Name"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />

            <ValidationTextField
                className={classes.margin}
                label="Last Name"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />

          </div>
          {/* contact details */}
          <div align='center'>

            <ValidationTextField
                className={classes.margin}
                label="Email"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />

            <ValidationTextField
                className={classes.margin}
                label="Phone Number"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />

          </div>
     
     {/* address lines */}
      <div align = 'center'>

            <ValidationTextField
                className={classes.margin}
                label="Address Line1"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />
            <ValidationTextField
                className={classes.margin}
                label="Address Line2"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />

            <div align='center'>

                <ValidationTextField
                    className={classes.margin}
                    label="Zip code"
                    required
                    variant="outlined"
                    defaultValue=""
                    id="validation-outlined-input"
                />
            </div>

            <div align = 'center'>

            <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
          </form>

            </div>
      </div>

      <div className='Creat Auction' align = 'center'>
      <Button variant="contained" color="primary" disableElevation component= {Link} to='/ManageAuctionHomePage'>
          <CreateNewFolderRoundedIcon/>
           Create Account
      </Button>
            <br/>
            <br/>
      <Button variant="contained" color="secondary" disableElevation>
          <DeleteRoundedIcon/>
          Cancel
      </Button>

      </div>

      <div>
            <br/>
      </div>
     
    
      
    </form>
  );
}
