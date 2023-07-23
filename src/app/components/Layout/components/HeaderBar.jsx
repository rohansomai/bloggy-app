import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@/app/components/Layout/styled-components/AppBar';
import { SearchOutlined } from '@mui/icons-material';
import styles from '@/app/styles/layout.module.scss';
import BloggyTextField from '@/app/components/shared/BloggyTextField';
import ProfileMenu from '@/app/components/Layout/components/ProfileMenu';

const HeaderBar = ({ open, handleDrawerOpen }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchOnEnter = () => {
    console.log(searchText);
  };

  const handleClearClick = () => {
    setSearchText('');
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar className={styles.headerToolbar}>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={`mr-2 text-black ${open ? 'hidden' : ''}`}
        >
          <MenuIcon />
        </IconButton>
        <div className={'flex items-center flex-grow '}>
          <BloggyTextField
            placeholder={'Search posts'}
            startAdornment={<SearchOutlined />}
            value={searchText}
            setValue={setSearchText}
            onEnter={handleSearchOnEnter}
            handleClearClick={handleClearClick}
          />
        </div>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
