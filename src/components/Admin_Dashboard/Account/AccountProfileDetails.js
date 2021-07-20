import { useState } from 'react';

import {
  Box,
  // Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import MainNavbar from '../MainNavbar';
// import AccountProfile from './AccountProfile';


const states = [
  {
    value: 'Rathnapura',
    label: 'Rathnapura'
  },
  {
    value: 'Kegalle',
    label: 'Kegalle'
  },
  {
    value: 'Kandy',
    label: 'Kandy'
  }
];

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Madushan',
    lastName: 'Nipuna',
    email: 'madushannipuna1997@gmail.com',
    phone: ' ',
    state: 'Alabama',
    country: 'SRI LANKA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    
    <form
      autoComplete="off"
      noValidate
      {...props}
    >

                <div className='container border'
                    style={{marginTop: '50px',
                    width: '50%',
                    // border-radius: '5px',
                    backgroundImage: `url(mail1.jpg)`,
                    ackgroungPosition: 'center',
                    
                    backgroundSize: 'cover'}}>
        <MainNavbar/>
        {/* <AccountProfile/> */}
      <Card>
        <CardHeader
          
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                required
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <div align = 'center'>
          {/* <Button
            color="primary"
            variant="contained"
          >
           
            Save details
          </Button> */}
          <button type="button" class="btn btn-primary btn-lg btn-block">Save Details</button>

          

          {/* <button type="reset" class="btn btn-secondary btn-lg btn-block">Reset</button> */}
          <button type="button" class="btn btn-danger btn-lg btn-block" value = 'reset'>Cancel</button>
          </div>
        </Box>
      </Card>
      </div>
    </form>
  );
};

export default AccountProfileDetails;