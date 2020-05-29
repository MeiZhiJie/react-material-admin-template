//import React, { PropTypes } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { ThemeProvider } from '@material-ui/core/styles';

import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';

//import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';

import { Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/DashboardPage';
import FormPage from '../containers/FormPage';
import TablePage from '../containers/TablePage';
import NotFoundPage from '../containers/NotFoundPage';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade, makeStyles } from '@material-ui/core/styles';




//import ThemeDefault from '../theme-default';
import Data from '../data';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
//    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 12,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function App() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
    return (

        <div className={classes.root}>
            <CssBaseline />
            <Header
                  classes={classes}
                  handleDrawerOpen={handleDrawerOpen}
                  open={open}
            />

            <LeftDrawer
                open={open}
                menus={Data.menus}
                username="User Admin"
                classes={classes}
                handleDrawerClose={handleDrawerClose}
            />

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
              <div className={classes.drawerHeader} />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/form" component={FormPage} />
                <Route path="/table" component={TablePage} />
                <Route path="/*" component={NotFoundPage} />
              </Switch>
            </main>
        </div>
    );

}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

//export default withWidth()(App);
export default App;
