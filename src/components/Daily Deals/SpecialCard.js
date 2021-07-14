import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function SpecialCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ALEXANDRITE"
        subheader="September 14, 2021"
      />
      
      <CardMedia
        className={classes.media}
        image="./gem-alexandrite-prem-2-191019.jpg"
        title="ALEXANDRITE"
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Alexandrite is a rare gemstone from the Chrysoberyl mineral family that exhibits sharp change of color. 
        This highly valued gemstone is used in crystal healing therapies and possesses strong metaphysical powers.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          
          <ExpandMoreIcon />
        </IconButton>
        
        <Button href='/PlaceBid' variant="contained" >PLACE A BID</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Button  variant="contained" >Current Price : 12000LKR</Button>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
          Often described by gem aficionados as “emerald by day, ruby by night,” 
          alexandrite is the very rare color-change variety of the mineral chrysoberyl. 
          Originally discovered in Russia’s Ural Mountains in the 1830s, it’s now found in Sri Lanka, East Africa, and Brazil,
           but fine material is exceptionally rare and valuable.
          </Typography>
          <Typography paragraph>
          Alexandrite is the color-change variety of the mineral chrysoberyl. Green by Day. 
          Alexandrite is bluish green in daylight or fluorescent light. Red by Night. 
          Alexandrite is purplish red in incandescent light or candlelight.
          </Typography>
          <Typography paragraph>
          Alexandrite is a birthstone for June, along with pearl and moonstone. 
          Alexandrite is also the gem for the 55th wedding anniversary.
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
