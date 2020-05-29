//import React, {PropTypes} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/*
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, cyan600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
*/
import { Avatar,
         List,
         ListItem,
         ListSubheader as Subheader,
         Divider,
         Paper,
         IconButton,
         MenuItem
       } from '@material-ui/core';
import { MoreVert, Wallpaper } from '@material-ui/icons';
import { grey, cyan, common } from '@material-ui/core/colors';
//import { typography } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Menu from '../Menu'

const RecentlyProducts = (props) => {

  const styles = {
    subheader: {
      fontSize: 24,
//      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan[600],
      color: common["white"]
    }
  };

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}>Recent Products</Subheader>
        {props.data.map(item =>
          <>
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar><Wallpaper /></Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={item.title}
                    secondary={item.text}
                />
                <ListItemSecondaryAction>
                    <Menu menuId='row-menu' menuIcon={<MoreVert />} items={['View']} />
                </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset"  />
          </>
        )}
      </List>
    </Paper>
  );
};

RecentlyProducts.propTypes = {
  data: PropTypes.array
};

export default RecentlyProducts;
