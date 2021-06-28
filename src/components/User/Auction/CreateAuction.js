import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../Navbar'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 400,
      },
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function OutlinedCard() {
    
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    <Card className={classes.root} variant="outlined">
         <Navbar/>
         <h2 align ='center'>Create Auction </h2>
      <CardContent>
      <div>
          <div className = 'Name'>
              <h4>Name </h4>
              <TextField id="outlined-search" label="First Name" type="search" variant="outlined" />
              <TextField id="outlined-search" label="Second Name" type="search" variant="outlined" />
          </div>

         <div>
        
         </div>
        
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </div>
       
      </CardContent>
      
      
    </Card>
  );
}
