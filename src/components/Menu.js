import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



const MenuList = (props) => {

  let { menuId, menuIcon, items, color } = props
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
            <div>
              <IconButton
                onClick={handleMenu}
                color="inherit"
              >
               {menuIcon}
              </IconButton>
              <Menu
                menuId={menuId}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                  {items.map(item => <MenuItem onClick={handleClose}>{item}</MenuItem>)}
              </Menu>
            </div>
  );
}

MenuList.propTypes = {
  menuId: PropTypes.string,
  menuIcon:PropTypes.object,
  items:PropTypes.array,
};

export default MenuList;

