import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import './Button.css'
import { Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export default function LoginPortal() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Login In
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to  = '/LoginHomePage'>
            <Button href = '/LoginHomePage' onClick={handleClose} ><SupervisorAccountIcon/>User</Button>
        </Link>

        <Link to  = '/AdminLoginHomepage'>
            <Button href = '/AdminLoginHomepage' onClick={handleClose} ><AccountCircleIcon/>Admin</Button>
        </Link>

      </Menu>
    </div>
  );
}
