import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
export default function AddressForm(){
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing = {3}>
                <Grid item xs= {12} sm= {6}>
                    <TextField
                        required
                        id = "firstName"
                        name = "firstName"
                        label = "First Name"
                        fullWidth
                        autoComplete = "given-name"
                       />
                </Grid>

                <Grid item xs = {12} sm = {6}>
                    <TextField
                        required
                        id = "lastName"
                        name = "lastName"
                        label = "Last Name"
                        fullWidth
                        autoComplete = "family-name"
                       />
                </Grid>

                <Grid item xs = {12} >
                    <TextField
                        required
                        id = "address1"
                        name = "address1"
                        label = "Address line 1"
                        fullWidth
                        autoComplete = "shipping address-line1"
                       />
                </Grid>

                <Grid item xs = {12} >
                    <TextField
                        required
                        id = "address2"
                        name = "address2"
                        label = "Address line 2"
                        fullWidth
                        autoComplete = "shipping address-line2"
                       />
                </Grid>

                <Grid item xs = {12} sm = {6}>
                    <TextField id = "state" label = "state/province/Region" fullWidth/>
                </Grid>

                <Grid item sx = {12} sm = {6}>
                    <TextField
                        required
                        id = "zip"
                        name = "zip"
                        label = "Zip / postal-code"
                        fullWidth
                        autoComplete = "shipping postal-code"
                       />
                </Grid>

                <Grid item xs = {12} sm = {6}>
                    <TextField
                        required
                        id = "city"
                        name = "city"
                        label = "City"
                        fullWidth
                        autoComplete = "shipping City"
                       />
                </Grid>

                <Grid item xs = {12}>
                    <FormControlLabel
                        control = {<Checkbox color = "secondary" name = "saveAddress" value = "yes"/>}
                        label = "Use this address for payment details"
                        />
                </Grid>
                

            </Grid>


        </React.Fragment>
    )
}
