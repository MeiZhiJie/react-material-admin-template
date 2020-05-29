//import React, {PropTypes} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
/*
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
*/

import {Link} from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { /*white*/ common } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
//import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';

import SearchBox from './SearchBox';
import clsx from 'clsx';
import MenuList from './Menu';
import ViewModule from '@material-ui/icons/ViewModule';

function Header(props) {

	let { open, classes } = props
	
	
	const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to='/login' >Sign out</MenuItem>
    </Menu>
  );
  
    return (
            <div className={classes.grow}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
              <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={props.handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                {/*<div className={classes.search}>
                   <div className={classes.searchIcon}>
                       <SearchIcon />
                   </div>
                   <InputBase
                       placeholder="Search..."
                       classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                       }}
                       inputProps={{ 'aria-label': 'search' }}
                   />
               </div>*/}
               <SearchBox />
               <div className={classes.grow} />
                   {/*<div className={classes.sectionDesktop} style={{display: 'flex'}} >*/}
                   <div style={{display: 'flex'}} >
                       {/*<IconButton
                           edge="end"
                           aria-label="account of current user"
                           aria-controls={menuId}
                           aria-haspopup="true"
                           onClick={handleProfileMenuOpen}
                           color="inherit"
                       >
                           <AccountCircle />
                       </IconButton>*/}
                       <MenuList menuId='top-module' menuIcon={<ViewModule />} items={['Application 1', 'Application 2', 'Application 3']} />
                       <IconButton
                           edge="end"
                           aria-label="show more"
                           aria-controls={mobileMenuId}
                           aria-haspopup="true"
                           onClick={handleMobileMenuOpen}
                           color="inherit"
                       >
                           <MoreIcon />
                      </IconButton>
                   </div>
                   {/*<div className={classes.sectionMobile}>
                       <IconButton
                           aria-label="show more"
                           aria-controls={mobileMenuId}
                           aria-haspopup="true"
                           onClick={handleMobileMenuOpen}
                           color="inherit"
                       >
                           <MoreIcon />
                      </IconButton>
                  </div>*/}
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            </div>
      );

}


Header.propTypes = {
  classes: PropTypes.object,
  handleDrawerOpen: PropTypes.func,
  open:PropTypes.bool,
};

export default Header;
