import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [9, 7,6];

export default function UserAuctions() {
  const classes = useStyles();

  return (
    <React.Fragment>
    
      <CssBaseline />

     
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Bidding History
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             {/*  */}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                {/* <Grid item>
                  <Button variant="contained" color="primary">
                    CREATE AUCTION
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Cat Eye
                    </Typography>
                    <Typography>
                    display a luminous band reminiscent of the eye of a cat; this particular quality is termed chatoyancy.
                    </Typography>
                  </CardContent>
                  <CardActions>

                    <Link href = '#'>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </Link>

                    <Link href='/PlaceBid'>
                    <Button size="small" color="primary">
                      Bid
                    </Button>
                    </Link>

                    <Link>
                    <Button size="small" color="primary">
                      Rate
                    </Button>
                    </Link>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
     
        
        
      
      {/* End footer */}
    </React.Fragment>
  );
}