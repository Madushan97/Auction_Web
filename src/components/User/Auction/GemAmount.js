import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '1ch',
  },
}));

export default function GemAmount() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  

  return (
    <div className={classes.root}>
      
      <div >
        
        
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          
         
        </FormControl>
        <FormControl fullWidth className={classes.margin} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-amount">Starting Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">LKR</InputAdornment>}
            labelWidth={100}
          />
        </FormControl>
      </div>
    </div>
  );
}
