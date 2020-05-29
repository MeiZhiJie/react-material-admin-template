//import React,  { PropTypes } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
/*
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
*/

import { Drawer, MenuItem, Avatar } from '@material-ui/core';
import { spacing, typography } from '@material-ui/system';
import { common, blue } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from "react-router-dom";

const LeftDrawer = (props) => {
  let { open, classes } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
//      color: typography.textFullWhite,
//      lineHeight: `${spacing.desktopKeylineIncrement}px`,
//      fontWeight: typography.fontWeightLight,
//      backgroundColor: blue[600],
      paddingLeft: 10,
//      height: 56,
    },
    menuItem: {
      color: common["white"],
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage:  'url(' + require('../images/material_bg.png') + ')',
        height: 70
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: common["white"],
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };
  
    const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
          paper: classes.drawerPaper,
      }}
    >
        <div className={classes.drawerHeader}>
        <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <div style={styles.logo}>
          Material Admin
        </div>
        </div>
        <Divider />
        <div style={styles.avatar.div}>
          <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                  size={50}
                  style={styles.avatar.icon}/>
          <span style={styles.avatar.span}>{props.username}</span>
        </div>
        <Divider />
        <List>
          {props.menus.map((menu, index) =>
            <ListItem button key={menu.text} component={Link} to={menu.link} >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} color='primary' />
            </ListItem>
          )}
        </List>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  open: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
  classes:PropTypes.object,
  handleDrawerClose:PropTypes.func,
};

export default LeftDrawer;
