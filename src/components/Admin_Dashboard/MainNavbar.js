import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import LayersIcon from '@material-ui/icons/Layers';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <LayersIcon />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;