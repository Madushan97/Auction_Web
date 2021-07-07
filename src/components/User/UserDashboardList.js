import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';


import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom'
import GavelIcon from '@material-ui/icons/Gavel';

import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

    export const mainListItems = (
  <div>
      <ListSubheader inset>Auctions</ListSubheader>
    <ListItem button component = {Link} to='/CreateAuction'>
      <CreateIcon>
        <DashboardIcon />
      </CreateIcon>
      <ListItemText primary="Create Auction" />
    </ListItem>

    <ListItem button >
      <SettingsApplicationsIcon>
        <DashboardIcon />
      </SettingsApplicationsIcon>
      <ListItemText primary="Manage Auction" />
    </ListItem>

    <ListItem button>
      <AccountBalanceRoundedIcon>
        <DashboardIcon />
      </AccountBalanceRoundedIcon>
      <ListItemText primary="My Auction" />
    </ListItem>
  
    <ListItem button component = {Link} to='/AuctionList'>
      <GavelIcon>
        <DashboardIcon />
      </GavelIcon>
      <ListItemText button  primary="   Bids" />
    </ListItem>
    </div>

    );

    export const SecondListItems = (
        <div>
    <ListSubheader inset>Orders</ListSubheader>
    <ListItem button>
      <ShoppingCartRoundedIcon>
        <ShoppingCartIcon />
      </ShoppingCartRoundedIcon>
      <ListItemText primary="Orders" />
    </ListItem>

    <ListItem button>
      <ShoppingCartRoundedIcon>
        <ShoppingCartIcon />
      </ShoppingCartRoundedIcon>
      <ListItemText primary="Purchase History" />
    </ListItem>
    </div>
    );

    export const ThirdListItems = (
        <div>
            <ListSubheader inset>Account</ListSubheader>
    <ListItem button>
      <PeopleAltRoundedIcon>
        <PeopleIcon />
      </PeopleAltRoundedIcon>
      <ListItemText primary="Account Setting" />
    </ListItem>

    </div>
    );

    export const FourthListItems = (
    <div>
    <ListSubheader inset>Reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>

    </div>
    );