import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ProfileMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Rohan Somai is currently logged in">
        <IconButton onClick={handleOpenUserMenu} className={'p-0'}>
          <Avatar alt="Rohan Somai" src="/static/images/avatar/2.jpg">
            RS
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        className={'mt-11'}
        id="bloggy-profile-menu"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ProfileMenu;
