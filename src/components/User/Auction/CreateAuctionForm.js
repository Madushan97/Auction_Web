import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
  withStyles,
  
} from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
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



export default function CreateAuctionForm() {
  const classes = useStyles();
  const [gemname, setgemname] = React.useState('');

  const handleChange = (event) => {
    setgemname(event.target.value);
  };
 
  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* user details */}
        <div className='User Details'>
          <h3>User Details</h3>
            <ValidationTextField
                className={classes.margin}
                label="Last Name"
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

            <ValidationTextField
                className={classes.margin}
                label="Last Name"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
            />
      </div>

      {/* auction details */}
      <div className='Auction Details'>
      <h3>Auction Details</h3>
        <ValidationTextField
            className={classes.margin}
            label="Last Name"
            required
            variant="outlined"
            defaultValue=""
            id="validation-outlined-input"
      />
      </div>

      <div>
        
        <ValidationTextField
            className={classes.margin}
            label="Last Name"
            required
            variant="outlined"
            defaultValue=""
            id="validation-outlined-input"
      />
      </div>
      <div>
      <ValidationTextField
            className={classes.margin}
            label="Last Name"
            required
            variant="outlined"
            defaultValue=""
            id="validation-outlined-input"
      />
       <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Gem Name</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gemname}
          onChange={handleChange}
          label="Gem Name"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      </div>
    </form>
  );
}
