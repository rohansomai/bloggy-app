import React from 'react';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { sidebarMenuList } from '@/app/components/Layout/sidebar-menu-list';
import SideBarItem from '@/app/components/Layout/components/SideBarItem';
import Drawer from '@mui/material/Drawer';
import { drawerWidth } from '@/app/components/Layout';
import { DrawerHeader } from '@/app/components/Layout/styled-components/DrawerHeader';
import Logo from '@/app/components/Layout/components/Logo';

const SideBar = ({ open, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Logo />
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sidebarMenuList.map((sidebarItem) => (
          <SideBarItem key={sidebarItem.id} sidebarItem={sidebarItem} />
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
