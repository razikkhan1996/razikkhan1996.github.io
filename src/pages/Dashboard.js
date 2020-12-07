import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Home,PhotoAlbum,DashboardRounded,PowerSettingsNew} from '@material-ui/icons';
import {Switch ,Route ,NavLink} from 'react-router-dom';

import {HomeData} from './HomeData';
import { Gallery } from './Gallery';
import  Dashdata  from './Dashdata';
import Login from './Login';
import {Authicate} from './Authicate';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
            Go...GO...
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />

        <div className={classes.drawerContainer}>
          <NavLink to='/home' activeClassName='active'>
          <List>
              <ListItem button>
                <ListItemIcon>
                  <Home/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
          </List>
          </NavLink>

          <NavLink to='/gallery' activeClassName='active'>
          <List>
              <ListItem button>
                <ListItemIcon>
                  <PhotoAlbum/>
                </ListItemIcon>
                <ListItemText primary="Gallery" />
              </ListItem>
          </List>
          </NavLink>

          <NavLink to='/dashdata' activeClassName='active'>
          <List>
              <ListItem button>
                <ListItemIcon>
                  <DashboardRounded/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
          </List>
          </NavLink>

          <NavLink to='/login'>
          <List>
              <ListItem button>
                <ListItemIcon>
                  <PowerSettingsNew/>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
          </NavLink>

          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>

        <Toolbar />
        <Switch>
        <Route exact path='/home' component={HomeData} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/dashdata' component={Dashdata} />
        {/* <Route exact path='/login' component={Login} /> */}
      


        {/* <Gallery/>
        <DashboardData/> */}

        </Switch>
      </main>
    </div>
    
  );
}
