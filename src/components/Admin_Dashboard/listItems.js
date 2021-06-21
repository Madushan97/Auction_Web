import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from 'react-router-dom'
import GavelIcon from '@material-ui/icons/Gavel';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import LayersRoundedIcon from '@material-ui/icons/LayersRounded';

export const mainListItems = (
  <div>
    <ListItem button>
      <DashboardRoundedIcon>
        <DashboardIcon />
      </DashboardRoundedIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button>
      <AssessmentRoundedIcon>
        <DashboardIcon />
      </AssessmentRoundedIcon>
      <ListItemText primary="Analysis" />
    </ListItem>

    <ListItem button>
      <AccountBalanceRoundedIcon>
        <DashboardIcon />
      </AccountBalanceRoundedIcon>
      <ListItemText primary="Auction" />
    </ListItem>

    <ListItem button component = {Link} to='/AuctionList'>
      <GavelIcon>
        <DashboardIcon />
      </GavelIcon>
      <ListItemText button  primary="   Bids" />
    </ListItem>

    <ListItem button>
      <ShoppingCartRoundedIcon>
        <ShoppingCartIcon />
      </ShoppingCartRoundedIcon>
      <ListItemText primary="Orders" />
    </ListItem>

    <ListItem button>
      <PeopleAltRoundedIcon>
        <PeopleIcon />
      </PeopleAltRoundedIcon>
      <ListItemText primary="Customers" />
    </ListItem>

    <ListItem button>
      <AssessmentRoundedIcon>
        <BarChartIcon />
      </AssessmentRoundedIcon>
      <ListItemText primary="Reports" />
    </ListItem>

    <ListItem button>
      <LayersRoundedIcon>
        <LayersIcon />
      </LayersRoundedIcon>
      <ListItemText primary="Integrations" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
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