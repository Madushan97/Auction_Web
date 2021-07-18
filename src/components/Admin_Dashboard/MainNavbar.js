import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import OpenMenu from './OpenMenu'

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      

      {/* <RouterLink to="/Dashboard">
        <HomeIcon />
        
      </RouterLink> */}

        <div align = 'center'>
                 <OpenMenu/>
        </div>
      

      

      

    </Toolbar>
  </AppBar>
);

export default MainNavbar;