import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
// import EventIcon from '@material-ui/icons/Event';
import { Link } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GavelIcon from '@material-ui/icons/Gavel';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';

export const mainListItems = (
  <div>
    <ListSubheader inset>Auctions</ListSubheader>
    <ListItem button component= {Link} to='/CreateAuction'>
      <ListItemIcon>
        <CreateNewFolderIcon />
      </ListItemIcon>
      <ListItemText primary="Create Auction" />
    </ListItem>

    <ListItem button component= {Link} to='#'>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Auction" />
    </ListItem>

   <ListItem button component= {Link} to='/#'>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="My Auction" />
    </ListItem>

    <ListItem button component= {Link} to='/#'>
      <ListItemIcon>
        <GavelIcon /> 
      </ListItemIcon>
      <ListItemText primary="Bids" />
    </ListItem>


  </div>
);

export const secondaryListItems = (
    <div>
      <ListSubheader inset>Orders</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Purchase History" />
      </ListItem>
      
      </div>
  );

  export const thirdListItems = (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary="Monthly Report" />
      </ListItem>
      
      </div>
  )

export const fourthListItems = (
  <div>
    <ListSubheader inset>Account</ListSubheader>
    <ListItem button component= {Link} to='/AccountProfileDetails'>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Account Setting" />
    </ListItem>
    
    </div>
)

export const fifthListItems = (
  <div>
    <ListSubheader inset>E-mail</ListSubheader>

    <ListItem button component = {Link} to = '#'>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Compose" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ArrowDownwardIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ArrowUpwardIcon />
      </ListItemIcon>
      <ListItemText primary="Sent" />
    </ListItem>
    </div>

);

export const sixthListItems = (
  <div>
    <ListSubheader inset>Feedbacks</ListSubheader>
    <ListItem button component= {Link} to='/Composemail'>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem>
    
    </div>
)